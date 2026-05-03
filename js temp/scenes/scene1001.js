setup.event001 = {
	"scene1": {
		txt: "As you walk past the sandy road of the street. You happen to past by a coin pouch lying at the ground with no owner around.",
		choice: [
			{ txt: "Walk slowly towards it", next: "scene2" },
			{ txt: "Dash towards it and grab", next: "scene3" },
			{ txt: "Do nothing", next: "scene1" },
		],
	},
	"scene2": {
		txt: "You slowly ",
		choice: [
			{ txt: "scene3 choice", next: "scene3" },
			{ txt: "scene2 choice", next: "scene2" },
			{ txt: "scene1 choice", next: "scene1" }
		],
	},
	"scene3": {
		txt: "This the scene3 dialog",
		choice: [
			{ txt: "scene1 choice", next: "scene1" },
			{ txt: "scene2 choice", next: "scene2" },
			{ txt: "scene3 choice", next: "scene3" },
		],
	},
};