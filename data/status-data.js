setup.status.data = {
    101: {
        name: "Poisoned",
        description: "",
        minLevel: 1,
        maxLevel: 5,
        tag: [],
        effect: function(entity, level){
            return (Math.min(1, entity.hps[0] * 0.01) * level) - entity.resistance.poison
        }
    }
}


/*
STATUS TAGS

control
tick

*/