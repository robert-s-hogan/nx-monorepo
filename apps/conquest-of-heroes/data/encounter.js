const disadvantageAttackIcons = ['TbBow', 'GiIceSpellCast', 'GiSlingshot'];

export const encounter = {
  difficulty: [0, 1, 2, 3],
  monsters: {
    challengeRating: {
      easy: [
        'goblin',
        'skeleton',
        'zombie',
        'kobold',
        'giant rat',
        'giant spider',
        'swarm of rats',
        'swarm of bats',
        'zombie dog',
        'skeleton warrior',
        'skeleton archer',
        'skeleton mage',
        'giant centipede',
        'giant ant',
        'giant crab',
        'giant snake',
        'giant scorpion',
        'giant wasp',
        'giant bee',
        'giant caterpillar',
        'giant earthworm',
        'giant snail',
        'giant slug',
        'giant leech',
        'giant bat',
        'giant mosquito',
        'giant cockroach',
        'giant lizard',
        'giant frog',
        'giant turtle',
        'giant beetle',
        'giant grasshopper',
        'giant praying mantis',
        'giant spider (other species)',
        'animated armor',
        'animated weapon',
        'animated shield',
        'mimic',
        'rust monster',
        'gelatinous cube',
      ],
      medium: [
        'ranger',
        'bandit',
        'thief',
        'hobgoblin',
        'bugbear',
        'cultist',
        'wolf',
        'giant boar',
        'gnoll',
        'harpy',
        'satyr',
        'ogre mage',
        'troll hunter',
        'hill giant',
        'fire elemental',
        'water elemental',
        'air elemental',
        'earth elemental',
        'shambling mound',
        'banshee',
        'doppelganger',
        'wraith',
        'ghost',
        'specter',
        'mummy',
        'werewolf',
        'displacer beast',
        'griffon',
        'giant spider (other species)',
        'giant scorpion (other species)',
        'giant mantis (other species)',
        'giant beetle (other species)',
        'giant wasp (other species)',
        'giant rat king',
        'giant rat queen',
        'giant snake (other species)',
        'giant lizard (other species)',
        'giant spider (other species)',
        'giant wolf spider',
        'giant spider swarm',
      ],
      hard: [
        'orc',
        'troll',
        'ogre',
        'manticore',
        'minotaur',
        'wight',
        'wyvern',
        'young dragon',
        'chimera',
        'gorgon',
        'ettin',
        'roc',
        'cyclops',
        'hydra',
        'giant ape',
        'giant scorpion (other species)',
        'giant mantis (other species)',
        'giant centipede (other species)',
        'giant fly',
        'giant moth',
        'giant wasp (other species)',
        'giant spider (other species)',
        'giant worm',
        'giant leech (other species)',
        'giant bat swarm',
        'giant rat swarm',
        'giant snake swarm',
        'giant spider queen',
        'giant crab swarm',
      ],
      deadly: ['mage', 'warrior', 'cleric'],
    },
  },
  intro: {
    arrival: [
      'come to',
      'land near',
      'arrive',
      'enter',
      'appear',
      'happen upon',
      'stumble upon',
      'discover',
      'approach',
      'reach',
      'emerge into',
      'encounter',
      'descend upon',
      'materialize',
      'converge upon',
      'descend from the sky',
      'suddenly arrive at',
      'find',
      'catch sight of',
      'stumble across',
      'burst into',
      'crash into',
      'burst onto the scene',
      'burst through the door',
      'march into',
      'slip into',
      'sneak into',
      'wander into',
      'bust into',
      'stray into',
      'come across',
      'approach from afar',
      'swoop down upon',
      'swarm around',
      'emerge from the shadows',
      'materialize out of thin air',
      'slowly come into view',
      'quietly sneak up on',
      'storm into',
      'rush in',
      'leap into',
      'bound into',
      'jump into',
      'swim ashore at',
      'wash up on the beach of',
      'appear out of nowhere at',
    ],
    atmosphere: [
      'is clear',
      'is dark',
      'is foggy',
      'is rainy',
      'is snowy',
      'is misty',
      'is cloudy',
      'is stormy',
      'is sunny',
      'is hazy',
      'is humid',
      'is dry',
      'is dusty',
      'is ominous',
      'is eerie',
      'is oppressive',
      'is oppressive and hot',
      'is oppressive and humid',
      'is heavy with moisture',
      'is thick with fog',
      'is filled with mist',
      'is filled with the scent of flowers',
      'is filled with the scent of saltwater',
      'is filled with the scent of pine',
      'is filled with the scent of woodsmoke',
      'is filled with the scent of spices',
      'is filled with the sound of birdsong',
      'is filled with the sound of insects',
      'is filled with the sound of the wind',
      'is filled with the sound of distant thunder',
      'is filled with the sound of crashing waves',
      'is filled with the sound of rustling leaves',
      'is filled with the sound of flowing water',
      'is filled with the sound of crackling flames',
      'is filled with the sound of howling wind',
      'is filled with the sound of creaking wood',
      'is filled with the sound of crunching snow',
      'is filled with the sound of falling rain',
      'is filled with the sound of distant shouting',
      'is filled with the sound of ringing bells',
      'is filled with the sound of tolling horns',
    ],
    location: [
      'swamps all around',
      'heavy vegetation',
      'dimly lit room',
      'cavernous space',
      'narrow corridor',
      'dusty hallway',
      'damp chamber',
      'musty cellar',
      'stifling crypt',
      'darkened cavern',
      'cobweb-filled hallway',
      'ancient ruins',
      'abandoned castle',
      'forgotten catacombs',
      'enchanted forest',
      'haunted mansion',
      'gloomy bog',
      'misty moor',
      'ominous peak',
      'sun-scorched desert',
      'icy tundra',
      'treacherous mountains',
      'rocky coastline',
      'overgrown jungle',
      'charred wasteland',
      'enchanted glade',
      'subterranean lair',
      'dilapidated temple',
      'hidden underground cave',
      'eerie graveyard',
      'barren wasteland',
      'isolated island',
      'hidden waterfall',
    ],
    lighting: [
      'flickering torches',
      'dazzling chandeliers',
      'creeping shadows',
      'blinding sunlight',
      'dim candlelight',
      'dusky moonlight',
      'glowing runes',
      'flashing lightning',
      'flickering fireflies',
      'blazing bonfires',
      'radiant glow',
      'dancing shadows',
      'whispering light',
      'pulsating aura',
      'gleaming stars',
      'misty haze',
      'swirling fog',
      'radiant sunbeams',
      'glowing mushrooms',
      'crackling fire',
      'glittering jewels',
      'hazy smoke',
      'strobe lights',
      'dappled shade',
      'sparking wires',
      'vibrant neon',
      'glinting ice',
      'softly glowing crystals',
      'luminescent fish',
      'shimmering magic',
      'dripping slime',
      'glowing orbs',
    ],
    events: [
      'creaking floorboards',
      'dripping water',
      'muffled chanting',
      'echoing footsteps',
      'howling wind',
      'screeching bats',
      'buzzing insects',
      'crackling fire',
      'rumbling thunder',
      'whistling arrow',
      'rustling leaves',
      'splashing water',
      'hissing serpent',
      'growling beast',
      'slithering snake',
      'flapping wings',
      'rattling chains',
      'swishing tails',
      'distant music',
      'strange whispers',
      'clattering armor',
      'shimmering light',
      'sizzling magic',
      'suffocating fog',
      'enchanting melody',
      'thundering hooves',
      'shrieking gulls',
      'scurrying rats',
      'groaning floorboards',
      'cracking ice',
      'whipping wind',
      'buzzing saws',
      'thudding footsteps',
      'guttural growls',
      'sharp claws',
      'gurgling water',
      'thick vines',
      'sloshing mud',
      'sighing winds',
      'fluttering pages',
      'clanging swords',
      'splintering wood',
      'rushing water',
      'hooting owls',
      'scuttling beetles',
      'whispering leaves',
      'flurries of snow',
      'flickering shadows',
      'plinking piano',
      'fading footsteps',
      'growing whispers',
      'shuddering breath',
    ],
    senses: [
      'smell of decay',
      'whispering wind',
      'chilling touch',
      'distant screams',
      'earthy aroma',
      'fragrant perfume',
      'rotten stench',
      'acrid smoke',
      'metallic tang',
      'spicy scent',
      'salty sea breeze',
      'sweet nectar',
      'sharp ozone',
      'burning sulfur',
      'musty dampness',
      'hot steam',
      'icy chill',
      'tropical heat',
      'frozen breath',
      'crackling energy',
      'prickling magic',
      'tingling sensation',
      'throbbing headache',
      'creeping dread',
      'racing heartbeat',
      'fading light',
      'growing darkness',
      'whistling wind',
      'hissing steam',
      'tinkling bells',
      'cackling laughter',
      'crunching snow',
      'slapping waves',
      'roaring fire',
      'gurgling brook',
      'crackling thunder',
      'booming explosion',
      'ringing silence',
      'buzzing insects',
      'swirling mist',
      'glowing aura',
      'glinting metal',
      'slippery ice',
      'pungent smoke',
      'wet mud',
      'trembling earth',
    ],
    mood: [
      'eerie silence',
      'palpable tension',
      'joyful revelry',
      'grim foreboding',
      'hopeful anticipation',
      'fearful uncertainty',
      'suffocating dread',
      'awe-inspiring wonder',
      'intense excitement',
      'tranquil peace',
      'unsettling disquiet',
      'serene calm',
      'haunting nostalgia',
      'jovial laughter',
      'frenzied chaos',
      'bittersweet longing',
      'fierce determination',
      'dizzying confusion',
      'benevolent warmth',
      'sinister chill',
      'intimidating power',
      'mournful sorrow',
      'thrilling adventure',
      'calming serenity',
      'exhilarating freedom',
      'oppressive weight',
      'reverent awe',
      'ecstatic joy',
      'paralyzing fear',
      'stirring passion',
      'tense apprehension',
      'tranquil beauty',
      'melancholy solitude',
      'fascinating intrigue',
      'intense focus',
      'rousing inspiration',
      'dreadful anxiety',
      'blissful contentment',
      'sinful temptation',
    ],
  },
  map: {
    weather: {
      severity: [
        {
          type: 'clear',
          description: 'Clear skies with no clouds in sight.',
          color: {
            start: '#FFFFFF',
            end: '#C9C9C9',
          },
          icon: [],
        },
        {
          type: 'partly cloudy',
          description: 'Partially covered by clouds, with some sun visible.',
          color: {
            start: '#FFFFFF',
            end: '#C9C9C9',
          },
          icon: [],
        },
        {
          type: 'cloudy',
          description: 'Completely covered by clouds with no sun visible.',
          color: {
            start: '#C9C9C9',
            end: '#7F7F7F',
          },
          icons: [],
        },
        {
          type: 'overcast',
          description:
            'Completely covered by clouds with no sun visible and possible drizzle or light rain.',
          color: {
            start: '#7F7F7F',
            end: '#7F7F7F',
          },
          icon: [],
        },
        {
          type: 'foggy',
          description: 'Visibility is reduced due to fog or mist.',
          color: {
            start: '#7F7F7F',
            end: '#7F7F7F',
          },
          icons: disadvantageAttackIcons,
        },
        {
          type: 'hazy',
          description: 'Visibility is reduced due to haze or smog.',
          color: {
            start: '#7F7F7F',
            end: '#7F7F7F',
          },
          icons: disadvantageAttackIcons,
        },
        {
          type: 'smoky',
          description: 'Visibility is reduced due to smoke or pollution.',
          color: {
            start: '#7F7F7F',
            end: '#7F7F7F',
          },
          icons: disadvantageAttackIcons,
        },
        {
          type: 'dust',
          description: 'Visibility is reduced due to dust or sand in the air.',
          color: {
            start: '#F6D5A1',
            end: '#F9BDA5',
          },
          icons: disadvantageAttackIcons,
        },
        {
          type: 'mist',
          description:
            'Light, fine rain or drizzle in the air that reduces visibility.',
          color: {
            start: '#C9C9C9',
            end: '#7F7F7F',
          },
          icon: [],
        },
        {
          type: 'drizzle',
          description: 'Light rain that falls in very fine drops.',
          color: {
            start: '#C9C9C9',
            end: '#7F7F7F',
          },
          icons: ['BsFillDropletFill'],
        },
        {
          type: 'light rain',
          description: 'Light rain that falls in small drops.',
          color: {
            start: '#C9C9C9',
            end: '#7F7F7F',
          },
          icons: disadvantageAttackIcons,
        },
        {
          type: 'rain',
          description: 'Steady rain that falls in moderate to heavy drops.',
          color: {
            start: '#C9C9C9',
            end: '#7F7F7F',
          },
          icons: disadvantageAttackIcons,
        },
        {
          type: 'heavy rain',
          description:
            'Intense rainfall that causes flash flooding and/or landslides.',
          color: {
            start: '#5B5B5B',
            end: '#262626',
          },
          icons: ['WiRain'],
        },
        {
          type: 'freezing rain',
          description:
            'Rain that freezes upon contact with the ground or other surfaces.',
          color: {
            start: '#BDE1FF',
            end: '#9CB3D6',
          },
          icons: disadvantageAttackIcons,
        },
        {
          type: 'sleet',
          description: 'Rain mixed with snow or ice pellets.',
          color: {
            start: '#D6EAF8',
            end: '#A9CCE3',
          },
          icons: disadvantageAttackIcons,
        },
        {
          type: 'hail',
          description:
            'Pellets of ice that fall from the sky and can cause damage to buildings, cars, and crops.',
          color: {
            start: '#D6EAF8',
            end: '#A9CCE3',
          },
          icons: disadvantageAttackIcons,
        },
        {
          type: 'thunderstorm',
          description:
            'A storm with thunder and lightning, often accompanied by heavy rain, gusty winds, and hail.',
          color: {
            start: '#1F618D',
            end: '#2980B9',
          },
          icons: ['IoThunderstormOutline', 'WiRain', 'BsCloudHailFill'],
        },
        {
          type: 'tropical storm',
          description:
            'A storm system with a defined center, sustained winds of 39-73 mph, and heavy rain that can cause flash flooding and landslides.',
          color: {
            start: '#85C1E9',
            end: '#5DADE2',
          },
          icons: disadvantageAttackIcons,
        },
        {
          type: 'hurricane',
          description:
            'A tropical storm system with sustained winds of 74 mph or higher, heavy rain, and storm surge that can cause significant damage to buildings, infrastructure, and communities.',
          color: {
            start: '#E74C3C',
            end: '#C0392B',
          },
          icons: disadvantageAttackIcons,
        },
        {
          type: 'tornado',
          description:
            'A violently rotating column of air that extends from the ground to the base of a thunderstorm, often causing significant damage to buildings, cars, and other structures.',
          color: {
            start: '#424242',
            end: '#212121',
          },
          icons: disadvantageAttackIcons,
        },
        {
          type: 'flood',
          description:
            'An overflow of water that submerges land that is usually dry and can cause property damage, travel disruptions, and loss of life.',
          color: {
            start: '#2471A3',
            end: '#1B4F72',
          },
          icons: disadvantageAttackIcons,
        },
        {
          type: 'drought',
          description:
            'A prolonged period of abnormally low precipitation that can cause water shortages, crop damage, and other ecological and economic impacts.',
          color: {
            start: '#F7DC6F',
            end: '#F1C40F',
          },
          icons: [],
        },
        {
          type: 'snow',
          description:
            'Frozen precipitation that falls from the sky in flakes, which can accumulate on the ground and cause travel disruptions and power outages.',
          color: {
            start: '#D0ECE7',
            end: '#ADD8C7',
          },
          icons: disadvantageAttackIcons,
        },
        {
          type: 'blizzard',
          description:
            'A severe snowstorm with sustained winds of at least 35 mph and blowing snow that reduces visibility to less than a quarter mile for three hours or more.',
          color: {
            start: '#E6E6E6',
            end: '#C9C9C9',
          },
          icons: disadvantageAttackIcons,
        },
        {
          type: 'ice storm',
          description:
            'A storm that produces freezing rain or sleet, which can cause widespread damage to trees, power lines, and buildings.',
          color: {
            start: '#BDE1FF',
            end: '#9CB3D6',
          },
          icons: disadvantageAttackIcons,
        },
        {
          type: 'heat wave',
          description:
            'A prolonged period of excessive heat, often accompanied by high humidity, that can cause heat exhaustion, heat stroke, and other heat-related illnesses.',
          color: {
            start: '#F8C471',
            end: '#E67E22',
          },
          icons: [],
        },
        {
          type: 'cold wave',
          description:
            'A prolonged period of extreme cold temperatures, often accompanied by strong winds, snow, and ice, that can cause hypothermia, frostbite, and other cold-related illnesses.',
          color: {
            start: '#D6EAF8',
            end: '#A9CCE3',
          },
          icons: disadvantageAttackIcons,
        },
        {
          type: 'high wind',
          description:
            'Sustained winds of 40 mph or higher that can cause power outages, property damage, and travel disruptions.',
          color: {
            start: '#7FB3D5',
            end: '#4B77BE',
          },
          icons: disadvantageAttackIcons,
        },
        {
          type: 'dust storm',
          description:
            'A severe weather condition characterized by strong winds and dust or sand that can reduce visibility to near zero, cause power outages, and damage property.',
          color: {
            start: '#F7DC6F',
            end: '#F4D03F',
          },
          icons: disadvantageAttackIcons,
        },
        {
          type: 'sandstorm',
          description:
            'A severe weather condition characterized by strong winds and sand that can reduce visibility to near zero, cause power outages, and damage property.',
          color: {
            start: '#F7DC6F',
            end: '#F4D03F',
          },
          icons: disadvantageAttackIcons,
        },
        {
          type: 'flood',
          description:
            'An overflow of water that submerges land that is usually dry and can cause property damage, travel disruptions, and loss of life.',
          color: {
            start: '#3498DB',
            end: '#2980B9',
          },
          icons: disadvantageAttackIcons,
        },
        {
          type: 'drought',
          description:
            'A prolonged period of abnormally low precipitation that can cause water shortages, crop damage, and other ecological and economic impacts.',
          color: {
            start: '#F2A359',
            end: '#F7D9C4',
          },
          icons: [],
        },
      ],
      type: [
        'clear',
        'cloudy',
        'ccid rain',
        'flash flood',
        'sandstorm',
        'wildfire',
        'blistering heat',
        'frostbite',
        'tidal tave',
        'tsunami',
        'volcanic eruption',
        'earthquake',
        'rain',
        'snow',
        'fog',
        'custom',
        'precipitation',
        'wind',
        'sunny',
        'stormy',
        'thunder',
        'hail',
        'dust',
        'sandy',
        'dusty',
        'rainy',
        'snowy',
        'foggy',
        'thunderstorms',
        'tornadoes',
        'hurricanes',
        'floods',
        'droughts',
        'typhoons',
        'blizzards',
        'snowstorms',
        'hailstorms',
        'winter storms',
        'sartially cloudy',
        'partially cloudy with snow',
        'partially cloudy with rain',
        'partially cloudy with hail',
        'partially cloudy with dust',
        'partially cloudy with sand',
        'partially cloudy with dusty',
        'partially cloudy with rainy',
        'partially cloudy with fog',
        'overcast',
        'drizzle',
      ],
      change: [
        'getting warmer',
        'getting colder',
        'getting wetter',
        'getting drier',
        'getting worse',
        'getting better',
      ],
    },
    terrain: {
      type: {
        'rain-forest': {
          movement: 'disadvantage',
          color: {
            start: '#1a9850',
            end: '#006837',
          },
        },
        desert: {
          movement: 'normal',
          color: {
            start: '#fdae61',
            end: '#d7191c',
          },
        },
        ocean: {
          movement: 'impossible',
          color: {
            start: '#74add1',
            end: '#4575b4',
          },
        },
        'alpine-lake': {
          movement: 'normal',
          color: {
            start: '#6EB3E3',
            end: '#3D8EC5',
          },
        },
        arctic: {
          movement: 'disadvantage',
          color: {
            start: '#B0D4E7',
            end: '#8ABAD3',
          },
        },
        'artesian-spring': {
          movement: 'normal',
          color: {
            start: '#B8E186',
            end: '#7BA05B',
          },
        },
        badlands: {
          movement: 'normal',
          color: {
            start: '#E9A947',
            end: '#C47E2C',
          },
        },
        barren: {
          movement: 'normal',
          color: {
            start: '#E9E9E9',
            end: '#B3B3B3',
          },
        },
        bay: {
          movement: 'normal',
          color: {
            start: '#559AC8',
            end: '#2D6AA9',
          },
        },
        bayou: {
          movement: 'disadvantage',
          color: {
            start: '#8CC3A3',
            end: '#3C8978',
          },
        },
        beach: {
          movement: 'normal',
          color: {
            start: '#FFF4CC',
            end: '#FFE066',
          },
        },
        bog: {
          movement: 'difficult',
          color: {
            start: '#9BC2CF',
            end: '#4F86C6',
          },
        },
        caldera: {
          movement: 'impossible',
          color: {
            start: '#DE725C',
            end: '#A61E21',
          },
        },
        canals: {
          movement: 'normal',
          color: {
            start: '#B3B3B3',
            end: '#707070',
          },
        },
        canyon: {
          movement: 'difficult',
          color: {
            start: '#D2B48C',
            end: '#9C7042',
          },
        },
        caves: {
          movement: 'difficult',
          color: {
            start: '#84817A',
            end: '#3E3B37',
          },
        },
        cliffs: {
          movement: 'difficult',
          color: {
            start: '#B8B8B8',
            end: '#5B5B5B',
          },
        },
        crater: {
          movement: 'impossible',
          color: {
            start: '#F9CB9C',
            end: '#F17535',
          },
        },

        'dry-lake-bed': {
          movement: 'normal',
          color: {
            start: '#E6E6E6',
            end: '#999999',
          },
        },
        dunes: {
          movement: 'difficult',
          color: {
            start: '#D1CFCF',
            end: '#696666',
          },
        },
        estuary: {
          movement: 'difficult',
          color: {
            start: '#D4DEB9',
            end: '#93B5A3',
          },
        },
        farmland: {
          movement: 'normal',
          color: {
            start: '#8B9B72',
            end: '#607044',
          },
        },
        fault: {
          movement: 'difficult',
          color: {
            start: '#E1C4A4',
            end: '#B5814D',
          },
        },
        fields: {
          movement: 'normal',
          color: {
            start: '#DBD1B8',
            end: '#988F72',
          },
        },
        fissured: {
          movement: 'difficult',
          color: {
            start: '#B6B3A6',
            end: '#5D5B54',
          },
        },
        fjords: {
          movement: 'difficult',
          color: {
            start: '#A5C8D5',
            end: '#5E9EA5',
          },
        },
        forest: {
          movement: 'difficult',
          color: {
            start: '#009933',
            end: '#006600',
          },
        },
        geysers: {
          movement: 'difficult',
          color: {
            start: '#F9EBAE',
            end: '#F4976C',
          },
        },
        glacier: {
          movement: 'difficult',
          color: {
            start: '#B4C5D6',
            end: '#5F758C',
          },
        },
        grassland: {
          movement: 'normal',
          color: {
            start: '#C2C87E',
            end: '#808D3C',
          },
        },
        harbor: {
          movement: 'normal',
          color: {
            start: '#ADC7DE',
            end: '#4F7C9D',
          },
        },
        hills: {
          movement: 'normal',
          color: {
            start: '#B7B09C',
            end: '#7E7763',
          },
        },
        'hot-spring': {
          movement: 'difficult',
          color: {
            start: '#F9DCC4',
            end: '#E29C45',
          },
        },
        'ice-sheet': {
          movement: 'impossible',
          color: {
            start: '#B7BDC6',
            end: '#727F8F',
          },
        },
        island: {
          movement: 'normal',
          color: {
            start: '#FFF4CC',
            end: '#FFE066',
          },
        },
        jungle: {
          movement: 'difficult',
          color: {
            start: '#75B79E',
            end: '#367459',
          },
        },
        'kelp-bed': {
          movement: 'difficult',
          color: {
            start: '#98BFAA',
            end: '#4D7F66',
          },
        },
        lake: {
          movement: 'normal',
          color: {
            start: '#0E6BA8',
            end: '#0E3E6B',
          },
        },
        'lava-field': {
          movement: 'difficult',
          color: {
            start: '#C2B280',
            end: '#7E6B32',
          },
        },
        'lava-tube': {
          movement: 'difficult',
          color: {
            start: '#A79C94',
            end: '#544F4A',
          },
        },
        marsh: {
          movement: 'difficult',
          color: {
            start: '#C4A57D',
            end: '#6D4C41',
          },
        },
        meadow: {
          movement: 'normal',
          color: {
            start: '#C2C87E',
            end: '#808D3C',
          },
        },
        mine: {
          movement: 'difficult',
          color: {
            start: '#7E7763',
            end: '#544F4A',
          },
        },
        mountain: {
          movement: 'difficult',
          color: {
            start: '#B0B0B0',
            end: '#6D6D6D',
          },
        },
        'nettles & Brambles': {
          movement: 'difficult',
          color: {
            start: '#6D6D6D',
            end: '#000000',
          },
        },
        oasis: {
          movement: 'normal',
          color: {
            start: '#A3C87E',
            end: '#4E8D3C',
          },
        },

        orchard: {
          movement: 'normal',
          color: {
            start: '#C2C87E',
            end: '#808D3C',
          },
        },
        permafrost: {
          movement: 'difficult',
          color: {
            start: '#C2C5C6',
            end: '#73797C',
          },
        },
        plains: {
          movement: 'normal',
          color: {
            start: '#C2C87E',
            end: '#808D3C',
          },
        },
        plateau: {
          movement: 'normal',
          color: {
            start: '#B0B0B0',
            end: '#6D6D6D',
          },
        },
        pond: {
          movement: 'normal',
          color: {
            start: '#006699',
            end: '#003366',
          },
        },
        prairie: {
          movement: 'normal',
          color: {
            start: '#C2C87E',
            end: '#808D3C',
          },
        },
        quicksand: {
          movement: 'difficult',
          color: {
            start: '#D2B48C',
            end: '#7F5217',
          },
        },
        rapids: {
          movement: 'difficult',
          color: {
            start: '#ADC7DE',
            end: '#4F7C9D',
          },
        },
        reef: {
          movement: 'difficult',
          color: {
            start: '#C4A57D',
            end: '#6D4C41',
          },
        },
        river: {
          movement: 'normal',
          color: {
            start: '#006699',
            end: '#003366',
          },
        },
        'river delta': {
          movement: 'normal',
          color: {
            start: '#006699',
            end: '#003366',
          },
        },
        rocky: {
          movement: 'difficult',
          color: {
            start: '#A5A5A5',
            end: '#5E5E5E',
          },
        },
        'sand dunes': {
          movement: 'difficult',
          color: {
            start: '#C2B280',
            end: '#7E6B32',
          },
        },
        sandbar: {
          movement: 'normal',
          color: {
            start: '#ADC7DE',
            end: '#4F7C9D',
          },
        },
        savannah: {
          movement: 'normal',
          color: {
            start: '#DDBB8B',
            end: '#AA6C39',
          },
        },
        scrubland: {
          movement: 'normal',
          color: {
            start: '#C4A57D',
            end: '#6D4C41',
          },
        },
        seaside: {
          movement: 'normal',
          color: {
            start: '#0B4F6C',
            end: '#ADC7DE',
          },
        },
        sewers: {
          movement: 'difficult',
          color: {
            start: '#3D3D3D',
            end: '#000000',
          },
        },
        'shallow sea': {
          movement: 'normal',
          color: {
            start: '#0B4F6C',
            end: '#ADC7DE',
          },
        },
        'sink hole': {
          movement: 'difficult',
          color: {
            start: '#B8B8B8',
            end: '#575757',
          },
        },
        spring: {
          movement: 'normal',
          color: {
            start: '#006699',
            end: '#003366',
          },
        },
        'strip mine': {
          movement: 'difficult',
          color: {
            start: '#B0B0B0',
            end: '#6D6D6D',
          },
        },
        swamp: {
          movement: 'difficult',
          color: {
            start: '#6D6D6D',
            end: '#000000',
          },
        },
        'taiga (snow forest)': {
          movement: 'difficult',
          color: {
            start: '#A3C87E',
            end: '#4E8D3C',
          },
        },
        'tide pool': {
          movement: 'normal',
          color: {
            start: '#006699',
            end: '#003366',
          },
        },
        'tropical island': {
          movement: 'normal',
          color: {
            start: '#A3C87E',
            end: '#4E8D3C',
          },
        },
        tundra: {
          movement: 'difficult',
          color: {
            start: '#B0B0B0',
            end: '#6D6D6D',
          },
        },
        tunnels: {
          movement: 'difficult',
          color: {
            start: '#C2C5C6',
            end: '#73797C',
          },
        },
        underground: {
          movement: 'difficult',
          color: {
            start: '#C2C5C6',
            end: '#73797C',
          },
        },
        'underground sea': {
          movement: 'difficult',
          color: {
            start: '#0B4F6C',
            end: '#ADC7DE',
          },
        },
        valley: {
          movement: 'normal',
          color: {
            start: '#B0B0B0',
            end: '#6D6D6D',
          },
        },
        vineyard: {
          movement: 'normal',
          color: {
            start: '#DDBB8B',
            end: '#AA6C39',
          },
        },
        volcanic: {
          movement: 'difficult',
          color: {
            start: '#D64343',
            end: '#8B0A0A',
          },
        },
        'volcanic island': {
          movement: 'difficult',
          color: {
            start: '#D64343',
            end: '#8B0A0A',
          },
        },
        wastelands: {
          movement: 'difficult',
          color: {
            start: '#B8B8B8',
            end: '#575757',
          },
        },
        waterfalls: {
          movement: 'normal',
          color: {
            start: '#ADC7DE',
            end: '#4F7C9D',
          },
        },
        wetlands: {
          movement: 'difficult',
          color: {
            start: '#C4A57D',
            end: '#6D4C41',
          },
        },
        wildlands: {
          movement: 'normal',
          color: {
            start: '#A3C87E',
            end: '#4E8D3C',
          },
        },
        'wind blasted': {
          movement: 'difficult',
          color: {
            start: '#C2C5C6',
            end: '#73797C',
          },
        },
        'floating island': {
          movement: 'difficult',
          color: {
            start: '#ADC7DE',
            end: '#4F7C9D',
          },
        },
        colosseum: {
          movement: 'normal',
          color: {
            start: '#C2C5C6',
            end: '#73797C',
          },
        },
        'pirate ships': {
          movement: 'difficult',
          color: {
            start: '#3D3D3D',
            end: '#000000',
          },
        },
        'moving-train': {
          movement: 'normal',
          color: {
            start: '#424242',
            end: '#1E1E1E',
          },
        },
      },
      dimensions: [
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
      ],
    },
    time: {
      ofDay: {
        morning: {
          visibility: 'normal',
          color: {
            start: '#F0E6A8',
            end: '#F0C930',
          },
        },
        sunrise: {
          visibility: 'normal',
          color: {
            start: '#F7D48B',
            end: '#F8A13C',
          },
        },
        'sun-up': {
          visibility: 'normal',
          color: {
            start: '#F7D48B',
            end: '#F8A13C',
          },
        },
        sunset: {
          visibility: 'normal',
          color: {
            start: '#F4A259',
            end: '#D74D4D',
          },
        },
        dawn: {
          visibility: 'normal',
          color: {
            start: '#C7D3DC',
            end: '#6B7C85',
          },
        },
        'day-light': {
          visibility: 'normal',
          color: {
            start: '#F7D48B',
            end: '#F8A13C',
          },
        },
        'early-morning': {
          visibility: 'normal',
          color: {
            start: '#F0E6A8',
            end: '#F0C930',
          },
        },
        'late-morning': {
          visibility: 'normal',
          color: {
            start: '#F0E6A8',
            end: '#F0C930',
          },
        },
        'early-afternoon': {
          visibility: 'normal',
          color: {
            start: '#F7D48B',
            end: '#F8A13C',
          },
        },
        'late-afternoon': {
          visibility: 'normal',
          color: {
            start: '#F7D48B',
            end: '#F8A13C',
          },
        },
        'early-evening': {
          visibility: 'normal',
          color: {
            start: '#F4A259',
            end: '#D74D4D',
          },
        },
        'late-evening': {
          visibility: 'normal',
          color: {
            start: '#F4A259',
            end: '#D74D4D',
          },
        },
        AM: {
          visibility: 'normal',
          color: {
            start: '#C7D3DC',
            end: '#6B7C85',
          },
        },
        PM: {
          visibility: 'normal',
          color: {
            start: '#F4A259',
            end: '#D74D4D',
          },
        },
        'at-the-crack-of-dawn': {
          visibility: 'normal',
          color: {
            start: '#C7D3DC',
            end: '#6B7C85',
          },
        },
        'bed-time': {
          visibility: 'difficult',
          color: {
            start: '#474747',
            end: '#000000',
          },
        },
        breakfast: {
          visibility: 'normal',
          color: {
            start: '#F0E6A8',
            end: '#F0C930',
          },
        },
        'dinner-time': {
          visibility: 'normal',
          color: {
            start: '#F4A259',
            end: '#D74D4D',
          },
        },
        'lunch-time': {
          visibility: 'normal',
          color: {
            start: '#f2bf64',
            end: '#f28943',
          },
        },
        eventide: {
          visibility: 'normal',
          color: {
            start: '#f2bf64',
            end: '#f28943',
          },
        },
        'the-witching-hour': {
          visibility: 'difficult',
          color: {
            start: '#000000',
            end: '#3f3f3f',
          },
        },
        'past-midnight': {
          visibility: 'difficult',
          color: {
            start: '#000000',
            end: '#3f3f3f',
          },
        },
        'tea-time': {
          visibility: 'normal',
          color: {
            start: '#f2bf64',
            end: '#f28943',
          },
        },
        'mid-morning': {
          visibility: 'normal',
          color: {
            start: '#f2bf64',
            end: '#f28943',
          },
        },
        'mid-afternoon': {
          visibility: 'normal',
          color: {
            start: '#f2bf64',
            end: '#f28943',
          },
        },
        'mid-evening': {
          visibility: 'normal',
          color: {
            start: '#f2bf64',
            end: '#f28943',
          },
        },
        'office-hours': {
          visibility: 'normal',
          color: {
            start: '#f2bf64',
            end: '#f28943',
          },
        },
        'visiting-hours': {
          visibility: 'normal',
          color: {
            start: '#f2bf64',
            end: '#f28943',
          },
        },
        'quarter-to-midnight': {
          visibility: 'difficult',
          color: {
            start: '#000000',
            end: '#3f3f3f',
          },
        },
        'quarter-to-morning': {
          visibility: 'normal',
          color: {
            start: '#f2bf64',
            end: '#f28943',
          },
        },
        quartertoafternoon: {
          visibility: 'normal',
          color: {
            start: '#f2bf64',
            end: '#f28943',
          },
        },
        quartertoevening: {
          visibility: 'normal',
          color: {
            start: '#f2bf64',
            end: '#f28943',
          },
        },
        quartertobedtime: {
          visibility: 'difficult',
          color: {
            start: '#000000',
            end: '#3f3f3f',
          },
        },
        quartertobreakfast: {
          visibility: 'normal',
          color: {
            start: '#f2bf64',
            end: '#f28943',
          },
        },
        quartertodinner: {
          visibility: 'normal',
          color: {
            start: '#f2bf64',
            end: '#f28943',
          },
        },
        quartertolunch: {
          visibility: 'normal',
          color: {
            start: '#f2bf64',
            end: '#f28943',
          },
        },
        quartertoteatime: {
          visibility: 'normal',
          color: {
            start: '#f2bf64',
            end: '#f28943',
          },
        },
        quartertoofficehours: {
          visibility: 'normal',
          color: {
            start: '#f2bf64',
            end: '#f28943',
          },
        },
        'quarter-to-visiting-hours': {
          visibility: 'normal',
          color: {
            start: '#F4A261',
            end: '#E76F51',
          },
        },
        'quarter-to-eventide': {
          visibility: 'normal',
          color: {
            start: '#457B9D',
            end: '#1D3557',
          },
        },
        'quarter-to-the-witching-hour': {
          visibility: 'difficult',
          color: {
            start: '#7209B7',
            end: '#2B2D42',
          },
        },
        'quarter-to-past-midnight': {
          visibility: 'difficult',
          color: {
            start: '#03045E',
            end: '#00A896',
          },
        },
        'quarter-to-tea-time': {
          visibility: 'normal',
          color: {
            start: '#E63946',
            end: '#F1FAEE',
          },
        },
        'quarter-to-mid-morning': {
          visibility: 'normal',
          color: {
            start: '#FFC107',
            end: '#003049',
          },
        },
        'quarter-to-mid-afternoon': {
          visibility: 'normal',
          color: {
            start: '#219EBC',
            end: '#023047',
          },
        },
        'quarter-to-mid-evening': {
          visibility: 'normal',
          color: {
            start: '#4CAF50',
            end: '#1A1D24',
          },
        },
        'quarter-to-office-hours': {
          visibility: 'normal',
          color: {
            start: '#0077B6',
            end: '#1D3557',
          },
        },

        twilight: {
          visibility: 'normal',
          color: {
            start: '#A8DADC',
            end: '#1D3557',
          },
        },
        noon: {
          visibility: 'normal',
          color: {
            start: '#9D0208',
            end: '#FFC300',
          },
        },
        'mid-day': {
          visibility: 'normal',
          color: {
            start: '#FFC300',
            end: '#0077B6',
          },
        },
        afternoon: {
          visibility: 'normal',
          color: {
            start: '#F6D55C',
            end: '#3CAEA3',
          },
        },
        evening: {
          visibility: 'normal',
          color: {
            start: '#F48C06',
            end: '#3D405B',
          },
        },
        dusk: {
          visibility: 'normal',
          color: {
            start: '#F4A261',
            end: '#E76F51',
          },
        },
        night: {
          visibility: 'difficult',
          color: {
            start: '#0B0C10',
            end: '#1F2833',
          },
        },
        midnight: {
          visibility: 'difficult',
          color: {
            start: '#0B0C10',
            end: '#1F2833',
          },
        },
      },
    },
    positions: {
      player: [1],
      opposition: [2, 3, 4],
    },
    objects: [
      {
        name: 'Altar (broken/ruins)',
        description:
          'The ancient stone altar is cracked and weathered, with moss growing in the cracks.',
        image: 'altar.png',
        location: { x: 10, y: 5 },
        interactable: true,
        loot: ['ancient relic', 'enchanted amulet'],
        rarity: 'common',
        condition: 'damaged',
        size: 'medium',
        value: 50,
      },
      {
        name: 'Altar (intact)',
        description:
          'The altar is made of white marble, with intricate carvings of ancient deities.',
        image: 'altar.png',
        location: { x: 3, y: 8 },
        interactable: true,
        loot: ['holy symbol', 'blessed water'],
        rarity: 'rare',
        condition: 'intact',
        size: 'medium',
        value: 500,
      },
      {
        name: 'Anchor, large',
        description:
          'A rusted iron anchor with a heavy chain attached, suitable for a large ship.',
        image: 'anchor.png',
        location: { x: 6, y: 4 },
        interactable: false,
        loot: [],
        rarity: 'common',
        condition: 'worn',
        size: 'large',
        value: 100,
      },
      {
        name: 'Anchor, small',
        description:
          'A small anchor made of brass, suitable for a small boat or dinghy.',
        image: 'anchor.png',
        location: { x: 2, y: 2 },
        interactable: false,
        loot: [],
        rarity: 'common',
        condition: 'good',
        size: 'small',
        value: 20,
      },
      {
        name: 'Animal Pen',
        description:
          'A sturdy wooden pen used to keep domesticated animals, such as sheep or pigs.',
        image: 'animal-pen.png',
        location: { x: 8, y: 9 },
        interactable: true,
        loot: ['wool', 'pork chops'],
        rarity: 'uncommon',
        condition: 'good',
        size: 'medium',
        value: 200,
      },
      {
        name: 'Animal Trap, small (1d4 + grapple)',
        description:
          'A small wooden trap designed to capture small game, such as rabbits or squirrels.',
        image: 'animal-trap.png',
        location: { x: 5, y: 7 },
        interactable: true,
        loot: ['wild game'],
        rarity: 'uncommon',
        condition: 'good',
        size: 'small',
        value: 50,
      },
      {
        name: 'Anvil',
        description: 'A heavy iron anvil used for shaping metal.',
        image: 'anvil.png',
        location: { x: 2, y: 6 },
        interactable: false,
        loot: [],
        rarity: 'common',
        condition: 'good',
        size: 'medium',
        value: 150,
      },
      {
        name: 'Apiary (beehive yard)',
        description:
          'A collection of wooden beehives surrounded by wildflowers.',
        image: 'apiary.png',
        location: { x: 20, y: 10 },
        interactable: true,
        loot: ['honeycomb', 'beeswax'],
        rarity: 'common',
        condition: 'well-maintained',
        size: 'large',
        value: 100,
      },
      {
        name: 'Arch',
        description: 'A stone archway leading to a courtyard beyond.',
        image: 'arch.png',
        location: { x: 15, y: 5 },
        interactable: false,
        loot: [],
        rarity: 'common',
        condition: 'intact',
        size: 'medium',
        value: 50,
      },
      {
        name: 'Aviary (hawks)',
        description:
          'A large wooden structure filled with perches for trained hawks.',
        image: 'aviary.png',
        location: { x: 25, y: 15 },
        interactable: true,
        loot: ['trained hawk', 'feathers'],
        rarity: 'rare',
        condition: 'well-maintained',
        size: 'large',
        value: 500,
      },
      {
        name: 'Aviary (hummingbirds)',
        description:
          'A delicate glass dome containing a small garden for hummingbirds.',
        image: 'aviary.png',
        location: { x: 30, y: 5 },
        interactable: true,
        loot: ['hummingbird nectar', 'rare flower'],
        rarity: 'uncommon',
        condition: 'well-maintained',
        size: 'small',
        value: 200,
      },
      {
        name: 'Aviary (white doves)',
        description: 'A small wooden enclosure with dozens of cooing doves.',
        image: 'aviary.png',
        location: { x: 5, y: 20 },
        interactable: true,
        loot: ['white dove feather', 'birdseed'],
        rarity: 'common',
        condition: 'well-maintained',
        size: 'medium',
        value: 100,
      },
      {
        name: 'Barn',
        description:
          'An old, weathered barn with a rusty metal roof and peeling red paint.',
        image: 'barn.png',
        location: { x: 20, y: 15 },
        interactable: false,
        loot: ['hay bale', 'old tools'],
        rarity: 'common',
        condition: 'worn',
        size: 'large',
        value: 100,
      },
      {
        name: 'Barrel',
        description: 'A small wooden barrel with metal hoops.',
        image: 'barrel.png',
        location: { x: 5, y: 8 },
        interactable: true,
        loot: ['food', 'water'],
        rarity: 'common',
        condition: 'used',
        size: 'small',
        value: 10,
      },
      {
        name: 'Barrels',
        description:
          'Several wooden barrels with metal hoops, stacked together.',
        image: 'barrels.png',
        location: { x: 7, y: 12 },
        interactable: true,
        loot: ['food', 'water'],
        rarity: 'common',
        condition: 'used',
        size: 'medium',
        value: 20,
      },
      {
        name: 'Beehive (angry)',
        description: 'A buzzing, angry beehive, swarming with bees.',
        image: 'beehive_angry.png',
        location: { x: 15, y: 10 },
        interactable: true,
        loot: ['honey', 'beeswax'],
        rarity: 'uncommon',
        condition: 'active',
        size: 'small',
        value: 30,
      },
      {
        name: 'Beehive (passive)',
        description: 'A peaceful beehive, with bees quietly buzzing around.',
        image: 'beehive_passive.png',
        location: { x: 12, y: 5 },
        interactable: true,
        loot: ['honey', 'beeswax'],
        rarity: 'uncommon',
        condition: 'active',
        size: 'small',
        value: 40,
      },
      {
        name: 'Books (all pages missing or blank)',
        description: 'A stack of books with all the pages missing or blank.',
        image: 'books_blank.png',
        location: { x: 3, y: 18 },
        interactable: false,
        loot: [],
        rarity: 'common',
        condition: 'ruined',
        size: 'small',
        value: 5,
      },
      {
        name: 'Bookshelf (ruined)',
        description:
          'A wooden bookshelf with broken shelves and rotting books.',
        image: 'bookshelf_ruined.png',
        location: { x: 9, y: 11 },
        interactable: false,
        loot: [],
        rarity: 'common',
        condition: 'ruined',
        size: 'medium',
        value: 15,
      },
      {
        name: 'Boulder (L)',
        description: 'A large, smooth boulder.',
        image: 'boulder_large.png',
        location: { x: 6, y: 4 },
        interactable: false,
        loot: [],
        rarity: 'common',
        condition: 'intact',
        size: 'large',
        value: 25,
      },
      {
        name: 'Boulders (M)',
      },
      {
        name: 'Bridge (broken, metal)',
      },
      {
        name: 'Bridge (broken, stone)',
      },
      {
        name: 'Bridge (broken, wooden)',
      },
      {
        name: 'Bridge (intact, metal)',
      },
      {
        name: 'Bridge (intact, stone)',
      },
      {
        name: 'Bridge (intact, wooden)',
      },
      {
        name: 'Building Ruins (L)',
      },
      {
        name: 'Building Ruins (S)',
      },
      {
        name: 'Bunker',
      },
      {
        name: 'Campfire (lit)',
      },
      {
        name: 'Campfire (out)',
      },
      {
        name: 'Caravan Wagon',
      },
      {
        name: 'Carnival Tent',
      },
      {
        name: 'Cart',
      },
      {
        name: 'Castle Ruins',
      },
      {
        name: 'Cauldron (empty)',
      },
      {
        name: 'Cauldron (full)',
      },
      {
        name: 'Chariot',
      },
      {
        name: 'Chest (locked)',
      },
      {
        name: 'Chest (unlocked)',
      },
      {
        name: 'Clock (broken)',
      },
      {
        name: 'Clock (intact)',
      },
      {
        name: 'Clock Tower (intact)',
      },
      {
        name: 'Clock Tower (toppled)',
      },
      {
        name: 'Coffin',
      },
      {
        name: 'Cog(s), Large (10ft)',
      },
      {
        name: 'Cog(s), Massive (25ft)',
      },
      {
        name: 'Corpse',
      },
      {
        name: 'Corpses',
      },
      {
        name: 'Crate (empty)',
      },
      {
        name: 'Crate (full)',
      },
      {
        name: 'Crates (empty)',
      },
      {
        name: 'Crates (full)',
      },
      {
        name: 'Dammed River',
      },
      {
        name: 'Den (empty)',
      },
      {
        name: 'Dog House',
      },
      {
        name: 'Fallen Tree (large)',
      },
      {
        name: 'Fallen Tree (small)',
      },
      {
        name: 'Farmhouse',
      },
      {
        name: 'Footlocker, locked',
      },
      {
        name: 'Footlocker, unlocked',
      },
      {
        name: 'Fountain (water)',
      },
      {
        name: 'Garden (butterflies)',
      },
      {
        name: 'Garden (fruits + vegetables)',
      },
      {
        name: 'Garden (giant fruits + vegetables)',
      },
      {
        name: 'Gemstones (small, rough)',
      },
      {
        name: 'Geyser',
      },
      {
        name: 'Giant Mushrooms, safe',
      },
      {
        name: 'Giant Mushrooms, toxic',
      },
      {
        name: 'Granary',
      },
      {
        name: 'Gravestones',
      },
      {
        name: 'Graveyard, (HOLY, Hallow spell)',
      },
      {
        name: 'Greenhouse (carnivorous plants)',
      },
      {
        name: 'Greenhouse (halucinagenic plants)',
      },
      {
        name: 'Greenhouse (poisonous plants)',
      },
      {
        name: 'House',
      },
      {
        name: 'Bell, Huge (20ft) (on side, intact)',
      },
      {
        name: 'Illusory Object',
      },
      {
        name: 'Illusory Person/NPC',
      },
      {
        name: 'Chest, large',
      },
      {
        name: 'Lighthouse',
      },
      {
        name: 'Log Pile, large',
      },
      {
        name: 'Mausoleum',
      },
      {
        name: 'Meteorite',
      },
      {
        name: 'Nest (empty)',
      },
      {
        name: 'Obelisk (intact)',
      },
      {
        name: 'Obelisk (ruined)',
      },
      {
        name: 'Obelisk (toppled)',
      },
      {
        name: 'Observatory',
      },
      {
        name: 'Petrified Creatures',
      },
      {
        name: 'Picnic (basic foods + drink)',
      },
      {
        name: 'Picnic (exotic foods/drinks, inspiration)',
      },
      {
        name: 'Picnic (heroes feast)',
      },
      {
        name: 'Picnic Basket',
      },
      {
        name: 'Pond, small (20ft)',
      },
      {
        name: 'River, water',
      },
      {
        name: 'Road',
      },
      {
        name: 'Rock patch (L)',
      },
      {
        name: 'Scarecrow',
      },
      {
        name: 'Scrap Metal (copper; scattered)',
      },
      {
        name: 'Scrap Metal (gold; scattered)',
      },
      {
        name: 'Scrap Metal (iron; scattered)',
      },
      {
        name: 'Scrap Metal (mithril; scattered)',
      },
      {
        name: 'Scrap Metal (platinum; scattered)',
      },
      {
        name: 'Scrap Metal (silver; scattered)',
      },
      {
        name: 'Shack',
      },
      {
        name: 'Ship (intact)',
      },
      {
        name: 'Ship (wrecked)',
      },
      {
        name: "Ship's Sail",
      },
      {
        name: 'Skeletal Remains (L)',
      },
      {
        name: 'Skeletal Remains (S)',
      },
      {
        name: 'Chest, small',
      },
      {
        name: 'Fortress, small (60ft sq)',
      },
      {
        name: 'Stables',
      },
      {
        name: 'Standing Stones',
      },
      {
        name: 'Statue (intact)',
      },
      {
        name: 'Statue (ruined)',
      },
      {
        name: 'Statue (toppled)',
      },
      {
        name: 'Stream',
      },
      {
        name: 'Table + Chairs (stone)',
      },
      {
        name: 'Table + Chairs (wood)',
      },
      {
        name: 'Tavern',
      },
      {
        name: 'Telescope',
      },
      {
        name: 'Temple Ruins',
      },
      {
        name: 'Tent',
      },
      {
        name: 'Throne (intact)',
      },
      {
        name: 'Throne (toppled)',
      },
      {
        name: 'Tomb (broken/empty)',
      },
      {
        name: 'Tomb (intact)',
      },
      {
        name: 'Totem Pole',
      },
      {
        name: 'Tower (stone, broken)',
      },
      {
        name: 'Tree (massive)',
      },
      {
        name: 'Treehouse, full enclosure',
      },
      {
        name: 'Treehouse, platform',
      },
      {
        name: 'Trench (5x20ft)',
      },
      {
        name: 'Wall, stone',
      },
      {
        name: 'Watchtower',
      },
      {
        name: 'Well',
      },
      {
        name: 'Windmill',
      },
      {
        name: 'Wizard Tower (intact)',
      },
      {
        name: 'Wizard Tower (ruins)',
      },
      {
        name: 'Worn Path',
      },
      {
        name: 'Wall, wooden',
      },
      {
        name: 'Wall, corpses',
      },
      {
        name: 'Wall, brambles',
      },
      {
        name: 'Wall, ice',
      },
      {
        name: 'Wall, fire',
      },
      {
        name: 'Waterfall',
      },
      {
        name: 'Den (occupied)',
      },
      {
        name: 'Palisade, wooden',
      },
      {
        name: 'Fence, Iron',
      },
      {
        name: 'Fence, Wood',
      },
      {
        name: 'Moat',
      },
      {
        name: 'Pond, large (40ft)',
      },
      {
        name: 'Gazebo',
      },
      {
        name: 'Bell, Medium (5ft) (on side, intact)',
      },
      {
        name: 'Gong',
      },
      {
        name: 'Mine Shaft (50ft deep)',
      },
      {
        name: 'Mirror',
      },
      {
        name: 'Kiln (empty)',
      },
      {
        name: 'Desk',
      },
      {
        name: 'Battering Ram',
      },
      {
        name: 'Target Dummy, tiny, swinging',
      },
      {
        name: 'Target Dummy, tiny, stationary',
      },
      {
        name: 'Alchemical Lab (magical, bonus effects)',
      },
      {
        name: 'Alchemical Lab (empty)',
      },
      {
        name: 'Alchemical Lab (ingredients prepped)',
      },
      {
        name: 'Target Dummy, medium, swinging',
      },
      {
        name: 'Target Dummy, medium, stationary',
      },
      {
        name: 'Target Dummy, huge, swinging',
      },
      {
        name: 'Target Dummy, huge, stationary',
      },
      {
        name: 'Fireworks',
      },
      {
        name: 'Still (empty)',
      },
      {
        name: 'Still (ingredients prepped)',
      },
      {
        name: "Brewer's Setup (empty)",
      },
      {
        name: "Brewer's Setup (ingredients prepped)",
      },
      {
        name: "Brewer's Setup (magical, bonus effects)",
      },
      {
        name: 'Calligraphy Desk (empty)',
      },
      {
        name: 'Calligraphy Desk (ingredients prepped)',
      },
      {
        name: 'Calligraphy Desk (magical, bonus effects)',
      },
      {
        name: "Cartographer's Station (empty)",
      },
      {
        name: "Cartographer's Station (ingredients prepped)",
      },
      {
        name: "Cartographer's Station (magical, bonus effects)",
      },
      {
        name: 'Cobbler Bench (empty)',
      },
      {
        name: 'Cobbler Bench (ingredients prepped)',
      },
      {
        name: 'Cobbler Bench (magical, bonus effects)',
      },
      {
        name: "Chef's Table (empty)",
      },
      {
        name: "Chef's Table (ingredients prepped)",
      },
      {
        name: "Chef's Table (magical, bonus effects)",
      },
      {
        name: 'Waterwheel',
      },
      {
        name: 'Stage',
      },
      {
        name: 'Stockade',
      },
      {
        name: 'Guillotine',
      },
      {
        name: 'Casino',
      },
      {
        name: 'Wooden Horse, giant, hollow',
      },
      {
        name: 'Billboard, large (30ft)',
      },
      {
        name: 'Construct, small',
      },
      {
        name: 'Construct, medium',
      },
      {
        name: 'Construct, large',
      },
      {
        name: 'Bathtub, small (3ft)',
      },
      {
        name: 'Bathtub, huge (20ft)',
      },
      {
        name: 'Outhouse',
      },
      {
        name: 'Cannon, gunpowder loaded',
      },
      {
        name: 'Cannon, empty',
      },
      {
        name: 'Fortress, large (100ft sq)',
      },
      {
        name: 'Graveyard, (UNHOLY, Hallow spell)',
      },
      {
        name: 'Pyramid, tiny (5ft)',
      },
      {
        name: 'Pyramid, large (50ft base)',
      },
      {
        name: 'Pyramid, glass',
      },
      {
        name: 'Tower (stone, intact)',
      },
      {
        name: 'Tree, massive (15ft dia), hollow, occupied',
      },
      {
        name: 'Tree, massive (15ft dia), hollow, unoccupied',
      },
      {
        name: 'Airship, abandoned',
      },
      {
        name: 'Hot Air Balloon, tethered, occupied',
      },
      {
        name: 'Hot Air Balloon, tethered, unoccupied',
      },
      {
        name: 'Crystal Formation, huge (30ft patch)',
      },
      {
        name: 'Crystal Formation, small (5ft patch)',
      },
      {
        name: 'Catapult, loaded',
      },
      {
        name: 'Ballista, loaded',
      },
      {
        name: 'Ballista, empty',
      },
      {
        name: 'Catapult, empty',
      },
      {
        name: 'River, flowing lava',
      },
      {
        name: 'River, acid',
      },
      {
        name: 'Forge (normal)',
      },
      {
        name: 'Forge (masterwork, +4 on checks)',
      },
      {
        name: 'Forge (magical, bonus effect)',
      },
      {
        name: 'Floating Island, small (15ft)',
      },
      {
        name: 'Floating Island, large (30ft)',
      },
      {
        name: 'Floating Island, cluster (5ft-10ft each)',
      },
      {
        name: 'Cactus, large',
      },
      {
        name: 'Cactus, small',
      },
      {
        name: 'Cactus patch, medium (40ft)',
      },
      {
        name: 'Jeweler Crafting Hut (empty)',
      },
      {
        name: 'Jeweler Crafting Hut (ingredients prepped)',
      },
      {
        name: 'Jeweler Crafting Hut (magical, bonus effects)',
      },
      {
        name: 'Mammoth skull',
      },
      {
        name: 'Skeletal Remains, dragon, gargantuan',
      },
      {
        name: "Leatherworkers' Lodge (empty)",
      },
      {
        name: "Leatherworkers' Lodge (ingredients prepped)",
      },
      {
        name: "Leatherworkers' Lodge (magical, bonus effects)",
      },
      {
        name: "Painters' Studio",
      },
      {
        name: "Painters' Studio (empty)",
      },
      {
        name: "Painters' Studio (ingredients prepped)",
      },
      {
        name: "Painters' Studio (magical, bonus effects)",
      },
      {
        name: 'Kite, flying, tethered',
      },
      {
        name: 'Paraglider, in tact',
      },
      {
        name: 'Paraglider, damaged',
      },
      {
        name: 'Animal Trap, large (3d4 + grapple)',
      },
      {
        name: 'Pit Trap, 10ft (DC10)',
      },
      {
        name: 'Fighting Pit, no trigger',
      },
      {
        name: 'Kiln (ingredients prepped)',
      },
      {
        name: 'Kiln (magical, bonus effects)',
      },
      {
        name: 'Tinker Table (normal)',
      },
      {
        name: 'Tinker Table (masterwork, +4 on checks)',
      },
      {
        name: 'Tinker Table (magical, bonus effects)',
      },
      {
        name: 'Woodshop (normal)',
      },
      {
        name: 'Woodshop (masterwork, +4 on checks)',
      },
      {
        name: 'Woodshop (magical, bonus effects)',
      },
      {
        name: 'Loom (normal)',
      },
      {
        name: 'Loom (masterwork, +4 on checks)',
      },
      {
        name: 'Loom (magical, bonus effects)',
      },
      {
        name: 'Walk-in Wardrobe (normal)',
      },
      {
        name: 'Walk-in Wardrobe (masterwork, +4 on checks)',
      },
      {
        name: 'Walk-in Wardrobe (magical, bonus effects)',
      },
      {
        name: 'Backpack (empty)',
      },
      {
        name: 'Backpack (full)',
      },
      {
        name: 'Bottle(s) (empty)',
      },
      {
        name: 'Bottle(s) (full)',
      },
      {
        name: 'Pouch (empty)',
      },
      {
        name: 'Pouch (full)',
      },
      {
        name: 'Shrine (Auril, goddess of winter NE Nature, Tempest)',
      },
      {
        name: 'Shrine (Azuth, god of wizards LN Knowledge)',
      },
      {
        name: 'Shrine (Bane, god o f tyranny LE War)',
      },
      {
        name: 'Shrine (Beshaba, goddess of misfortune CE Trickery)',
      },
      {
        name: 'Shrine (Bhaal, god o f murder NE Death)',
      },
      {
        name: 'Shrine (Chauntea, goddess of agriculture NG Life)',
      },
      {
        name: 'Shrine (Cyric, god o f lies CE Trickery)',
      },
      {
        name: 'Shrine (Deneir, god of writing NG Knowledge)',
      },
      {
        name: 'Shrine (Eldath, goddess of peace NG Life, Nature)',
      },
      {
        name: 'Shrine (Gond, god of craft N Knowledge)',
      },
      {
        name: 'Shrine (Helm, god of protection LN Life, Light)',
      },
      {
        name: 'Shrine (Ilmater, god o f endurance LG Life)',
      },
      {
        name: 'Shrine (Kelemvor, god of the dead LN Death)',
      },
      {
        name: 'Shrine (Lathander, god of birth and renewal NG Life, Light)',
      },
      {
        name: 'Shrine (Leira, goddess of illusion CN Trickery)',
      },
      {
        name: 'Shrine (Lliira, goddess of joy CG Life)',
      },
      {
        name: 'Shrine (Loviatar, goddess of pain LE Death)',
      },
      {
        name: 'Shrine (Malar, god of the hunt CE Nature)',
      },
      {
        name: 'Shrine (Mask, god of thieves CN Trickery)',
      },
      {
        name: 'Shrine (Mielikki, goddess of forests NG Nature)',
      },
      {
        name: 'Shrine (Milil, god of poetry and song NG Light)',
      },
      {
        name: 'Shrine (Myrkul, god of death NE Death)',
      },
      {
        name: 'Shrine (Mystra, goddess of magic NG Knowledge)',
      },
      {
        name: 'Shrine (Oghma, god of knowledge N Knowledge)',
      },
      {
        name: 'Shrine (Savras, god of divination and fate LN Knowledge)',
      },
      {
        name: 'Shrine (Selune, goddess o f the moon CG Knowledge, Life)',
      },
      {
        name: 'Shrine (Shar, goddess of darkness and loss NE Death, Trickery)',
      },
      {
        name: 'Shrine (Silvanus, god of wild nature N Nature)',
      },
      {
        name: 'Shrine (Sune, goddess of love and beauty CG Life, Light)',
      },
      {
        name: 'Shrine (Talona, goddess of disease and poison CE Death)',
      },
      {
        name: 'Shrine (Talos, god of storms CE Tempest)',
      },
      {
        name: 'Shrine (Tempus, god of war N War)',
      },
      {
        name: 'Shrine (Torm, god of courage and self-sacrifice LG War)',
      },
      {
        name: 'Shrine (Tymora, goddess of good fortune CG Trickery)',
      },
      {
        name: 'Shrine (Tyr, god o f justice LG War)',
      },
      {
        name: 'Shrine (Umberlee, goddess of the sea CE Tempest)',
      },
      {
        name: 'Shrine (Waukeen, goddess o f trade N Knowledge, Trickery)',
      },
      {
        name: 'Beast (Eagle)',
      },
      {
        name: 'Beast (Deer)',
      },
      {
        name: 'Beast (Fox)',
      },
      {
        name: 'Beast (Goats)',
      },
      {
        name: 'Beast (Owl)',
      },
      {
        name: 'Beast (Vultures)',
      },
      {
        name: 'Beast (Camel)',
      },
      {
        name: 'Beast (Pony)',
      },
      {
        name: 'Beast (Boar)',
      },
      {
        name: 'Beast (Elk)',
      },
      {
        name: 'Beast (Giant Spider)',
      },
      {
        name: 'Beast (Ox)',
      },
      {
        name: 'Beast (Tiger)',
      },
      {
        name: 'Beast (Panther)',
      },
      {
        name: 'Beast (Velociraptors)',
      },
      {
        name: 'Beast (Ape)',
      },
      {
        name: 'Beast (Black Bear)',
      },
      {
        name: 'Beast (Crocodile)',
      },
      {
        name: 'Beast (Lion)',
      },
      {
        name: 'Beast (Giant Boar)',
      },
      {
        name: 'Beast (Rhinoceros)',
      },
      {
        name: 'Beast (Allosaurus)',
      },
      {
        name: 'Beast (Zebra)',
      },
      {
        name: 'Beast (Wolf)',
      },
      {
        name: 'Beast (Elephant)',
      },
      {
        name: 'Beast (Giraffe)',
      },
      {
        name: 'Beast (Giant Poisonous Snake)',
      },
      {
        name: 'Beast (Giant Constrictor Snake)',
      },
      {
        name: 'Druid - wildshaped as a beast',
      },
      {
        name: 'Fighter - passing through to a tournament',
      },
      {
        name: 'Fighter - elite guard, confident, seasoned',
      },
      {
        name: 'Barbarian - retired, training; jovial, storyteller',
      },
      {
        name: 'Paladin - glistening, hunting evil',
      },
      {
        name: 'Paladin - cursed and evil, dark plate',
      },
      {
        name: 'Bard - late for their show; dramatic, fancy',
      },
      {
        name: 'Bard - lulling animals with songs',
      },
      {
        name: 'Cleric - searching for meaning',
      },
      {
        name: 'Druid - insane; causing wild weather',
      },
      {
        name: 'Monk - meditating peacefully',
      },
      {
        name: 'Monk - sprinting, training',
      },
      {
        name: 'Ranger - hunting, stealthing',
      },
      {
        name: 'Ranger - playing with companion',
      },
      {
        name: 'Rogue - pickpocket, thief',
      },
      {
        name: 'Rogue - spy, very stealthy',
      },
      {
        name: 'Sorcerer - hermit, practicing in isolation',
      },
      {
        name: 'Warlock - seeking to fulfill pact; focused',
      },
      {
        name: 'Wizard - learning, reading; wants to be left alone',
      },
      {
        name: 'Wizard - cocky, show-off',
      },
      {
        name: "Psionic - elusive, intense; can't be bothered",
      },
      {
        name: 'Cleric - preaching their god; hopeful, insightful',
      },
      {
        name: 'Barbarian - destined for greatness; determined',
      },
      {
        name: 'terror stricken peasants fleeing',
      },
      {
        name: 'Wandering merchant, no security',
      },
      {
        name: 'Monsters trying to travel peacefully',
      },
      {
        name: 'hostile cultists of a dark god',
      },
      {
        name: 'travellers who really like black cloaks',
      },
      {
        name: 'highwaymen',
      },
      {
        name: 'Military patrol',
      },
      {
        name: 'wealthy merchant with security',
      },
      {
        name: 'person walking their pet(s)',
      },
      {
        name: 'lone person - survivor of attack',
      },
      {
        name: 'lone person - scout',
      },
      {
        name: 'lone person - con man',
      },
      {
        name: 'lone person - hermit',
      },
      {
        name: 'lone person - assassin (for hire)',
      },
      {
        name: 'weary elderly person with family trinket',
      },
      {
        name: 'shapeshifter/changeling learning about people',
      },
      {
        name: 'wounded, suffering animal',
      },
      {
        name: 'wounded monster in fear for its life',
      },
      {
        name: 'drug addict, suffering terribly',
      },
      {
        name: 'diseased and contagious person',
      },
      {
        name: 'coven of hags',
      },
      {
        name: 'witch, aggressive, but not hostile',
      },
      {
        name: 'construct, broken/not working currently',
      },
      {
        name: 'engineer with a highly experimental contraption',
      },
      {
        name: 'alchemist with a highly experimental concotion',
      },
      {
        name: 'brewer with a highly experimental beverage',
      },
      {
        name: 'pointy hat wizard riding quickly on warhorse',
      },
      {
        name: 'humanoid, masked, robed, riding skeletal horse',
      },
      {
        name: 'Orbed Spire (not charged)',
      },
      {
        name: 'Orbed Spire (spread current magic to others in 15ft)',
      },
      {
        name: 'Orbed Spire (dispel target)',
      },
      {
        name: 'Orbed Spire (amplifier, not charged)',
      },
      {
        name: 'Orbed Spire (abjuration spell charged)',
      },
      {
        name: 'Orbed Spire (conjuration spell charged)',
      },
      {
        name: 'Orbed Spire (diviniation spell charged)',
      },
      {
        name: 'Orbed Spire (enchantment spell charged)',
      },
      {
        name: 'Orbed Spire (evocation spell charged)',
      },
      {
        name: 'Orbed Spire (illusion spell charged)',
      },
      {
        name: 'Orbed Spire (necromancy spell charged)',
      },
      {
        name: 'Orbed Spire (transmutation spell charged)',
      },
      {
        name: 'Tablet with warning (Abyssal)',
      },
      {
        name: 'Tablet with warning (Celestial)',
      },
      {
        name: 'Tablet with warning (Deep Speech)',
      },
      {
        name: 'Tablet with warning (Draconic)',
      },
      {
        name: 'Tablet with warning (Druidic*)',
      },
      {
        name: 'Tablet with warning (Dwarvish)',
      },
      {
        name: 'Tablet with warning (Elvish)',
      },
      {
        name: 'Tablet with warning (Giant)',
      },
      {
        name: 'Tablet with warning (Gnomish)',
      },
      {
        name: 'Tablet with warning (Goblin)',
      },
      {
        name: 'Tablet with warning (Halfling)',
      },
      {
        name: 'Tablet with warning (Infernal)',
      },
      {
        name: 'Tablet with warning (Orc)',
      },
      {
        name: 'Tablet with warning (Primordial)',
      },
      {
        name: 'Tablet with warning (Sylvan)',
      },
      {
        name: "Tablet with warning (Thieves' Cant*)",
      },
      {
        name: 'Tablet with warning (Undercommon)',
      },
      {
        name: 'Tablet with warning (Common)',
      },
      {
        name: 'Trap - Net Trap',
      },
      {
        name: 'Trap - Poison Darts',
      },
      {
        name: 'Trap - Poison Needle',
      },
      {
        name: 'Trap - Grease Trap',
      },
      {
        name: 'Trap - Fog Cloud',
      },
      {
        name: 'Trap - Bane',
      },
      {
        name: 'Trap - Spring-loaded Plate',
      },
      {
        name: 'Hazard - Quicksand',
      },
      {
        name: 'Hazard - Razorvine',
      },
      {
        name: 'Fountain (holy water)',
      },
      {
        name: 'Fountain (salt water)',
      },
      {
        name: 'Trap - Magical - 1st level spell',
      },
      {
        name: 'Trap - Magical - 2nd level spell',
      },
      {
        name: 'Trap - Magical - 3rd level spell',
      },
      {
        name: 'Trap - Magical - 4th level spell',
      },
      {
        name: 'Factory - Construct parts',
      },
      {
        name: 'Factory - Construct Assembly',
      },
      {
        name: 'Locomotive, damaged',
      },
      {
        name: 'Locomotive, active',
      },
      {
        name: 'Zeppelin, tethered to dock',
      },
      {
        name: 'Vault, exquisite, locked, trapped, full (DC20)',
      },
      {
        name: 'Vault, exquisite, locked, not trapped, full (DC25)',
      },
      {
        name: 'Vault, exquisite, unlocked, not trapped, empty',
      },
      {
        name: 'Guard Post, iron, riveted',
      },
      {
        name: 'Statue, Ornate Metalworked ',
      },
      {
        name: 'Crates, full (gears and mechanical parts)',
      },
    ],
  },
  mapInfo: {
    hasWeather: ['Yes', 'No'],
    weatherSeverity: [
      'clear',
      'partly cloudy',
      'cloudy',
      'overcast',
      'foggy',
      'hazy',
      'smoky',
      'dust',
      'mist',
      'drizzle',
      'light rain',
      'rain',
      'heavy rain',
      'freezing rain',
      'sleet',
      'hail',
      'thunderstorm',
      'tropical storm',
      'hurricane',
      'tornado',
      'snow',
      'blizzard',
      'ice storm',
      'heat wave',
      'cold wave',
      'high wind',
      'dust storm',
      'sandstorm',
      'flood',
      'drought',
    ],
    weatherType: [
      'clear',
      'cloudy',
      'ccid rain',
      'flash flood',
      'sandstorm',
      'wildfire',
      'blistering heat',
      'frostbite',
      'tidal tave',
      'tsunami',
      'volcanic eruption',
      'earthquake',
      'rain',
      'snow',
      'fog',
      'custom',
      'precipitation',
      'wind',
      'sunny',
      'stormy',
      'thunder',
      'hail',
      'dust',
      'sandy',
      'dusty',
      'rainy',
      'snowy',
      'foggy',
      'thunderstorms',
      'tornadoes',
      'hurricanes',
      'floods',
      'droughts',
      'typhoons',
      'blizzards',
      'snowstorms',
      'hailstorms',
      'winter storms',
      'sartially cloudy',
      'partially cloudy with snow',
      'partially cloudy with rain',
      'partially cloudy with hail',
      'partially cloudy with dust',
      'partially cloudy with sand',
      'partially cloudy with dusty',
      'partially cloudy with rainy',
      'partially cloudy with fog',
      'overcast',
      'drizzle',
    ],
    weatherChange: [
      'getting warmer',
      'getting colder',
      'getting wetter',
      'getting drier',
      'getting worse',
      'getting better',
    ],
    terrainType: [
      'alpine lake',
      'arctic',
      'artesian Spring',
      'badlands',
      'barren',
      'bay',
      'bayou',
      'beach',
      'bog',
      'caldera',
      'canals',
      'canyon',
      'caves',
      'cliffs',
      'crater',
      'desert',
      'dry Lake Bed',
      'dunes',
      'estuary',
      'farmland',
      'fault',
      'fields',
      'fissured',
      'fjords',
      'forest',
      'feysers',
      'flacier',
      'frassland',
      'harbor',
      'jills',
      'hot Spring',
      'ice Sheet',
      'island',
      'jungle',
      'kelp Bed',
      'lake',
      'lava Field',
      'lava Tube',
      'marsh',
      'meadow',
      'mine',
      'mountain',
      'nettles & Brambles',
      'oasis',
      'ocean',
      'orchard',
      'permafrost',
      'plains',
      'plateau',
      'pond',
      'prairie',
      'quicksand',
      'rain forest',
      'rapids',
      'reef',
      'river',
      'river delta',
      'rocky',
      'sand dunes',
      'sandbar',
      'savannah',
      'scrubland',
      'seaside',
      'sewers',
      'shallow sea',
      'sink hole',
      'spring',
      'strip mine',
      'swamp',
      'taiga (snow forest)',
      'tide pool',
      'tropical island',
      'tundra',
      'tunnels',
      'underground',
      'underground sea',
      'valley',
      'vineyard',
      'volcanic',
      'volcanic island',
      'wastelands',
      'waterfalls',
      'wetlands',
      'wildlands',
      'wind blasted',
      'floating island',
      'colosseum',
      'pirate ships',
      'moving train',
    ],
    dimensions: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    timeOfDay: [
      'Morning',
      'Sunrise',
      'Sunup',
      'Sunset',
      'Dawn',
      'Daylight',
      'Early Morning',
      'Late Morning',
      'Early Afternoon',
      'Late Afternoon',
      'Early Evening',
      'Late Evening',
      'AM',
      'PM',
      'At the crack of dawn',
      'Bedtime',
      'Breakfast',
      'Dinner time',
      'Lunch time',
      'Eventide',
      'The witching hour',
      'Past Midnight',
      'Tea time',
      'Mid morning',
      'Mid afternoon',
      'Mid evening',
      'Office hours',
      'Visting hours',
      'Quarter to midnight',
      'Quarter to morning',
      'Quarter to afternoon',
      'Quarter to evening',
      'Quarter to bedtime',
      'Quarter to breakfast',
      'Quarter to dinner',
      'Quarter to lunch',
      'Quarter to tea time',
      'Quarter to office hours',
      'Quarter to visiting hours',
      'Quarter to eventide',
      'Quarter to the witching hour',
      'Quarter to past midnight',
      'Quarter to tea time',
      'Quarter to mid morning',
      'Quarter to mid afternoon',
      'Quarter to mid evening',
      'Quarter to office hours',
      'Quarter to visiting hours',

      'Twilight',
      'Noon',
      'Midday',
      'Afternoon',
      'Evening',
      'Dusk',
      'Night',
      'Midnight',
    ],
    playerStartingPotions: ['3'],
    oppositionStartingPotions: ['0', '1', '2'],
    objects: [
      {
        name: 'Altar (broken/ruins)',
      },
      {
        name: 'Altar (intact)',
      },
      {
        name: 'Anchor, large',
      },
      {
        name: 'Anchor, small',
      },
      {
        name: 'Animal Pen',
      },
      {
        name: 'Animal Trap, small (1d4 + grapple)',
      },
      {
        name: 'Anvil',
      },
      {
        name: 'Apiary (beehive yard)',
      },
      {
        name: 'Arch',
      },
      {
        name: 'Aviary (hawks)',
      },
      {
        name: 'Aviary (hummingbirds)',
      },
      {
        name: 'Aviary (white doves)',
      },
      {
        name: 'Barn',
      },
      {
        name: 'Barrel',
      },
      {
        name: 'Barrels',
      },
      {
        name: 'Beehive (angry)',
      },
      {
        name: 'Beehive (passive)',
      },
      {
        name: 'Books (all pages missing or blank)',
      },
      {
        name: 'Bookshelf (ruined)',
      },
      {
        name: 'Boulder (L)',
      },
      {
        name: 'Boulders (M)',
      },
      {
        name: 'Bridge (broken, metal)',
      },
      {
        name: 'Bridge (broken, stone)',
      },
      {
        name: 'Bridge (broken, wooden)',
      },
      {
        name: 'Bridge (intact, metal)',
      },
      {
        name: 'Bridge (intact, stone)',
      },
      {
        name: 'Bridge (intact, wooden)',
      },
      {
        name: 'Building Ruins (L)',
      },
      {
        name: 'Building Ruins (S)',
      },
      {
        name: 'Bunker',
      },
      {
        name: 'Campfire (lit)',
      },
      {
        name: 'Campfire (out)',
      },
      {
        name: 'Caravan Wagon',
      },
      {
        name: 'Carnival Tent',
      },
      {
        name: 'Cart',
      },
      {
        name: 'Castle Ruins',
      },
      {
        name: 'Cauldron (empty)',
      },
      {
        name: 'Cauldron (full)',
      },
      {
        name: 'Chariot',
      },
      {
        name: 'Chest (locked)',
      },
      {
        name: 'Chest (unlocked)',
      },
      {
        name: 'Clock (broken)',
      },
      {
        name: 'Clock (intact)',
      },
      {
        name: 'Clock Tower (intact)',
      },
      {
        name: 'Clock Tower (toppled)',
      },
      {
        name: 'Coffin',
      },
      {
        name: 'Cog(s), Large (10ft)',
      },
      {
        name: 'Cog(s), Massive (25ft)',
      },
      {
        name: 'Corpse',
      },
      {
        name: 'Corpses',
      },
      {
        name: 'Crate (empty)',
      },
      {
        name: 'Crate (full)',
      },
      {
        name: 'Crates (empty)',
      },
      {
        name: 'Crates (full)',
      },
      {
        name: 'Dammed River',
      },
      {
        name: 'Den (empty)',
      },
      {
        name: 'Dog House',
      },
      {
        name: 'Fallen Tree (large)',
      },
      {
        name: 'Fallen Tree (small)',
      },
      {
        name: 'Farmhouse',
      },
      {
        name: 'Footlocker, locked',
      },
      {
        name: 'Footlocker, unlocked',
      },
      {
        name: 'Fountain (water)',
      },
      {
        name: 'Garden (butterflies)',
      },
      {
        name: 'Garden (fruits + vegetables)',
      },
      {
        name: 'Garden (giant fruits + vegetables)',
      },
      {
        name: 'Gemstones (small, rough)',
      },
      {
        name: 'Geyser',
      },
      {
        name: 'Giant Mushrooms, safe',
      },
      {
        name: 'Giant Mushrooms, toxic',
      },
      {
        name: 'Granary',
      },
      {
        name: 'Gravestones',
      },
      {
        name: 'Graveyard, (HOLY, Hallow spell)',
      },
      {
        name: 'Greenhouse (carnivorous plants)',
      },
      {
        name: 'Greenhouse (halucinagenic plants)',
      },
      {
        name: 'Greenhouse (poisonous plants)',
      },
      {
        name: 'House',
      },
      {
        name: 'Bell, Huge (20ft) (on side, intact)',
      },
      {
        name: 'Illusory Object',
      },
      {
        name: 'Illusory Person/NPC',
      },
      {
        name: 'Chest, large',
      },
      {
        name: 'Lighthouse',
      },
      {
        name: 'Log Pile, large',
      },
      {
        name: 'Mausoleum',
      },
      {
        name: 'Meteorite',
      },
      {
        name: 'Nest (empty)',
      },
      {
        name: 'Obelisk (intact)',
      },
      {
        name: 'Obelisk (ruined)',
      },
      {
        name: 'Obelisk (toppled)',
      },
      {
        name: 'Observatory',
      },
      {
        name: 'Petrified Creatures',
      },
      {
        name: 'Picnic (basic foods + drink)',
      },
      {
        name: 'Picnic (exotic foods/drinks, inspiration)',
      },
      {
        name: 'Picnic (heroes feast)',
      },
      {
        name: 'Picnic Basket',
      },
      {
        name: 'Pond, small (20ft)',
      },
      {
        name: 'River, water',
      },
      {
        name: 'Road',
      },
      {
        name: 'Rock patch (L)',
      },
      {
        name: 'Scarecrow',
      },
      {
        name: 'Scrap Metal (copper; scattered)',
      },
      {
        name: 'Scrap Metal (gold; scattered)',
      },
      {
        name: 'Scrap Metal (iron; scattered)',
      },
      {
        name: 'Scrap Metal (mithril; scattered)',
      },
      {
        name: 'Scrap Metal (platinum; scattered)',
      },
      {
        name: 'Scrap Metal (silver; scattered)',
      },
      {
        name: 'Shack',
      },
      {
        name: 'Ship (intact)',
      },
      {
        name: 'Ship (wrecked)',
      },
      {
        name: "Ship's Sail",
      },
      {
        name: 'Skeletal Remains (L)',
      },
      {
        name: 'Skeletal Remains (S)',
      },
      {
        name: 'Chest, small',
      },
      {
        name: 'Fortress, small (60ft sq)',
      },
      {
        name: 'Stables',
      },
      {
        name: 'Standing Stones',
      },
      {
        name: 'Statue (intact)',
      },
      {
        name: 'Statue (ruined)',
      },
      {
        name: 'Statue (toppled)',
      },
      {
        name: 'Stream',
      },
      {
        name: 'Table + Chairs (stone)',
      },
      {
        name: 'Table + Chairs (wood)',
      },
      {
        name: 'Tavern',
      },
      {
        name: 'Telescope',
      },
      {
        name: 'Temple Ruins',
      },
      {
        name: 'Tent',
      },
      {
        name: 'Throne (intact)',
      },
      {
        name: 'Throne (toppled)',
      },
      {
        name: 'Tomb (broken/empty)',
      },
      {
        name: 'Tomb (intact)',
      },
      {
        name: 'Totem Pole',
      },
      {
        name: 'Tower (stone, broken)',
      },
      {
        name: 'Tree (massive)',
      },
      {
        name: 'Treehouse, full enclosure',
      },
      {
        name: 'Treehouse, platform',
      },
      {
        name: 'Trench (5x20ft)',
      },
      {
        name: 'Wall, stone',
      },
      {
        name: 'Watchtower',
      },
      {
        name: 'Well',
      },
      {
        name: 'Windmill',
      },
      {
        name: 'Wizard Tower (intact)',
      },
      {
        name: 'Wizard Tower (ruins)',
      },
      {
        name: 'Worn Path',
      },
      {
        name: 'Wall, wooden',
      },
      {
        name: 'Wall, corpses',
      },
      {
        name: 'Wall, brambles',
      },
      {
        name: 'Wall, ice',
      },
      {
        name: 'Wall, fire',
      },
      {
        name: 'Waterfall',
      },
      {
        name: 'Den (occupied)',
      },
      {
        name: 'Palisade, wooden',
      },
      {
        name: 'Fence, Iron',
      },
      {
        name: 'Fence, Wood',
      },
      {
        name: 'Moat',
      },
      {
        name: 'Pond, large (40ft)',
      },
      {
        name: 'Gazebo',
      },
      {
        name: 'Bell, Medium (5ft) (on side, intact)',
      },
      {
        name: 'Gong',
      },
      {
        name: 'Mine Shaft (50ft deep)',
      },
      {
        name: 'Mirror',
      },
      {
        name: 'Kiln (empty)',
      },
      {
        name: 'Desk',
      },
      {
        name: 'Battering Ram',
      },
      {
        name: 'Target Dummy, tiny, swinging',
      },
      {
        name: 'Target Dummy, tiny, stationary',
      },
      {
        name: 'Alchemical Lab (magical, bonus effects)',
      },
      {
        name: 'Alchemical Lab (empty)',
      },
      {
        name: 'Alchemical Lab (ingredients prepped)',
      },
      {
        name: 'Target Dummy, medium, swinging',
      },
      {
        name: 'Target Dummy, medium, stationary',
      },
      {
        name: 'Target Dummy, huge, swinging',
      },
      {
        name: 'Target Dummy, huge, stationary',
      },
      {
        name: 'Fireworks',
      },
      {
        name: 'Still (empty)',
      },
      {
        name: 'Still (ingredients prepped)',
      },
      {
        name: "Brewer's Setup (empty)",
      },
      {
        name: "Brewer's Setup (ingredients prepped)",
      },
      {
        name: "Brewer's Setup (magical, bonus effects)",
      },
      {
        name: 'Calligraphy Desk (empty)',
      },
      {
        name: 'Calligraphy Desk (ingredients prepped)',
      },
      {
        name: 'Calligraphy Desk (magical, bonus effects)',
      },
      {
        name: "Cartographer's Station (empty)",
      },
      {
        name: "Cartographer's Station (ingredients prepped)",
      },
      {
        name: "Cartographer's Station (magical, bonus effects)",
      },
      {
        name: 'Cobbler Bench (empty)',
      },
      {
        name: 'Cobbler Bench (ingredients prepped)',
      },
      {
        name: 'Cobbler Bench (magical, bonus effects)',
      },
      {
        name: "Chef's Table (empty)",
      },
      {
        name: "Chef's Table (ingredients prepped)",
      },
      {
        name: "Chef's Table (magical, bonus effects)",
      },
      {
        name: 'Waterwheel',
      },
      {
        name: 'Stage',
      },
      {
        name: 'Stockade',
      },
      {
        name: 'Guillotine',
      },
      {
        name: 'Casino',
      },
      {
        name: 'Wooden Horse, giant, hollow',
      },
      {
        name: 'Billboard, large (30ft)',
      },
      {
        name: 'Construct, small',
      },
      {
        name: 'Construct, medium',
      },
      {
        name: 'Construct, large',
      },
      {
        name: 'Bathtub, small (3ft)',
      },
      {
        name: 'Bathtub, huge (20ft)',
      },
      {
        name: 'Outhouse',
      },
      {
        name: 'Cannon, gunpowder loaded',
      },
      {
        name: 'Cannon, empty',
      },
      {
        name: 'Fortress, large (100ft sq)',
      },
      {
        name: 'Graveyard, (UNHOLY, Hallow spell)',
      },
      {
        name: 'Pyramid, tiny (5ft)',
      },
      {
        name: 'Pyramid, large (50ft base)',
      },
      {
        name: 'Pyramid, glass',
      },
      {
        name: 'Tower (stone, intact)',
      },
      {
        name: 'Tree, massive (15ft dia), hollow, occupied',
      },
      {
        name: 'Tree, massive (15ft dia), hollow, unoccupied',
      },
      {
        name: 'Airship, abandoned',
      },
      {
        name: 'Hot Air Balloon, tethered, occupied',
      },
      {
        name: 'Hot Air Balloon, tethered, unoccupied',
      },
      {
        name: 'Crystal Formation, huge (30ft patch)',
      },
      {
        name: 'Crystal Formation, small (5ft patch)',
      },
      {
        name: 'Catapult, loaded',
      },
      {
        name: 'Ballista, loaded',
      },
      {
        name: 'Ballista, empty',
      },
      {
        name: 'Catapult, empty',
      },
      {
        name: 'River, flowing lava',
      },
      {
        name: 'River, acid',
      },
      {
        name: 'Forge (normal)',
      },
      {
        name: 'Forge (masterwork, +4 on checks)',
      },
      {
        name: 'Forge (magical, bonus effect)',
      },
      {
        name: 'Floating Island, small (15ft)',
      },
      {
        name: 'Floating Island, large (30ft)',
      },
      {
        name: 'Floating Island, cluster (5ft-10ft each)',
      },
      {
        name: 'Cactus, large',
      },
      {
        name: 'Cactus, small',
      },
      {
        name: 'Cactus patch, medium (40ft)',
      },
      {
        name: 'Jeweler Crafting Hut (empty)',
      },
      {
        name: 'Jeweler Crafting Hut (ingredients prepped)',
      },
      {
        name: 'Jeweler Crafting Hut (magical, bonus effects)',
      },
      {
        name: 'Mammoth skull',
      },
      {
        name: 'Skeletal Remains, dragon, gargantuan',
      },
      {
        name: "Leatherworkers' Lodge (empty)",
      },
      {
        name: "Leatherworkers' Lodge (ingredients prepped)",
      },
      {
        name: "Leatherworkers' Lodge (magical, bonus effects)",
      },
      {
        name: "Painters' Studio",
      },
      {
        name: "Painters' Studio (empty)",
      },
      {
        name: "Painters' Studio (ingredients prepped)",
      },
      {
        name: "Painters' Studio (magical, bonus effects)",
      },
      {
        name: 'Kite, flying, tethered',
      },
      {
        name: 'Paraglider, in tact',
      },
      {
        name: 'Paraglider, damaged',
      },
      {
        name: 'Animal Trap, large (3d4 + grapple)',
      },
      {
        name: 'Pit Trap, 10ft (DC10)',
      },
      {
        name: 'Fighting Pit, no trigger',
      },
      {
        name: 'Kiln (ingredients prepped)',
      },
      {
        name: 'Kiln (magical, bonus effects)',
      },
      {
        name: 'Tinker Table (normal)',
      },
      {
        name: 'Tinker Table (masterwork, +4 on checks)',
      },
      {
        name: 'Tinker Table (magical, bonus effects)',
      },
      {
        name: 'Woodshop (normal)',
      },
      {
        name: 'Woodshop (masterwork, +4 on checks)',
      },
      {
        name: 'Woodshop (magical, bonus effects)',
      },
      {
        name: 'Loom (normal)',
      },
      {
        name: 'Loom (masterwork, +4 on checks)',
      },
      {
        name: 'Loom (magical, bonus effects)',
      },
      {
        name: 'Walk-in Wardrobe (normal)',
      },
      {
        name: 'Walk-in Wardrobe (masterwork, +4 on checks)',
      },
      {
        name: 'Walk-in Wardrobe (magical, bonus effects)',
      },
      {
        name: 'Backpack (empty)',
      },
      {
        name: 'Backpack (full)',
      },
      {
        name: 'Bottle(s) (empty)',
      },
      {
        name: 'Bottle(s) (full)',
      },
      {
        name: 'Pouch (empty)',
      },
      {
        name: 'Pouch (full)',
      },
      {
        name: 'Shrine (Auril, goddess of winter NE Nature, Tempest)',
      },
      {
        name: 'Shrine (Azuth, god of wizards LN Knowledge)',
      },
      {
        name: 'Shrine (Bane, god o f tyranny LE War)',
      },
      {
        name: 'Shrine (Beshaba, goddess of misfortune CE Trickery)',
      },
      {
        name: 'Shrine (Bhaal, god o f murder NE Death)',
      },
      {
        name: 'Shrine (Chauntea, goddess of agriculture NG Life)',
      },
      {
        name: 'Shrine (Cyric, god o f lies CE Trickery)',
      },
      {
        name: 'Shrine (Deneir, god of writing NG Knowledge)',
      },
      {
        name: 'Shrine (Eldath, goddess of peace NG Life, Nature)',
      },
      {
        name: 'Shrine (Gond, god of craft N Knowledge)',
      },
      {
        name: 'Shrine (Helm, god of protection LN Life, Light)',
      },
      {
        name: 'Shrine (Ilmater, god o f endurance LG Life)',
      },
      {
        name: 'Shrine (Kelemvor, god of the dead LN Death)',
      },
      {
        name: 'Shrine (Lathander, god of birth and renewal NG Life, Light)',
      },
      {
        name: 'Shrine (Leira, goddess of illusion CN Trickery)',
      },
      {
        name: 'Shrine (Lliira, goddess of joy CG Life)',
      },
      {
        name: 'Shrine (Loviatar, goddess of pain LE Death)',
      },
      {
        name: 'Shrine (Malar, god of the hunt CE Nature)',
      },
      {
        name: 'Shrine (Mask, god of thieves CN Trickery)',
      },
      {
        name: 'Shrine (Mielikki, goddess of forests NG Nature)',
      },
      {
        name: 'Shrine (Milil, god of poetry and song NG Light)',
      },
      {
        name: 'Shrine (Myrkul, god of death NE Death)',
      },
      {
        name: 'Shrine (Mystra, goddess of magic NG Knowledge)',
      },
      {
        name: 'Shrine (Oghma, god of knowledge N Knowledge)',
      },
      {
        name: 'Shrine (Savras, god of divination and fate LN Knowledge)',
      },
      {
        name: 'Shrine (Selune, goddess o f the moon CG Knowledge, Life)',
      },
      {
        name: 'Shrine (Shar, goddess of darkness and loss NE Death, Trickery)',
      },
      {
        name: 'Shrine (Silvanus, god of wild nature N Nature)',
      },
      {
        name: 'Shrine (Sune, goddess of love and beauty CG Life, Light)',
      },
      {
        name: 'Shrine (Talona, goddess of disease and poison CE Death)',
      },
      {
        name: 'Shrine (Talos, god of storms CE Tempest)',
      },
      {
        name: 'Shrine (Tempus, god of war N War)',
      },
      {
        name: 'Shrine (Torm, god of courage and self-sacrifice LG War)',
      },
      {
        name: 'Shrine (Tymora, goddess of good fortune CG Trickery)',
      },
      {
        name: 'Shrine (Tyr, god o f justice LG War)',
      },
      {
        name: 'Shrine (Umberlee, goddess of the sea CE Tempest)',
      },
      {
        name: 'Shrine (Waukeen, goddess o f trade N Knowledge, Trickery)',
      },
      {
        name: 'Beast (Eagle)',
      },
      {
        name: 'Beast (Deer)',
      },
      {
        name: 'Beast (Fox)',
      },
      {
        name: 'Beast (Goats)',
      },
      {
        name: 'Beast (Owl)',
      },
      {
        name: 'Beast (Vultures)',
      },
      {
        name: 'Beast (Camel)',
      },
      {
        name: 'Beast (Pony)',
      },
      {
        name: 'Beast (Boar)',
      },
      {
        name: 'Beast (Elk)',
      },
      {
        name: 'Beast (Giant Spider)',
      },
      {
        name: 'Beast (Ox)',
      },
      {
        name: 'Beast (Tiger)',
      },
      {
        name: 'Beast (Panther)',
      },
      {
        name: 'Beast (Velociraptors)',
      },
      {
        name: 'Beast (Ape)',
      },
      {
        name: 'Beast (Black Bear)',
      },
      {
        name: 'Beast (Crocodile)',
      },
      {
        name: 'Beast (Lion)',
      },
      {
        name: 'Beast (Giant Boar)',
      },
      {
        name: 'Beast (Rhinoceros)',
      },
      {
        name: 'Beast (Allosaurus)',
      },
      {
        name: 'Beast (Zebra)',
      },
      {
        name: 'Beast (Wolf)',
      },
      {
        name: 'Beast (Elephant)',
      },
      {
        name: 'Beast (Giraffe)',
      },
      {
        name: 'Beast (Giant Poisonous Snake)',
      },
      {
        name: 'Beast (Giant Constrictor Snake)',
      },
      {
        name: 'Druid - wildshaped as a beast',
      },
      {
        name: 'Fighter - passing through to a tournament',
      },
      {
        name: 'Fighter - elite guard, confident, seasoned',
      },
      {
        name: 'Barbarian - retired, training; jovial, storyteller',
      },
      {
        name: 'Paladin - glistening, hunting evil',
      },
      {
        name: 'Paladin - cursed and evil, dark plate',
      },
      {
        name: 'Bard - late for their show; dramatic, fancy',
      },
      {
        name: 'Bard - lulling animals with songs',
      },
      {
        name: 'Cleric - searching for meaning',
      },
      {
        name: 'Druid - insane; causing wild weather',
      },
      {
        name: 'Monk - meditating peacefully',
      },
      {
        name: 'Monk - sprinting, training',
      },
      {
        name: 'Ranger - hunting, stealthing',
      },
      {
        name: 'Ranger - playing with companion',
      },
      {
        name: 'Rogue - pickpocket, thief',
      },
      {
        name: 'Rogue - spy, very stealthy',
      },
      {
        name: 'Sorcerer - hermit, practicing in isolation',
      },
      {
        name: 'Warlock - seeking to fulfill pact; focused',
      },
      {
        name: 'Wizard - learning, reading; wants to be left alone',
      },
      {
        name: 'Wizard - cocky, show-off',
      },
      {
        name: "Psionic - elusive, intense; can't be bothered",
      },
      {
        name: 'Cleric - preaching their god; hopeful, insightful',
      },
      {
        name: 'Barbarian - destined for greatness; determined',
      },
      {
        name: 'terror stricken peasants fleeing',
      },
      {
        name: 'Wandering merchant, no security',
      },
      {
        name: 'Monsters trying to travel peacefully',
      },
      {
        name: 'hostile cultists of a dark god',
      },
      {
        name: 'travellers who really like black cloaks',
      },
      {
        name: 'highwaymen',
      },
      {
        name: 'Military patrol',
      },
      {
        name: 'wealthy merchant with security',
      },
      {
        name: 'person walking their pet(s)',
      },
      {
        name: 'lone person - survivor of attack',
      },
      {
        name: 'lone person - scout',
      },
      {
        name: 'lone person - con man',
      },
      {
        name: 'lone person - hermit',
      },
      {
        name: 'lone person - assassin (for hire)',
      },
      {
        name: 'weary elderly person with family trinket',
      },
      {
        name: 'shapeshifter/changeling learning about people',
      },
      {
        name: 'wounded, suffering animal',
      },
      {
        name: 'wounded monster in fear for its life',
      },
      {
        name: 'drug addict, suffering terribly',
      },
      {
        name: 'diseased and contagious person',
      },
      {
        name: 'coven of hags',
      },
      {
        name: 'witch, aggressive, but not hostile',
      },
      {
        name: 'construct, broken/not working currently',
      },
      {
        name: 'engineer with a highly experimental contraption',
      },
      {
        name: 'alchemist with a highly experimental concotion',
      },
      {
        name: 'brewer with a highly experimental beverage',
      },
      {
        name: 'pointy hat wizard riding quickly on warhorse',
      },
      {
        name: 'humanoid, masked, robed, riding skeletal horse',
      },
      {
        name: 'Orbed Spire (not charged)',
      },
      {
        name: 'Orbed Spire (spread current magic to others in 15ft)',
      },
      {
        name: 'Orbed Spire (dispel target)',
      },
      {
        name: 'Orbed Spire (amplifier, not charged)',
      },
      {
        name: 'Orbed Spire (abjuration spell charged)',
      },
      {
        name: 'Orbed Spire (conjuration spell charged)',
      },
      {
        name: 'Orbed Spire (diviniation spell charged)',
      },
      {
        name: 'Orbed Spire (enchantment spell charged)',
      },
      {
        name: 'Orbed Spire (evocation spell charged)',
      },
      {
        name: 'Orbed Spire (illusion spell charged)',
      },
      {
        name: 'Orbed Spire (necromancy spell charged)',
      },
      {
        name: 'Orbed Spire (transmutation spell charged)',
      },
      {
        name: 'Tablet with warning (Abyssal)',
      },
      {
        name: 'Tablet with warning (Celestial)',
      },
      {
        name: 'Tablet with warning (Deep Speech)',
      },
      {
        name: 'Tablet with warning (Draconic)',
      },
      {
        name: 'Tablet with warning (Druidic*)',
      },
      {
        name: 'Tablet with warning (Dwarvish)',
      },
      {
        name: 'Tablet with warning (Elvish)',
      },
      {
        name: 'Tablet with warning (Giant)',
      },
      {
        name: 'Tablet with warning (Gnomish)',
      },
      {
        name: 'Tablet with warning (Goblin)',
      },
      {
        name: 'Tablet with warning (Halfling)',
      },
      {
        name: 'Tablet with warning (Infernal)',
      },
      {
        name: 'Tablet with warning (Orc)',
      },
      {
        name: 'Tablet with warning (Primordial)',
      },
      {
        name: 'Tablet with warning (Sylvan)',
      },
      {
        name: "Tablet with warning (Thieves' Cant*)",
      },
      {
        name: 'Tablet with warning (Undercommon)',
      },
      {
        name: 'Tablet with warning (Common)',
      },
      {
        name: 'Trap - Net Trap',
      },
      {
        name: 'Trap - Poison Darts',
      },
      {
        name: 'Trap - Poison Needle',
      },
      {
        name: 'Trap - Grease Trap',
      },
      {
        name: 'Trap - Fog Cloud',
      },
      {
        name: 'Trap - Bane',
      },
      {
        name: 'Trap - Spring-loaded Plate',
      },
      {
        name: 'Hazard - Quicksand',
      },
      {
        name: 'Hazard - Razorvine',
      },
      {
        name: 'Fountain (holy water)',
      },
      {
        name: 'Fountain (salt water)',
      },
      {
        name: 'Trap - Magical - 1st level spell',
      },
      {
        name: 'Trap - Magical - 2nd level spell',
      },
      {
        name: 'Trap - Magical - 3rd level spell',
      },
      {
        name: 'Trap - Magical - 4th level spell',
      },
      {
        name: 'Factory - Construct parts',
      },
      {
        name: 'Factory - Construct Assembly',
      },
      {
        name: 'Locomotive, damaged',
      },
      {
        name: 'Locomotive, active',
      },
      {
        name: 'Zeppelin, tethered to dock',
      },
      {
        name: 'Vault, exquisite, locked, trapped, full (DC20)',
      },
      {
        name: 'Vault, exquisite, locked, not trapped, full (DC25)',
      },
      {
        name: 'Vault, exquisite, unlocked, not trapped, empty',
      },
      {
        name: 'Guard Post, iron, riveted',
      },
      {
        name: 'Statue, Ornate Metalworked ',
      },
      {
        name: 'Crates, full (gears and mechanical parts)',
      },
    ],
  },
  encounterModifier: {
    playerCount: [
      { value: 1, label: 1 },
      { value: 2, label: 2 },
      { value: 3, label: 3 },
      { value: 4, label: 4 },
      { value: 5, label: 5 },
      { value: 6, label: 6 },
      { value: 7, label: 7 },
      { value: 8, label: 8 },
      { value: 9, label: 9 },
      { value: 10, label: 10 },
    ],
    playerLevelStart: [
      { value: 1, label: 1 },
      { value: 2, label: 2 },
      { value: 3, label: 3 },
      { value: 4, label: 4 },
      { value: 5, label: 5 },
      { value: 6, label: 6 },
      { value: 7, label: 7 },
      { value: 8, label: 8 },
      { value: 9, label: 9 },
      { value: 10, label: 10 },
      { value: 11, label: 11 },
      { value: 12, label: 12 },
      { value: 13, label: 13 },
      { value: 14, label: 14 },
      { value: 15, label: 15 },
      { value: 16, label: 16 },
      { value: 17, label: 17 },
      { value: 18, label: 18 },
      { value: 19, label: 19 },
      { value: 20, label: 20 },
    ],
  },
  quest: {
    objectives: [
      'Defend this location',
      'Defend this object',
      'Defend this creature',
      'Defend this NPC',
      'Obtain the object',
      'Obtain the creature',
      'Obtain the NPC',
      'Obtain the item',
      'Obtain the Item (Opposition, controls, carrying with)',
      'Obtain the Item (at Object, Opposition searching for it)',
      'Obtain the Item (Opposition, controls, stored at an Object)',
      'Rescue the NPC',
      'Rescue the target',
      'Rescue the creature',
      'Find the NPC',
      'Find the target',
      'Find the creature',
      'Find the object',
      'Find the item',
      'Find the flag',
      'Find the treasure',
      'Find the artifact',
      'Capture the flag (hold for 2 rounds)',
      'Capture the creature',
      'Capture the object',
      'Capture the item',
      'Cleanse the area of evil',
      'Cleanse the area of enemies',
    ],
  },
};
