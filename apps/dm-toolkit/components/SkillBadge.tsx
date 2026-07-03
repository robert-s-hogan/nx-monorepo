import type { RandomSkill } from '../types';

interface Props {
  skill: RandomSkill;
  onRemove?: () => void;
}

const sentimentStyles: Record<string, string> = {
  positive: 'border-green-700 bg-green-950 text-green-300',
  negative: 'border-red-800 bg-red-950 text-red-300',
  mixed: 'border-amber-700 bg-amber-950 text-amber-300',
};

const triggerLabel: Record<string, string> = {
  failure: 'on fail',
  session_start: 'session',
  random: 'random',
};

export default function SkillBadge({ skill, onRemove }: Props) {
  return (
    <div
      className={`rounded-lg border px-3 py-2 text-xs max-w-xs ${sentimentStyles[skill.sentiment]}`}
    >
      <div className="flex justify-between items-start gap-2">
        <div>
          <span className="font-bold">{skill.name}</span>
          <span className="ml-2 opacity-60 text-[10px]">[{triggerLabel[skill.trigger]}]</span>
        </div>
        {onRemove && (
          <button
            onClick={onRemove}
            className="opacity-50 hover:opacity-100 text-current leading-none"
            aria-label="Remove skill"
          >
            ✕
          </button>
        )}
      </div>
      <p className="mt-1 opacity-70 italic">{skill.flavor}</p>
      <p className="mt-1 font-medium">{skill.effect}</p>
    </div>
  );
}
