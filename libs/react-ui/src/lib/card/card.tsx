import cardStyles from './card.module.css';
import Skeleton from '../skeleton/skeleton';
import Text from '../text/text';
import Button from '../button/button';
import { CardProps } from '@with-nx/types';

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
          className={`card-image ${cardStyles.image}`}
          height={200}
          width={300}
        />
      );
    } else if (image) {
      return <div className={`card-image ${cardStyles.image}`}>{image}</div>;
    }
    return null;
  };

  return (
    <div
      className={`card ${cardStyles.card} ${className}`}
      onClick={onClick}
      key={key}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {renderImage()}
      {description && (
        <div className={`card-body ${cardStyles.body}`}>
          {title && (
            <Text
              className={`card-title ${cardStyles.title}`}
              isLoading={isLoading}
              rowWidth={100}
              height={24}
            >
              {title}
            </Text>
          )}
          {description && (
            <Text
              className={`card-description ${cardStyles.description}`}
              isLoading={isLoading}
              rowWidth={100}
              height={16}
            >
              {description}
            </Text>
          )}
          {button && (
            <div className={`card-button ${cardStyles.button}`}>{button}</div>
          )}
        </div>
      )}
    </div>
  );
}
