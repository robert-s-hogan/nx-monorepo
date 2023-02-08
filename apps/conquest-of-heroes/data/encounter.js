export const encounter = {
  difficulty: ['easy', 'medium', 'hard', 'deadly'],
  monsters: {
    challengeRating: {
      easy: ['goblin', 'skelton', 'zombie'],
      medium: ['ranger', 'bandit', 'thief'],
      hard: ['orc', 'troll'],
      deadly: ['mage', 'warrior', 'cleric'],
    },
  },
  intro: {
    arrival: ['come to', 'land near', 'arrive', 'enter', 'appear', 'happen upon'],
    atmosphere: ['is clear', 'is dark', 'is foggy', 'is rainy', 'is snowy'],
    range: ['pretty close', 'noticeable', 'far away'],
    details: ['goes out as far as you can see', 'to be at the end', 'to be at the beginning'],
    sense: {
      senseDescription: {
        senseSmell: [
          'smell something sweet',
          'smell something strong',
          'smell something bitter',
        ],
        senseLighting: [
          'see a light',
          'see something faint in the darkness',
          'can barely make anything out due to how bright it is',
        ],
        senseSound: ['hear a loud noise', 'hear a faint noise', 'hear a loud sound'],
        senseTaste: ['taste a bittnerness in the air', 'taste a sweetness in the air'],
      },
      senseObject: ['from a flower', 'from a tree', 'from a bird', 'from a horizon'],
      senseDegree: ['overwhelming', 'faint', 'strong'],
    },
    location: {
      locationDescription: ['swamps all around', 'heavy vegetation'],
      locationLandscape: {
        locationObject: ['bushes', 'shrubs', 'flowers', 'water', 'vines'],
        locationDuration: ['you see a light periodically', 'you see bushes everywhere'],
      },
    },
    size: {
      sizeLocations: ['room', 'cave', 'caveroom', 'dungeon', 'house', 'town', 'city'],
      sizeLocationDescription: [
        'high vaulted ceilings',
        'low vaulted ceilings',
        'moss on the walls',
        'cracks on the walls',
        'broken glass',
      ],
    },
    lighting: {
      lightingObjects: [
        'Row of torches',
        'Row of lanterns',
        'Row of candles',
        'Vines',
        'Branches',
        'Blood',
        'Bones',
        'Rotten flesh',
        'Oil',
      ],
      lightingObjectDescription: ['line the walls', 'line the ceiling', 'line the floor'],
      lightingBrightness: [
        'offering a dim light',
        'offering a bright light',
        'offering limited light',
      ],
      lightingDescription: [
        'shadows to flicker every which-way',
        'shadow to flicer towards the right',
        'shadow to flicker towards the left',
      ],
    },
    events: {
      eventsObject: [
        'large animal-bone chandelier',
        'bushes',
        'tree branches',
        'carcass',
        'bones',
        'blood',
      ],
      eventObjectMovement: ['slowly move back and forth', 'around the room', 'around the area'],
      eventsObjectLocation: ['above', 'below', 'on the left', 'on the right'],
    },
    senses: {
      sensesLocation: [
        'From the crowd',
        'From the shadows',
        'From the air',
        'From the floor',
        'From the bushes',
      ],
      sensesSound: ['rhythmic pounding of metal', 'rustling of leaves', 'whispers of voices'],
      sensesVerb: [
        'suddenly burst',
        'suddenly the noise stops',
        'suddenly the noise gets louder',
        'suddenly the noise gets softer',
      ],
      sensesMood: [
        'both cheering and booing',
        'both cheering and crying',
        'both cheering and laughing',
        'both cheering and screaming',
        'your general direction',
      ],
    },
    mood: {
      moodIntro: ['Despite the ruckus', 'Despite the noise', 'Despite the light', 'Regardless'],
      moodDescription: [
        'seems to be in good spirits here',
        'seems to be in bad spirits here',
        'seems to be looking at you',
      ],
    },
  },
  mapInfo: {
    hasWeather: ['Yes', 'No'],
    weatherSeverity: ['light', 'clear', 'severe', 'extreme'],
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
    playerStartingPotions: ['1', '2', '3', '4'],
    oppositionStartingPotions: ['1', '2', '3', '4'],
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
