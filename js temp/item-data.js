setup.nonStackableItems = ["Weapon", "Equipment"];

setup.item = {
	1001: {
    	name: "Wooden Sword",
      	rarity: 1,
      	description: "A sword crudely carved from dense hardwood. It won't hold an edge, but it's better than bare fists. Barely.",
		img: "weapon/sword/file_000000004c3061f784502ecee682ba2e.png",
      	tag: ["Weapon", "Sword", "Wood", "Crude"],
      	stats: {
        	power: 1,
          	durability: 10,
          	value: 5,
          	weight: 3,
        }
    },
	1002: {
    	name: "Iron Sword",
      	rarity: 1,
      	description: "A reliable iron blade, well-balanced and sturdy. Nothing fancy, but it has seen enough use to prove its worth.",
		img: "weapon/sword/1775451158188.png",
      	tag: ["Weapon", "Sword", "Iron"],
      	stats: {
        	power: 4,
          	durability: 50,
          	value: 30,
          	weight: 1.5,
        }
    },
	1003: {
    	name: "Linen Shirt",
      	rarity: 1,
      	description: "A simple shirt woven from coarse linen. Breathable and light, it offers little protection but keeps the chill off.",
		img: "equipment/chest/file_00000000aa246230bb926d8a93f4a345.png",
      	tag: ["Equipment", "Chest"],
      	stats: {
        	defense: 0.5,
          	durability: 50,
          	value: 18,
          	weight: 0.5,
        }
    },
	1004: {
    	name: "Linen Pants",
      	rarity: 1,
      	description: "Loose linen trousers stitched with practical hands. Comfortable enough for long roads, though they won't stop a blade.",
		img: "equipment/head/file_00000000aa246230bb926d8a93f4a345.png",
      	tag: ["Equipment", "Leg"],
      	stats: {
        	defense: 0.3,
          	durability: 50,
          	value: 15,
          	weight: 0.55,
        }
    },
	1005: {
    	name: "Straw Hat",
      	rarity: 1,
      	description: "A wide-brimmed hat woven from dried straw. Cheap and light, it keeps the sun out of your eyes and not much else.",
		img: "equipment/leg/file_00000000571c61f7a38bf6497d3155ea.png",
      	tag: ["Equipment", "Head"],
      	stats: {
        	defense: 0.2,
          	durability: 30,
          	value: 10,
          	weight: 1,
        }
    },
	1006: {
    	name: "Apple",
      	rarity: 1,
      	description: "A fresh, crisp apple. Sweet enough to lift the spirits and filling enough to quiet a growling stomach.",
		img: "consumable/fruit/1764644831974.jpg",
      	tag: ["Food", "Fruit"],
      	stats: {
        	energy: 5,
          	value: 3,
          	weight: 0.75,
        }
    },
	1007: {
    	name: "Cup of Water",
      	rarity: 1,
      	description: "A clay cup filled with clean water. Nothing more, nothing less. But out on the road, that's everything.",
		img: "consumable/drinkable/1764474107038.jpg",
      	tag: ["Food", "Drink"],
      	stats: {
        	energy: 2,
          	value: 1,
          	weight: 0.5,
        }
    }
}