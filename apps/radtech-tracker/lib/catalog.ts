// SRJC Radiologic Technology (AS) program of study, catalog effective Fall
// 2026. Pulled from the source program-of-study page (see footer link in
// the page). Static curriculum data — never touches the DB, only his
// per-course status/term/schedule does (see types/index.ts ProgressState).
import { Course, CourseId, RequirementGroup } from '../types';

export const C: Record<CourseId, Course> = {
  CS5: { code: 'CS 5', t: 'Computer Literacy', u: 3 },
  HLC160: {
    code: 'HLC 160',
    t: 'Medical Terminology',
    u: 3,
    note: 'Recency: must be within 5 years of applying',
  },
  RADT100: { code: 'RADT 100', t: 'Survey of Medical Imaging', u: 2 },
  ENGLC1000: { code: 'ENGL C1000', t: 'Academic Reading and Writing', u: 4 },
  EMLS10: {
    code: 'EMLS 10',
    t: 'College Composition for Multilingual Students',
    u: 4.5,
  },
  ANAT1: {
    code: 'ANAT 1',
    t: 'General Human Anatomy',
    u: 5,
    pre: [
      { anyOf: ['BIO10'], label: 'BIO 10 or higher' },
      { anyOf: ['ENGLC1000', 'EMLS10'], label: 'ENGL C1000 or EMLS 10' },
    ],
    note: 'Recency: must be within 5 years of applying',
  },
  ANAT58: {
    code: 'ANAT 58',
    t: 'Introduction to Human Anatomy',
    u: 3,
    note: 'No prerequisites. Recency: within 5 years of applying',
  },
  PHYZ1: {
    code: 'PHYZ 1',
    t: 'Human Physiology',
    u: 5,
    pre: [
      { anyOf: ['ENGLC1000', 'EMLS10'], label: 'ENGL C1000 or EMLS 10' },
      { anyOf: ['BIO10'], label: 'BIO 10 or higher' },
      { anyOf: ['CHEM60'], label: 'CHEM 60, 3A or 1A' },
    ],
  },
  PHYZ58: {
    code: 'PHYZ 58',
    t: 'Introduction to Human Physiology',
    u: 3,
    note: 'No prerequisites. CHEM 60 recommended first',
  },
  COMM7: { code: 'COMM 7', t: 'Intercultural Communication', u: 3 },
  COMMC1000: { code: 'COMM C1000', t: 'Introduction to Public Speaking', u: 3 },
  COMM6: { code: 'COMM 6', t: 'Interpersonal Communication', u: 3 },
  COMM4: { code: 'COMM 4', t: 'Survey of Communication', u: 3 },
  HIST21: {
    code: 'HIST 21',
    t: 'Race, Ethnicity and Gender in American Culture',
    u: 3,
  },
  HUM6: { code: 'HUM 6', t: 'Humanities in the United States', u: 3 },
  PSYC34: {
    code: 'PSYC 34',
    t: 'The Psychology of Prejudice and Discrimination',
    u: 3,
  },
  SOC30: { code: 'SOC 30', t: 'Race, Ethnicity, and Inequality', u: 3 },
  MATH10: { code: 'MATH 10', t: 'Nature of Mathematics', u: 3 },
  STATC1000: { code: 'STAT C1000', t: 'Introduction to Statistics', u: 4 },
  PSYC9: {
    code: 'PSYC 9',
    t: 'Introduction to Behavioral Sciences Statistics',
    u: 3,
  },
  PSYCC1000: { code: 'PSYC C1000', t: 'Introduction to Psychology', u: 3 },
  PSYC8: { code: 'PSYC 8', t: 'Introduction to Lifespan Psychology', u: 3 },
  PSYC30: { code: 'PSYC 30', t: 'Social Psychology', u: 3 },
  PSYC46: { code: 'PSYC 46', t: 'Aging, Dying and Death', u: 3 },
  // Support — required to unlock ANAT 1 / PHYZ 1, not counted in the 27.
  BIO10: {
    code: 'BIO 10',
    t: 'Introduction to Principles of Biology',
    u: 4,
    sup: 1,
  },
  CHEM60: {
    code: 'CHEM 60',
    t: 'Introduction to General Chemistry',
    u: 4,
    sup: 1,
  },
};

export const SUPPORT_IDS: CourseId[] = ['BIO10', 'CHEM60'];

export const GROUPS: RequirementGroup[] = [
  {
    id: 'core',
    name: 'Required core',
    need: 8,
    kind: 'all',
    list: ['CS5', 'HLC160', 'RADT100'],
    note: 'All three are required — there is no substitute.',
  },
  {
    id: 'engl',
    name: 'English composition',
    need: 4,
    kind: 'any',
    list: ['ENGLC1000', 'EMLS10'],
    note: 'Only a transferable reading and composition course counts.',
  },
  {
    id: 'anat',
    name: 'Anatomy',
    need: 3,
    kind: 'any',
    list: ['ANAT1', 'ANAT58'],
    note: '<b>ANAT 58 has no prerequisites.</b> ANAT 1 needs BIO 10 and English finished first.',
  },
  {
    id: 'phyz',
    name: 'Physiology',
    need: 3,
    kind: 'any',
    list: ['PHYZ1', 'PHYZ58'],
    note: '<b>PHYZ 58 has no prerequisites.</b> PHYZ 1 needs English, BIO 10 and CHEM 60 first.',
  },
  {
    id: 'comm',
    name: 'Communication & diversity',
    need: 3,
    kind: 'combo',
    solo: ['COMM7'],
    slotA: ['COMMC1000', 'COMM6', 'COMM4'],
    slotB: ['HIST21', 'HUM6', 'PSYC34', 'SOC30'],
    note: 'Either COMM 7 on its own, <b>or</b> one speaking class paired with one diversity class.',
  },
  {
    id: 'math',
    name: 'Mathematics',
    need: 3,
    kind: 'any',
    list: ['MATH10', 'STATC1000', 'PSYC9'],
    note: 'Any higher-level math course also satisfies this.',
  },
  {
    id: 'psyc',
    name: 'Psychology',
    need: 3,
    kind: 'any',
    list: ['PSYCC1000', 'PSYC8', 'PSYC30', 'PSYC46'],
    note: 'Pick any one.',
  },
];

export const TOTAL_UNITS = 27;
export const DAYS = ['M', 'T', 'W', 'Th', 'F', 'S'];
export const DAYFULL = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
