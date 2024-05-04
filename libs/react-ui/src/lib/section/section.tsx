import sectionStyles from './section.module.css';
import { SectionProps } from '@with-nx/types';

export const Section = function ({
  id,
  children,
  className,
  style,
  ariaLabel,
}: SectionProps) {
  return (
    <section
      className={`section ${className ? className : ''}`}
      id={id}
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </section>
  );
};
