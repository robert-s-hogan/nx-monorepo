import { POSITION_OPTIONS, SLOT_PRESETS, SlotDef } from '../../lib/leagues';

export interface RosterSlotEditorProps {
  slots: SlotDef[];
  onChange: (slots: SlotDef[]) => void;
}

let nextSlotId = 1;

export const RosterSlotEditor = ({ slots, onChange }: RosterSlotEditorProps) => {
  function addSlotFromPreset(preset: (typeof SLOT_PRESETS)[number]) {
    onChange([
      ...slots,
      {
        id: `slot_${nextSlotId++}`,
        label: preset.def.label,
        positions: [...preset.def.positions],
      },
    ]);
  }

  function removeSlot(idx: number) {
    onChange(slots.filter((_, i) => i !== idx));
  }

  function moveSlot(idx: number, dir: -1 | 1) {
    const target = idx + dir;
    if (target < 0 || target >= slots.length) return;
    const next = [...slots];
    [next[idx], next[target]] = [next[target], next[idx]];
    onChange(next);
  }

  function updateLabel(idx: number, label: string) {
    const next = [...slots];
    next[idx] = { ...next[idx], label };
    onChange(next);
  }

  function togglePos(idx: number, pos: string) {
    const next = [...slots];
    const positions = next[idx].positions.includes(pos)
      ? next[idx].positions.filter((p) => p !== pos)
      : [...next[idx].positions, pos];
    next[idx] = { ...next[idx], positions };
    onChange(next);
  }

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-medium text-slate-600">Roster slots</span>
      </div>

      <div className="mb-3 space-y-1.5">
        {slots.map((slot, idx) => (
          <div
            key={slot.id}
            className="flex items-center gap-2 rounded border border-slate-200 bg-slate-50 px-3 py-2"
          >
            <div className="flex flex-col gap-0.5">
              <button
                onClick={() => moveSlot(idx, -1)}
                className="text-xs leading-none text-slate-300 hover:text-slate-600"
              >
                ▲
              </button>
              <button
                onClick={() => moveSlot(idx, 1)}
                className="text-xs leading-none text-slate-300 hover:text-slate-600"
              >
                ▼
              </button>
            </div>

            <input
              value={slot.label}
              onChange={(e) => updateLabel(idx, e.target.value)}
              className="w-24 rounded border border-slate-300 px-2 py-0.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-slate-400"
            />

            <div className="flex flex-1 flex-wrap gap-1">
              {POSITION_OPTIONS.map((pos) => (
                <button
                  key={pos}
                  onClick={() => togglePos(idx, pos)}
                  className={`rounded border px-1.5 py-0.5 text-[11px] font-semibold transition ${
                    slot.positions.includes(pos)
                      ? 'border-slate-800 bg-slate-800 text-white'
                      : 'border-slate-200 bg-white text-slate-400 hover:border-slate-400'
                  }`}
                >
                  {pos}
                </button>
              ))}
            </div>

            <button
              onClick={() => removeSlot(idx)}
              className="text-sm leading-none text-slate-300 hover:text-red-500"
            >
              ✕
            </button>
          </div>
        ))}

        {slots.length === 0 && (
          <p className="py-2 text-center text-xs text-slate-400">
            Add slots below
          </p>
        )}
      </div>

      <div>
        <p className="mb-1.5 text-xs text-slate-500">Add slot:</p>
        <div className="flex flex-wrap gap-1.5">
          {SLOT_PRESETS.map((preset) => (
            <button
              key={preset.label}
              onClick={() => addSlotFromPreset(preset)}
              className="rounded border border-slate-300 px-2.5 py-1 text-xs transition hover:bg-slate-100"
            >
              + {preset.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
