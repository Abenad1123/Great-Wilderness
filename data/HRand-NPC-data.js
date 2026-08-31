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