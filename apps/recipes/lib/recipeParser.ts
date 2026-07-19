export interface ParsedRecipe {
  title: string;
  description: string;
  servings: string;
  prep_time: string;
  cook_time: string;
  ingredients: string[];
  steps: string[];
}

export function parseRecipeText(text: string): ParsedRecipe {
  const lines = text.split('\n').map((l) => l.trim());
  const nonEmpty = lines.filter((l) => l.length > 0);

  const result: ParsedRecipe = {
    title: '',
    description: '',
    servings: '',
    prep_time: '',
    cook_time: '',
    ingredients: [],
    steps: [],
  };

  if (nonEmpty.length === 0) return result;

  result.title = nonEmpty[0].replace(/^#\s*/, '');

  const ingredientsRe = /^#+\s*(ingredients?|what you('?ll)? need|you('?ll)? need)/i;
  const stepsRe =
    /^#+\s*(instructions?|directions?|steps?|method|how to (make|prepare)|preparation|procedure)/i;
  const prepTimeRe = /^(prep\s*(time)?)\s*[:：]\s*(.+)/i;
  const cookTimeRe = /^(cook(ing)?\s*(time)?|bake\s*(time)?)\s*[:：]\s*(.+)/i;
  const servingsRe = /^(serves?|servings?|yield|portions?)\s*[:：]?\s*(.+)/i;

  let section: 'description' | 'ingredients' | 'steps' = 'description';
  const descLines: string[] = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line) continue;

    if (ingredientsRe.test(line) || line.toLowerCase() === 'ingredients') {
      section = 'ingredients';
      continue;
    }
    if (stepsRe.test(line) || /^(instructions?|steps?|directions?)$/i.test(line)) {
      section = 'steps';
      continue;
    }

    const prepMatch = line.match(prepTimeRe);
    const cookMatch = line.match(cookTimeRe);
    const servingsMatch = line.match(servingsRe);

    if (prepMatch) {
      result.prep_time = prepMatch[3];
      continue;
    }
    if (cookMatch) {
      result.cook_time = cookMatch[5];
      continue;
    }
    if (servingsMatch) {
      result.servings = servingsMatch[2];
      continue;
    }

    if (section === 'description') {
      descLines.push(line);
    } else if (section === 'ingredients') {
      const cleaned = line.replace(/^[-–•*]\s*/, '').replace(/^\d+\.\s*/, '');
      if (cleaned) result.ingredients.push(cleaned);
    } else if (section === 'steps') {
      const cleaned = line.replace(/^step\s*\d+\s*[:.]?\s*/i, '').replace(/^\d+\.\s*/, '');
      if (cleaned) result.steps.push(cleaned);
    }
  }

  result.description = descLines.join(' ').trim();
  return result;
}

export function formatRecipeText(recipe: ParsedRecipe): string {
  const lines: string[] = [recipe.title || 'Untitled Recipe'];

  if (recipe.description) lines.push('', recipe.description);

  const meta = [
    recipe.prep_time && `Prep: ${recipe.prep_time}`,
    recipe.cook_time && `Cook: ${recipe.cook_time}`,
    recipe.servings && `Servings: ${recipe.servings}`,
  ].filter((line): line is string => Boolean(line));
  if (meta.length) lines.push('', ...meta);

  if (recipe.ingredients.length) {
    lines.push('', 'Ingredients', ...recipe.ingredients.map((i) => `- ${i}`));
  }

  if (recipe.steps.length) {
    lines.push('', 'Instructions', ...recipe.steps.map((s, i) => `${i + 1}. ${s}`));
  }

  return lines.join('\n');
}
