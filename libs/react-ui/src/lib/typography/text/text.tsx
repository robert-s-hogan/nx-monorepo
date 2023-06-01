import { Skeleton } from '@with-nx/react-ui';
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
  rowWidth = 100,
  height = 16,
  width = '100%',
}: TextProps & {
  isLoading?: boolean;
  rows?: number;
  rowWidth?: number;
  height?: number;
  width?: string | number;
}) => {
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
        <Skeleton
          rows={rows}
          isLoading={isLoading}
          rowWidth={rowWidth}
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
