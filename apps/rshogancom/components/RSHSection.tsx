const RSHSection = ({
  children,
  fullWidth = false,
  innerContainer = true, // Set innerContainer to true by default
  innerContainerClass = 'container mx-auto px-6 text-center',
  className = '',
}) => {
  // Automatically set innerContainer to false if fullWidth is true
  innerContainer = fullWidth ? false : innerContainer;

  const getSectionClassNames = () => {
    let sectionClasses = 'rsh-section';
    sectionClasses += fullWidth ? ' w-full' : ' py-16';
    sectionClasses += className ? ` ${className}` : '';
    return sectionClasses;
  };

  const containerClass = innerContainer ? innerContainerClass : '';

  return (
    <section className={getSectionClassNames()}>
      {innerContainer ? (
        <div className={containerClass}>{children}</div>
      ) : (
        children
      )}
    </section>
  );
};

export default RSHSection;
