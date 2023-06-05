import { Rarity } from '@with-nx/utils';

export const races: Race[] = [
    {
      name: 'Human',
      description: 'The most common race in most of the worlds',
      rarity: rarities[0],
      subraces: [],
    },
    {
      name: 'Elf',
      description: 'A magical people of otherworldly grace',
      rarity: rarities[1],
      subraces: [
        {
          name: 'High Elf',
          description:
            'They have a keen mind and a mastery of at least the basics of magic',
          rarity: rarities[2],
        },
        {
          name: 'Wood Elf',
          description:
            'They have keen senses and intuition, and their fleet feet carry them quickly and stealthily through their native forests.',
          rarity: rarities[2],
        },
        {
          name: 'Dark Elf (Drow)',
          description:
            'Descended from an earlier subrace of dark-skinned elves. They are known for their cruelty and powerful magic.',
          rarity: rarities[3],
        },
      ],
    },
    {
      name: 'Dwarf',
      description:
        'Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.',
      rarity: rarities[1],
      subraces: [
        {
          name: 'Hill Dwarf',
          description:
            'As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.',
          rarity: rarities[2],
        },
        {
          name: 'Mountain Dwarf',
          description:
            'As a mountain dwarf, you’re strong and hardy, accustomed to a difficult life in rugged terrain.',
          rarity: rarities[2],
        },
      ],
    },
    {
      name: 'Halfling',
      description:
        'The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense.',
      rarity: rarities[1],
      subraces: [
        {
          name: 'Lightfoot Halfling',
          description:
            'As a Lightfoot halfling, you can easily hide from notice, even using other people as cover.',
          rarity: rarities[2],
        },
        {
          name: 'Stout Halfling',
          description:
            'As a Stout halfling, you’re hardier than average and have some resistance to poison.',
          rarity: rarities[2],
        },
      ],
    },
    {
      name: 'Dragonborn',
      description:
        'Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail.',
      rarity: rarities[2],
      subraces: [], // Subraces are not typically used for Dragonborn
    },
    {
      name: 'Gnome',
      description:
        'A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body.',
      rarity: rarities[2],
      subraces: [
        {
          name: 'Forest Gnome',
          description:
            'Forest gnomes have a knack for stealth and illusion, and are generally good-hearted.',
          rarity: rarities[3],
        },
        {
          name: 'Rock Gnome',
          description:
            'Rock gnomes are known for their tinker ability, creating wondrous mechanical inventions.',
          rarity: rarities[3],
        },
        {
          name: 'Deep Gnome (Svirfneblin)',
          description:
            'These gnomes are known for their stealth and mystical abilities, living deep underground.',
          rarity: rarities[4],
        },
      ],
    },
    {
      name: 'Half-Elf',
      description:
        'Half-elves combine what some say are the best qualities of their elf and human parents.',
      rarity: rarities[2],
      subraces: [], // Subraces are not typically used for Half-Elves
    },
    {
      name: 'Half-Orc',
      description:
        'Half-orcs combine the best qualities of humans and orcs, though some would argue that the good qualities of orcs are few and hard to find.',
      rarity: rarities[2],
      subraces: [], // Subraces are not typically used for Half-Orcs
    },
    {
      name: 'Tiefling',
      description:
        'Tieflings are derived from human bloodlines, and in the broadest possible sense, they still look human. However, their infernal heritage has left a clear imprint on their appearance.',
      rarity: rarities[3],
      subraces: [], // Subraces are not typically used for Tieflings
    },
    {
      name: 'Aasimar',
      description:
        'As an Aasimar, you have a strong celestial lineage. These divine beings are resistant to necrotic and radiant damage and have healing hands.',
      rarity: rarities[3],
      subraces: [], // Subraces are not typically used for Aasimar
    },
    {
      name: 'Firbolg',
      description:
        'As a Firbolg, you are a reclusive giant that prefers to avoid contact with other sentient races. You have a strong connection to nature and the ability to turn invisible and magically communicate with animals.',
      rarity: rarities[4],
      subraces: [], // Subraces are not typically used for Firbolg
    },
    {
      name: 'Tabaxi',
      description:
        'Tabaxi are feline humanoids with a curiosity as strong as that of real life cats, but fueled by a more intelligent and emotional spark.',
      rarity: rarities[3],
      subraces: [], // Subraces are not typically used for Tabaxi
    },
    {
      name: 'Triton',
      description:
        'Tritons are humanoid water dwellers that can breathe both air and water. They have resistance to cold damage and can cast spells that allow them to control water and air.',
      rarity: rarities[3],
      subraces: [], // Subraces are not typically used for Triton
    },
    {
      name: 'Yuan-Ti Pureblood',
      description:
        'Yuan-ti purebloods are the most human-seeming of all yuan-ti races. They live in the depths of jungles and ancient ruins where they pay homage to their dark god and conspire to subjugate or destroy all who oppose them.',
      rarity: rarities[4],
      subraces: [], // Subraces are not typically used for Yuan-Ti Purebloods
    },
    {
      name: 'Goliath',
      description:
        'Goliaths are giant humanoids from wild, remote regions. They're known for their physical prowess and competitive nature.',
      rarity: rarities[3],
      subraces: [], // Subraces are not typically used for Goliaths
    },
    {
      name: 'Kenku',
      description:
        'Kenkus are small humanoid avians that are known for their lack of creativity and their ability to perfectly mimic any sound they hear.',
      rarity: rarities[3],
      subraces: [], // Subraces are not typically used for Kenkus
    },
    {
      name: 'Genasi',
      description:
        'Genasi carry the power of the elemental planes of air, earth, fire, and water in their blood. This power manifests in various traits, granting them abilities related to their element.',
      rarity: rarities[3],
      subraces: [
        {
          name: 'Air Genasi',
          description:
            'As an air genasi, you are descended from the djinn. You can hold your breath indefinitely while you’re not incapacitated.',
          rarity: rarities[4],
        },
        {
          name: 'Earth Genasi',
          description:
            'As an earth genasi, you are descended from the cruel and greedy dao. You can move across difficult terrain made of earth or stone without expending extra movement.',
          rarity: rarities[4],
        },
        {
          name: 'Fire Genasi',
          description:
            'As a fire genasi, you are descended from the efreet, flamelike beings of pure destruction. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.',
          rarity: rarities[4],
        },
        {
          name: 'Water Genasi',
          description:
            'As a water genasi, you are descended from the marid, the most potent of all genies. You can breathe air and water.',
          rarity: rarities[4],
        },
      ],
    },
    {
      name: 'Aarakocra',
      description:
        'Sequestered in high mountains atop tall trees, the aarakocra, sometimes called birdfolk, evoke fear and wonder with their tribal societies.',
      rarity: rarities[3],
      subraces: [], // Subraces are not typically used for Aarakocra
    },
    {
      name: 'Warforged',
      description:
        'Warforged are humanoid beings constructed of metal, stone, and wood fibers. Designed as a tool of war, warforged now find themselves in a variety of other occupations as they integrate into society.',
      rarity: rarities[3],
      subraces: [], // Subraces are not typically used for Warforged
    },
    {
      name: 'Changeling',
      description:
        'A changeling can shift its face and form with a thought, a gift or a curse that presents them a unique place in the world.',
      rarity: rarities[3],
      subraces: [], // Subraces are not typically used for Changelings
    },
    {
      name: 'Lizardfolk',
      description:
        'Lizardfolk possess an alien and inscrutable mindset, their desires and thoughts driven by a different set of basic principles than those of warm-blooded creatures.',
      rarity: rarities[3],
      subraces: [], // Subraces are not typically used for Lizardfolk
    },
    {
      name: 'Bugbear',
      description:
        'Bugbears feature in the nightmare tales of many races, large, hairy goblinoid creatures that quiet as cats when they wish to be.',
      rarity: rarities[4],
      subraces: [], // Subraces are not typically used for Bugbears
    },
    {
      name: 'Hobgoblin',
      description:
        'Hobgoblins are a larger, stronger, smarter, and more menacing form of goblinoids than goblins, they are the military masterminds behind the goblinoid races.',
      rarity: rarities[3],
      subraces: [], // Subraces are not typically used for Hobgoblins
    },
    {
      name: 'Kobold',
      description:
        'Kobolds are craven reptilian humanoids that worship dragons as demigods and serve them as minions and toadies.',
      rarity: rarities[3],
      subraces: [], // Subraces are not typically used for Kobolds
    },
    // ...continue for any additional races or subraces you want to include  
    
  ];