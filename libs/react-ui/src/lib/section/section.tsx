import sectionStyles from './section.module.css';

/* eslint-disable-next-line */
export interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  role?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  style?: React.CSSProperties;
}

export function Section({
  id,
  children,
  className,
  role,
  onClick,
  style,
}: SectionProps) {
  return (
    <section
      className={`section ${sectionStyles.section} ${className}`}
      id={id}
      role={role}
      onClick={onClick}
      style={style}
    >
      {children}
    </section>
  );
}

export default Section;
