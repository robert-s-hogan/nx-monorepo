import { useEffect, useRef, useState } from 'react';

interface DiePickerProps {
  sides: number;
  value: number | null;
  onSelect: (value: number) => void;
  disabled?: boolean;
}

// A button that opens a grid of every possible face (1..sides) to click,
// instead of typing a number — faster at the table when someone just rolled
// a physical die and is calling out the result.
export default function DiePicker({ sides, value, onSelect, disabled }: DiePickerProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        disabled={disabled}
        title={`d${sides}`}
        className="w-16 h-9 flex items-center justify-center bg-stone-950 border border-stone-700 hover:border-amber-600 disabled:opacity-40 disabled:hover:border-stone-700 rounded-lg text-sm text-stone-200 font-mono transition-colors"
      >
        {value ?? `d${sides}`}
      </button>

      {open && (
        <div className="absolute z-20 top-full left-0 mt-1 p-2 bg-stone-900 border border-stone-700 rounded-lg shadow-xl grid grid-cols-5 gap-1 w-56">
          {Array.from({ length: sides }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => {
                onSelect(n);
                setOpen(false);
              }}
              className={`h-7 rounded text-xs font-mono transition-colors ${
                value === n
                  ? 'bg-amber-700 text-amber-100'
                  : 'bg-stone-800 hover:bg-stone-700 text-stone-300'
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
