import SkeletonText from '../skeleton-text/skeleton-text';
import { TextProps } from '@with-nx/types';

export const Text = ({
  children,
  className = '',
  id,
  style,
  onClick,
  isLoading,
  rows = 1,
  height,
  minHeight = '1.25em', // Adjust based on text size
  width,
}: TextProps & React.HTMLAttributes<HTMLElement>) => {
  const combinedStyles = {
    width: width,
    minHeight: minHeight,
    ...style,
  };

  return (
    <div
      className={`text ${className}`.trim()}
      id={id}
      style={combinedStyles}
      onClick={onClick}
    >
      {isLoading ? (
        <SkeletonText
          rows={rows}
          isLoading={isLoading}
          height={height}
          width={width}
          className={`${className} skeleton-text-placeholder`} // Use the same class as defined in CSS
        />
      ) : (
        children
      )}
    </div>
  );
};

export default Text;
