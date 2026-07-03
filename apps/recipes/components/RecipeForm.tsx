import Link from 'next/link';

export interface RecipeFormState {
  title: string;
  description: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  ingredientsRaw: string;
  stepsRaw: string;
}

interface Props {
  value: RecipeFormState;
  onChange: (value: RecipeFormState) => void;
  onSubmit: () => void;
  submitLabel: string;
  cancelHref: string;
  titleInputRef?: React.Ref<HTMLInputElement>;
}

export default function RecipeForm({
  value,
  onChange,
  onSubmit,
  submitLabel,
  cancelHref,
  titleInputRef,
}: Props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div className="mb-3">
        <label className="block font-semibold mb-1">
          Title <span className="text-red-600">*</span>
        </label>
        <input
          ref={titleInputRef}
          type="text"
          required
          value={value.title}
          onChange={(e) => onChange({ ...value, title: e.target.value })}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="mb-3">
        <label className="block font-semibold mb-1">Description</label>
        <textarea
          rows={2}
          value={value.description}
          onChange={(e) => onChange({ ...value, description: e.target.value })}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="grid grid-cols-3 gap-3 mb-3">
        <div>
          <label className="block font-semibold mb-1">Prep Time</label>
          <input
            type="text"
            placeholder="e.g. 15 min"
            value={value.prepTime}
            onChange={(e) => onChange({ ...value, prepTime: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Cook Time</label>
          <input
            type="text"
            placeholder="e.g. 30 min"
            value={value.cookTime}
            onChange={(e) => onChange({ ...value, cookTime: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Servings</label>
          <input
            type="text"
            placeholder="e.g. 4"
            value={value.servings}
            onChange={(e) => onChange({ ...value, servings: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="block font-semibold mb-1">Ingredients</label>
        <p className="text-gray-500 text-sm mb-1">One ingredient per line</p>
        <textarea
          rows={8}
          placeholder={'2 cups flour\n1 tsp salt\n3 eggs'}
          value={value.ingredientsRaw}
          onChange={(e) => onChange({ ...value, ingredientsRaw: e.target.value })}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Steps</label>
        <p className="text-gray-500 text-sm mb-1">One step per line</p>
        <textarea
          rows={8}
          placeholder={'Preheat oven to 350°F.\nMix dry ingredients.\nAdd wet ingredients and stir until combined.'}
          value={value.stepsRaw}
          onChange={(e) => onChange({ ...value, stepsRaw: e.target.value })}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="flex gap-2">
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold">
          {submitLabel}
        </button>
        <Link href={cancelHref} className="border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded">
          Cancel
        </Link>
      </div>
    </form>
  );
}
