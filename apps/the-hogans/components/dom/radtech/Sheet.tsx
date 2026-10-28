// Bottom-sheet modal — ported from the original show()/hide() pair. Used
// for both "pick a term for this class" and "add a class to this term".
import type { ReactNode } from 'react';

export interface SheetOption {
  key: string;
  code: string;
  title: ReactNode;
  right?: ReactNode;
  disabled?: boolean;
  badge?: string;
  onClick: () => void;
}

export interface SheetSection {
  label?: string;
  options: SheetOption[];
}

interface SheetProps {
  open: boolean;
  title: string;
  sub: string;
  sections: SheetSection[];
  emptyMessage?: string;
  onClose: () => void;
}

export function Sheet({
  open,
  title,
  sub,
  sections,
  emptyMessage,
  onClose,
}: SheetProps) {
  const hasOptions = sections.some((s) => s.options.length > 0);
  return (
    <>
      <div
        className={`scrim ${open ? 'on' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div className={`sheet ${open ? 'on' : ''}`} role="dialog" aria-modal="true">
        <div className="sheeth">{title}</div>
        <div className="sheets">{sub}</div>
        {!hasOptions && emptyMessage ? (
          <div className="empty">{emptyMessage}</div>
        ) : (
          sections.map((section, i) => (
            <div key={section.label ?? i}>
              {section.label ? (
                <div className="slotlbl">{section.label}</div>
              ) : null}
              {section.options.map((opt) => (
                <button
                  key={opt.key}
                  type="button"
                  className="opt"
                  disabled={opt.disabled}
                  onClick={opt.onClick}
                >
                  <div className="code">{opt.code}</div>
                  <div className="title">{opt.title}</div>
                  {opt.right ? (
                    <div
                      className="u"
                      style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--dim)' }}
                    >
                      {opt.right}
                    </div>
                  ) : null}
                  {opt.badge ? (
                    <div className="stamp prog">{opt.badge}</div>
                  ) : null}
                </button>
              ))}
            </div>
          ))
        )}
      </div>
    </>
  );
}
