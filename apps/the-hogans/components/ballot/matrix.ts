import { Matrix } from './types';

// The voting matrix: what you stand for and how you check a measure.
// It doesn't change with the election; edit it when your views do.
export const matrix: Matrix = {
  principles: [
    { lead: 'Tax wealth, not work.' },
    { lead: 'Progressive brackets for high earners,', rest: 'starting around $300,000.' },
    {
      lead: 'Keep other taxes limited,',
      rest: 'mainly to fund firefighters, police and other public workers.',
    },
    { lead: 'Pay down debt.', rest: 'Avoid new state borrowing.' },
    { lead: 'Pro-labor.', rest: 'Generally vote with labor.' },
    { lead: 'Who is funding it really matters.' },
  ],
  priorities: [
    { lead: 'Taxing wealth.', rest: 'Always first, no caveats.' },
    { lead: 'Avoiding debt.' },
    { lead: 'Supporting labor.' },
  ],
  priorityNote: {
    lead: 'Every conflict gets raised.',
    rest: 'When two principles point different ways, flag it and decide it yourself. The order is a guide, not an autopilot.',
  },
  steps: [
    {
      lead: 'Follow the money.',
      rest: 'Look at the FPPC Top 10 list or the "Ad paid for by" box on a mailer. A billionaire, a single megadonor or a business group means be skeptical. Labor money is a good sign.',
    },
    {
      lead: 'Check labor.',
      rest: 'Your union (SEIU Local 1000) first, then the California Labor Federation, then individual unions. If unions split, let the funding break the tie.',
    },
    {
      lead: 'Check the tax.',
      rest: 'Taxes wealth or income over about $300K: Yes. Blocks those taxes: No. A tax everyone pays: only if it funds firefighters, police or other public workers.',
    },
    {
      lead: 'Check the debt.',
      rest: 'Bonds or new borrowing: lean No. Saves money or pays down debt: lean Yes.',
    },
    {
      lead: 'Read the text last.',
      rest: "It catches a good cause with bad funders, or a nice title hiding something you'd oppose.",
    },
    {
      lead: 'Flag any conflict.',
      rest: 'If the steps point different ways, mark it and make the call yourself.',
    },
  ],
};
