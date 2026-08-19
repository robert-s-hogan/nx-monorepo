import { ALL_FLAG_META, ALL_FLAG_TYPES, FlagType } from '../../lib/flags';

export interface FlagFilterBarProps {
  filters: Set<FlagType>;
  onToggleFilter: (flag: FlagType) => void;
}

export const FlagFilterBar = ({ filters, onToggleFilter }: FlagFilterBarProps) => {
  return (
    <div className="flex flex-wrap items-center gap-1.5 border-b border-slate-200 bg-white px-4 py-1.5">
      <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
        Show
      </span>
      {ALL_FLAG_TYPES.map((flag) => {
        const meta = ALL_FLAG_META[flag];
        const Icon = meta.icon;
        const active = filters.has(flag);
        return (
          <button
            key={flag}
            type="button"
            onClick={() => onToggleFilter(flag)}
            className={`flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] transition ${
              active
                ? `border-transparent bg-slate-800 text-white`
                : 'border-slate-300 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Icon size={12} className={active ? '' : meta.activeColor} />
            {meta.label}
          </button>
        );
      })}
      {filters.size > 0 && (
        <button
          type="button"
          onClick={() => filters.forEach(onToggleFilter)}
          className="ml-1 text-[11px] text-slate-400 hover:text-slate-600"
        >
          Clear
        </button>
      )}
    </div>
  );
};
