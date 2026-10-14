import { Photo } from './Photo';
import type { DoneKind, Task } from '../types';

interface TaskCardProps {
  task: Task;
  photos: Record<string, string>;
  done: Record<string, boolean>;
  onToggle: (taskId: string, kind: DoneKind) => void;
}

const CHECKS: [DoneKind, string][] = [
  ['help', 'Did it with help'],
  ['solo', 'Did it on my own'],
];

export function TaskCard({ task, photos, done, onToggle }: TaskCardProps) {
  return (
    <article className="task" id={`t-${task.id}`}>
      <header>
        <h2>{task.title}</h2>
        <p className="when">{task.when}</p>
      </header>
      {task.before && (
        <p className="before">
          <b>Before you start:</b> {task.before}
        </p>
      )}
      <ol className="steps">
        {task.steps.map((step, i) => (
          <li key={i}>
            <div className="step-text">{step.text}</div>
            {step.caption && (
              <Photo src={photos[`${task.id}-${i + 1}`]} caption={step.caption} />
            )}
          </li>
        ))}
      </ol>
      <p className="caution">
        <b>Heads up:</b> {task.caution}
      </p>
      <div className="checks">
        {CHECKS.map(([kind, label]) => {
          const id = `c-${task.id}-${kind}`;
          return (
            <label key={kind} htmlFor={id}>
              <input
                type="checkbox"
                id={id}
                checked={!!done[`${task.id}-${kind}`]}
                onChange={() => onToggle(task.id, kind)}
              />
              {label}
            </label>
          );
        })}
      </div>
    </article>
  );
}
