

Config.history.controls = false;
Config.history.maxStates = 1;
Config.saves.maxSlotSaves = 5;

$(document).on(":storyready", function () {
    $("head").append('<link rel="stylesheet" href="css/navigation_menu.css">');
    $("head").append('<link rel="stylesheet" href="css/save_panel.css">');
    $("head").append('<link rel="stylesheet" href="css/battle_passage.css">');
    $("head").append('<link rel="stylesheet" href="css/location_style.css">');
});

$(document).on(":passagestart", () => (State.expired.length = 0));

setup.open_panel = function (panel) {
    if (!Dialog.wikiPassage(panel)) return;
    Dialog.open();
};

setup.RenderText = function (id, panel, isClass = false) {
    const selector = isClass ? `.${id}` : `#${id}`;
    const $el = $(selector);
    $el.empty();
    $el.wiki(`<<include "${panel}">>`);
};

setup.RenderTextSave = function (id, panel, isClass = false) {
    const selector = isClass ? `.${id}` : `#${id}`;
    const $el = $(selector);
    const $parent = $el.parent();
    $el.remove();
    $parent.wiki(`<<include "${panel}">>`);
};

setup.pushGameLog = function (txtLog) {
    let gameLog = State.variables.gameLog;
    if (gameLog.length === 8) gameLog.length = 0;
    gameLog.push(txtLog);
    setup.RenderText("ui-nav-evnt-b", "Game_Log_Panel");
};

Macro.add("RenderTime", {
    handler: function () {
        let time = State.variables.time;
        let world = State.variables.world;
        let tick = this.args[0];
        let player = State.variables.player;

        let consMulti = this.args[1] === undefined ? 1 : this.args[1];

        time.minute += tick;

        time.hour += Math.floor(time.minute / 60);
        time.minute %= 60;

        world.time.day += Math.floor(time.hour / 24);
        world.time.year += Math.floor(world.time.day / 365);
        world.time.day %= 365;

        time.day += Math.floor(time.hour / 24);
        time.hour %= 24;

        time.year += Math.floor(time.day / 365);
        time.day %= 365;

        player.age = time.year;

        if (player.age > player.lifespan || player.age == player.lifespan) {
            player.state = "Dead";
            player.age = player.lifespan;
            setup.open_panel("Player_Death_Panel");
        }

        setup.RenderText("ui-nav-time", "StoryCapion-Nav-Time-Panel");
        setup.NatRegenPlayer(tick, consMulti);
    },
});

setup.NatRegenPlayer = function (tick, consMulti) {
    let player = State.variables.player;

    let HPVal = (setup.regenHP(player.cur.hp, player.hp, consMulti) * tick) / 60;
    let STAVal = (setup.regenSTA(player.cur.sta, player.sta, consMulti) * tick) / 60;

    if(((HPVal + STAVal)) > player.body.energy){
        setup.pushGameLog("Your body lacks energy; you need to eat.");
        console.log(`Not enough energy!\nRegen HP Value : ${HPVal}\nRegen STA Value : ${STAVal}`);
        return;
    }

    player.body.energy -= HPVal + STAVal;
    setup.toggleHP(HPVal, player);
    setup.toggleSTA(STAVal, player);

    console.log(`Body Energy : ${player.body.energy}`);
    console.log(`Regen HP : ${HPVal}`);
    console.log(`Regen STA : ${STAVal}\n`);
};

setup.regenHP = function (curHP, HP, consMulti) {
    let regenRate = (HP * 0.07) / consMulti + curHP * 0.04;
    regenRate = Math.max(0.1, regenRate);

    return regenRate;
};

setup.regenSTA = function (curSTA, STA, consMulti) {
    let regenRate = (STA * 0.14) / consMulti + curSTA * 0.08;
    regenRate = Math.max(0.1, regenRate);

    return regenRate;
};

setup.toggleHP = function(amount, target = State.variables.player) {
    target.cur.hp = Math.max(0, Math.min(target.cur.hp + amount, target.hp));
    setup.updateBars();
};

setup.toggleSTA = function (amount, target = State.variables.player) {
    target.cur.sta = Math.max(0, Math.min(target.cur.sta + amount, target.sta));
    setup.updateBars();
};

setup.playerTurn = function(action, actionID = 0){
    let player = State.variables.player;

    if(State.variables.battle.order[0] !== player.name) return;

    if(setup.battleCheckState() === true) return;

    let enemy = State.variables.entity;
    let damage = 0;

    action = setup.runStatusEffect(player) === "Stunned" ? "Stunned" : action;

    switch(action){
        case "Stunned":
            break;
        case "Wait":
            setup.updateBattleLog(`You decided wait and observe`);
            break;
        case "Flee":
            setup.open_panel("Battle_Flee_Panel");
            break;
        case "Rest":
            let staRestoreValue = Math.random() * (3 - 1) + 1;
            setup.updateBattleLog(`You decided to rest, restoring ${staRestoreValue.toFixed(2)} stamina`);
            setup.toggleSTA(staRestoreValue);
            break;
        case "Attack":
             // Checks if player has the right weapon to perform that skill
            if(!setup.meetsWeaponRequirement(player, actionID)){
                setup.updateBattleLog("You aren't able to execute that skill as you don't have the right weapon to do that");
                return;
            }

            // Checks if player can afford the cost to perform that skill
            let canAfford = setup.skill[actionID].cost(player);
            if (!canAfford) {
                setup.updateBattleLog(`You are too exhausted to use ${setup.skill[actionID].name}.`);
                return;
            }

            // Checks if player's attack hit the enemy successfully
            let playerHit = Math.floor(Math.random() * (100 - 1) + 1) < ((player.atkSpeed / enemy.evasion) * 100) ? true : false;

            if(playerHit){
                damage = setup.skill[actionID].action(player);
                enemy.cur.hp -= damage;
                setup.updateBattleLog(
                    `${player.name} attacked ${enemy.name} using ${setup.skill[actionID].name} dealing ${damage.toFixed(2)} damage`,
                );
                
                if(setup.skill[actionID].tag.includes("Status Effect") && typeof setup.skill[actionID].status === "function"){
                    let playerDealStatus = setup.skill[actionID].status(enemy);

                    if(playerDealStatus && playerDealStatus[2]){
                        setup.updateBattleLog(
                            `${enemy.name} received ${setup.status[playerDealStatus[0]].name} lasting for ${playerDealStatus[1]}`
                        );
                    }
                }

                if(setup.isAlive(enemy) == false) {
                    enemy.state = "Dead";
                    setup.pushGameLog(`You defeated ${enemy.name}`);
                    setup.RenderText("battle-panel", "Battle_Panel");
                    return;
                }
            } else {
                setup.updateBattleLog(`${enemy.name} evaded the attack receiving no damage!`);
            }
            break;
        case "Defend":
            break;
    }

    setup.renderNextTurn();
}

setup.enemyTurn = function(){
    if(setup.battleCheckState() === true) return;

    let enemy = State.variables.entity;
    let player = State.variables.player;
    let action = setup.runStatusEffect(enemy) === "Stunned" ? "Stunned" : null;
    let damage = 0;
    let actionID;

    if(action === null){
        if(((enemy.cur.sta / enemy.sta) * 100) < State.variables.setting.enemy.restToggle){
            action = "Rest";
        }
        else {
            action = "Attack";
        }
    }

    switch(action){
        case "Stunned":
            break;
        case "Wait":
            break;
        case "Flee":
            break;
        case "Rest":
            let enemyStaRestoreValue = Math.random() * (3 - 1) + 1;
            setup.updateBattleLog(`${enemy.name} decided to rest, restoring ${enemyStaRestoreValue.toFixed(2)} stamina`);
            setup.toggleSTA(enemyStaRestoreValue, enemy);
            break;
        case "Attack":
            for (let i = 0; i < enemy.skill.active.length; i++) {
                actionID = enemy.skill.active[Math.floor(Math.random() * (enemy.skill.active.length - 0) + 0)];
                let enemyCanAfford = setup.skill[actionID].cost(enemy);

                if(enemyCanAfford) break;
            }

            let enemyHit = Math.floor(Math.random() * (100 - 1) + 1) < ((enemy.atkSpeed / player.evasion) * 100) ? true : false;

            if(enemyHit){
                damage = setup.skill[actionID].action(enemy);
                player.cur.hp -= damage;
                setup.updateBattleLog(
                    `${enemy.name} attacked ${player.name} using ${setup.skill[actionID].name} dealing ${damage.toFixed(2)} damage`,
                );
                
                if(setup.skill[actionID].tag.includes("Status Effect")  && typeof setup.skill[actionID].status === "function"){
                    let enemyDealStatus = setup.skill[actionID].status(player);
                    
                    if(enemyDealStatus[2]){
                        setup.updateBattleLog(
                            `${player.name} received ${setup.status[enemyDealStatus[0]].name} lasting for ${enemyDealStatus[1]}`,
                        );
                    }
                }

                if(setup.isAlive(player) == false) {
                    player.state = "Dead";
                    setup.open_panel("Player_Death_Panel");
                    return;
                }
            } else{
                setup.updateBattleLog(`${player.name} evaded the attack receiving no damage!`);
            }
            break;
        case "Defend":
            break;
    }

    setup.renderNextTurn();
}

setup.renderNextTurn = function(){
    const vars = State.variables;

    vars.battle.order.shift();
    setup.RenderText("battle-panel", "Battle_Panel");

    if(vars.battle.order[0] !== vars.player.name){
        setTimeout(() => {
            setup.enemyTurn();
        }, vars.setting.battle.response);
    }
    
  	setup.generateBattleOrder(vars.entity, vars.player);
}

setup.battleCheckState = function(){
    const vars = State.variables;
    let enemy = vars.entity;
    let player = vars.player;

    if(setup.isAlive(enemy) == false) {
        enemy.state = "Dead";
        setup.pushGameLog(`You defeated ${enemy.name}`);
        setup.RenderText("battle-panel", "Battle_Panel");
        return true;
    }else if(setup.isAlive(player) == false) {
        player.state = "Dead";
        setup.open_panel("Player_Death_Panel");
        return true;
    }else {
        return false;
    }
}

setup.engageBattle = function(target, source = State.variables.player){
    if(target === undefined){
        setup.logError(`${target} doesnt exist!`, "MEV");
        return;
    }

    const vars = State.variables;

    if(vars.battle === undefined){
        setup.logError("B401", "FER");
        setup.logError("Cannot generate battle order!", "FER");
        return;
    }

    vars.battle.source = source;
    vars.battle.target = target;
    vars.battle.order = [];

    setup.generateBattleOrder(source, target, true);

    setTimeout(() => {
        if(vars.battle.order[0] != State.variables.player.name){
            setup.enemyTurn();
        }
    }, vars.setting.battle.response);
}

setup.generateBattleOrder = function(source, target, startBattle = false){
    const vars = State.variables;
    
    if(vars.battle === undefined){
        setup.logError("B401", "FER");
        setup.logError("Cannot generate battle order!", "FER");
        return;
    }

    let sourceChance = source.agi + source.per + (source.int / 4) + 5;
    let targetChance = target.agi + target.per + (target.int / 4) + 5;

    if(vars.battle.order.length === 0 && startBattle === true){
        vars.battle.order.push(source.name);

        for(let i = 0; i <= 9; i++){
            let draw = Math.floor(Math.random() * (sourceChance + targetChance - 1) ) + 1;

            if(draw <= sourceChance){
                vars.battle.order.push(source.name);
            } else {
                vars.battle.order.push(target.name);
            }

            console.log(`Order ${i} : ${vars.battle.order[i]}`);
        }
    } else {
        let draw = Math.floor(Math.random() * (sourceChance + targetChance - 1) ) + 1;

        if(draw <= sourceChance){
            vars.battle.order.push(source.name);
        } else {
            vars.battle.order.push(target.name);
        }

        console.clear();
        for(let i = 0; i <= vars.battle.order.length; i++){
            console.log(`Order ${i} : ${vars.battle.order[i]}`);
        }
    }
}

// Use only for battle
setup.runStatusEffect = function(target){
    if(!target.status || typeof target.status !== "object") return;

    let statusEffectIDs = Object.keys(target.status);
    if(statusEffectIDs.length === 0) return;

    for(let i = 0; i < statusEffectIDs.length; i++){
    let id = Number(statusEffectIDs[i]);

    let status = target.status[id];
    if(!status) continue; // safety

    if(setup.status[id].tag.includes("Control Effect")){
        setup.updateBattleLog(`${target.name} turn is skipped because of ${setup.status[id].name}`);
        status.duration -= 1;

        if(status.duration <= 0) delete target.status[id];
        return "Stunned";
    } else {
        let damage = setup.status[id].effect(target, status.level);
        setup.updateBattleLog(`${target.name} took ${damage} from ${setup.status[id].name} damage`);

        status.duration -= 1;

        if(status.duration <= 0) delete target.status[id];
    }
}
}

setup.applyEffect = function(SID, lvl, duration, target){
    if(!setup.targetHasStatus(SID, target)){
        target.status[SID] = {
            name: setup.status[SID].name,
            level: lvl,
            duration: duration
        }

        console.log(`
            name: ${target.status[SID].name} \n
            level: ${target.status[SID].level} \n
            duration: ${target.status[SID].duration}
            `);
    } else if(target.status[SID].level === lvl){
        target.status[SID].duration += duration;
    } else if(target.status[SID].level < lvl){
        target.status[SID].level = lvl;
        target.status[SID].duration = duration;
    }
}

setup.targetHasStatus = function(SID, target){
    if(target.status[SID] === undefined) 
        return false;
    else
        return true;
}

setup.updateBattleLog = function(txt){
    let battleLog = State.variables.battleLog;

    if(battleLog === undefined){
        setup.logError("battle log cannot be found!", "MSV");
        return;
    }

    if(battleLog.length >= 10) battleLog.shift();

    battleLog.push(txt);
    setup.RenderText("battle-panel", "Battle_Panel");
    setup.updateBars();

}

setup.meetsWeaponRequirement = function(target, ActionID) {
    let leftArmID = target.equipment.leftArm;
    let rightArmID = target.equipment.rightArm;

    if(setup.skill[ActionID].tag.includes("Hand")){
        return leftArmID === 0 || rightArmID === 0;
    }
  
    let leftTags = leftArmID !== 0 ? setup.item[leftArmID].tag  : [];
    let rightTags = rightArmID !== 0 ? setup.item[rightArmID].tag : [];

    return setup.skill[ActionID].tag.some(req => 
        leftTags.includes(req) || rightTags.includes(req)
    );
}

setup.isAlive = function(target = State.variables.player) {
    if (!target || !target.cur) {
        console.log("Entity doesn't exist");
        return;
    }
    if (target.cur.hp <= 0) return false;
};

setup.CalcStat = function (target = State.variables.player) {
    let oldHP = target.hp;
    let oldSTA = target.sta;

    target.hp = setup.CalculateHP(target.str, target.con, target.hp);
    target.sta = setup.CalculateSTA(target.str, target.con);

    target.cur.hp += target.hp - oldHP;
    target.cur.sta += target.sta - oldSTA;

    target.power = setup.CalculatePOW(target.str);
    target.evasion = (target.agi * 0.4) * (target.per * 0.6) + 1;
    target.atkSpeed = (target.agi * 0.6) * (target.per * 0.4) + 1;

    if (target == State.variables.player) setup.updateBars();
};

Macro.add("ToggleStat", {
    handler: function () {
        let stat = this.args[0] === undefined ? "none" : this.args[0];
        let amount = this.args[1] === undefined ? 0 : this.args[1];
        let target = this.args[2] === undefined ? State.variables.player : this.args[2];

        setup.toggleStat(stat, amount, target);
    },
});

setup.toggleStat = function (stat, amount, target) {
    switch (stat) {
        case "str": target.str += amount; break;
        case "con": target.con += amount; break;
        case "int": target.int += amount; break;
        case "agi": target.agi += amount; break;
        case "per": target.per += amount; break;
        default: return;
    }

    setup.CalcStat();
};

setup.CalculateHP = function (str, con, hp = 0) {
    return con * (con * 0.5) + str * (con * 0.1) + hp * 0.01 + 10;
};

setup.CalculateSTA = function (str, con) {
    return con * (con * 0.1) + str * (con * 0.02) + 5;
};

setup.CalculatePOW = function (str) {
    return str * 1.1;
};

setup.setRace = function(raceID = 101, target = State.variables.player) {
    let race = setup.race[raceID];

    target.race = race.name;
  
    target.str = race.stat.str;
    target.con = race.stat.con;
    target.int = race.stat.int;
    target.agi = race.stat.agi;
    target.per = race.stat.per;
    target.potential = race.stat.potential;
  
    target.lifespan = Math.floor(Math.random() * (race.stat.lifespan[1] - race.stat.lifespan[0]) + race.stat.lifespan[0]);
  
    setup.CalcStat(target);
}

setup.setPassive = function(target = State.variables.player) {
    let passiveIDs = target.skill.passive;
  
    for(let i = 0; i < passiveIDs.length; i++){
        if(setup.skill[passiveIDs[i]].tag.includes("Stat")){
            setup.skill[passiveIDs[i]].effect(target);
        }
    }
  
    setup.CalcStat(target);
}

Macro.add("SaveFile", {
    handler: function () {
        let index = this.args[0];
        let charName = this.args[1];
        let world = State.variables.world;

        let saveName = `${charName}. Day ${world.time.day}, in the ${world.time.year}th Year of the Crimson Era`;

        var currentPassage = passage();
        Engine.play(currentPassage);
        Save.browser.slot.save(index, [saveName]);
        setup.RenderTextSave("save-panel", "Save_Panel", true);
    },
});

Macro.add("LoadFile", {
    handler: function () {
        let index = this.args[0];
        if (!Save.browser.slot.has(index)) {
            UI.alert("This tome lies empty.");
            return;
        }
        Save.browser.slot.load(index);
        var currentPassage = passage();
        Engine.play(currentPassage);
        setup.RenderTextSave("save-panel", "Save_Panel", true);
    },
});

Macro.add("DeleteFile", {
    handler: function () {
        let index = this.args[0];

        if (Save.browser.slot.get(index) === null) {
            return;
        } else {
            Save.browser.slot.delete(index);
        }
        setup.RenderTextSave("save-panel", "Save_Panel", true);
    },
});

setup.logError = function(txt, errorType){
    switch(errorType){
        case "FER": // Fatal Error
            console.log(`%cFatal Error : %c${txt}`, "color: red;", "color: white;");
            break;
        case "CER": // Common Error
            console.log(`%cCommon Error : %c${txt}`, "color: orange;", "color: white;");
            break;
        case "MEV": // Missing Entity Variable
            console.log(`%cMissing Entity Var : %c${txt}`, "color: orange;", "color: white;");
            break;
        case "MSV": // Missing System Variable
            console.log(`%cMissing System Var : %c${txt}`, "color: orange;", "color: white;");
            break;
        case "MIV": // Missing Item Variable
            console.log(`%cMissing Item Var : %c${txt}`, "color: orange;", "color: white;");
            break;
        case "MIV": // Missing Skill Variable
            console.log(`%cMissing Skill Var : %c${txt}`, "color: orange;", "color: white;");
            break;
        case "MPV": // Missing Player Variable
            console.log(`%cMissing Player Var : %c${txt}`, "color: orange;", "color: white;");
            break;
        case "CER": // Connection Error for other Errors
            console.log(`%cError : %c${txt}`, "color: orange;", "color: white;");
            break;
        default:
            console.log(`%cError msg type doesn't exist : %c${txt}`, "color: red;", "color: white;");
            break;
    }
}

setup.pluralize = function(value, singular, plural){
    if(value === 0)
        return value + " " + singular;
    else 
        return value + " " + (value === 1 ? singular : plural);
}