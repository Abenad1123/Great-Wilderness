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