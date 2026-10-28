// Reads amounts out of free-text ingredient lines ("1 ½ tsp olive oil") so the
// recipe page can bold them and offer a grams conversion. Nothing here is
// stored — ingredients stay plain strings in the DB.

export type Quantity = number | [number, number];

type Unit = 'tsp' | 'tbsp' | 'cup' | 'floz' | 'ml' | 'l' | 'g' | 'kg' | 'oz' | 'lb';

export interface ParsedIngredient {
  text: string;
  /** The amount exactly as written, e.g. "1 ½ tsp". Empty when there is none. */
  amount: string;
  name: string;
  qty: Quantity | null;
  unit: Unit | null;
  grams: Quantity | null;
}

export interface IngredientGroup {
  title: string | null;
  /** `index` is the line's position in recipe.ingredients, used as its checklist key. */
  items: { index: number; ingredient: ParsedIngredient }[];
}

const FRACTIONS: Record<string, number> = {
  '½': 1 / 2, '⅓': 1 / 3, '⅔': 2 / 3, '¼': 1 / 4, '¾': 3 / 4,
  '⅕': 1 / 5, '⅛': 1 / 8, '⅜': 3 / 8, '⅝': 5 / 8, '⅞': 7 / 8,
};
const FRACTION_CHARS = Object.keys(FRACTIONS).join('');

const NUM = `(?:\\d+\\s+\\d+\\/\\d+|\\d+\\s*[${FRACTION_CHARS}]|\\d+\\/\\d+|\\d*\\.\\d+|\\d+|[${FRACTION_CHARS}])`;
const QTY_RE = new RegExp(`^(${NUM})(?:\\s*(?:-|–|to)\\s*(${NUM}))?`);
const UNIT_RE =
  /^(fl\.?\s*oz|teaspoons?|tsps?|tablespoons?|tbsps?|tbs|tbl|cups?|milliliters?|millilitres?|ml|liters?|litres?|kilograms?|kg|grams?|gr|g|ounces?|oz|pounds?|lbs?)\.?(?=\s|,|$)/i;
// "(12 g)" written in a line wins over the density table.
const GRAMS_NOTE_RE = /\s*\((\d+(?:\.\d+)?)\s*(?:g|grams?)\)/i;

const UNIT_NAMES: [RegExp, Unit][] = [
  [/^fl/i, 'floz'],
  [/^(teaspoon|tsp)/i, 'tsp'],
  [/^(tablespoon|tbs|tbl)/i, 'tbsp'],
  [/^cup/i, 'cup'],
  [/^(milli|ml)/i, 'ml'],
  [/^(liter|litre)/i, 'l'],
  [/^(kilogram|kg)/i, 'kg'],
  [/^(gram|gr|g$)/i, 'g'],
  [/^(ounce|oz)/i, 'oz'],
  [/^(pound|lb)/i, 'lb'],
];

const CUPS_PER_UNIT: Partial<Record<Unit, number>> = {
  tsp: 1 / 48, tbsp: 1 / 16, cup: 1, floz: 1 / 8, ml: 1 / 236.6, l: 1000 / 236.6,
};
const GRAMS_PER_UNIT: Partial<Record<Unit, number>> = { g: 1, kg: 1000, oz: 28.35, lb: 453.6 };

// Grams per US cup. Checked in order, so specific names come before the
// general ones they contain ("peanut butter" before "butter").
const DENSITIES: [string[], number][] = [
  [['pb fit', 'pbfit', 'powdered peanut butter', 'peanut butter powder'], 96],
  [['peanut butter', 'almond butter'], 258],
  [['buttermilk'], 245],
  [['butter'], 227],
  [['almond flour'], 96],
  [['whole wheat flour'], 120],
  [['flour'], 125],
  [['powdered sugar', 'confectioners sugar', "confectioners' sugar"], 120],
  [['brown sugar'], 213],
  [['sugar'], 200],
  [['maple syrup', 'syrup'], 322],
  [['honey'], 340],
  [['molasses'], 337],
  [['sour cream'], 230],
  [['heavy cream', 'whipping cream', 'cream'], 238],
  [['milk'], 244],
  [['yogurt', 'yoghurt'], 245],
  [['olive oil', 'vegetable oil', 'canola oil', 'coconut oil', 'oil'], 216],
  [['water'], 237],
  [['broth', 'stock'], 240],
  [['juice'], 240],
  [['vinegar'], 239],
  [['soy sauce'], 255],
  [['mayonnaise', 'mayo'], 220],
  [['vanilla'], 202],
  [['baking soda'], 230],
  [['baking powder'], 192],
  [['cornstarch', 'corn starch'], 128],
  [['cocoa'], 85],
  [['cinnamon'], 125],
  [['salt'], 288],
  [['chia'], 170],
  [['flax', 'flaxseed'], 150],
  [['rolled oats', 'oats'], 90],
  [['rice'], 185],
  [['breadcrumbs', 'bread crumbs', 'panko'], 108],
  [['chocolate chips'], 170],
  [['raisins'], 145],
  [['shredded coconut', 'coconut flakes'], 85],
  [['parmesan'], 100],
  [['cheese'], 113],
  [['nuts', 'almonds', 'walnuts', 'pecans', 'cashews', 'peanuts', 'pistachios'], 140],
  [['blueberries', 'berries', 'raspberries', 'strawberries'], 148],
  [['spinach'], 30],
];
const DENSITY_RES: [RegExp, number][] = DENSITIES.map(([names, grams]) => [
  new RegExp(`\\b(${names.map((n) => n.replace(/[.*+?^${}()|[\]\\']/g, '\\$&')).join('|')})\\b`, 'i'),
  grams,
]);

function parseNumber(raw: string): number {
  const s = raw.trim();
  const mixed = s.match(/^(\d+)\s+(\d+)\/(\d+)$/);
  if (mixed) return Number(mixed[1]) + Number(mixed[2]) / Number(mixed[3]);
  const frac = s.match(/^(\d+)\/(\d+)$/);
  if (frac) return Number(frac[1]) / Number(frac[2]);
  const uni = s.match(new RegExp(`^(\\d*)\\s*([${FRACTION_CHARS}])$`));
  if (uni) return Number(uni[1] || 0) + FRACTIONS[uni[2]];
  return Number(s);
}

function mapQty(q: Quantity, fn: (n: number) => number): Quantity {
  return Array.isArray(q) ? [fn(q[0]), fn(q[1])] : fn(q);
}

export function gramsPerCup(name: string): number | null {
  for (const [re, grams] of DENSITY_RES) if (re.test(name)) return grams;
  return null;
}

export function parseIngredient(line: string): ParsedIngredient {
  const note = line.match(GRAMS_NOTE_RE);
  const text = note ? line.replace(GRAMS_NOTE_RE, '').trim() : line.trim();
  const base: ParsedIngredient = { text, amount: '', name: text, qty: null, unit: null, grams: null };

  const qtyMatch = text.match(QTY_RE);
  if (!qtyMatch) return { ...base, grams: note ? Number(note[1]) : null };

  const qty: Quantity = qtyMatch[2]
    ? [parseNumber(qtyMatch[1]), parseNumber(qtyMatch[2])]
    : parseNumber(qtyMatch[1]);
  let rest = text.slice(qtyMatch[0].length);
  let unit: Unit | null = null;
  const unitMatch = rest.trimStart().match(UNIT_RE);
  if (unitMatch) {
    unit = UNIT_NAMES.find(([re]) => re.test(unitMatch[1]))?.[1] ?? null;
    rest = rest.trimStart().slice(unitMatch[0].length);
  }
  const name = rest.trim().replace(/^of\s+/i, '');
  const amount = text.slice(0, text.length - rest.length).trim();

  let grams: Quantity | null = note ? Number(note[1]) : null;
  if (grams === null && unit) {
    const perUnit = GRAMS_PER_UNIT[unit];
    const cups = CUPS_PER_UNIT[unit];
    const density = cups ? gramsPerCup(name) : null;
    if (perUnit) grams = mapQty(qty, (n) => n * perUnit);
    else if (cups && density) grams = mapQty(qty, (n) => n * cups * density);
  }

  return { text, amount, name, qty, unit, grams };
}

const HEADER_RE = /^(?:#+\s*(.+)|([^\d].{0,40}):)$/;

export function groupIngredients(lines: string[]): IngredientGroup[] {
  const groups: IngredientGroup[] = [{ title: null, items: [] }];
  lines.forEach((line, index) => {
    const header = line.trim().match(HEADER_RE);
    if (header) {
      groups.push({ title: (header[1] ?? header[2]).trim(), items: [] });
      return;
    }
    groups[groups.length - 1].items.push({ index, ingredient: parseIngredient(line) });
  });
  return groups.filter((g) => g.title !== null || g.items.length > 0);
}

function roundGrams(n: number): string {
  // The epsilon keeps float noise (2.2499…) from rounding the wrong way.
  return String(n < 10 ? Math.round(n * 10 + 1e-9) / 10 : Math.round(n + 1e-9));
}

export function formatGrams(grams: Quantity): string {
  return Array.isArray(grams)
    ? `${roundGrams(grams[0])}–${roundGrams(grams[1])} g`
    : `${roundGrams(grams)} g`;
}
