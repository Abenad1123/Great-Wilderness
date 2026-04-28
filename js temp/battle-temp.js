Macro.add("RenderBattle", {
    handler: function () {
        let 
    }
});

setup.engageBattle = function(target, source = State.variables.player){
    if(target === undefined){
        setup.logError(`${target} doesnt exist!`, "MEV");
        return;
    }

    const vars = State.variables;

    if(vars.battle === undefined){
        setup.logError("B401", "FER");
        return;
    }

    vars.battle.source = source;
    vars.battle.target = target;


}

setup.logError = function(txt, errorType){
    switch(errorType){
        case "FER": // Fatal Error
            console.log(`%Fatal Error : %c${txt}`, "color: red;", "color: white;");
            break;
        case "MEV": // Missing Entity Variable
            console.log(`%Missing Entity Var : %c${txt}`, "color: orange;", "color: white;");
            break;
        case "MIV": // Missing Item Variable
            console.log(`%Missing Item Var : %c${txt}`, "color: orange;", "color: white;");
            break;
        case "MIV": // Missing Skill Variable
            console.log(`%Missing Skill Var : %c${txt}`, "color: orange;", "color: white;");
            break;
        case "MPV": // Missing Player Variable
            console.log(`%Missing Player Var : %c${txt}`, "color: orange;", "color: white;");
            break;
        default:
            console.log(`%Error msg type doesn't exist : %c${txt}`, "color: red;", "color: white;");
            break;
    }
}