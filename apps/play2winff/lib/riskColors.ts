// 0-10 risk-factor color gradient: near-white/neutral -> green -> yellow ->
// red. Full literal class names (not template-built) so Tailwind's JIT
// scanner can find them. Confirmed with the user before wiring this up.
const RISK_COLOR_BY_VALUE: Record<number, string> = {
  0: 'text-slate-200',
  1: 'text-green-200',
  2: 'text-green-300',
  3: 'text-green-400',
  4: 'text-green-500',
  5: 'text-lime-400',
  6: 'text-yellow-400',
  7: 'text-amber-500',
  8: 'text-orange-500',
  9: 'text-red-500',
  10: 'text-red-700',
};

export function riskColor(value: number | null): string {
  if (value == null) return 'text-text-color opacity-30';
  return RISK_COLOR_BY_VALUE[value] ?? 'text-text-color';
}
