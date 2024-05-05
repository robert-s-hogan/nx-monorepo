import { combineClassNames } from '@with-nx/utils';

interface ConquestSectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const ConquestSection = ({
  children,
  className,
  style,
}: ConquestSectionProps) => {
  const sectionClassNames = combineClassNames(
    'max-w-4xl 2xl:max-w-7xl container mx-auto my-16 px-4 lg:px-0',
    className
  );

  return (
    <div className={sectionClassNames} style={style}>
      {children}
    </div>
  );
};

export default ConquestSection;
