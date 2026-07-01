import { useState } from 'react';

import { LeagueProfile, SlotDef } from '../../lib/leagues';
import { RosterSlotEditor } from './RosterSlotEditor';

export interface LeagueFormValue {
  name: string;
  teams: number;
  bench_spots: number;
  default_list_type: 'ppr' | 'superflex';
  roster_config: SlotDef[];
}

export interface LeagueFormProps {
  editing: LeagueProfile | null;
  onSave: (value: LeagueFormValue) => Promise<void>;
  onClose: () => void;
}

function blankForm(): LeagueFormValue {
  return {
    name: '',
    teams: 12,
    bench_spots: 6,
    default_list_type: 'ppr',
    roster_config: [],
  };
}

export const LeagueForm = ({ editing, onSave, onClose }: LeagueFormProps) => {
  const [form, setForm] = useState<LeagueFormValue>(
    editing
      ? {
          name: editing.name,
          teams: editing.teams,
          bench_spots: editing.bench_spots,
          default_list_type: editing.default_list_type,
          roster_config: editing.roster_config.map((s) => ({
            ...s,
            positions: [...s.positions],
          })),
        }
      : blankForm()
  );
  const [saving, setSaving] = useState(false);

  async function save() {
    if (!form.name.trim()) return;
    setSaving(true);
    try {
      await onSave({ ...form, name: form.name.trim() });
    } finally {
      setSaving(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/40 py-10"
      onClick={onClose}
    >
      <div
        className="mx-4 w-full max-w-2xl space-y-5 rounded-xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-slate-800">
            {editing ? 'Edit League' : 'New League'}
          </h2>
          <button
            onClick={onClose}
            className="text-xl leading-none text-slate-400 hover:text-slate-600"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="mb-1 block text-xs font-medium text-slate-600">
              League name
            </label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g. Yahoo Buddy League 12"
              className="w-full rounded border border-slate-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-600">
              Teams
            </label>
            <input
              type="number"
              min={4}
              max={32}
              value={form.teams}
              onChange={(e) => setForm({ ...form, teams: Number(e.target.value) })}
              className="w-full rounded border border-slate-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-600">
              Bench spots
            </label>
            <input
              type="number"
              min={0}
              max={20}
              value={form.bench_spots}
              onChange={(e) =>
                setForm({ ...form, bench_spots: Number(e.target.value) })
              }
              className="w-full rounded border border-slate-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>
          <div className="col-span-2">
            <label className="mb-1 block text-xs font-medium text-slate-600">
              Default rankings
            </label>
            <div className="flex gap-3">
              <label className="flex cursor-pointer items-center gap-1.5 text-sm">
                <input
                  type="radio"
                  checked={form.default_list_type === 'ppr'}
                  onChange={() => setForm({ ...form, default_list_type: 'ppr' })}
                />
                PPR 300
              </label>
              <label className="flex cursor-pointer items-center gap-1.5 text-sm">
                <input
                  type="radio"
                  checked={form.default_list_type === 'superflex'}
                  onChange={() =>
                    setForm({ ...form, default_list_type: 'superflex' })
                  }
                />
                Superflex 300
              </label>
            </div>
          </div>
        </div>

        <RosterSlotEditor
          slots={form.roster_config}
          onChange={(roster_config) => setForm({ ...form, roster_config })}
        />

        <div className="flex justify-end gap-2 border-t border-slate-100 pt-2">
          <button
            onClick={onClose}
            className="rounded border border-slate-300 px-4 py-1.5 text-sm transition hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            onClick={save}
            disabled={saving || !form.name.trim()}
            className="rounded bg-slate-900 px-4 py-1.5 text-sm text-white transition hover:bg-slate-700 disabled:opacity-40"
          >
            {saving ? 'Saving…' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
};
