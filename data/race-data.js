setup.race = {};
setup.race.data = {
    101: {
        name: "Human",
        description: "Humans are said to be the dominant race of this continent. It said they possess incredible will to innovate and incredible will to survive",
        lifespan: 80,
        genders: ["Male", "Female"],
        multiplier: {
            hps: 1.1,
            sta: 1.2
        },
        stat: {
            str: 0.15,
            con: 0.15,
            int: 0.45,
            agi: 0.2,
            per: 0.2,
            regen: 0
        }
    },
    102: {
        name: "Ancient Human",
        description: "Anicent humans are said to be the old version of humans. They possess enourmous strength enough survive in the harsh environment of the acient times.",
        lifespan: 120,
        genders: ["Male", "Female"],
        multiplier: {
            hps: 1.3,
            sta: 1.3
        },
        stat: {
            str: 0.25,
            con: 0.25,
            int: 0.3,
            agi: 0.3,
            per: 0.3,
            regen: 0
        }
    },
    103: {
        name: "",
        description: "",
        lifespan: 0,
        genders: [],
        multiplier: {
        },
        stat: {
        }
    },
};

setup.race.asset = {
    "set0":{
        scope: [101, 102],
        portrait: {
            male: ["m1", "m2", "m3", "m4"],
            female: ["f1", "f2", "f3"]
        }
    }
};