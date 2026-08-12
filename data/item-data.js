// Version 0.4 InDev
setup.item = {
    1001: {
        name: "Green Apple",
        stackLimit: 64,
        category: "Consumable",
        subCategory: "Food",
        tags: [],
        description: "An item's description!",
        img: "",
        stat: {
            energy: 5
        },
        use: function(entity) {
            setup.action.eat(entity, 1001);
        }
    },
    1002: {
        name: "Wooden Stick",
        stackLimit: 64,
        category: "Material",
        subCategory: "Wood",
        tags: [],
        description: "An item's description!",
        img: "",
        stat: {}
    },
    1003: {
        name: "Iron Ore",
        stackLimit: 64,
        category: "Material",
        subCategory: "Mineral",
        tags: [],
        description: "An item's description!",
        img: "",
        stat: {}
    },
    1004: {
        name: "Wood Short Sword",
        stackLimit: 1,
        category: "Weapon",
        subCategory: "Sword",
        tags: [],
        description: "An item's description!",
        img: "",
        stat: {
            durability: 20,
            weight: 2
        }
    },
}