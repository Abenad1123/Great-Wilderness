// <<script>>
	setup.status = {
		101: {
			name: "Bleed",
			tag: ["Temporary", "DoT"],
			max_level: 5,
			effect: function(target, lvl){
				let mod = Math.min(0, ((target.hp * 0.015) * lvl - (target.resistance.bleed * target.hp * 0.01)));

				target.cur.hp -= mod;
				return mod;
			}
		},
		102: {
			name: "Burn",
			tag: ["Temporary", "DoT"],
			max_level: 5,
			effect: function(target, lvl){
				let mod = Math.min(0, ((target.hp * 0.015) * lvl - (target.resistance.fire * target.hp * 0.01)));

				target.cur.hp -= mod;
				return mod;
			}
		},
		103: {
			name: "Bruised",
			tag: ["Temporary", "Stat Modifier"],
			max_level: 1,
			effect: function(target){}
		},
		104: {
			name: "Stun",
			tag: ["Temporary", "Control Effect"],
			max_level: 1,
			effect: function(){}
		},
		105: {
			name: "Paralysis",
			tag: ["Temporary", "Control Effect"],
			max_level: 1,
			effect: function(){}
		},
		106: {
			name: "Poison",
			tag: ["Temporary", "DoT"],
			max_level: 5,
			effect: function(target, lvl){
				
				let mod = Math.min(0, ((target.hp * 0.015) * lvl - (target.resistance.poison * 0.01)));

				target.cur.hp -= mod;
				return mod;
			}
		},
	};
// <</script>>