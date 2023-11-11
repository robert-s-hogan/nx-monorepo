import { CommonProps } from '@with-nx/types';

const RSHSection = ({
  children,
  fullWidth = false,
  useInnerContainer = false,
  innerContainerClass = 'container mx-auto px-6',
  className = '',
}) => {
  const sectionClass = fullWidth ? 'w-full' : '';
  const innerContent = useInnerContainer ? (
    <div className={innerContainerClass}>{children}</div>
  ) : (
    children
  );

  return (
    <section className={`${sectionClass} ${className}`}>{innerContent}</section>
  );
};

export default RSHSection;
