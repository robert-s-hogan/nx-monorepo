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
        <label className="rc-label">
          Title <span className="rc-muted">*</span>
        </label>
        <input
          ref={titleInputRef}
          type="text"
          required
          value={value.title}
          onChange={(e) => onChange({ ...value, title: e.target.value })}
          className="rc-input"
        />
      </div>

      <div className="mb-3">
        <label className="rc-label">Description</label>
        <textarea
          rows={2}
          value={value.description}
          onChange={(e) => onChange({ ...value, description: e.target.value })}
          className="rc-input"
        />
      </div>

      <div className="grid grid-cols-3 gap-3 mb-3">
        <div>
          <label className="rc-label">Prep Time</label>
          <input
            type="text"
            placeholder="e.g. 15 min"
            value={value.prepTime}
            onChange={(e) => onChange({ ...value, prepTime: e.target.value })}
            className="rc-input"
          />
        </div>
        <div>
          <label className="rc-label">Cook Time</label>
          <input
            type="text"
            placeholder="e.g. 30 min"
            value={value.cookTime}
            onChange={(e) => onChange({ ...value, cookTime: e.target.value })}
            className="rc-input"
          />
        </div>
        <div>
          <label className="rc-label">Servings</label>
          <input
            type="text"
            placeholder="e.g. 4"
            value={value.servings}
            onChange={(e) => onChange({ ...value, servings: e.target.value })}
            className="rc-input"
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="rc-label">Ingredients</label>
        <p className="rc-hint">
          One per line. End a line with a colon (Toppings:) to start a group, and add (12 g) to set an exact weight.
        </p>
        <textarea
          rows={8}
          placeholder={'2 cups flour\n1 tsp salt\n3 eggs'}
          value={value.ingredientsRaw}
          onChange={(e) => onChange({ ...value, ingredientsRaw: e.target.value })}
          className="rc-input"
        />
      </div>

      <div className="mb-4">
        <label className="rc-label">Steps</label>
        <p className="rc-hint">One per line. Times like “bake 20 minutes” get a timer button.</p>
        <textarea
          rows={8}
          placeholder={'Preheat oven to 350°F.\nMix dry ingredients.\nAdd wet ingredients and stir until combined.'}
          value={value.stepsRaw}
          onChange={(e) => onChange({ ...value, stepsRaw: e.target.value })}
          className="rc-input"
        />
      </div>

      <div className="flex gap-2">
        <button type="submit" className="rc-btn rc-btn-primary">
          {submitLabel}
        </button>
        <Link href={cancelHref} className="rc-btn">
          Cancel
        </Link>
      </div>
    </form>
  );
}
