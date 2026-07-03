'use client';

import { GiAmericanFootballHelmet, GiRollingDices, GiScrollUnfurled } from 'react-icons/gi';
import { LiaDragonSolid } from 'react-icons/lia';
import { SIBLING_APPS, SiblingApp } from '@with-nx/constants';

import styles from './floating-footer.module.css';

const ICONS: Record<SiblingApp['icon'], React.ComponentType<{ size?: number }>> = {
  'football-helmet': GiAmericanFootballHelmet,
  dice: GiRollingDices,
  dragon: LiaDragonSolid,
  scroll: GiScrollUnfurled,
};

export interface FloatingFooterProps {
  currentApp: SiblingApp['id'];
  className?: string;
}

export const FloatingFooter = ({
  currentApp,
  className,
}: FloatingFooterProps): JSX.Element => {
  return (
    <footer className={`${styles.dock} ${className || ''}`}>
      <nav
        aria-label="Sibling apps"
        className="flex items-center gap-x-3 rounded-full px-4 py-2 shadow-lg"
        style={{
          backgroundColor: 'var(--surface-color)',
          border: '1px solid var(--border-color)',
          color: 'var(--text-color)',
        }}
      >
        {SIBLING_APPS.map((app) => {
          const Icon = ICONS[app.icon];
          const isActive = app.id === currentApp;

          if (isActive) {
            return (
              <span
                key={app.id}
                aria-current="page"
                title={app.name}
                className="flex cursor-default items-center gap-x-1 opacity-50"
              >
                <Icon size={20} />
                <span className="text-xs font-medium">{app.shortLabel}</span>
              </span>
            );
          }

          return (
            <a
              key={app.id}
              href={app.url}
              title={app.name}
              className="flex items-center gap-x-1 transition-opacity hover:opacity-75"
              style={{ color: 'var(--text-color)' }}
            >
              <Icon size={20} />
              <span className="text-xs font-medium">{app.shortLabel}</span>
            </a>
          );
        })}
      </nav>
    </footer>
  );
};
