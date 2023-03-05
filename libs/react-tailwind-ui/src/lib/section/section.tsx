import styles from './section.module.css';

/* eslint-disable-next-line */
export interface SectionProps {
  children?: React.ReactNode;
  className?: string;
  minHeight?: string | number;
  id?: string;
}

export function Section(props: SectionProps) {
  const { children, className, minHeight, id } = props;

  const sectionStyle = {
    minHeight: minHeight ? minHeight : '620px',
  };

  return (
    <section
      id={id ? id : ''}
      className={`${
        className ? className : ''
      } container mx-auto max-w-7xl w-full flex flex-col justify-center items-center px-3 md:px-4 py-8`}
      style={sectionStyle}
    >
      {children}
    </section>
  );
}

export default Section;
