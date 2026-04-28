
setup.skill = {
    101: {
        name: "Weak Punch",
        rarity: 1,
        desc: "A skill description.",
        tag: ["Active", "Hand", "Basic"],
        action: function(entity){
            return entity.power * 1.2
        },
        cost: function(entity){
            if(entity.cur.sta < 1) return false;
            entity.cur.sta -= 1;
            return true;
        }
    },
    102: {
        name: "Normal Punch",
        rarity: 1,
        desc: "A skill description.",
        tag: ["Active", "Hand", "Basic"],
        action: function(entity){
            return entity.power * 1.4
        },
        cost: function(entity){
            if(entity.cur.sta < 1.2) return false;
            entity.cur.sta -= 1.2;
            return true;
        }
    },
    103: {
        name: "Strong Punch",
        rarity: 1,
        desc: "A skill description.",
        tag: ["Active", "Hand", "Basic", "Status Effect", "Stun"],
        action: function(entity){
            return entity.power * 1.6;
        },
        cost: function(entity){
            if(entity.cur.sta < 1.4) return false;
            entity.cur.sta -= 1.4;
            return true;
        }
    },
    104: {
        name: "Merciful Punch",
        rarity: 1,
        desc: "A skill description.",
        tag: ["Active", "Hand", "Stun", "Status Effect"],
        action: function(entity){
            return 0;
        },
        cost: function(entity){
            if(entity.cur.sta < 2) return false;
            entity.cur.sta -= 2;
            return true;
        },
        status: function(entity){
            let SID = 104;
            let level = 1;
            let duration = 1;
            let effectChance = 100;

            let chance =  Math.floor(Math.random() * (100 - 0) + 0) <= effectChance ? true : false;

            if(!chance) {
                return false;
            } else {
                setup.applyEffect(SID, level, duration, entity);
                return [SID, duration, true];
            }
        }
    },
    105: {
        name: "Straight Jab",
        rarity: 1,
        desc: "A skill description.",
        tag: ["Active", "Hand"],
        action: function(entity){
        },
        cost: function(entity){
        }
    },
    106: {
        name: "Battering Fist",
        rarity: 1,
        desc: "A skill description.",
        tag: ["Active", "Hand", "Stun", "Status Effect"],
        action: function(entity){
        },
        cost: function(entity){
        }
    },
    107: {
        name: "Uppercut Punch",
        rarity: 1,
        desc: "A skill description.",
        tag: ["Active", "Hand"],
        action: function(entity){
        },
        cost: function(entity){
        }
    },
    108: {
        name: "Sword Thurst",
        rarity: 1,
        desc: "A skill description.",
        tag: ["Active", "Sword", "Penetration", "Basic Sword Skill"],
        action: function(entity){
            return entity.power * 1.5
        },
        cost: function(entity){
            if(entity.cur.sta < 1.3) return false;
            entity.cur.sta -= 1.3;
            return true;
        }
    },
    109: {
        name: "Sword Slash",
        rarity: 1,
        desc: "A skill description.",
        tag: ["Active", "Sword", "Bleed", "Status Effect", "Basic Sword Skill"],
        action: function(entity){
            return entity.power * 1.5
        },
        cost: function(entity){
            if(entity.cur.sta < 1.3) return false;
            entity.cur.sta -= 1.3;
            return true;
        },
        status: function(entity){
            let SID = 101;
            let level = 1;
            let duration = 2;
            let effectChance = 20;

            let chance =  Math.floor(Math.random() * (100 - 0) + 0) <= effectChance ? true : false;

            if(!chance) {
                return false;
            } else {
                setup.applyEffect(SID, level, duration, entity);
                return [SID, duration, true];
            }
        }
    },  
    110: {
        name: "Strong Bones",
        rarity: 1,
        desc: "A skill description.",
        tag: ["Passive", "Stat"],
        effect: function(entity){
            entity.con += 0.5;
            entity.str += 0.3;
        }
    },
    201: {
        name: "Six Sense",
        rarity: 2,
        desc: "A skill's description",
        tag: ["Passive"]
    },
    202: {
        name: "Sword Qi",
        rarity: 2,
        desc: "A skill's description",
        tag: ["Passive", "Sword"]
    },
    301: {
        name: "Sword Intent",
        rarity: 3,
        desc: "A skill's description",
        tag: ["Passive", "Sword"]
    },
    401: {
        name: "Sword Momentum",
        rarity: 4,
        desc: "A skill's description",
        tag: ["Passive", "Sword"]
    },
}
