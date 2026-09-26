setup.feat.data = {
    1001: {
        name: "Age 20",
        description: "Reach the age of 20 years",
        value: 10,
        condition: function(){
            return State.variables.game.pc.age.year >= 20;
        }
    },
    1002: {
        name: "Age 30",
        description: "Reach the age of 30 years",
        value: 20,
        condition: function(){
            return State.variables.game.pc.age.year >= 30;
        }
    },
    1003: {
        name: "Age 40",
        description: "Reach the age of 40 years",
        value: 25,
        condition: function(){
            return State.variables.game.pc.age.year >= 40;
        }
    },
    1004: {
        name: "Age 50",
        description: "Reach the age of 50 years",
        value: 30,
        condition: function(){
            return State.variables.game.pc.age.year >= 50;
        }
    },
    1005: {
        name: "Age 100",
        description: "Reach the age of 100 years",
        value: 50,
        condition: function(){
            return State.variables.game.pc.age.year >= 100;
        }
    },
    1006: {
        name: "Age 250",
        description: "Reach the age of 250 years",
        value: 100,
        condition: function(){
            return State.variables.game.pc.age.year >= 250;
        }
    },
    1007: {
        name: "Age 500",
        description: "Reach the age of 500 years",
        value: 150,
        condition: function(){
            return State.variables.game.pc.age.year >= 500;
        }
    },
    1008: {
        name: "Age 1000",
        description: "Reach the age of 1000 years",
        value: 300,
        condition: function(){
            return State.variables.game.pc.age.year >= 1000;
        }
    }
}