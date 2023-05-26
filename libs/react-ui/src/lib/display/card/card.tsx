import { CardProps } from '@with-nx/types';
import Skeleton from '../skeleton/skeleton';
import Text from '../text/text';
import Button from '../button/button';

export function Card({
  title,
  key,
  description,
  image,
  onClick,
  isLoading = false,
  button,
  onMouseEnter,
  onMouseLeave,
  className,
}: CardProps) {
  const renderImage = () => {
    if (isLoading) {
      return (
        <Skeleton
          className="w-full h-full relative overflow-hidden"
          height={200}
          width={300}
        />
      );
    } else if (image) {
      return (
        <div className="w-full h-full relative overflow-hidden">{image}</div>
      );
    }
    return null;
  };

  return (
    <div
      className={`flex flex-col border border-gray-300 rounded overflow-hidden transition-shadow duration-200 ease-in-out cursor-pointer hover:shadow-md ${className}`}
      onClick={onClick}
      key={key}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {renderImage()}
      {description && (
        <div className="p-4">
          {title && (
            <Text
              className="text-lg font-medium mb-2"
              isLoading={isLoading}
              rowWidth={100}
              height={24}
            >
              {title}
            </Text>
          )}
          {description && (
            <Text
              className="text-base text-gray-700"
              isLoading={isLoading}
              rowWidth={100}
              height={16}
            >
              {description}
            </Text>
          )}
          {button && <div className="mt-4">{button}</div>}
        </div>
      )}
    </div>
  );
}

export default Card;
