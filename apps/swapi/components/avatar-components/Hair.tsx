import React from 'react';
import { useAvatarSize } from '../../hooks/useAvatarSize';
import styles from './Hair.module.css';

interface HairProps {
  color: string;
  height: number;
  width: number;
  position: string;
  style: string;
  isFemale?: boolean;
  hasHair: boolean;
}

const Hair: React.FC<HairProps> = ({
  color,
  height,
  width,
  position,
  style,
  isFemale,
  hasHair,
}) => {
  const scale = useAvatarSize();

  const adjustedHeight = height * scale;
  const adjustedWidth = width * scale;

  if (!hasHair) {
    return null;
  }

  const bangsHeight = Math.round(adjustedHeight / 2);
  const bangsWidth = Math.round(adjustedWidth);

  return (
    <div
      style={{
        height: `${adjustedHeight}px`,
        width: `${adjustedWidth}px`,
        backgroundColor: color,
        ...positionStyles(position), // helper function to convert position string to styles
      }}
      className={`${styles.hair} ${style}`}
    >
      {isFemale && (
        <div
          style={{
            height: `${bangsHeight}px`,
            width: `${bangsWidth}px`,
            backgroundColor: color,
          }}
          className={styles.bangs}
        ></div>
      )}
    </div>
  );
};

function positionStyles(position: string): React.CSSProperties {
  const [vertical, horizontal] = position.split(' ');
  return {
    [vertical]: 0,
    [horizontal]: 0,
  };
}

export default Hair;
