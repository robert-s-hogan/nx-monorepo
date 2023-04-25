import React from 'react';
import cardStyles from './card.module.css';
import Skeleton from '../skeleton/skeleton';
import Text from '../text/text';
import Button, { ButtonProps } from '../button/button';

/* eslint-disable-next-line */
export interface CardProps {
  title?: string;
  description?: string;
  image?: React.ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
  button?: React.ReactElement<ButtonProps>;
  key?: string;
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  className?: string;
}

export function Card({
  title,
  description,
  image,
  onClick,
  isLoading = false,
  button,
  key,
  onMouseEnter,
  onMouseLeave,
  className,
}: CardProps) {
  return (
    <div
      className={`card ${cardStyles.card} ${className}`}
      onClick={onClick}
      key={key}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {image ? (
        isLoading ? (
          <Skeleton
            className={`card-image ${cardStyles.image}`}
            height={200}
            width={300}
          />
        ) : (
          <div className={`card-image ${cardStyles.image}`}>{image}</div>
        )
      ) : null}
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

export default Card;
