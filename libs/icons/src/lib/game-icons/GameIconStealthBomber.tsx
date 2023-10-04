import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconStealthBomberIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'stealth-bomber'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className: propClassName, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={`game-icon ${combinedClassNames}`}
      {...otherProps}
    >
      <path
        fill="currentColor"
        d="M256 32L20 400l60 64 52.1-75.9L176 432l50.5-50.5L256 448l29.5-66.5L336 432l43.9-43.9L432 464l60-64L256 32zm-9 47v78l-39-13 39-65zm18 0l39 65-39 13V79z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconStealthBomberIcon })
);
