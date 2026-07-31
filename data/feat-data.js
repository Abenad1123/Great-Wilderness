setup.feat.data = {
    1001: {
        name: "Age 20",
        description: "Reach the age of 20 years",
        value: 10,
        condition: function(){
            return State.variables.pc.age.year >= 20;
        }
    },
    1002: {
        name: "Age 30",
        description: "Reach the age of 30 years",
        value: 20,
        condition: function(){
            return State.variables.pc.age.year >= 30;
        }
    },
    1003: {
        name: "Age 40",
        description: "Reach the age of 40 years",
        value: 25,
        condition: function(){
            return State.variables.pc.age.year >= 40;
        }
    },
    1004: {
        name: "Age 50",
        description: "Reach the age of 50 years",
        value: 30,
        condition: function(){
            return State.variables.pc.age.year >= 50;
        }
    }
}