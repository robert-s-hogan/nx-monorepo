'use client';

import { useEffect, useId, useRef, useState } from 'react';
import type { JSX } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IconApps, IconX } from '@tabler/icons-react';
import {
  GiAmericanFootballHelmet,
  GiScrollUnfurled,
  GiHouse,
  GiShoppingCart,
  GiCookingPot,
  GiDeathStar,
} from 'react-icons/gi';
import { SIBLING_APPS, SiblingApp } from '@with-nx/constants';

import styles from './floating-footer.module.css';

const ICONS: Record<SiblingApp['icon'], React.ComponentType<{ size?: number }>> = {
  'football-helmet': GiAmericanFootballHelmet,
  scroll: GiScrollUnfurled,
  home: GiHouse,
  cart: GiShoppingCart,
  'cooking-pot': GiCookingPot,
  'death-star': GiDeathStar,
};

const VISIBLE_APPS = SIBLING_APPS.filter((app) => !app.hidden);

export interface FloatingFooterProps {
  currentApp: SiblingApp['id'];
  className?: string;
}

// One click-to-open app switcher for every screen size. All styling lives in
// floating-footer.module.css rather than Tailwind classes, since consuming
// apps' Tailwind builds don't scan this lib — utility classes used here were
// silently missing in some apps, which is what broke the old hover dock.
export const FloatingFooter = ({
  currentApp,
  className,
}: FloatingFooterProps): JSX.Element => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const panelId = useId();

  // Close on Escape or on any click/tap outside the dock.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <footer ref={rootRef} className={`${styles.dock} ${className || ''}`}>
      <AnimatePresence>
        {open && (
          <motion.nav
            id={panelId}
            aria-label="Family apps"
            className={styles.panel}
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            {VISIBLE_APPS.map((app) => {
              const Icon = ICONS[app.icon];
              // Icon-only, so the app name rides along as the accessible
              // label and hover tooltip.
              return app.id === currentApp ? (
                <span
                  key={app.id}
                  role="img"
                  aria-current="page"
                  aria-label={`${app.name} (you are here)`}
                  title={`${app.name} (you are here)`}
                  className={`${styles.item} ${styles.active}`}
                >
                  <Icon size={22} />
                </span>
              ) : (
                <a
                  key={app.id}
                  href={app.url}
                  aria-label={app.name}
                  title={app.name}
                  className={styles.item}
                >
                  <Icon size={22} />
                </a>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? 'Close family apps menu' : 'Open family apps menu'}
        className={styles.toggle}
      >
        {open ? <IconX size={20} /> : <IconApps size={20} />}
      </button>
    </footer>
  );
};
