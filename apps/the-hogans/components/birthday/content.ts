// Content for pages/theo-turns-8.tsx, ported from the "Theo Turns 8" invite
// artifact. Edit details here; the page only lays them out.
import { IconName } from './icons';

export const party = {
  pageTitle: 'Theo Turns 8',
  eyebrow: "You're invited · Level 8 unlocked",
  /** Rendered as "{before} <span>{highlight}</span> {after}". */
  title: { before: "Theo's", highlight: 'Viking', after: 'Birthday Quest' },
  sub: 'Mini golf, go-karts, arcade, and pizza at Scandia. Come celebrate Theo turning 8!',

  /** Party start and end, with the Pacific offset (PST is UTC-8 in December). */
  start: '2026-12-04T16:00:00-08:00',
  end: '2026-12-04T18:00:00-08:00',
  whenLabel: 'Friday, December 4',
  timeLabel: '4:00 to 6:00 PM',

  calendarTitle: "Theo's 8th Birthday Party",
  calendarDetails:
    "Theo turns 8! Pizza will be served. If it's dry: mini golf and go-karts. If it rains: the arcade. RSVP to Jessica: (707) 480-0650",
  /** Text for "Copy event details" (for Apple Calendar). */
  eventText:
    "Theo's 8th Birthday Party\nFriday, December 4, 2026, 4:00 to 6:00 PM\nScandia Family Fun Center, 5301 Redwood Dr, Rohnert Park, CA 94928\nPizza will be served. RSVP to Jessica: (707) 480-0650",

  venue: 'Scandia Family Fun Center',
  address: '5301 Redwood Drive, Rohnert Park, CA 94928',
  calendarLocation:
    'Scandia Family Fun Center, 5301 Redwood Dr, Rohnert Park, CA 94928',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Scandia+Family+Fun+Center+5301+Redwood+Dr+Rohnert+Park+CA',

  food: {
    value: 'Pizza for everyone',
    note: 'Plus birthday treats. Come hungry!',
  },
  rsvp: { name: 'Jessica', phone: '(707) 480-0650' },

  plan: {
    eyebrow: 'Two routes, one quest',
    title: 'The Game Plan',
    intro:
      "We'll pick the route based on the weather that day. Either way, there's pizza at the end.",
    routes: [
      {
        kind: 'dry',
        tag: "If it's dry",
        title: 'Golf & Racing',
        items: [
          {
            icon: 'flag',
            name: 'Mini golf',
            note: "Putt your way through Scandia's award-winning courses",
          },
          {
            icon: 'kart',
            name: 'Go-karts',
            note: "Race laps on the Lil' Indy Raceway",
          },
        ],
      },
      {
        kind: 'wet',
        tag: 'If it rains',
        title: 'Arcade Takeover',
        items: [
          {
            icon: 'controller',
            name: 'The Grand Arcade',
            note: 'Over 100 games inside, all out of the rain',
          },
          {
            icon: 'ticket',
            name: 'Pinball, skee-ball & tickets',
            note: 'Win tickets and trade them for prizes',
          },
        ],
      },
    ] as {
      kind: 'dry' | 'wet';
      tag: string;
      title: string;
      items: { icon: IconName; name: string; note: string }[];
    }[],
    pizza: {
      title: 'Pizza will be served',
      note: 'Rain or shine, everyone eats.',
    },
    tip: "Bring a jacket. It's December, and the sun sets before 5.",
  },

  gifts: {
    eyebrow: "Theo's treasure chest",
    title: "What Theo's Into",
    intro:
      "Your company is the best gift! If you'd like to bring something, here's what Theo loves right now. Hover over a card, or tap it on your phone, to see ideas.",
    cards: [
      {
        icon: 'soccer',
        color: '#8EE08A',
        title: 'Soccer Star',
        why: 'His favorite sport, hands down',
        top: 'Size 4 soccer ball',
        ideas: [
          'Pop-up mini goals for the backyard',
          'Rebounder net for solo practice',
          'Shin guards or goalie gloves',
          'Ball pump with a needle set',
        ],
      },
      {
        icon: 'football',
        color: '#FFB067',
        title: 'Flag Football & Hoops',
        why: 'Games he plays with his friends',
        top: 'Junior-size football',
        ideas: [
          'Flag belt set for backyard games',
          'Over-the-door mini hoop',
          'Youth-size basketball',
          'Team jersey or sports water bottle',
        ],
      },
      {
        icon: 'car',
        color: '#FF8A8A',
        title: 'Car Guy',
        why: 'Loves anything with wheels',
        top: 'Remote-control car',
        ideas: [
          'Race track set with loops',
          'Die-cast cars and a carry case',
          "Kids' book on how cars work",
          'Racing-flag or race-car room decor',
        ],
      },
      {
        icon: 'gear',
        color: '#F7D23E',
        title: 'Build-It Kits',
        why: 'Hands-on projects with real parts',
        top: 'Snap-together circuit kit',
        ideas: [
          'Build-your-own motorized car kit',
          'Solar-powered robot kit',
          'Kid-size real tool set',
          'Marble run or engineering set',
        ],
      },
      {
        icon: 'gamepad',
        color: '#B9A5FF',
        title: 'Game Maker',
        why: 'Making games, not just playing them',
        top: 'Screen-free coding robot',
        ideas: [
          "Kids' game-design or coding book",
          'Graph-paper sketchbook for drawing levels',
          'Coding card game',
          'Design-your-own board game kit',
        ],
      },
      {
        icon: 'dice',
        color: '#4CC3F0',
        title: 'Family Game Night',
        why: 'Board games we can all play together',
        top: 'Sushi Go!',
        ideas: [
          'Outfoxed!',
          'Ticket to Ride: First Journey',
          'Rat-a-Tat Cat',
          'Connect 4 Shots or Jenga',
        ],
      },
    ] as {
      icon: IconName;
      color: string;
      title: string;
      why: string;
      top: string;
      ideas: string[];
    }[],
    footer: '★ See you at the quest! ★',
  },

  footer: {
    cheer: 'Skål, Theo!',
    line: 'Friday, December 4 · 4:00 PM · Scandia Family Fun Center, Rohnert Park',
  },
};

/** Google Calendar "add event" link built from the party details. */
export function googleCalendarUrl(): string {
  const stamp = (iso: string) =>
    new Date(iso)
      .toISOString()
      .replace(/[-:]/g, '')
      .replace(/\.\d{3}/, '');
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: party.calendarTitle,
    dates: `${stamp(party.start)}/${stamp(party.end)}`,
    location: party.calendarLocation,
    details: party.calendarDetails,
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}
