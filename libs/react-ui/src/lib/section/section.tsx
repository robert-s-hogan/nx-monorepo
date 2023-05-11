import sectionStyles from './section.module.css';
import { SectionProps } from '@with-nx/types';

export function Section({
  id,
  children,
  className,
  style,
  ariaLabel,
}: SectionProps) {
  return (
    <section
      className={`section ${sectionStyles.section} ${className}`}
      id={id}
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </section>
  );
}

export default Section;
