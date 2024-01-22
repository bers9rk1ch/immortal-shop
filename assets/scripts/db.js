const tovars = [
	{
		id: 1,
		title: 'Brands of the Reaper',
		img: 'Brands-of-the-Reaper.png',
		description: 'Содержит все предметы из набора Brands of the Reaper',
		price: 400,
		hero: 'Anti-Mage'
	},
	{
		id: 2,
		title: 'Dezun Viper',
		img: 'Dezun-Viper.png',
		description: 'Содержит все предметы из набора Dezun Viper',
		price: 500,
		hero: 'Dazzle'
	},
	{
		id: 3,
		title: 'Snailfire',
		img: 'Snailfire.png',
		description: 'Содержит все предметы из набора Snailfire',
		price: 700,
		hero: 'SnapFire'
	},
	{
		id: 4,
		title: 'Tomokan Footsoldier',
		img: 'Tomokan-Footsoldier.png',
		description: 'Содержит все предметы из набора Tomokan Footsoldier',
		price: 200,
		hero: 'Hoodwink'
	},
	{
		id: 5,
		title: 'Sea Spirit',
		img: 'Sea-Spirit.png',
		description: 'Содержит все предметы из набора Sea Spirit',
		price: 350,
		hero: 'Kunkka'
	},
	{
		id: 6,
		title: 'Beast of Thunder',
		img: 'Beast-of-Thunder.png',
		description: 'Содержит все предметы из набора Beast of Thunder',
		price: 200,
		hero: 'Storm Spirit'
	},
	{
		id: 7,
		title: 'Primeval Abomination',
		img: 'Primeval-Abomination.png',
		description: 'Содержит все предметы из набора Primeval Abomination',
		price: 700,
		hero: 'Primal Beast'
	},
	{
		id: 8,
		title: 'Tyrant of the Veil',
		img: 'Tyrant-of-the-Veil.png',
		description: 'Содержит все предметы из набора Tyrant of the Veil',
		price: 800,
		hero: 'Wraith King'
	},
	{
		id: 9,
		title: 'Darkwood Eulogy',
		img: 'Darkwood-Eulogy.png',
		description: 'Содержит все предметы из набора Darkwood Eulogy',
		price: 300,
		hero: 'Death Prophet'
	},
	{
		id: 10,
		title: 'Astral Herald',
		img: 'Astral-Herald.png',
		description: 'Содержит все предметы из набора Astral Herald',
		price: 450,
		hero: 'Dawnbreaker'
	},
	{
		id: 11,
		title: 'Sacred Chamber Guardian',
		img: 'Sacred-Chamber-Guardian.png',
		description: 'Содержит все предметы из набора Sacred Chamber Guardian',
		price: 450,
		hero: 'Huskar'
	},
	{
		id: 12,
		title: 'Perils of the Red Bank',
		img: 'Perils-of-the-Red-Banks.png',
		description: 'Содержит все предметы из набора Perils of the Red Banks',
		price: 500,
		hero: 'Chen'
	},
	{
		id: 13,
		title: 'Molten Bore',
		img: 'Molten-Bore.png',
		description: 'Содержит все предметы из набора Molten Bore',
		price: 400,
		hero: 'Mars'
	},
	{
		id: 14,
		title: 'Seclusions of the Void',
		img: 'Seclusions-of-the-Void.png',
		description: 'Содержит все предметы из набора Seclusions of the Void',
		price: 500,
		hero: 'Templar Asassin'
	},
	{
		id: 15,
		title: 'Forgotten Station',
		img: 'Forgotten-Station.png',
		description: 'Содержит все предметы из набора Forgotten Station',
		price: 550,
		hero: 'Terrorblade'
	},
	{
		id: 16,
		title: 'Dirge Amplifier',
		img: 'Dirge-Amplifier.png',
		description: 'Содержит все предметы из набора Dirge Amplifier',
		price: 300,
		hero: 'Undying'
	},
	{
		id: 17,
		title: 'Trophies of the Hallowed Hunt',
		img: 'Trophies-of-the-Hallowed-Hunt.png',
		description: 'Содержит все предметы из набора Trophies of the Hallowed Hunt',
		price: 200,
		hero: 'Ursa'
	},
	{
		id: 18,
		title: 'Brightfist',
		img: 'Brightfist.png',
		description: 'Содержит все предметы из набора Brightfist',
		price: 400,
		hero: 'Marci'
	},
	{
		id: 19,
		title: 'Withering Pain',
		img: 'Withering-Pain.png',
		description: 'Содержит все предметы из набора Withering Pain',
		price: 300,
		hero: 'Clinkz'
	},
	{
		id: 20,
		title: 'War Rig Eradicators',
		img: 'War-Rig-Eradicators.png',
		description: 'Содержит все предметы из набора War Rig Eradicators',
		price: 350,
		hero: 'Techis'
	},
	{
		id: 21,
		title: 'Grand Suppressor',
		img: 'Grand-Suppressor.png',
		description: 'Содержит все предметы из набора Grand Suppressor',
		price: 320,
		hero: 'Silencer'
	},
	{
		id: 22,
		title: 'Bird of Prey',
		img: 'Bird-of-Prey.png',
		description: 'Содержит все предметы из набора Bird of Prey',
		price: 600,
		hero: 'Legion Commander'
	},
	{
		id: 23,
		title: 'Cursed Cryptbreaker',
		img: 'Cursed-Cryptbreaker.png',
		description: 'Содержит все предметы из набора Cursed Cryptbreaker',
		price: 500,
		hero: 'Pudge'
	},
	{
		id: 24,
		title: 'Grudges of the Gallows Tree',
		img: 'Grudges-of-the-Gallows-Tree.png',
		description: 'Содержит все предметы из набора Grudges of the Gallows Tree',
		price: 510,
		hero: 'Treant Protector'
	},
	{
		id: 25,
		title: 'Blue Horizons',
		img: 'Blue-Horizons.png',
		description: 'Содержит все предметы из набора Blue Horizons',
		price: 1000,
		hero: 'Marci'
	},
	{
		id: 26,
		title: 'Fury of the Righteous Storm',
		img: 'Fury-of-the-Righteous-Storm.png',
		description: 'Содержит все предметы из набора Fury of the Righteous Storm',
		price: 250,
		hero: 'Disruptor'
	},
	{
		id: 27,
		title: 'Blacksail Cannoneer',
		img: 'Blacksail-Cannoneer.png',
		description: 'Содержит все предметы из набора Blacksail Cannoneer',
		price: 350,
		hero: 'Sniper'
	},
	{
		id: 28,
		title: 'Talons of the Endless Storm',
		img: 'Talons-of-the-Endless-Storm.png',
		description: 'Содержит все предметы из набора Talons of the Endless Storm',
		price: 600,
		hero: 'Chaos Knight'
	},
	{
		id: 29,
		title: 'The King of Thieves',
		img: 'The-King-of-Thieves.png',
		description: 'Содержит все предметы из набора The King of Thieves',
		price: 550,
		hero: 'Keeper of the Light'
	},
	{
		id: 30,
		title: 'Secrets of the Celestial',
		img: 'Secrets-of-the-Celestial.png',
		description: 'Содержит все предметы из набора Secrets of the Celestial',
		price: 500,
		hero: 'Skywrath Mage'
	},
	{
		id: 31,
		title: 'Apocalypse Unbound',
		img: 'Apocalypse-Unbound.png',
		description: 'Содержит все предметы из набора Apocalypse Unbound',
		price: 500,
		hero: 'Ancient Apparition'
	},
	{
		id: 32,
		title: 'Blaze of Oblivion Back',
		img: 'Blaze-of-Oblivion-Back.png',
		description: 'Содержит все предметы из набора Blaze of Oblivion Back',
		price: 450,
		hero: 'Phoenix'
	},
	{
		id: 33,
		title: 'Silverwurm Sacrifice',
		img: 'Silverwurm-Sacrifice.png',
		description: 'Содержит все предметы из набора Silverwurm Sacrifice',
		price: 600,
		hero: 'Dragon Knight'
	},
	{
		id: 34,
		title: 'Scales of the Shadow Walker',
		img: 'Scales-of-the-Shadow-Walker.png',
		description: 'Содержит все предметы из набора Scales of the Shadow Walker',
		price: 450,
		hero: 'Phantom Lancer'
	},
	{
		id: 35,
		title: 'Days of the Demon',
		img: 'Days-of-the-Demon.png',
		description: 'Содержит все предметы из набора Days of the Demon',
		price: 550,
		hero: 'Axe'
	},
	{
		id: 36,
		title: 'Sublime Equilibrium',
		img: 'Sublime-Equilibrium.png',
		description: 'Содержит все предметы из набора Sublime Equilibrium',
		price: 300,
		hero: 'Void Spirit'
	},
	{
		id: 37,
		title: 'Taur Rider',
		img: 'Taur-Rider.png',
		description: 'Содержит все предметы из набора Taur Rider',
		price: 300,
		hero: 'Alchemist'
	},
	{
		id: 38,
		title: 'Ancestral Heritage',
		img: 'Ancestral-Heritage.png',
		description: 'Содержит все предметы из набора Ancestral Heritage',
		price: 450,
		hero: 'Jakiro'
	},
	{
		id: 39,
		title: 'Triumph of the Imperatrix',
		img: 'Triumph-of-the-Imperatrix.png',
		description: 'Содержит все предметы из набора Triumph of the Imperatrix',
		price: 550,
		hero: 'Legion Commander'
	},
	{
		id: 40,
		title: 'Crescent Huntress',
		img: 'Crescent-Huntress.png',
		description: 'Содержит все предметы из набора Crescent Huntress',
		price: 400,
		hero: 'Spectre'
	},
	{
		id: 41,
		title: 'Flashpoint Proselyte',
		img: 'Flashpoint-Proselyte.png',
		description: 'Содержит все предметы из набора Flashpoint Proselyte',
		price: 500,
		hero: 'Huskar'
	},

	//82 103
	{
		id: 42,
		title: 'Feast of Abscession',
		img: 'Feast-of-Abscession.png',
		description: 'Содержит все предметы из аркана набора Feast of Abscession',
		price: 1800,
		hero: 'Pudge',
		rarity: 'Arcana'
	},
	{
		id: 43,
		title: 'Manifold Paradox',
		img: 'Manifold-Paradox.png',
		description: 'Содержит все предметы из набора Manifold Paradox',
		price: 1800,
		hero: 'Phantom Assassin',
		rarity: 'Arcana'
	},
	{
		id: 44,
		title: 'Demon Eater',
		img: 'Demon-Eater.png',
		description: 'Содержит все предметы из набора Demon Eater',
		price: 1800,
		hero: 'Shadow Fiend',
		rarity: 'Arcana'
	},
	{
		id: 45,
		title: 'Frost Avalanche',
		img: 'Frost-Avalanche.png',
		description: 'Содержит все предметы из набора Frost Avalanche',
		price: 1800,
		hero: 'Crystal Maiden',
		rarity: 'Arcana'
	},
	{
		id: 46,
		title: 'Fractal Horns of Inner Abysm',
		img: 'Fractal-Horns-of-Inner-Abysm.png',
		description: 'Содержит все предметы из набора Fractal Horns of Inner Abysm',
		price: 1800,
		hero: 'Terrorblade',
		rarity: 'Arcana'
	},
	{
		id: 47,
		title: "Great Sage's Reckoning",
		img: 'Great-Sage-Reckoning.png',
		description: "Содержит все предметы из набора Great Sage's Reckoning",
		price: 1800,
		hero: 'Monkey King',
		rarity: 'Arcana'
	},
	{
		id: 48,
		title: 'Bladeform Legacy',
		img: 'Bladeform-Legacy.png',
		description: 'Содержит все предметы из набора Bladeform Legacy',
		price: 1800,
		hero: 'Juggernaut',
		rarity: 'Arcana'
	},
	{
		id: 49,
		title: "Flockheart's Gamble",
		img: 'Flockheart-Gamble.png',
		description: "Содержит все предметы из набора Flockheart's Gamble",
		price: 1800,
		hero: 'Ogre Magi',
		rarity: 'Arcana'
	},
	{
		id: 50,
		title: 'Tempest Helm of the Thundergod',
		img: 'Tempest-Helm-of-the-Thundergod.png',
		description: 'Содержит все предметы из набора Tempest Helm of the Thundergod',
		price: 1800,
		hero: 'Zeus',
		rarity: 'Arcana'
	},
	{
		id: 51,
		title: 'Fiery Soul of the Slayer',
		img: 'Fiery-Soul-of-the-Slayer.png',
		description: 'Содержит все предметы из набора Fiery Soul of the Slayer',
		price: 1800,
		hero: 'Lina',
		rarity: 'Arcana'
	},
	{
		id: 52,
		title: 'The Magus Cypher',
		img: 'The-Magus-Cypher.png',
		description: 'Содержит все предметы из набора The Magus Cypher',
		price: 1800,
		hero: 'Rubick',
		rarity: 'Arcana'
	},
	{
		id: 53,
		title: 'Swine of the Sunken Galley',
		img: 'Swine-of-the-Sunken-Galley.png',
		description: 'Содержит все предметы из набора Swine of the Sunken Galley',
		price: 1800,
		hero: 'Techis',
		rarity: 'Arcana'
	},
	{
		id: 54,
		title: 'Mindless Slaughter',
		img: 'Mindless-Slaughter.png',
		description: 'Содержит все предметы из набора Mindless Slaughter',
		price: 500,
		hero: 'Pudge'
	},
	{
		id: 55,
		title: 'Verdant Predator',
		img: 'Verdant-Predator.png',
		description: 'Содержит все предметы из набора Verdant Predator',
		price: 500,
		hero: 'Venomancer'
	},
	{
		id: 56,
		title: 'Silent Slayer',
		img: 'Silent-Slayer.png',
		description: 'Содержит все предметы из набора Silent Slayer',
		price: 500,
		hero: 'Silencer'
	},
	{
		id: 57,
		title: 'Ancient Inheritance',
		img: 'Ancient-Inheritance.png',
		description: 'Содержит все предметы из набора Ancient Inheritance',
		price: 500,
		hero: 'Tiny'
	},
	{
		id: 58,
		title: 'Directive of the Sunbound',
		img: 'Directive-of-the-Sunbound.png',
		description: 'Содержит все предметы из набора Directive of the Sunbound',
		price: 500,
		hero: 'Clockwerk'
	},
	{
		id: 59,
		title: 'Scorched Amber',
		img: 'Scorched-Amber.png',
		description: 'Содержит все предметы из набора Scorched Amber',
		price: 500,
		hero: 'Dragon Knight'
	},
	{
		id: 60,
		title: 'Automaton Antiquity',
		img: 'Automaton-Antiquity.png',
		description: 'Содержит все предметы из набора Automaton Antiquity',
		price: 500,
		hero: 'Broodmother'
	},
	{
		id: 61,
		title: 'Glory of the Elderflame',
		img: 'Glory-of-the-Elderflame.png',
		description: 'Содержит все предметы из набора Glory of the Elderflame',
		price: 500,
		hero: 'Lina'
	},
	{
		id: 62,
		title: 'Origin of the Dark Oath',
		img: 'Origin-of-the-Dark-Oath.png',
		description: 'Содержит все предметы из набора Origin of the Dark Oath',
		price: 500,
		hero: 'Night Stalker'
	},
	{
		id: 63,
		title: 'Grim Destiny',
		img: 'Grim-Destiny.png',
		description: 'Содержит все предметы из набора Grim Destiny',
		price: 500,
		hero: 'Wraith King'
	},
	{
		id: 64,
		title: 'Endless Night',
		img: 'Endless-Night.png',
		description: 'Содержит все предметы из набора Endless Night',
		price: 500,
		hero: 'Abaddon'
	},
	{
		id: 65,
		title: 'Tales of the Windward Rogue',
		img: 'Tales-of-the-Windward-Rogue.png',
		description: 'Содержит все предметы из набора Tales of the Windward Rogue',
		price: 500,
		hero: 'Pangolier'
	},
	{
		id: 66,
		title: 'Herald of the Ember Eye',
		img: 'Herald-of-the-Ember-Eye.png',
		description: 'Содержит все предметы из набора Herald of the Ember Eye',
		price: 500,
		hero: 'Grimstroke'
	}
]

const heroes = [
	'Ogre Magi', 'Alchemist', 'Axe', 'Bristleback', 'Centaur Warrunner', 'Chaos Knight', 'Dawnbreaker', 'Doom', 'Dragon Knight', 'Earth Spirit', 'Earthshaker', 'Elder Titan', 'Huskar', 'Kunkka', 'Legion Commander', 'Lifestealer', 'Mars', 'Night Stalker', 'Omniknight', 'Primal Beast', 'Pudge', 'Slardar', 'Spirit Breaker', 'Sven', 'Tidehunter', 'Tiny', 'Treant Protector', 'Tusk', 'Underlord ', 'Undying', 'Wraith King', 'Anti-Mage', 'Arc Warden', 'Bloodseeker', 'Bounty Hunter', 'Clinkz', 'Drow Ranger', 'Ember Spirit', 'Faceless Void', 'Gyrocopter', 'Hoodwink', 'Juggernaut', 'Luna', 'Medusa ', 'Meepo', 'Monkey King', 'Morphling', 'Naga Siren', 'Phantom Assassin', 'Phantom Lancer', 'Razor', 'Riki', 'Shadow Fiend', 'Slark', 'Sniper', 'Spectre', 'Templar Assassin', 'Terrorblade', 'Troll Warlord', 'Ursa', 'Viper', 'Weaver', 'Ancient Apparition', 'Crystal Maiden', 'Death Prophet', 'Disruptor', 'Enchantress', 'Grimstroke', 'Invoker', 'Jakiro ', 'Keeper of the Light', 'Leshrac', 'Lich', 'Lina', 'Lion', 'Muerta', 'Nature’s Prophet', 'Necrophos', 'Oracle', 'Outworld Devourer', 'Puck', 'Pugna', 'Queen of Pain', 'Rubick', 'Shadow Demon', 'Shadow Shaman', 'Silencer', 'Skywrath Mage', 'Storm Spirit', 'Tinker', 'Warlock', 'Witch Doctor', 'Zeus', 'Abaddon', 'Bane', 'Batrider', 'Chen', 'Beastmaster', 'Brewmaster', 'Broodmother', 'Clockwerk', 'Dark Seer', 'Dark Willow', 'Dazzle', 'Enigma', 'Io', 'Lone Druid', 'Lycan', 'Magnus', 'Marci', 'Mirana', 'Nyx Assassin', 'Pangolier', 'Phoenix', 'Sand King', 'Snapfire', 'Techies', 'Timbersaw', 'Vengeful Spirit', 'Venomancer', 'Visage', 'Void Spirit', 'Windranger', 'Winter Wyvern'
];

export {tovars, heroes};