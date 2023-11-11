import SkeletonText from '../skeleton/skeleton-text';
import { TextProps } from '@with-nx/types';

export const Text = ({
  children,
  key,
  className,
  id,
  style,
  onClick,
  isLoading,
  rows = 1,
  height = 16,
  width = '100%',
}: TextProps & React.HTMLAttributes<HTMLElement>) => {
  const combinedStyles = {
    width: width,
    ...style,
  };

  return (
    <div
      className={`text ${className}`}
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
        />
      ) : (
        children
      )}
    </div>
  );
};

export default Text;
