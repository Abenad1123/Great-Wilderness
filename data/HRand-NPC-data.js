setup.hrandNPC = {};
setup.hrandNPC.data = {
    "H001": {
        identity: "Weak Bandit",
        name: {
            male: ["John Black", "Yi Balleck", "Morkeq Hundun", "Kael Veyron", "Darian Frost"],
            female: ["Andrea Black", "Shein Aurora", "Autumn Balleck", "Lyra Veyne","Elara Frost"],
            neutral: ["Alex Raven", "Ari Veyne", "Rowan Black"]
        },
        race: 101,
        gender: ["Female", "Male"],
        age: [15, 40],
        lifespan: [60, 75],

        title: [],
        status: [],

        gear: {
            head: null, chest: null, back: null,
            leg: null, feet: null, rArm: null,
            lArm: null, rAcc: null, lAcc: null
        },
        inventory: [],

        trait: {
            innate: [],
            acquired: [],
            temporary: []
        },
        skill: {
            combat: {
                active: [1001, 1002],
                passive: []
            },
            profession: {
                active: [],
                passive: []
            }
        },

        str: [1, 5],
        con: [1, 5],
        int: [1, 5],
        agi: [1, 5],
        per: [1, 5],
        sanity: [75, 100],
        wisdom: [0.5, 1.1],
        luck: [0.7, 1.2]
    },
     "H999": {
        identity: "Training Dummy",
        name: {
            neutral: ["Dummy 1", "Dummy 2", "Dummy 3"]
        },
        race: 101,
        gender: ["None"],
        age: [0, 0],
        lifespan: [1000, 1000],

        title: [9999],
        status: [],

        gear: {
            head: null, chest: null, back: null,
            leg: null, feet: null, rArm: null,
            lArm: null, rAcc: null, lAcc: null
        },
        inventory: [],

        trait: {
            innate: [],
            acquired: [],
            temporary: []
        },
        skill: {
            combat: {
                active: [1002],
                passive: []
            },
            profession: {
                active: [],
                passive: []
            }
        },

        str: [1, 1],
        con: [1, 1],
        int: [1, 1],
        agi: [1, 1],
        per: [1, 1],
        sanity: [100, 100],
        wisdom: [0,0],
        luck: [0,0]
    }
}


setup.hrandNPC.asset = {
    "H001":{
        male: {
            background: "Standard static npc background information!",
            imgFull: "assets/images/npc/static/S001-full.jpg",
            imgPort: "assets/images/npc/static/S001-port.jpg",
        },
        female: {
            background: "Standard static npc background information!",
            imgFull: "assets/images/npc/static/S001-full.jpg",
            imgPort: "assets/images/npc/static/S001-port.jpg",
        },
        neutral: {
            background: "Standard static npc background information!",
            imgFull: "assets/images/npc/static/S001-full.jpg",
            imgPort: "assets/images/npc/static/S001-port.jpg",
        }
    }
}