import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBoltShieldIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'bolt-shield'];
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
        d="M104.53 75.188l.064 11.75C105.387 196.84 154.647 306.933 252 401l6.5 6.28L265 401c96.765-93.853 146.975-204.032 147.844-314.063l.094-11.718-11.47 2.53c-80.262 17.713-205.254 17.923-285.468 0l-11.47-2.563zm33.907 32.468l11.438 2.563c60.965 13.62 156.674 13.463 217.688 0l11.468-2.532-.092 11.718c-.67 84.917-39.46 169.857-113.907 242.063l-6.467 6.28-6.5-6.28C177.16 289.095 139.113 204.213 138.5 119.405l-.063-11.75zm221.407 22.97c-60.417 11.242-141.785 11.386-202.25.03 3.59 73.105 36.766 146.23 100.937 210.844 63.845-64.506 97.625-137.755 101.314-210.875zm-340.22 136.5L123 433.468l17.906-51.314 96.188 88.156L133.72 303.97l-17.907 51.31-96.188-88.155zm470.532 0l-96.22 88.155-17.873-51.31L272.656 470.31l96.188-88.156 17.906 51.313 103.406-166.345z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBoltShieldIcon })
);
