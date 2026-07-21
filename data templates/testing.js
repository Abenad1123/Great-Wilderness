setup.loaditems = function(shopID) {
    const shopObj = setup.shopData[shopID].items;

    const size = Object.keys(shopObj).length; 
    const items = Object.keys(shopObj);

    let result = [];

    for(let i = 0; i < size; i++){
        let stock = randInt(shopObj[items[i]].min, shopObj[items[i]].max);

        result.push([items[i], stock]);
    }

    return result;
}

function randInt(min, max) {
    let result = Math.floor(Math.random() * (max - min + 1) ) + min;
    return result;
}
setup.startScene = function() {
    if(setup.event === undefined) return;

    const temp = State.temporary;

    temp.sceneLevel = 0;
    temp.sceneData = Object.keys(setup.event); 

    let currentSceneKey = temp.sceneData[temp.sceneLevel];
    let currentScene = setup.event[currentSceneKey];

    $("#scene-container").empty();

    if(currentScene.img !== undefined){
        $("#scene-container").append(`<img src="${currentScene.img}">`);
    }

    $("#scene-container").wiki(currentScene.txt + "<br>");

    let sceneChoices = currentScene.choice;
    
    console.log(sceneChoices);

    for(let i = 0; i < sceneChoices.length; i++){
        $("#scene-container").wiki(`<<button "${sceneChoices[i].txt}">><<run setup.continueScene('${sceneChoices[i].next}')>><</button>><br>`);
    }
}

setup.continueScene = function(sceneKey) {
    if(setup.event === undefined) return;

    const temp = State.temporary;

    if(!temp.sceneData.includes(sceneKey)) return;

    let currentScene = setup.event[sceneKey];

    $("#scene-container").empty();

    if(currentScene.img !== undefined){
        $("#scene-container").append(`<img src="${currentScene.img}">`);
    }

    $("#scene-container").wiki(currentScene.txt + "<br>");

    let sceneChoices = currentScene.choice;
    
    console.log(sceneChoices);

    for(let i = 0; i < sceneChoices.length; i++){
        $("#scene-container").wiki(`<<button "${sceneChoices[i].txt}">><<run setup.continueScene('${sceneChoices[i].next}')>><</button>><br>`);
    }
}