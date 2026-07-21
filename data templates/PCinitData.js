$pc = {
    name: "",
    race: "",
    gender: "",
    age: null,
    // THE MAXIMUM LIMIT AGE CAN REACH
    lifespan: null,
    // DEAD OR ALIVE
    state: null,

    trait: {},
    title: {},
    status: {},

    gear: {
        head: null,
        chest: null,
        back: null,
        leg: null,
        feet: null,
        rArm: null,
        lArm: null,
        rAcc: null,
        lAcc: null
    },

    inventory: {},

    skill: {
        activve: {},
        passive: {},
        innate: {}
    },

    // VOLATILE STATS
    hps: [null, null],
    sta: [null, null],
    san: [null, null],

    // PERMANENT STATS
    str: [null, null],
    con: [null, null],
    int: [null, null],
    agi: [null, null],
    per: [null, null],

    // SPECIFIC STATS
    wisdom: null,
    karma: null,
    // AFFECTS PROFICIENCY GROWTH
    comprehension: null,
    // HOW MUCH A STAT CAN INCREASE. WHEN 0 STATS CAN'T INCREASE
    potential: null,
    
    // BATTLE SPECIFIC STATS
    power: null,
    evasion: null,
    atkSpeed: null,

    // AFFECTS ATTACK DAMAGE
    proficiency: {
        weapon: {
            sword: null,
            spear: null,
            axe: null,
            knife: null,
            hand: null,
            feet: null
        }
    },

    talent: {
        weapon: {
            sword: null,
            spear: null,
            axe: null,
            knife: null,
            hand: null,
            feet: null
        }
    },

    // HOW FAST THE STAT GROWS
    grwoth: {
        str: null,
        con: null,
        int: null,
        agi: null,
        per: null
    },

    resistance: {
        bleed: null,
        poison: null,
        fire: null,
        energy: null,
        curse: null
    },

    body: {
        // AFFECTS CULTIVATION AND GROWTH
        impurity: 0,
        sense: 1,
        control: 1,
        vision: 1,

        physique: 1,
        bone: 1,
        // FOR STAMINA REGENERATION
        energy: 10,

        // AFFECTS ATTACK SPEED AND STAMINA CONSUMPTION
        weight: 50,
        // DOES NOTHING
        height: 160
    }
}

$system = {
    debug: true,
    newCHar: false,
    version: "0.3 Dev",
    inBattle: false
};

$achievement = {
    kills : 0,
    time: {
        sleep: 0,
        travel: 0
    }
};

$setting = {
    enemyLogic: {
    	restToggle: 30
    }
};

$time = {
    minute: 0,
    hour: 0,
    day: 0,
    year: 0
};

$system = {
    version: "0.4",
};

$events = {
    completed: false
};

$shopGenData = {};