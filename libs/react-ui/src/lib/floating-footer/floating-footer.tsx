'use client';

import { useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { IconLayoutNavbarCollapse } from '@tabler/icons-react';
import {
  GiAmericanFootballHelmet,
  GiRollingDices,
  GiScrollUnfurled,
  GiHouse,
  GiShoppingCart,
  GiCookingPot,
} from 'react-icons/gi';
import { LiaDragonSolid } from 'react-icons/lia';
import { SIBLING_APPS, SiblingApp } from '@with-nx/constants';

import styles from './floating-footer.module.css';

const ICONS: Record<SiblingApp['icon'], React.ComponentType<{ size?: number }>> = {
  'football-helmet': GiAmericanFootballHelmet,
  dice: GiRollingDices,
  dragon: LiaDragonSolid,
  scroll: GiScrollUnfurled,
  home: GiHouse,
  cart: GiShoppingCart,
  'cooking-pot': GiCookingPot,
};

const dockSurfaceStyle = {
  backgroundColor: 'var(--surface-color)',
  border: '1px solid var(--border-color)',
  color: 'var(--text-color)',
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
      <FloatingDockDesktop currentApp={currentApp} className="hidden md:flex" />
      <FloatingDockMobile currentApp={currentApp} className="flex md:hidden" />
    </footer>
  );
};

const FloatingDockDesktop = ({
  currentApp,
  className,
}: {
  currentApp: SiblingApp['id'];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      aria-label="Sibling apps"
      className={`mx-auto items-center gap-3 rounded-full px-4 py-2 shadow-lg ${className || ''}`}
      style={dockSurfaceStyle}
    >
      {SIBLING_APPS.map((app) => (
        <DockIcon
          key={app.id}
          app={app}
          mouseX={mouseX}
          isActive={app.id === currentApp}
        />
      ))}
    </motion.div>
  );
};

function DockIcon({
  app,
  mouseX,
  isActive,
}: {
  app: SiblingApp;
  mouseX: MotionValue<number>;
  isActive: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = ICONS[app.icon];
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  const widthTransform = useTransform(distance, [-150, 0, 150], [36, 56, 36]);
  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const bubble = (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`aspect-square rounded-full flex items-center justify-center relative ${
        isActive ? 'cursor-default opacity-50' : 'transition-opacity hover:opacity-75'
      }`}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 2, x: '-50%' }}
            className="absolute -top-8 left-1/2 w-fit whitespace-pre rounded-md px-2 py-0.5 text-xs"
            style={dockSurfaceStyle}
          >
            {app.shortLabel}
          </motion.div>
        )}
      </AnimatePresence>
      <Icon size={20} />
    </motion.div>
  );

  if (isActive) {
    return (
      <span aria-current="page" title={app.name}>
        {bubble}
      </span>
    );
  }

  return (
    <a href={app.url} title={app.name}>
      {bubble}
    </a>
  );
}

const FloatingDockMobile = ({
  currentApp,
  className,
}: {
  currentApp: SiblingApp['id'];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`relative ${className || ''}`}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="dock-nav"
            className="absolute bottom-full mb-2 inset-x-0 flex flex-col items-center gap-2"
          >
            {SIBLING_APPS.map((app, idx) => {
              const Icon = ICONS[app.icon];
              const isActive = app.id === currentApp;
              return (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    transition: { delay: idx * 0.05 },
                  }}
                  transition={{ delay: (SIBLING_APPS.length - 1 - idx) * 0.05 }}
                >
                  {isActive ? (
                    <span
                      aria-current="page"
                      title={app.name}
                      className="h-10 w-10 rounded-full flex items-center justify-center opacity-50"
                      style={dockSurfaceStyle}
                    >
                      <Icon size={18} />
                    </span>
                  ) : (
                    <a
                      href={app.url}
                      title={app.name}
                      className="h-10 w-10 rounded-full flex items-center justify-center"
                      style={dockSurfaceStyle}
                    >
                      <Icon size={18} />
                    </a>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle sibling apps menu"
        className="h-10 w-10 rounded-full flex items-center justify-center shadow-lg"
        style={dockSurfaceStyle}
      >
        <IconLayoutNavbarCollapse size={20} />
      </button>
    </div>
  );
};
