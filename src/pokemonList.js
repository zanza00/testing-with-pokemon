const pokemonList = [
    {
        id: 0,
        name: 'Choose your Pokémon',
    },
    {
        id: 1,
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
        name: 'Bulbasaur',
    },
    {
        id: 2,
        url: 'https://pokeapi.co/api/v2/pokemon/2/',
        name: 'Ivysaur',
    },
    {
        id: 3,
        url: 'https://pokeapi.co/api/v2/pokemon/3/',
        name: 'Venusaur',
    },
    {
        id: 4,
        url: 'https://pokeapi.co/api/v2/pokemon/4/',
        name: 'Charmander',
    },
    {
        id: 5,
        url: 'https://pokeapi.co/api/v2/pokemon/5/',
        name: 'Charmeleon',
    },
    {
        id: 6,
        url: 'https://pokeapi.co/api/v2/pokemon/6/',
        name: 'Charizard',
    },
    {
        id: 7,
        url: 'https://pokeapi.co/api/v2/pokemon/7/',
        name: 'Squirtle',
    },
    {
        id: 8,
        url: 'https://pokeapi.co/api/v2/pokemon/8/',
        name: 'Wartortle',
    },
    {
        id: 9,
        url: 'https://pokeapi.co/api/v2/pokemon/9/',
        name: 'Blastoise',
    },
    {
        id: 10,
        url: 'https://pokeapi.co/api/v2/pokemon/10/',
        name: 'Caterpie',
    },
    {
        id: 11,
        url: 'https://pokeapi.co/api/v2/pokemon/11/',
        name: 'Metapod',
    },
    {
        id: 12,
        url: 'https://pokeapi.co/api/v2/pokemon/12/',
        name: 'Butterfree',
    },
    {
        id: 13,
        url: 'https://pokeapi.co/api/v2/pokemon/13/',
        name: 'Weedle',
    },
    {
        id: 14,
        url: 'https://pokeapi.co/api/v2/pokemon/14/',
        name: 'Kakuna',
    },
    {
        id: 15,
        url: 'https://pokeapi.co/api/v2/pokemon/15/',
        name: 'Beedrill',
    },
    {
        id: 16,
        url: 'https://pokeapi.co/api/v2/pokemon/16/',
        name: 'Pidgey',
    },
    {
        id: 17,
        url: 'https://pokeapi.co/api/v2/pokemon/17/',
        name: 'Pidgeotto',
    },
    {
        id: 18,
        url: 'https://pokeapi.co/api/v2/pokemon/18/',
        name: 'Pidgeot',
    },
    {
        id: 19,
        url: 'https://pokeapi.co/api/v2/pokemon/19/',
        name: 'Rattata',
    },
    {
        id: 20,
        url: 'https://pokeapi.co/api/v2/pokemon/20/',
        name: 'Raticate',
    },
    {
        id: 21,
        url: 'https://pokeapi.co/api/v2/pokemon/21/',
        name: 'Spearow',
    },
    {
        id: 22,
        url: 'https://pokeapi.co/api/v2/pokemon/22/',
        name: 'Fearow',
    },
    {
        id: 23,
        url: 'https://pokeapi.co/api/v2/pokemon/23/',
        name: 'Ekans',
    },
    {
        id: 24,
        url: 'https://pokeapi.co/api/v2/pokemon/24/',
        name: 'Arbok',
    },
    {
        id: 25,
        url: 'https://pokeapi.co/api/v2/pokemon/25/',
        name: 'Pikachu',
    },
    {
        id: 26,
        url: 'https://pokeapi.co/api/v2/pokemon/26/',
        name: 'Raichu',
    },
    {
        id: 27,
        url: 'https://pokeapi.co/api/v2/pokemon/27/',
        name: 'Sandshrew',
    },
    {
        id: 28,
        url: 'https://pokeapi.co/api/v2/pokemon/28/',
        name: 'Sandslash',
    },
    {
        id: 29,
        url: 'https://pokeapi.co/api/v2/pokemon/29/',
        name: 'Nidoran-f',
    },
    {
        id: 30,
        url: 'https://pokeapi.co/api/v2/pokemon/30/',
        name: 'Nidorina',
    },
    {
        id: 31,
        url: 'https://pokeapi.co/api/v2/pokemon/31/',
        name: 'Nidoqueen',
    },
    {
        id: 32,
        url: 'https://pokeapi.co/api/v2/pokemon/32/',
        name: 'Nidoran-m',
    },
    {
        id: 33,
        url: 'https://pokeapi.co/api/v2/pokemon/33/',
        name: 'Nidorino',
    },
    {
        id: 34,
        url: 'https://pokeapi.co/api/v2/pokemon/34/',
        name: 'Nidoking',
    },
    {
        id: 35,
        url: 'https://pokeapi.co/api/v2/pokemon/35/',
        name: 'Clefairy',
    },
    {
        id: 36,
        url: 'https://pokeapi.co/api/v2/pokemon/36/',
        name: 'Clefable',
    },
    {
        id: 37,
        url: 'https://pokeapi.co/api/v2/pokemon/37/',
        name: 'Vulpix',
    },
    {
        id: 38,
        url: 'https://pokeapi.co/api/v2/pokemon/38/',
        name: 'Ninetales',
    },
    {
        id: 39,
        url: 'https://pokeapi.co/api/v2/pokemon/39/',
        name: 'Jigglypuff',
    },
    {
        id: 40,
        url: 'https://pokeapi.co/api/v2/pokemon/40/',
        name: 'Wigglytuff',
    },
    {
        id: 41,
        url: 'https://pokeapi.co/api/v2/pokemon/41/',
        name: 'Zubat',
    },
    {
        id: 42,
        url: 'https://pokeapi.co/api/v2/pokemon/42/',
        name: 'Golbat',
    },
    {
        id: 43,
        url: 'https://pokeapi.co/api/v2/pokemon/43/',
        name: 'Oddish',
    },
    {
        id: 44,
        url: 'https://pokeapi.co/api/v2/pokemon/44/',
        name: 'Gloom',
    },
    {
        id: 45,
        url: 'https://pokeapi.co/api/v2/pokemon/45/',
        name: 'Vileplume',
    },
    {
        id: 46,
        url: 'https://pokeapi.co/api/v2/pokemon/46/',
        name: 'Paras',
    },
    {
        id: 47,
        url: 'https://pokeapi.co/api/v2/pokemon/47/',
        name: 'Parasect',
    },
    {
        id: 48,
        url: 'https://pokeapi.co/api/v2/pokemon/48/',
        name: 'Venonat',
    },
    {
        id: 49,
        url: 'https://pokeapi.co/api/v2/pokemon/49/',
        name: 'Venomoth',
    },
    {
        id: 50,
        url: 'https://pokeapi.co/api/v2/pokemon/50/',
        name: 'Diglett',
    },
    {
        id: 51,
        url: 'https://pokeapi.co/api/v2/pokemon/51/',
        name: 'Dugtrio',
    },
    {
        id: 52,
        url: 'https://pokeapi.co/api/v2/pokemon/52/',
        name: 'Meowth',
    },
    {
        id: 53,
        url: 'https://pokeapi.co/api/v2/pokemon/53/',
        name: 'Persian',
    },
    {
        id: 54,
        url: 'https://pokeapi.co/api/v2/pokemon/54/',
        name: 'Psyduck',
    },
    {
        id: 55,
        url: 'https://pokeapi.co/api/v2/pokemon/55/',
        name: 'Golduck',
    },
    {
        id: 56,
        url: 'https://pokeapi.co/api/v2/pokemon/56/',
        name: 'Mankey',
    },
    {
        id: 57,
        url: 'https://pokeapi.co/api/v2/pokemon/57/',
        name: 'Primeape',
    },
    {
        id: 58,
        url: 'https://pokeapi.co/api/v2/pokemon/58/',
        name: 'Growlithe',
    },
    {
        id: 59,
        url: 'https://pokeapi.co/api/v2/pokemon/59/',
        name: 'Arcanine',
    },
    {
        id: 60,
        url: 'https://pokeapi.co/api/v2/pokemon/60/',
        name: 'Poliwag',
    },
    {
        id: 61,
        url: 'https://pokeapi.co/api/v2/pokemon/61/',
        name: 'Poliwhirl',
    },
    {
        id: 62,
        url: 'https://pokeapi.co/api/v2/pokemon/62/',
        name: 'Poliwrath',
    },
    {
        id: 63,
        url: 'https://pokeapi.co/api/v2/pokemon/63/',
        name: 'Abra',
    },
    {
        id: 64,
        url: 'https://pokeapi.co/api/v2/pokemon/64/',
        name: 'Kadabra',
    },
    {
        id: 65,
        url: 'https://pokeapi.co/api/v2/pokemon/65/',
        name: 'Alakazam',
    },
    {
        id: 66,
        url: 'https://pokeapi.co/api/v2/pokemon/66/',
        name: 'Machop',
    },
    {
        id: 67,
        url: 'https://pokeapi.co/api/v2/pokemon/67/',
        name: 'Machoke',
    },
    {
        id: 68,
        url: 'https://pokeapi.co/api/v2/pokemon/68/',
        name: 'Machamp',
    },
    {
        id: 69,
        url: 'https://pokeapi.co/api/v2/pokemon/69/',
        name: 'Bellsprout',
    },
    {
        id: 70,
        url: 'https://pokeapi.co/api/v2/pokemon/70/',
        name: 'Weepinbell',
    },
    {
        id: 71,
        url: 'https://pokeapi.co/api/v2/pokemon/71/',
        name: 'Victreebel',
    },
    {
        id: 72,
        url: 'https://pokeapi.co/api/v2/pokemon/72/',
        name: 'Tentacool',
    },
    {
        id: 73,
        url: 'https://pokeapi.co/api/v2/pokemon/73/',
        name: 'Tentacruel',
    },
    {
        id: 74,
        url: 'https://pokeapi.co/api/v2/pokemon/74/',
        name: 'Geodude',
    },
    {
        id: 75,
        url: 'https://pokeapi.co/api/v2/pokemon/75/',
        name: 'Graveler',
    },
    {
        id: 76,
        url: 'https://pokeapi.co/api/v2/pokemon/76/',
        name: 'Golem',
    },
    {
        id: 77,
        url: 'https://pokeapi.co/api/v2/pokemon/77/',
        name: 'Ponyta',
    },
    {
        id: 78,
        url: 'https://pokeapi.co/api/v2/pokemon/78/',
        name: 'Rapidash',
    },
    {
        id: 79,
        url: 'https://pokeapi.co/api/v2/pokemon/79/',
        name: 'Slowpoke',
    },
    {
        id: 80,
        url: 'https://pokeapi.co/api/v2/pokemon/80/',
        name: 'Slowbro',
    },
    {
        id: 81,
        url: 'https://pokeapi.co/api/v2/pokemon/81/',
        name: 'Magnemite',
    },
    {
        id: 82,
        url: 'https://pokeapi.co/api/v2/pokemon/82/',
        name: 'Magneton',
    },
    {
        id: 83,
        url: 'https://pokeapi.co/api/v2/pokemon/83/',
        name: 'Farfetchd',
    },
    {
        id: 84,
        url: 'https://pokeapi.co/api/v2/pokemon/84/',
        name: 'Doduo',
    },
    {
        id: 85,
        url: 'https://pokeapi.co/api/v2/pokemon/85/',
        name: 'Dodrio',
    },
    {
        id: 86,
        url: 'https://pokeapi.co/api/v2/pokemon/86/',
        name: 'Seel',
    },
    {
        id: 87,
        url: 'https://pokeapi.co/api/v2/pokemon/87/',
        name: 'Dewgong',
    },
    {
        id: 88,
        url: 'https://pokeapi.co/api/v2/pokemon/88/',
        name: 'Grimer',
    },
    {
        id: 89,
        url: 'https://pokeapi.co/api/v2/pokemon/89/',
        name: 'Muk',
    },
    {
        id: 90,
        url: 'https://pokeapi.co/api/v2/pokemon/90/',
        name: 'Shellder',
    },
    {
        id: 91,
        url: 'https://pokeapi.co/api/v2/pokemon/91/',
        name: 'Cloyster',
    },
    {
        id: 92,
        url: 'https://pokeapi.co/api/v2/pokemon/92/',
        name: 'Gastly',
    },
    {
        id: 93,
        url: 'https://pokeapi.co/api/v2/pokemon/93/',
        name: 'Haunter',
    },
    {
        id: 94,
        url: 'https://pokeapi.co/api/v2/pokemon/94/',
        name: 'Gengar',
    },
    {
        id: 95,
        url: 'https://pokeapi.co/api/v2/pokemon/95/',
        name: 'Onix',
    },
    {
        id: 96,
        url: 'https://pokeapi.co/api/v2/pokemon/96/',
        name: 'Drowzee',
    },
    {
        id: 97,
        url: 'https://pokeapi.co/api/v2/pokemon/97/',
        name: 'Hypno',
    },
    {
        id: 98,
        url: 'https://pokeapi.co/api/v2/pokemon/98/',
        name: 'Krabby',
    },
    {
        id: 99,
        url: 'https://pokeapi.co/api/v2/pokemon/99/',
        name: 'Kingler',
    },
    {
        id: 100,
        url: 'https://pokeapi.co/api/v2/pokemon/100/',
        name: 'Voltorb',
    },
    {
        id: 101,
        url: 'https://pokeapi.co/api/v2/pokemon/101/',
        name: 'Electrode',
    },
    {
        id: 102,
        url: 'https://pokeapi.co/api/v2/pokemon/102/',
        name: 'Exeggcute',
    },
    {
        id: 103,
        url: 'https://pokeapi.co/api/v2/pokemon/103/',
        name: 'Exeggutor',
    },
    {
        id: 104,
        url: 'https://pokeapi.co/api/v2/pokemon/104/',
        name: 'Cubone',
    },
    {
        id: 105,
        url: 'https://pokeapi.co/api/v2/pokemon/105/',
        name: 'Marowak',
    },
    {
        id: 106,
        url: 'https://pokeapi.co/api/v2/pokemon/106/',
        name: 'Hitmonlee',
    },
    {
        id: 107,
        url: 'https://pokeapi.co/api/v2/pokemon/107/',
        name: 'Hitmonchan',
    },
    {
        id: 108,
        url: 'https://pokeapi.co/api/v2/pokemon/108/',
        name: 'Lickitung',
    },
    {
        id: 109,
        url: 'https://pokeapi.co/api/v2/pokemon/109/',
        name: 'Koffing',
    },
    {
        id: 110,
        url: 'https://pokeapi.co/api/v2/pokemon/110/',
        name: 'Weezing',
    },
    {
        id: 111,
        url: 'https://pokeapi.co/api/v2/pokemon/111/',
        name: 'Rhyhorn',
    },
    {
        id: 112,
        url: 'https://pokeapi.co/api/v2/pokemon/112/',
        name: 'Rhydon',
    },
    {
        id: 113,
        url: 'https://pokeapi.co/api/v2/pokemon/113/',
        name: 'Chansey',
    },
    {
        id: 114,
        url: 'https://pokeapi.co/api/v2/pokemon/114/',
        name: 'Tangela',
    },
    {
        id: 115,
        url: 'https://pokeapi.co/api/v2/pokemon/115/',
        name: 'Kangaskhan',
    },
    {
        id: 116,
        url: 'https://pokeapi.co/api/v2/pokemon/116/',
        name: 'Horsea',
    },
    {
        id: 117,
        url: 'https://pokeapi.co/api/v2/pokemon/117/',
        name: 'Seadra',
    },
    {
        id: 118,
        url: 'https://pokeapi.co/api/v2/pokemon/118/',
        name: 'Goldeen',
    },
    {
        id: 119,
        url: 'https://pokeapi.co/api/v2/pokemon/119/',
        name: 'Seaking',
    },
    {
        id: 120,
        url: 'https://pokeapi.co/api/v2/pokemon/120/',
        name: 'Staryu',
    },
    {
        id: 121,
        url: 'https://pokeapi.co/api/v2/pokemon/121/',
        name: 'Starmie',
    },
    {
        id: 122,
        url: 'https://pokeapi.co/api/v2/pokemon/122/',
        name: 'Mr-mime',
    },
    {
        id: 123,
        url: 'https://pokeapi.co/api/v2/pokemon/123/',
        name: 'Scyther',
    },
    {
        id: 124,
        url: 'https://pokeapi.co/api/v2/pokemon/124/',
        name: 'Jynx',
    },
    {
        id: 125,
        url: 'https://pokeapi.co/api/v2/pokemon/125/',
        name: 'Electabuzz',
    },
    {
        id: 126,
        url: 'https://pokeapi.co/api/v2/pokemon/126/',
        name: 'Magmar',
    },
    {
        id: 127,
        url: 'https://pokeapi.co/api/v2/pokemon/127/',
        name: 'Pinsir',
    },
    {
        id: 128,
        url: 'https://pokeapi.co/api/v2/pokemon/128/',
        name: 'Tauros',
    },
    {
        id: 129,
        url: 'https://pokeapi.co/api/v2/pokemon/129/',
        name: 'Magikarp',
    },
    {
        id: 130,
        url: 'https://pokeapi.co/api/v2/pokemon/130/',
        name: 'Gyarados',
    },
    {
        id: 131,
        url: 'https://pokeapi.co/api/v2/pokemon/131/',
        name: 'Lapras',
    },
    {
        id: 132,
        url: 'https://pokeapi.co/api/v2/pokemon/132/',
        name: 'Ditto',
    },
    {
        id: 133,
        url: 'https://pokeapi.co/api/v2/pokemon/133/',
        name: 'Eevee',
    },
    {
        id: 134,
        url: 'https://pokeapi.co/api/v2/pokemon/134/',
        name: 'Vaporeon',
    },
    {
        id: 135,
        url: 'https://pokeapi.co/api/v2/pokemon/135/',
        name: 'Jolteon',
    },
    {
        id: 136,
        url: 'https://pokeapi.co/api/v2/pokemon/136/',
        name: 'Flareon',
    },
    {
        id: 137,
        url: 'https://pokeapi.co/api/v2/pokemon/137/',
        name: 'Porygon',
    },
    {
        id: 138,
        url: 'https://pokeapi.co/api/v2/pokemon/138/',
        name: 'Omanyte',
    },
    {
        id: 139,
        url: 'https://pokeapi.co/api/v2/pokemon/139/',
        name: 'Omastar',
    },
    {
        id: 140,
        url: 'https://pokeapi.co/api/v2/pokemon/140/',
        name: 'Kabuto',
    },
    {
        id: 141,
        url: 'https://pokeapi.co/api/v2/pokemon/141/',
        name: 'Kabutops',
    },
    {
        id: 142,
        url: 'https://pokeapi.co/api/v2/pokemon/142/',
        name: 'Aerodactyl',
    },
    {
        id: 143,
        url: 'https://pokeapi.co/api/v2/pokemon/143/',
        name: 'Snorlax',
    },
    {
        id: 144,
        url: 'https://pokeapi.co/api/v2/pokemon/144/',
        name: 'Articuno',
    },
    {
        id: 145,
        url: 'https://pokeapi.co/api/v2/pokemon/145/',
        name: 'Zapdos',
    },
    {
        id: 146,
        url: 'https://pokeapi.co/api/v2/pokemon/146/',
        name: 'Moltres',
    },
    {
        id: 147,
        url: 'https://pokeapi.co/api/v2/pokemon/147/',
        name: 'Dratini',
    },
    {
        id: 148,
        url: 'https://pokeapi.co/api/v2/pokemon/148/',
        name: 'Dragonair',
    },
    {
        id: 149,
        url: 'https://pokeapi.co/api/v2/pokemon/149/',
        name: 'Dragonite',
    },
    {
        id: 150,
        url: 'https://pokeapi.co/api/v2/pokemon/150/',
        name: 'Mewtwo',
    },
    {
        id: 151,
        url: 'https://pokeapi.co/api/v2/pokemon/151/',
        name: 'Mew',
    },
];

export default pokemonList;
