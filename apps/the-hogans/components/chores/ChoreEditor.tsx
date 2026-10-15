import { ChartState, Chore, SECTIONS, SectionId, newChoreId } from './content';
import styles from './Chores.module.css';

interface ChoreEditorProps {
  state: ChartState;
  onChange: (next: ChartState) => void;
  onReset: () => void;
}

const toCents = (value: string) => Math.max(0, Math.round(Number(value) || 0));

export function ChoreEditor({ state, onChange, onReset }: ChoreEditorProps) {
  const update = (id: string, patch: Partial<Chore>) =>
    onChange({
      ...state,
      chores: state.chores.map((c) => (c.id === id ? { ...c, ...patch } : c)),
    });

  const remove = (id: string) =>
    onChange({ ...state, chores: state.chores.filter((c) => c.id !== id) });

  // New chores go at the end of their own section so the sheet's order holds.
  const add = (section: SectionId) => {
    const chore: Chore = { id: newChoreId(), section, emoji: '', name: '', cents: 25 };
    const last = state.chores.map((c) => c.section).lastIndexOf(section);
    const chores = [...state.chores];
    chores.splice(last === -1 ? chores.length : last + 1, 0, chore);
    onChange({ ...state, chores });
  };

  return (
    <div className={styles.editor}>
      <label className={styles.streakField}>
        Streak bonus (cents)
        <input
          type="number"
          min={0}
          inputMode="numeric"
          value={state.streakBonus}
          onChange={(e) => onChange({ ...state, streakBonus: toCents(e.target.value) })}
        />
      </label>

      {SECTIONS.map((s) => (
        <fieldset key={s.id} className={styles.editSection}>
          <legend>
            {s.title} <span>{s.note}</span>
          </legend>
          {state.chores
            .filter((c) => c.section === s.id)
            .map((c) => (
              <div key={c.id} className={styles.editRow}>
                <input
                  aria-label="Emoji"
                  className={styles.editEmoji}
                  value={c.emoji}
                  placeholder="🙂"
                  onChange={(e) => update(c.id, { emoji: e.target.value })}
                />
                <input
                  aria-label="Chore"
                  className={styles.editName}
                  value={c.name}
                  placeholder="New chore"
                  onChange={(e) => update(c.id, { name: e.target.value })}
                />
                <label className={styles.editCents}>
                  <input
                    aria-label="Pays (cents)"
                    type="number"
                    min={0}
                    inputMode="numeric"
                    value={c.cents}
                    onChange={(e) => update(c.id, { cents: toCents(e.target.value) })}
                  />
                  ¢
                </label>
                <button
                  type="button"
                  className={styles.remove}
                  aria-label={`Remove ${c.name || 'chore'}`}
                  onClick={() => remove(c.id)}
                >
                  ×
                </button>
              </div>
            ))}
          <button type="button" className={styles.addButton} onClick={() => add(s.id)}>
            + Add chore
          </button>
        </fieldset>
      ))}

      <button
        type="button"
        className={styles.resetButton}
        onClick={() => {
          if (window.confirm('Put the chart back to the original chores and amounts?')) onReset();
        }}
      >
        Reset to the original chart
      </button>
    </div>
  );
}
