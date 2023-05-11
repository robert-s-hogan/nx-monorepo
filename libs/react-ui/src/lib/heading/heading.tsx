import { HeadingProps } from '@with-nx/types';

export const Heading = ({
  level,
  children,
  className,
  id,
  style,
  'aria-labelledby': ariaLabelledBy,
  tabIndex,
}: HeadingProps): JSX.Element => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <HeadingTag
      className={className}
      id={id}
      style={style}
      aria-level={level}
      aria-labelledby={ariaLabelledBy}
      tabIndex={tabIndex}
    >
      {children}
    </HeadingTag>
  );
};

export default Heading;
