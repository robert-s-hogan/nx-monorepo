import { combineClassNames } from '@with-nx/utils';

interface JHSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

const JHSection = ({ children, className, id, style }: JHSectionProps) => {
  const sectionClassNames = combineClassNames(
    'max-w-7xl container mx-auto my-16 px-4',
    className
  );

  return (
    <div id={id} className={sectionClassNames} style={style}>
      {children}
    </div>
  );
};

export default JHSection;
