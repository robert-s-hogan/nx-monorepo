import { CommonProps } from '@with-nx/types';

const RSHSection = ({
  children,
  fullWidth = false,
  innerContainer = false,
  innerContainerClass = 'container mx-auto px-6 text-center',
  className = '',
}) => {
  const sectionClass = fullWidth ? 'w-full' : '';
  const containerClass = innerContainer ? innerContainerClass : '';

  return (
    <section className={`rsh-section${sectionClass} ${className}`}>
      {innerContainer ? (
        <div className={containerClass}>{children}</div>
      ) : (
        children
      )}
    </section>
  );
};

export default RSHSection;
