setup.renderPlayerTurn = function(target, action, actionID){
    if(setup.isAlive(target) == false) {
        enemy.state = "Dead";
        setup.pushGameLog(`You defeated ${enemy.name}`);
        setup.RenderText("battle-panel", "Battle_Panel");
        return;
    }
    if(setup.isAlive(State.variables.player) == false) {
        player.state = "Dead";
        setup.open_panel("Player_Death_Panel");
        return;
    }

    // Take Status Effect
    playerAction = setup.runStatusEffect(player) === "Stunned" ? "Stunned" : playerAction;

    switch(action){
        case "Rest":
            let staRestoreValue = Math.random() * (3 - 1) + 1;
            setup.updateBattleLog(`You decided to rest, restoring ${staRestoreValue.toFixed(2)} stamina`);
            setup.toggleSTA(staRestoreValue);
            break;
        case "Defend":
            break;
        case "Observe":
            setup.updateBattleLog(`You decided wait and observe`);
            break;
        case "Flee":
            break;
        case "Stunned":
            break;
        case "Attack":
            break;
    }
}

setup.renderTargetTurn  = function(target, action, actionID){
    if(setup.isAlive(target) == false) {
        enemy.state = "Dead";
        setup.pushGameLog(`You defeated ${enemy.name}`);
        setup.RenderText("battle-panel", "Battle_Panel");
        return;
    }
    if(setup.isAlive(State.variables.player) == false) {
        player.state = "Dead";
        setup.open_panel("Player_Death_Panel");
        return;
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
        return;
    }

    vars.battle.source = source;
    vars.battle.target = target;
    vars.battle.order = [];

    setup.generateBattleOrder(source, target, true);

    setTimeout(() => {
        if(vars.battle.order[0] != State.variables.player.name){

        }
    }, 5000);
}

setup.generateBattleOrder = function(source, target, startBattle = false){
    const vars = State.variables;
    
    if(vars.battle === undefined){
        setup.logError("B401", "FER");
        setup.logError("Cannot generate battle order!", "FER");
        return;
    }

    let sourceStat = source.agi + source.per + (source.int / 4);
    let targetStat = target.agi + target.per + (target.int / 4);

    let sourceChance = Math.min(100, Math.max(1, (sourceStat / targetStat)));
    let targetChance = Math.min(100, Math.max(1, (targetStat / sourceStat)));

    if(vars.battle.order.length === 0 && startBattle === true){
        vars.battle.order.push(source.name);

        for(let i = 0; i <= 9; i++){
            let drawChance = Math.floor(Math.random() * (200 - 1) ) + 1;

            if(drawChance <= sourceChance){
                vars.battle.order.push(source.name);
            } else if(drawChance > (100 + targetChance)) {
                vars.battle.order.push(target.name);
            }
        }
    } else {}
}

setup.logError = function(txt, errorType){
    switch(errorType){
        case "FER": // Fatal Error
            console.log(`%cFatal Error : %c${txt}`, "color: red;", "color: white;");
            break;
        case "MEV": // Missing Entity Variable
            console.log(`%cMissing Entity Var : %c${txt}`, "color: orange;", "color: white;");
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