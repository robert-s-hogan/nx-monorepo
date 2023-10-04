import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLightFighterIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'light-fighter'];
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
        d="M215.078 20.037L100.754 135.693l52.133 79.313L21 491.963 296.824 359.53l79.42 52.784L491 297.088 215.078 20.038zm102.037 21.885l-21.082 21.174 16.865 16.933 21.088-21.17-16.87-16.938zm130.71 4.252l-84.32 84.666 16.862 16.94 84.328-84.667-16.87-16.94zm-75.893 8.463l-42.157 42.336 16.864 16.933 42.165-42.334-16.873-16.935zm67.463 67.744l-42.155 42.33 16.862 16.938 42.164-42.334-16.87-16.933zm12.658 55.038l-21.08 21.17 16.863 16.933 21.088-21.166-16.87-16.936zm-206.526 66.865c6.308.15 11.87 2.175 15.924 6.244 11.794 11.843 6.35 36.51-12.16 55.098-18.51 18.585-43.08 24.056-54.872 12.22-11.793-11.847-6.345-36.517 12.168-55.1 12.146-12.2 26.9-18.747 38.94-18.462z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLightFighterIcon })
);
