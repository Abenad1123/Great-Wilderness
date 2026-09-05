setup.skill.active = {};
setup.skill.passive = {};

setup.skill.active.data = {
    1001: {
        name: "Normal Punch",
        description: "Throws a simle punch towards the target",
        img: "",
        rank: [setup.skill.rank[0], setup.skill.sub[0]],
        cost: {
            sta: 0.25
        },
        action: {
            damage: function(sender, receiver){
                const result = setup.skill.damageHandle(sender, receiver);
                return result.sender.power * 1.1 - result.receiver.defense;
            },
            dialog: function(sender, receiver, result){
                setup.skill.dialogHandle([
                    `${sender.name} delivers a normal punch to ${receiver.name} dealing ${State.variables.game.battle.param.damage} of damage.`,
                    `${sender.name} throws a normal punch, but ${receiver.name} dodges it.`,
                    `${sender.name} delivers a normal punch, but ${receiver.name} blocks it.`,
                    `${sender.name}'s normal punch is reflected back at them.`
                ], result);
            }
        }
    },
    1002: {
        name: "Weak Punch",
        description: "Throws a punch containing little to no power towards the target",
        img: "",
        rank: [setup.skill.rank[0], setup.skill.sub[0]],
        cost: {
            sta: 0.25
        },
        action: {
            damage: function(sender, receiver){
                const result = setup.skill.damageHandle(sender, receiver);
                return result.sender.power * 1 - result.receiver.defense;
            },
            dialog: function(sender, receiver, result){
                setup.skill.dialogHandle([
                    `${sender.name} weakly delivers a punch to ${receiver.name} ${State.variables.game.battle.param.damage} of damage.`,
                    `${sender.name} throws a weak punch, but ${receiver.name} dodges it.`,
                    `${sender.name} weakly delivers a punch, but ${receiver.name} blocks it.`,
                    `${sender.name}'s weak punch is reflected back at them.`
                ], result);
            }
        }
    },
}

setup.skill.passive.data = {
    1001: {}
}

setup.skill.dialogHandle = function(dialogs = [], result){
    const vars = State.variables.game;
    /*
    [0] -> attack of sender succeeded
    [1] -> attack of sender dodged
    [2] -> attack of sender blocked
    [3] -> attack of sender were reflected back
    */
    switch(result){
        case "success":
            setup.battle.log(dialogs[0]);
            break;
        case "dogded":
            setup.battle.log(dialogs[1]);
            break;
        case "blocked":
            setup.battle.log(dialogs[2]);
            break;
        case "reflected":
            setup.battle.log(dialogs[3]);
            break;
    }
}

setup.skill.damageHandle = function(sender, receiver){
    const vars = State.variables;

    return {
        sender: {
            power: setup.entity.stat.total(sender.power),
            defense: setup.entity.stat.total(sender.defense),
            evasion: setup.entity.stat.total(sender.evasion),
            atkSpeed: setup.entity.stat.total(sender.atkSpeed)
        },
        receiver: {
            power: setup.entity.stat.total(receiver.power),
            defense: setup.entity.stat.total(receiver.defense),
            evasion: setup.entity.stat.total(receiver.evasion),
            atkSpeed: setup.entity.stat.total(receiver.atkSpeed)
        }
    }
}