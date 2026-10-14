// Guide content, ported verbatim from the original "Car care starter guide"
// artifact (claude.ai/artifact/Dv2DXJMKnDEBEqMGspcPHp).
//
// Photos: every step with a `caption` has a photo slot named
// `<task id>-<step number>` (e.g. `oil-2` is "Your dipstick handle"), plus
// `kit` for the trunk kit. Drop a matching file into public/photos/
// (`oil-2.jpg`, `.jpeg`, `.png` or `.webp`) and redeploy — pages/index.tsx
// picks it up at build time, no code change needed.
import type { ProgressState, Task, Who } from '../types';

export const FIELDS: { key: string; label: string; placeholder: string }[] = [
  { key: 'car', label: 'Year, make, model', placeholder: '2015 Honda Civic' },
  { key: 'oil', label: 'Oil type', placeholder: 'e.g. 0W-20' },
  { key: 'psi', label: 'Tire pressure (front / rear)', placeholder: 'e.g. 32 / 32 PSI' },
  { key: 'coolant', label: 'Coolant type', placeholder: 'from the manual' },
  { key: 'wipers', label: 'Wiper blade sizes', placeholder: 'e.g. 26" driver, 16" passenger' },
  { key: 'lastoil', label: 'Mileage at last oil change', placeholder: 'e.g. 84,200' },
];

export const SCHEDULE: [what: string, often: string, who: Who][] = [
  ['Oil level check', 'Once a month', 'you'],
  ['Tire pressure', 'Once a month', 'you'],
  ['Coolant level', 'Once a month', 'you'],
  ['Washer fluid', 'When the spray gets weak', 'you'],
  ['Wiper blades', 'Every 6–12 months', 'you'],
  ['Cabin air filter', 'About once a year', 'you'],
  ['Oil change', 'Every 5,000–7,500 miles, or once a year', 'shop'],
  ['Tire rotation', 'Every 5,000–7,500 miles (with the oil change)', 'shop'],
  ['New tires', 'When the penny test fails, or about 6 years old', 'shop'],
  ['Brakes', 'Checked at each rotation, or right away if they squeal or grind', 'shop'],
  ['Battery', "Tested yearly once it's 3 years old; most last 3–5 years", 'shop'],
  ['Engine air filter', 'Checked at oil changes', 'shop'],
];

export const PROS: [job: string, why: string][] = [
  ['Oil changes', 'Easy to get wrong and messy. Watch one first.'],
  ['Brakes', 'Safety-critical. Always a pro.'],
  ['Tire mounting, balancing, and rotation', 'Needs special machines.'],
  ['Engine and transmission work', 'Leave it alone.'],
  ['A warning light that stays on', 'A shop can read the code and tell you what it means.'],
  ["Anything you're unsure about", 'Ask first. No question is too small.'],
];

export const TASKS: Task[] = [
  {
    id: 'oil',
    title: 'Check the oil',
    short: 'Oil',
    when: 'Once a month, and before a long trip.',
    before: 'Park on level ground with the engine off for at least 10 minutes.',
    steps: [
      {
        text: 'Pull the hood release inside the car (usually low, left of the steering wheel). Then find the second latch under the front edge of the hood.',
        caption: 'The hood release and latch',
      },
      {
        text: "Find the dipstick. It's usually a bright yellow or orange loop handle.",
        caption: 'Your dipstick handle',
      },
      {
        text: 'Pull it all the way out, wipe the end clean with a rag, and push it all the way back in.',
        caption: 'Wiping it clean',
      },
      {
        text: 'Pull it out again and look at where the oil line sits. Between the two marks is good. At or below the low mark, tell your uncle or take it to a shop.',
        caption: 'The tip, showing the oil level',
      },
    ],
    caution:
      'Some newer cars have no dipstick and show the oil level on the dashboard. Oil that looks milky or smells burnt is worth asking about.',
  },
  {
    id: 'tires',
    title: 'Check tire pressure and tread',
    short: 'Tires',
    when: 'Once a month, in the morning before driving (tires read true when cold).',
    steps: [
      {
        text: "Find the sticker on the driver's door frame. It lists the right pressure (PSI) for your car.",
        caption: 'The door sticker',
      },
      {
        text: "Unscrew the cap on the tire's valve stem and put it in your pocket so it doesn't roll away.",
        caption: 'The valve stem',
      },
      {
        text: 'Press the gauge straight onto the valve until the hissing stops, then read the number.',
        caption: 'The gauge reading',
      },
      {
        text: "If it's low, add air at a gas station pump in short bursts, checking as you go. Screw the cap back on.",
        caption: 'The air pump you used',
      },
      {
        text: "Penny test: put a penny in the tread, Lincoln's head down. If you can see the top of his head, the tires are getting worn. Time for a shop to look.",
        caption: 'Your penny test',
      },
    ],
    caution:
      "Use the number on the door sticker, not the one printed on the tire. The tire's number is its maximum, not what your car needs.",
  },
  {
    id: 'washer',
    title: 'Top off washer fluid',
    short: 'Washer fluid',
    when: 'When the spray gets weak or a dashboard light asks for it.',
    steps: [
      {
        text: 'Find the washer fluid cap under the hood. It has a windshield-with-spray symbol.',
        caption: 'The washer fluid cap',
      },
      {
        text: "Pour washer fluid in until it's near the top of the neck, then close the cap.",
        caption: 'Filling it',
      },
    ],
    caution:
      'Only washer fluid goes in this tank, and washer fluid goes in no other tank. Plain water leaves streaks and can grow gunk.',
  },
  {
    id: 'coolant',
    title: 'Check coolant',
    short: 'Coolant',
    when: 'Once a month, with the engine completely cold.',
    steps: [
      {
        text: 'Find the see-through plastic coolant tank. It has MIN and MAX lines on the side.',
        caption: 'The coolant tank',
      },
      {
        text: 'Check that the coolant sits between the two lines.',
        caption: 'The level against the lines',
      },
      {
        text: "If it's low, add the coolant type from your owner's manual, up to the MAX line.",
        caption: 'The coolant bottle you used',
      },
    ],
    caution:
      "Never open the coolant or radiator cap while the engine is warm. It's under pressure and can spray scalding liquid. Don't mix coolant types. If it keeps getting low, something is leaking. Tell a shop.",
  },
  {
    id: 'wipers',
    title: 'Replace wiper blades',
    short: 'Wipers',
    when: 'Every 6–12 months, or when they streak, squeak, or skip.',
    before: "Check your blade sizes before buying. The driver's side is usually longer.",
    steps: [
      {
        text: 'Lay a towel on the windshield, then lift the wiper arm away from the glass. It stays up on its own.',
        caption: 'Arm lifted, towel down',
      },
      {
        text: 'Find the small tab or clip where the blade meets the arm. Press it and slide the old blade off.',
        caption: 'The release clip',
      },
      {
        text: 'Slide the new blade on until it clicks, then lower the arm gently.',
        caption: 'New blade installed',
      },
    ],
    caution:
      "If the bare arm snaps back onto the glass it can crack the windshield. That's what the towel is for.",
  },
  {
    id: 'cabin',
    title: 'Replace the cabin air filter',
    short: 'Cabin filter',
    when: 'About once a year, or if the vents smell musty or blow weakly.',
    steps: [
      {
        text: 'Empty the glovebox, open it, and release the stops on its sides so it drops down.',
        caption: 'Glovebox dropped down',
      },
      { text: 'Unclip the filter cover behind it.', caption: 'The filter cover' },
      {
        text: 'Slide the old filter out and note which way the arrows point.',
        caption: 'Old filter and its arrows',
      },
      {
        text: 'Slide the new filter in with the arrows pointing the same way, then close everything up.',
        caption: 'New filter in place',
      },
    ],
    caution: 'Not every car hides it behind the glovebox. Look up your exact model first.',
  },
  {
    id: 'jump',
    title: 'Jump-start a dead battery',
    short: 'Jump start',
    when: "When the car clicks, the lights are dim, or nothing happens. You'll need a second car.",
    before: 'Park the good car close. Turn both cars off.',
    steps: [
      {
        text: 'Find each battery and its + (red) and − (black) terminals.',
        caption: 'Your battery, + and − visible',
      },
      { text: "Red clamp on the dead battery's +.", caption: 'Red on dead +' },
      { text: "Other red clamp on the good battery's +.", caption: 'Red on good +' },
      { text: "Black clamp on the good battery's −.", caption: 'Black on good −' },
      {
        text: "Last black clamp on bare, unpainted metal on the dead car's engine, not on the dead battery.",
        caption: 'The metal spot you used',
      },
      {
        text: 'Start the good car and wait a few minutes. Start yours. Remove the clamps in reverse order, then drive for at least 20 minutes.',
      },
    ],
    caution:
      "Never let the clamp ends touch while the cables are connected. If the car won't start after a couple of tries, or the battery is cracked or leaking, stop and call for help.",
  },
];

export const KIT_PHOTO = { slot: 'kit', caption: 'Your trunk kit' };

export const blankState = (): ProgressState => ({ fields: {}, done: {} });
