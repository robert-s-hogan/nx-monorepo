import reactUISectionStyles from './section.module.css';

/* eslint-disable-next-line */
export interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  role?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export function Section({
  id,
  children,
  className,
  role,
  onClick,
}: SectionProps) {
  return (
    <section
      className={`${reactUISectionStyles.section} ${className}`}
      id={id}
      role={role}
      onClick={onClick}
    >
      {children}
    </section>
  );
}

export default Section;
