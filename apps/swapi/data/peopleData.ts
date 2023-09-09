import { Person } from '../types/people';

export const people: Person[] = [
  {
    id: 'yoda-01',
    slug: 'yoda',
    name: 'Yoda',
    birth_year: '896 BBY',
    homeworld: 'Unknown',
    species: "Yoda's species",
    persona: ['Jedi'],
    backstory:
      "A legendary figure within the galaxy, Yoda served as a wise and powerful Jedi Master for over eight centuries. Born nearly 900 years before the Battle of Yavin, Yoda's origins and the specifics of his species remain one of the galaxy's great mysteries. As a leading figure within the Jedi Council, Yoda played pivotal roles during the twilight years of the Galactic Republic, guiding young Jedi and providing sage counsel during the political upheavals and wars that defined the era. Yet, it was his wisdom and foresight that led him into seclusion after the rise of the Empire, ensuring that the ways of the Jedi would be passed on to a new generation, notably training Luke Skywalker, the last hope for the galaxy. Throughout his life, Yoda's deep connection to the Force and his commitment to balance made him a beacon of hope and an enduring symbol of Jedi values.",
    affiliation: ['Jedi Order', 'Galactic Republic'],
    occupation: 'Jedi Master',
    appearances: [
      'The Empire Strikes Back',
      'Return of the Jedi',
      'The Phantom Menace',
      'Attack of the Clones',
      'Revenge of the Sith',
      'The Clone Wars',
      'Rebels',
    ],
    force_sensitive: true,
    alias: [],
    weapons: ['Green lightsaber'],
    vehicles: [],
    droids: ['R2-D2'],
    force_ability: 'Jedi Grand Master',
    quote: 'Do. Or do not. There is no try.',
    skills: [
      'Lightsaber combat',
      'Force agility',
      'Telekinesis',
      'Force healing',
    ],
    bounty: null,
    known_associates: ['Luke Skywalker', 'Obi-Wan Kenobi', 'Mace Windu'],
    factions: ['Jedi'],
    status: 'Deceased',
    films: [
      'The Phantom Menace',
      'Attack of the Clones',
      'Revenge of the Sith',
      'The Empire Strikes Back',
      'Return of the Jedi',
    ],
    species_traits: ['Long lifespan', 'Force sensitivity', 'Small in size'],
    owned_starships: [],
    owned_vehicles: [],
    visited_planets: ['Dagobah', 'Coruscant', 'Kashyyyk'],
    relationships: {
      friends: ['Luke Skywalker', 'Obi-Wan Kenobi', 'Mace Windu'],
      enemies: ['Darth Sidious', 'Count Dooku'],
      family: null,
    },
    achievements: [
      'Trained Jedi for over 800 years',
      'Survived Order 66',
      'Trained Luke Skywalker',
    ],
    trivia: [
      'Yoda’s species has never been named, to add to the character’s sense of mystery.',
      'Frank Oz, the puppeteer and voice of Yoda, also performed the Muppets characters Miss Piggy and Cookie Monster.',
    ],
    main_story_arc:
      'Yoda, one of the oldest and most powerful Jedi Masters, plays a key role in training young Jedi and fighting against the dark side of the Force. After surviving the purge of the Jedi Order, he goes into hiding on Dagobah and later trains Luke Skywalker.',
    avatar_attributes: {
      avatar_size: 'xs',
      height: '66',
      mass: '17',
      hair_color: 'white',
      hair_style: 'none',
      body_shape: 'small',
      clothing: 'Jedi robes',
      accessories: ['lightsaber'],
      age: 'old',
      emotions: 'wise',
      faction_colors: ['light_green', 'cream'],
      species_traits: ['yodas_species', 'green_skin'],
      gender: 'male',
      eye_color: '#663300',
      skin_color: '#8B4513',
      dark_mode: {
        background_color: '#000000',
        clothing: 'Dark Jedi robes',
        lightsaber_color: '#00FF00',
      },
      animations: {
        speak: 'path/to/speak_animation',
        rotate: 'path/to/rotate_animation',
        custom_animation: 'path/to/custom_animation',
      },
      voice_lines: {
        greeting: 'Welcome, you are. Hmmmmmm.',
        farewell: 'Leave you must, return you will.',
      },
    },
  },
  {
    id: 'anakin-skywalker-01',
    slug: 'darth-vader',
    name: 'Darth Vader',
    birth_year: '41.9 BBY',
    homeworld: 'Tatooine',
    species: 'Human',
    persona: ['Sith', 'Jedi'],
    backstory:
      "Formerly known as Anakin Skywalker, Darth Vader stands as one of the galaxy's most feared figures. Once a promising Jedi Knight, Vader was seduced by the dark side of the Force and became the Sith apprentice to Emperor Palpatine. As Darth Vader, he led the purge of the Jedi Order and acted as the Emperor's enforcer during the reign of the Galactic Empire. His persona was defined by his menacing black armor and deep, mechanical breathing. Behind the mask, however, remained remnants of good, a facet ultimately brought to the surface by his son, Luke Skywalker.",
    affiliation: ['Sith', 'Galactic Empire'],
    occupation: 'Sith Lord',
    appearances: [
      'Revenge of the Sith',
      'Rogue One',
      'A New Hope',
      'The Empire Strikes Back',
      'Return of the Jedi',
    ],
    force_sensitive: true,
    alias: ['Anakin Skywalker'],
    weapons: ['Red lightsaber'],
    vehicles: ['TIE Advanced x1'],
    droids: ['R2-D2', 'C-3PO'],
    force_ability: 'Sith Lord',
    quote: 'I find your lack of faith disturbing.',
    skills: ['Lightsaber combat', 'Force choke', 'Telekinesis', 'Piloting'],
    bounty: null,
    known_associates: [
      'Emperor Palpatine',
      'Grand Moff Tarkin',
      'Luke Skywalker',
      'Leia Organa',
    ],
    factions: ['Sith', 'Galactic Empire'],
    status: 'Deceased',
    films: [
      'Revenge of the Sith',
      'Rogue One',
      'A New Hope',
      'The Empire Strikes Back',
      'Return of the Jedi',
    ],
    species_traits: ['Force sensitivity'],
    owned_starships: ['TIE Advanced x1'],
    owned_vehicles: [],
    visited_planets: [
      'Tatooine',
      'Coruscant',
      'Mustafar',
      'Endor',
      'Hoth',
      'Bespin',
    ],
    relationships: {
      friends: ['Emperor Palpatine'],
      enemies: ['Obi-Wan Kenobi', 'Luke Skywalker', 'Rebel Alliance'],
      family: [
        'Padmé Amidala (wife)',
        'Luke Skywalker (son)',
        'Leia Organa (daughter)',
      ],
    },
    achievements: [
      'Played a pivotal role in the purge of the Jedi Order',
      'Successfully hunted down many of the surviving Jedi',
      'Became the enforcer of the Galactic Empire',
    ],
    trivia: [
      'Darth Vader means "Dark Father" in Dutch.',
      'His armor was designed to keep him alive after the severe injuries on Mustafar.',
    ],
    main_story_arc:
      'Darth Vader, once the Jedi Knight Anakin Skywalker, becomes seduced by the dark side and rises as a chief enforcer of the Galactic Empire. His personal struggle with his identity and past culminate in a final confrontation with his son, leading to redemption.',
    avatar_attributes: {
      avatar_size: 'lg',
      height: '202',
      mass: '136',
      hair_color: 'none',
      hair_style: 'none',
      body_shape: 'athletic',
      clothing: 'Vader armor',
      accessories: ['lightsaber', 'cape', 'helmet'],
      age: 'middle-aged',
      emotions: 'stoic',
      faction_colors: ['black'],
      species_traits: ['human'],
      gender: 'male',
      eye_color: '#FF0000',
      skin_color: '#FFFFFF', // since most of his skin is not visible due to the armor
      dark_mode: {
        background_color: '#000000',
        clothing: 'Vader armor',
        lightsaber_color: '#FF0000',
      },
      animations: {
        speak: 'path/to/vader_speak_animation',
        rotate: 'path/to/vader_rotate_animation',
        custom_animation: 'path/to/vader_custom_animation',
      },
      voice_lines: {
        greeting: 'What is thy bidding, my master?',
        farewell: 'You have failed me for the last time.',
      },
    },
  },
  {
    id: 'anakin-skywalker-01',
    slug: 'anakin-skywalker',
    name: 'Anakin Skywalker',
    birth_year: '41.9 BBY',
    homeworld: 'Tatooine',
    species: 'Human',
    persona: ['Jedi', 'Sith'],
    backstory:
      "Once a promising young Jedi Knight, Anakin Skywalker's fear and anger led him down the dark path to become Darth Vader, Sith Lord and apprentice to Emperor Palpatine. Born as the Chosen One, he was prophesied to bring balance to the Force. His exceptional piloting skills and prowess in lightsaber combat made him a hero during the Clone Wars. However, his forbidden love for Padmé Amidala and his desperation to save her from a foreseen death created vulnerabilities that were exploited by Palpatine, resulting in Anakin's transformation. As Darth Vader, he became a feared enforcer of the Empire until his redemption by his son, Luke Skywalker.",
    affiliation: ['Jedi Order', 'Galactic Republic', 'Sith'],
    occupation: 'Jedi Knight',
    appearances: [
      'The Phantom Menace',
      'Attack of the Clones',
      'Revenge of the Sith',
      'The Clone Wars',
    ],
    force_sensitive: true,
    alias: ['Sky guy'],
    weapons: ['Blue lightsaber'],
    vehicles: ['Jedi Interceptor'],
    droids: ['R2-D2', 'C-3PO'],
    force_ability: 'Chosen One',
    quote:
      'I have brought peace, freedom, justice, and security to my new Empire.',
    skills: [
      'Lightsaber combat',
      'Force agility',
      'Telekinesis',
      'Mechanical aptitude',
    ],
    bounty: null,
    known_associates: ['Obi-Wan Kenobi', 'Padmé Amidala', 'Ahsoka Tano'],
    factions: ['Jedi', 'Sith'],
    status: 'Deceased',
    films: [
      'The Phantom Menace',
      'Attack of the Clones',
      'Revenge of the Sith',
    ],
    species_traits: ['Force sensitivity'],
    owned_starships: ['Jedi Interceptor'],
    owned_vehicles: ['Podracer'],
    visited_planets: ['Tatooine', 'Coruscant', 'Mustafar'],
    relationships: {
      friends: ['Obi-Wan Kenobi', 'Ahsoka Tano'],
      enemies: ['Darth Sidious', 'Count Dooku', 'Obi-Wan Kenobi (post-fall)'],
      family: [
        'Padmé Amidala (wife)',
        'Luke Skywalker (son)',
        'Leia Organa (daughter)',
      ],
    },
    achievements: [
      'Became a Jedi Knight',
      'Defeated Count Dooku',
      'Helped in the Clone Wars',
      'Became Darth Vader',
    ],
    trivia: [
      'Anakin was believed to be the Chosen One, prophesized to bring balance to the Force.',
      'He built the protocol droid C-3PO during his childhood on Tatooine.',
    ],
    main_story_arc:
      'Anakin Skywalker, once a heroic Jedi Knight, becomes seduced by the dark side of the Force and becomes Darth Vader. He plays a central role in the fall of the Galactic Republic and the rise of the Galactic Empire.',
    avatar_attributes: {
      avatar_size: 'lg',
      height: '188',
      mass: '84',
      hair_color: 'blond',
      hair_style: 'short',
      body_shape: 'athletic',
      clothing: 'Jedi robes',
      accessories: ['lightsaber'],
      age: 'young',
      emotions: 'conflicted',
      faction_colors: ['blue'],
      species_traits: ['human'],
      gender: 'male',
      eye_color: '#8B4513',
      skin_color: '#FAD6A5',
      dark_mode: {
        background_color: '#000000',
        clothing: 'Sith robes',
        lightsaber_color: '#FF0000',
      },
      animations: {
        speak: 'path/to/speak_animation',
        rotate: 'path/to/rotate_animation',
        custom_animation: 'path/to/custom_animation',
      },
      voice_lines: {
        greeting: 'This is where the fun begins.',
        farewell: 'May the Force be with you.',
      },
    },
  },
  {
    id: 'babu-frik-01',
    slug: 'babu-frik',
    name: 'Babu Frik',
    birth_year: 'Unknown',
    homeworld: 'Kijimi',
    species: 'Anzellan',
    persona: ['Droidsmith'],
    backstory:
      "Babu Frik is a tiny Anzellan droidsmith who worked among the Spice Runners of Kijimi. With a knack for reprogramming and modifying droids, Babu's skills played a crucial role in helping the Resistance decode C-3PO's memory banks during their quest to locate Exegol. Despite his diminutive size, Babu Frik's expertise and jovial personality left a lasting impression on those he encountered.",
    affiliation: [],
    occupation: 'Droidsmith',
    appearances: ['The Rise of Skywalker'],
    force_sensitive: false,
    alias: [],
    weapons: [],
    vehicles: [],
    droids: [],
    force_ability: null,
    quote: 'Hey, hey!',
    skills: ['Droid programming', 'Droid repair'],
    bounty: null,
    known_associates: ['Zorii Bliss'],
    factions: ['Neutral'],
    status: 'Alive',
    films: ['The Rise of Skywalker'],
    species_traits: ['Small stature', 'Technical expertise'],
    owned_starships: [],
    owned_vehicles: [],
    visited_planets: ['Kijimi'],
    relationships: {
      friends: ['Zorii Bliss', 'C-3PO'],
      enemies: [],
      family: null,
    },
    achievements: [
      "Successfully extracted Sith language from C-3PO's memory core",
    ],
    trivia: [
      'Babu Frik can reprogram or modify virtually any droid, regardless of its security measures.',
      'He speaks only Anzellan.',
    ],
    main_story_arc:
      'Babu Frik is a tiny droidsmith who works in the Thieves’ Quarter of the snow-covered planet Kijimi. He is one of the few beings who can reprogram or modify any droid, bypassing any system.',
    avatar_attributes: {
      avatar_size: 'xs',
      height: '22',
      mass: '6',
      hair_color: 'none',
      hair_style: 'none',
      body_shape: 'small',
      clothing: 'Work attire',
      accessories: ['Droid tools'],
      age: 'old',
      emotions: 'curious',
      faction_colors: ['brown', 'gray'],
      species_traits: ['anzellan'],
      gender: 'male',
      eye_color: '#8B4513', // Hex color for brown eyes
      skin_color: '#F5DEB3', // Hex color for light brown skin
      dark_mode: {
        background_color: '#000000',
        clothing: 'Dark work attire',
        accessories: ['Droid tools in silver'],
      },
      animations: {
        speak: 'path/to/speak_animation',
        rotate: 'path/to/rotate_animation',
        custom_animation: 'path/to/custom_animation',
      },
      voice_lines: {
        greeting: 'Hey, hey!',
        farewell: 'Goodbye!',
      },
    },
  },
  {
    id: 'leia-organa-01',
    slug: 'leia-organa',
    name: 'Leia Organa',
    birth_year: '19 BBY',
    homeworld: 'Alderaan',
    species: 'Human',
    persona: ['Princess', 'General'],
    backstory:
      "Born Leia Amidala Skywalker and later known as General Leia Organa, she was the daughter of Anakin Skywalker (Darth Vader) and Padmé Amidala, and the twin sister of Luke Skywalker. Raised by Bail and Queen Breha Organa of Alderaan, Leia was a fearless leader in the Rebel Alliance's fight against the Empire. A skilled diplomat, spy, and combatant, her Force sensitivity manifested later in life. Despite facing immense personal tragedy, including the loss of her home planet Alderaan and the dark path of her son Ben Solo (Kylo Ren), Leia remained a beacon of hope and leadership throughout the galaxy.",
    affiliation: ['Rebel Alliance', 'New Republic', 'Resistance'],
    occupation: 'Princess, General',
    appearances: [
      'A New Hope',
      'The Empire Strikes Back',
      'Return of the Jedi',
      'The Force Awakens',
      'The Last Jedi',
      'The Rise of Skywalker',
    ],
    force_sensitive: true,
    alias: ['Princess Leia'],
    weapons: ['Blaster pistol'],
    vehicles: [],
    droids: ['R2-D2', 'C-3PO'],
    force_ability: 'Potential Jedi',
    quote: 'Help me, Obi-Wan Kenobi. You’re my only hope.',
    skills: ['Leadership', 'Diplomacy', 'Marksmanship'],
    bounty: null,
    known_associates: ['Luke Skywalker', 'Han Solo', 'Chewbacca'],
    factions: ['Rebellion'],
    status: 'Deceased',
    films: [
      'A New Hope',
      'The Empire Strikes Back',
      'Return of the Jedi',
      'The Force Awakens',
      'The Last Jedi',
      'The Rise of Skywalker',
    ],
    species_traits: ['Force sensitivity'],
    owned_starships: ['Tantive IV'],
    owned_vehicles: [],
    visited_planets: ['Alderaan', 'Hoth', 'Endor', 'Crait'],
    relationships: {
      friends: ['Luke Skywalker', 'Han Solo', 'Chewbacca'],
      enemies: ['Darth Vader', 'Emperor Palpatine'],
      family: [
        'Padmé Amidala (mother)',
        'Anakin Skywalker (father)',
        'Luke Skywalker (brother)',
        'Ben Solo (son)',
      ],
    },
    achievements: [
      'Key figure in the Rebel Alliance',
      'Helped destroy both Death Stars',
      'Became a General in the Resistance',
    ],
    trivia: [
      'Leia was adopted by the Royal Family of Alderaan after her birth mother, Padmé, died.',
      'She is a twin, with Luke Skywalker being her brother.',
    ],
    main_story_arc:
      'Princess Leia Organa is a key figure in the Rebellion against the Galactic Empire, fighting alongside allies like Luke Skywalker and Han Solo. Later in life, she leads the Resistance against the First Order.',
    avatar_attributes: {
      avatar_size: 'sm',
      height: '150',
      mass: '49',
      hair_color: 'brown',
      hair_style: 'buns',
      body_shape: 'slim',
      clothing: 'Princess attire',
      accessories: ['Blaster'],
      age: 'young',
      emotions: 'determined',
      faction_colors: ['white', 'blue'],
      species_traits: ['human'],
      gender: 'female',
      eye_color: '#663300',
      skin_color: '#FAD6A5',
      dark_mode: {
        background_color: '#000000',
        clothing: 'Resistance attire',
        lightsaber_color: null,
      },
      animations: {
        speak: 'path/to/speak_animation',
        rotate: 'path/to/rotate_animation',
        custom_animation: 'path/to/custom_animation',
      },
      voice_lines: {
        greeting: 'The Rebellion needs you.',
        farewell: 'May the Force be with you.',
      },
    },
  },
  {
    id: 'han-solo-01',
    slug: 'han-solo',
    name: 'Han Solo',
    birth_year: '29 BBY',
    homeworld: 'Corellia',
    species: 'Human',
    persona: ['Smuggler', 'General'],
    backstory:
      "Han Solo, once a self-serving smuggler, became a hero and key figure in the defeat of the Galactic Empire. Hailing from Corellia, Han's early days were marked by struggle, leading to his life as a rogue smuggler alongside his co-pilot Chewbacca. After a chance meeting with Luke Skywalker and Obi-Wan Kenobi, and an eventual rescue of Princess Leia, Han's allegiances shifted, and he played an instrumental role in the Rebellion. His sharp wit, piloting skills, and deep love for Leia Organa make him an iconic figure in galactic history. His complex relationship with his son, Ben Solo, added depth to his later life.",
    affiliation: ['Rebel Alliance', 'New Republic'],
    occupation: 'Smuggler, Captain of the Millennium Falcon',
    appearances: [
      'A New Hope',
      'The Empire Strikes Back',
      'Return of the Jedi',
      'The Force Awakens',
    ],
    force_sensitive: false,
    alias: [],
    weapons: ['DL-44 heavy blaster pistol'],
    vehicles: ['Millennium Falcon'],
    droids: ['C-3PO', 'R2-D2'],
    force_ability: 'None',
    quote: 'Never tell me the odds!',
    skills: ['Piloting', 'Marksmanship', 'Smuggling'],
    bounty: null,
    known_associates: ['Luke Skywalker', 'Leia Organa', 'Chewbacca'],
    factions: ['Rebellion'],
    status: 'Deceased',
    films: [
      'A New Hope',
      'The Empire Strikes Back',
      'Return of the Jedi',
      'The Force Awakens',
    ],
    species_traits: [],
    owned_starships: ['Millennium Falcon'],
    owned_vehicles: [],
    visited_planets: ['Hoth', 'Endor', 'Takodana'],
    relationships: {
      friends: ['Luke Skywalker', 'Leia Organa', 'Chewbacca'],
      enemies: ['Darth Vader', 'Jabba the Hutt'],
      family: ['Leia Organa (wife)', 'Ben Solo (son)'],
    },
    achievements: [
      'Made the Kessel Run in less than twelve parsecs',
      'Helped destroy the Death Star',
      'Became a General in the Rebel Alliance',
    ],
    trivia: [
      'Han Solo was frozen in carbonite and later rescued by his friends.',
      'He won the Millennium Falcon from Lando Calrissian in a game of sabacc.',
    ],
    main_story_arc:
      'Han Solo, once a smuggler, becomes a hero in the Rebellion against the Galactic Empire. With his co-pilot Chewbacca, he undertakes various missions for the Rebels and eventually becomes a General.',
    avatar_attributes: {
      avatar_size: 'md',
      height: '180',
      mass: '80',
      hair_color: 'brown',
      hair_style: 'short',
      body_shape: 'athletic',
      clothing: 'Smuggler attire',
      accessories: ['Blaster'],
      age: 'middle-aged',
      emotions: 'confident',
      faction_colors: ['brown', 'black'],
      species_traits: ['human'],
      gender: 'male',
      eye_color: '#663300',
      skin_color: '#FAD6A5',
      dark_mode: {
        background_color: '#000000',
        clothing: 'Rebel attire',
        lightsaber_color: null,
      },
      animations: {
        speak: 'path/to/speak_animation',
        rotate: 'path/to/rotate_animation',
        custom_animation: 'path/to/custom_animation',
      },
      voice_lines: {
        greeting: 'Hey, kid.',
        farewell: 'See ya around.',
      },
    },
  },
  {
    id: 'ezra-bridger-01',
    slug: 'ezra-bridger',
    name: 'Ezra Bridger',
    birth_year: '19 BBY',
    homeworld: 'Lothal',
    species: 'Human',
    persona: ['Jedi'],
    backstory:
      "Ezra Bridger grew up on the planet Lothal amidst the rise of the Galactic Empire. Orphaned at a young age, he initially led the life of a small-time thief. His life took a dramatic turn after an encounter with a group of rebels and discovering his connection to the Force. Under the mentorship of Kanan Jarrus, a former Jedi Knight, Ezra honed his Jedi abilities and became an integral part of the Ghost crew's efforts against the Empire. His journey intertwined with the larger Rebellion and the mysteries of the Force, culminating in a confrontation with the dark forces seeking to dominate the galaxy.",
    affiliation: ['Ghost Crew', 'Rebel Alliance'],
    occupation: 'Jedi Padawan',
    appearances: ['Star Wars Rebels'],
    force_sensitive: true,
    alias: [],
    weapons: ['Blue lightsaber', 'Ezras slingshot'],
    vehicles: [],
    droids: ['Chopper'],
    force_ability: 'Jedi Padawan',
    quote: 'In the end, we win.',
    skills: [
      'Lightsaber combat',
      'Force agility',
      'Force connection with animals',
    ],
    bounty: null,
    known_associates: ['Kanan Jarrus', 'Hera Syndulla', 'Sabine Wren'],
    factions: ['Rebels'],
    status: 'Unknown',
    films: [],
    species_traits: ['Adaptable', 'Versatile'],
    owned_starships: [],
    owned_vehicles: ['Speeder bike'],
    visited_planets: ['Lothal', 'Malachor', 'Atollon'],
    relationships: {
      friends: ['Kanan Jarrus', 'Hera Syndulla', 'Sabine Wren', 'Chopper'],
      enemies: ['Grand Inquisitor', 'Darth Vader', 'Thrawn'],
      family: null,
    },
    achievements: [
      'Helped establish the Phoenix Cell of the Rebel Alliance',
      'Defeated the Grand Inquisitor',
    ],
    trivia: [
      'Ezra Bridger was born on Empire Day.',
      'He once owned a unique lightsaber that had a built-in blaster.',
    ],
    main_story_arc:
      'Ezra Bridger is a young force-sensitive who becomes a key member of the Ghost crew and is trained as a Jedi by Kanan Jarrus. He participates in numerous missions against the Empire and faces various dark side adversaries.',
    avatar_attributes: {
      avatar_size: 'md',
      height: '170',
      mass: '68',
      hair_color: 'blue',
      hair_style: 'short',
      body_shape: 'medium',
      clothing: 'Rebel attire',
      accessories: ['lightsaber'],
      age: 'young',
      emotions: 'determined',
      faction_colors: ['orange', 'blue'],
      species_traits: ['human'],
      gender: 'male',
      eye_color: '#0000FF',
      skin_color: '#F5DEB3',
      dark_mode: {
        background_color: '#000000',
        clothing: 'Dark Rebel attire',
        lightsaber_color: '#0000FF',
      },
      animations: {
        speak: 'path/to/speak_animation',
        rotate: 'path/to/rotate_animation',
        custom_animation: 'path/to/custom_animation',
      },
      voice_lines: {
        greeting: 'Hey, you alright?',
        farewell: 'May the Force be with you.',
      },
    },
  },
];
