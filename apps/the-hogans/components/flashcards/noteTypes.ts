// Anki's stock note types. Everyone gets their own copies the first time
// they open /flashcards, and can then edit them or add more.
import { NoteType } from './types';

const CSS = `.card {
  font-family: Georgia, serif;
  font-size: 22px;
  text-align: center;
  color: #1d2433;
}
.cloze {
  font-weight: bold;
  color: #2c55c7;
}`;

const FRONT_BACK = '{{FrontSide}}\n\n<hr id=answer>\n\n';

export const STOCK_NOTE_TYPES: Omit<NoteType, 'id'>[] = [
  {
    name: 'Basic',
    kind: 'standard',
    fields: ['Front', 'Back'],
    templates: [{ name: 'Card 1', front: '{{Front}}', back: `${FRONT_BACK}{{Back}}` }],
    css: CSS,
    sortField: 0,
  },
  {
    name: 'Basic (and reversed card)',
    kind: 'standard',
    fields: ['Front', 'Back'],
    templates: [
      { name: 'Card 1', front: '{{Front}}', back: `${FRONT_BACK}{{Back}}` },
      { name: 'Card 2', front: '{{Back}}', back: `${FRONT_BACK}{{Front}}` },
    ],
    css: CSS,
    sortField: 0,
  },
  {
    name: 'Basic (optional reversed card)',
    kind: 'standard',
    fields: ['Front', 'Back', 'Add Reverse'],
    templates: [
      { name: 'Card 1', front: '{{Front}}', back: `${FRONT_BACK}{{Back}}` },
      {
        name: 'Card 2',
        front: '{{#Add Reverse}}{{Back}}{{/Add Reverse}}',
        back: `${FRONT_BACK}{{Front}}`,
      },
    ],
    css: CSS,
    sortField: 0,
  },
  {
    name: 'Basic (type in the answer)',
    kind: 'standard',
    fields: ['Front', 'Back'],
    templates: [
      {
        name: 'Card 1',
        front: '{{Front}}\n\n{{type:Back}}',
        back: '{{Front}}\n\n<hr id=answer>\n\n{{type:Back}}',
      },
    ],
    css: CSS,
    sortField: 0,
  },
  {
    name: 'Cloze',
    kind: 'cloze',
    fields: ['Text', 'Back Extra'],
    templates: [
      {
        name: 'Cloze',
        front: '{{cloze:Text}}',
        back: '{{cloze:Text}}<br>\n{{Back Extra}}',
      },
    ],
    css: CSS,
    sortField: 0,
  },
];
