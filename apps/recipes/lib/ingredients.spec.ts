import { formatGrams, groupIngredients, parseIngredient } from './ingredients';

describe('parseIngredient', () => {
  it('splits amount, unit and name', () => {
    const p = parseIngredient('½ tsp olive oil');
    expect(p.amount).toBe('½ tsp');
    expect(p.name).toBe('olive oil');
    expect(p.qty).toBe(0.5);
    expect(p.unit).toBe('tsp');
    expect(formatGrams(p.grams!)).toBe('2.3 g');
  });

  it('handles mixed numbers, slashes and decimals', () => {
    expect(parseIngredient('1 1/2 cups flour').qty).toBe(1.5);
    expect(parseIngredient('1½ cups flour').qty).toBe(1.5);
    expect(parseIngredient('1/3 cup mixed nuts').qty).toBeCloseTo(1 / 3);
    expect(parseIngredient('.5 cup milk').qty).toBe(0.5);
  });

  it('converts ranges', () => {
    const p = parseIngredient('2–3 tbsp milk');
    expect(p.qty).toEqual([2, 3]);
    expect(formatGrams(p.grams!)).toBe('31–46 g');
  });

  it('matches specific names before general ones', () => {
    expect(formatGrams(parseIngredient('2 tbsp PB Fit powder').grams!)).toBe('12 g');
    expect(formatGrams(parseIngredient('2 tbsp peanut butter').grams!)).toBe('32 g');
    expect(formatGrams(parseIngredient('1 cup unsalted butter').grams!)).toBe('227 g');
  });

  it('converts weights without a density', () => {
    expect(formatGrams(parseIngredient('8 oz cream cheese').grams!)).toBe('227 g');
  });

  it('uses a written gram amount over the table', () => {
    const p = parseIngredient('1 scoop protein powder (31 g)');
    expect(p.text).toBe('1 scoop protein powder');
    expect(p.grams).toBe(31);
  });

  it('leaves lines without a convertible amount alone', () => {
    expect(parseIngredient('3 large eggs')).toMatchObject({ amount: '3', name: 'large eggs', grams: null });
    expect(parseIngredient('Pinch of flaky salt')).toMatchObject({ amount: '', qty: null, grams: null });
    expect(parseIngredient('2 tbsp mystery spice').grams).toBeNull();
  });
});

describe('groupIngredients', () => {
  it('starts a group at a line ending in a colon or starting with #', () => {
    const groups = groupIngredients(['3 tbsp chia seeds', 'Toppings:', 'Berries', '## Sauce', '1 tbsp soy sauce']);
    expect(groups.map((g) => g.title)).toEqual([null, 'Toppings', 'Sauce']);
    expect(groups[1].items[0]).toMatchObject({ index: 2 });
  });

  it('drops the empty leading group when the list starts with a header', () => {
    expect(groupIngredients(['For the bowl:', '1 cup milk']).map((g) => g.title)).toEqual(['For the bowl']);
  });
});
