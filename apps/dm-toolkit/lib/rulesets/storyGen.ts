// Generates a lightweight "story seed" once per map — a theme, a one-line
// hook, and a flat pool of clue fragments. Hand-authored (no equivalent
// pool exists in @with-nx/constants, same reasoning as enemyGen.ts's
// EPITHETS — this is presentation flavor specific to this feature, not
// shared D&D data). Deliberately a flat pool with no dependency graph
// between clues — any structure/NPC generator can claim any unused one;
// see brainstorm decision to start simple rather than building real
// quest-graph logic.
//
// Each clue is a fixed prefix + a randomly-picked noun-phrase ending (e.g.
// "A torn ledger page mentions" + "a second, hidden chamber nearby.") —
// grammatically safe because every detail pool was purpose-written to
// slot into its own prefix, so two maps that roll the same theme still get
// different clue text instead of the exact same sentences verbatim.
import { v4 as uuidv4 } from 'uuid';
import type { MapStory } from '../../types';
import { pickRandom } from './pickRandom';

interface ClueTemplate {
  prefix: string;
  details: string[];
}

interface StoryTheme {
  title: string;
  hook: string;
  clueTemplates: ClueTemplate[];
}

const THEMES: StoryTheme[] = [
  {
    title: 'The Cursed Hatchery',
    hook: 'Something ancient is incubating beneath the ruins, and the locals have been disappearing one by one.',
    clueTemplates: [
      {
        prefix: 'A torn ledger page mentions',
        details: [
          'a second, hidden chamber nearby',
          "the party hasn't reached yet",
          'something the previous owner tried to hide',
        ],
      },
      {
        prefix: 'Claw marks scratch a path toward',
        details: ['something out of sight', 'a spot deeper in the ruins', 'wherever the tunnel leads next'],
      },
      {
        prefix: 'A faint rhythmic humming seems to come from',
        details: ['directly underfoot', 'somewhere close by, out of view', 'beyond the nearest wall'],
      },
      {
        prefix: "A cultist's insignia matches",
        details: [
          'robes glimpsed elsewhere on the map',
          'markings seen somewhere nearby',
          'a symbol carved into another structure',
        ],
      },
      {
        prefix: 'Half-eaten rations suggest',
        details: [
          'someone was hiding here recently',
          'someone else came through not long ago',
          "this place isn't as abandoned as it looks",
        ],
      },
      {
        prefix: 'A cracked eggshell fragment is',
        details: ['warm to the touch', 'still faintly pulsing', 'heavier than it looks'],
      },
      {
        prefix: 'Scorch marks on the wall',
        details: [
          'form a crude map of the area',
          'point toward one specific direction',
          'outline something worth investigating',
        ],
      },
      {
        prefix: 'A name is scratched into',
        details: ['the stone, over and over', 'the doorframe, half worn away', 'a support beam, recently carved'],
      },
    ],
  },
  {
    title: 'The Smuggler’s Den',
    hook: 'A trade route has gone dark, and someone here knows exactly why.',
    clueTemplates: [
      {
        prefix: 'A ledger lists a shipment due at',
        details: ['another location on this map', "a spot the party hasn't checked yet", 'somewhere nearby, unmarked'],
      },
      {
        prefix: 'A key is tucked into',
        details: ['a hidden compartment, unlabeled', 'a false drawer bottom', 'a gap behind a loose stone'],
      },
      {
        prefix: 'Fresh wagon-wheel ruts lead',
        details: ['away and out of sight', 'toward the edge of the map', "somewhere the party hasn't explored"],
      },
      {
        prefix: 'A coded letter references a meeting',
        details: ['elsewhere nearby', 'at another structure on this map', 'somewhere close, unspecified'],
      },
      {
        prefix: "A guard's badge doesn't match",
        details: [
          'anyone currently posted here',
          'any roster the party has seen',
          'the uniforms worn elsewhere on the map',
        ],
      },
      {
        prefix: 'A false wall panel is',
        details: ['slightly ajar', 'warm from something behind it', 'recently disturbed'],
      },
      {
        prefix: 'Coins found here bear',
        details: ['a foreign mint mark', 'a symbol matching another location', 'wear that suggests frequent, recent use'],
      },
      {
        prefix: 'A torn map corner shows',
        details: [
          'part of a route continuing on',
          'a path leading further into the area',
          "a landmark the party hasn't found yet",
        ],
      },
    ],
  },
  {
    title: 'The Forgotten Garrison',
    hook: 'A once-proud outpost fell silent decades ago — something is still guarding it.',
    clueTemplates: [
      {
        prefix: 'A rusted weapon rack is missing',
        details: ['exactly one weapon', 'a single piece, deliberately taken', 'one slot, recently emptied'],
      },
      {
        prefix: 'A muster roll lists a name that',
        details: [
          'appears again elsewhere',
          'matches someone the party has met',
          'shows up on more than one document here',
        ],
      },
      {
        prefix: "Fresh boot prints don't match",
        details: ['the dust everywhere else', 'anyone currently on the map', 'the age of everything around them'],
      },
      {
        prefix: 'An old alarm bell has been',
        details: ['recently rung', 'polished, unlike everything else here', 'rigged with something new'],
      },
      {
        prefix: 'A supply crate is stamped with',
        details: ['a destination further along', "a location not yet explored", 'a route matching part of this map'],
      },
      {
        prefix: 'Battle damage here points',
        details: ['toward a specific direction', 'toward whoever struck first', "toward a fight that isn't over"],
      },
      {
        prefix: 'A hidden note warns of',
        details: ['"the one who watches" nearby', 'something still guarding this place', "a danger the party hasn't found yet"],
      },
      {
        prefix: "A commander's insignia is bent, as if",
        details: ['pried off in a hurry', 'torn free during a struggle', 'removed and hidden deliberately'],
      },
    ],
  },
  {
    title: 'The Cult of the Hollow Star',
    hook: 'A quiet cult has been meeting in secret, and their ritual is close to complete.',
    clueTemplates: [
      {
        prefix: 'A chalk sigil matches',
        details: [
          'one seen elsewhere on the map',
          'a symbol on a robe found nearby',
          'marks scratched into another structure',
        ],
      },
      {
        prefix: 'A robe left behind bears',
        details: [
          'initials, not a name',
          'a symbol matching something else nearby',
          'stitching from a specific, identifiable hand',
        ],
      },
      {
        prefix: 'Melted candle wax pools toward',
        details: ['a specific direction', 'the base of something nearby', 'one particular corner of the room'],
      },
      {
        prefix: 'A whispered chant echoes faintly from',
        details: ['somewhere close by', 'beyond the nearest wall', "a direction the party hasn't explored"],
      },
      {
        prefix: 'A ritual diagram is missing',
        details: [
          'its final, unfinished piece',
          'a symbol matching one seen elsewhere',
          'a section that was deliberately torn away',
        ],
      },
      {
        prefix: 'A membership token is stamped with',
        details: ['a number — not the first', 'a mark matching another find nearby', 'a symbol tied to something bigger'],
      },
      {
        prefix: 'Footprints circle this spot before',
        details: ['leading off purposefully', 'converging toward one direction', 'vanishing near a hidden opening'],
      },
      {
        prefix: 'A star chart is marked at a location matching',
        details: ['part of this map', "somewhere the party hasn't reached", 'a spot uncomfortably close by'],
      },
    ],
  },
  {
    title: 'The Beast Below',
    hook: 'Livestock and travelers keep vanishing, and the trail always leads underground.',
    clueTemplates: [
      {
        prefix: 'A drag mark leads off toward',
        details: ['somewhere unexplored', "a den the party hasn't found", 'the darkest part of the map'],
      },
      {
        prefix: "Fur caught on a splintered post doesn't match",
        details: [
          'any known animal',
          "anything the party has encountered yet",
          'the size of anything expected here',
        ],
      },
      {
        prefix: 'A hollow section of wall sounds',
        details: ['different when struck', 'like it hides something behind it', 'recently disturbed, unlike the rest'],
      },
      {
        prefix: 'Bones here have been',
        details: ['cracked open for the marrow', 'dragged from somewhere else nearby', 'picked clean, recently'],
      },
      {
        prefix: "A trapper's journal describes a den",
        details: ['somewhere nearby', 'matching part of this map', 'closer than expected'],
      },
      {
        prefix: 'The air here is colder than it should be, coming from',
        details: ['somewhere just out of sight', 'a direction worth investigating', 'beneath the floor itself'],
      },
      {
        prefix: 'Claw gouges are deep enough to have',
        details: ['taken real time to make', 'come from something large nearby', 'been made more than once'],
      },
      {
        prefix: 'A half-eaten meal was abandoned',
        details: ['mid-bite', 'in a hurry, recently', 'closer to here than expected'],
      },
    ],
  },
  {
    title: 'The Rival Expedition',
    hook: 'You’re not the only ones here — another crew arrived first, and not all of them made it out.',
    clueTemplates: [
      {
        prefix: 'A discarded pack holds gear stamped with',
        details: ['an unfamiliar crest', 'a mark matching another find nearby', 'the same symbol seen elsewhere'],
      },
      {
        prefix: 'A hastily scrawled warning is left',
        details: ['mid-sentence', 'unfinished, as if interrupted', 'torn before it could be finished'],
      },
      {
        prefix: 'A campfire here has been cold for',
        details: ['exactly a few days', 'longer than expected', 'just long enough to matter'],
      },
      {
        prefix: 'A torn journal page describes finding something',
        details: ['"worse than expected"', 'nearby, and leaving quickly after', 'that changed their plans entirely'],
      },
      {
        prefix: 'Equipment here is of much finer make than',
        details: ["the rest of what's been found", 'anything the party is carrying', 'expected for this location'],
      },
      {
        prefix: 'A compass points insistently toward',
        details: ['one specific direction', "somewhere the party hasn't explored", 'a location matching part of this map'],
      },
      {
        prefix: 'Two sets of footprints diverge here — only one set',
        details: ['returns', 'continues on, alone', 'comes back at all'],
      },
      {
        prefix: 'A locked strongbox bears initials matching',
        details: ['no one in the party', 'a name seen elsewhere on this map', "someone who isn't here anymore"],
      },
    ],
  },
];

function buildClueText(template: ClueTemplate): string {
  return `${template.prefix} ${pickRandom(template.details)}.`;
}

// Any structure/NPC generator can claim the next unused clue via
// its own local pool copy (see structureGen.ts's claimClue) and mark it
// used so the same clue doesn't surface twice on one map.
export function generateMapStory(): MapStory {
  const theme = pickRandom(THEMES);
  return {
    title: theme.title,
    hook: theme.hook,
    clues: theme.clueTemplates.map((t) => ({ id: uuidv4(), text: buildClueText(t), used: false })),
  };
}
