import Link from 'next/link';
import { useState, type ReactNode } from 'react';

import TimerDock from './TimerDock';

interface Props {
  actions?: ReactNode;
}

// Sticky on every page so running timers stay in view while you move
// between recipes and steps.
export default function RecipesNavbar({ actions }: Props) {
  const [adding, setAdding] = useState(false);

  return (
    <header className="rc-dock">
      <div className="rc-wrap rc-dock-inner">
        <div className="rc-dock-bar">
          <Link href="/" className="rc-brand">
            My Recipes
          </Link>
          <div className="rc-dock-actions">
            {actions}
            <button type="button" className="rc-dbtn" aria-expanded={adding} onClick={() => setAdding((a) => !a)}>
              + Timer
            </button>
          </div>
        </div>
        <TimerDock adding={adding} onAddDone={() => setAdding(false)} />
      </div>
    </header>
  );
}
