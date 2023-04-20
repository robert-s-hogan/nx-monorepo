import styles from './card.module.css';

/* eslint-disable-next-line */
export interface CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  onClick?: () => void;
}

export function Card({
  title,
  description,
  imageUrl,
  imageAlt,
  onClick,
}: CardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      {imageUrl && (
        <div className={styles.image}>
          <img src={imageUrl} alt={imageAlt || title} />
        </div>
      )}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
}

export default Card;
