$world = {
    area: {},
    seed: 23491,

    time: {
        day: Math.floor(Math.random() * (250 - 50) + 50),
        year: Math.floor(Math.random() * (300 - 250) + 250)
    }
};

$system = {
    debug: true,
    newCHar: false,
    version: "0.3 Dev",
    inBattle: false
};

$defaultTxt = {
    unknownArea: "Unkown Area"
};

$time = {
    minute: 0,
    hour: 0,
    day: 0,
    year: 0
};

$log = {
    kills : 0,
    time: {
        sleep: 0,
        travel: 0
    }
};

$setting = {
	battle: {
    	response: 1000
    },
    enemy: {
    	restToggle: 30
    }
};

$achievement = [];
$gameLog = [];
$battleLog = [];
$prevPassage = "";

$player = {
    name: "John Doe",
    race: "",
    gender: "Male",
    state: "Alive",
    age: 0,
    lifespan: 85,
    
    trait: {},
    title: {},
    status: {},
    equipment: {
        head: 0,
        back: 0,
        chest: 0,
        leg: 0,
        feet: 0,
        rightArm: 0,
        leftArm: 1001,
        leftAcc: 0,
        rightAcc: 0,
        neck: 0
    },
    inventory: {
    	1001: {
        	"system1": {
            	quantity: 1,
            	durability: 8
            },
            "system2": {
            	quantity: 1,
            	durability: 10
            }
        },
        1003: {
         	"system3": {
                quantity: 1,
                durability: 50
            }
        },
        1004: {
        	"system4": {
                quantity: 1,
                durability: 50
            }
        },
        1006: {
        	quantity: 10,
        },
        1007: {
        	quantity: 10,
        }
    },
    skill: {
        active: [ 101, 102, 103, 104, 108, 109],
        passive: [110],
        innate: [],
    },
    
    hp: 0,
    sta: 0,
    str: 0,
    con: 0,
    int: 0,
    agi: 0,
    per: 0,

    cur: {
        hp: 0,
        sta: 0,
        str: 0,
        con: 0,
        int: 0,
        agi: 0,
        per: 0
    },

    power: 1,
    wisdom: 1,
    karma: 0,
    comprehension: 1,
    potential: 0,
    evasion: 0,
    atkSpeed: 0,
    
    weapon: {
        proficiency: {
            sword: 0,
            spear: 0,
            axe: 0,
            knife: 0,
            hand: 0,
            feet: 0
        },
        talent: {
            sword: 0,
            spear: 0,
            axe: 0,
            knife: 0,
            hand: 0,
            feet: 0
        }
    },
    
    growth: {
    	str: 1,
        con: 1,
        int: 1,
        agi: 1,
        per: 1,
    },
    
    resistance: {
        bleed: 0,
        posion: 0,
        fire: 0,
        energy: 0,
        curse: 0
    },

    body: {
        impurity: 0,
        sense: 1,
        control: 1,
        vision: 1,
        physique: 1,
        bone: 1,
        energy: 10,
        weight: 40,
        height: 160
    }
};

setup.setRace(101);
setup.setPassive();