import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconJetFighterIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'jet-fighter'];
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
        d="M461.5 31.85c-5 1.2-10.4 3.4-16.4 6.4-12 6-26.7 15.3-42.1 26.1-26.7 18.7-55.5 41.75-75 59.95l39.8 19.9 19.9 39.8c18.2-19.5 41.2-48.3 59.9-75 10.8-15.35 20.1-30.05 26.2-42.15 3-6 5.2-11.3 6.3-16.3 1.2-5 1.9-10.9-2.9-15.7-4.8-4.56-10-4.25-15.7-3zm-14.8 33.4c4.9 4.71 5.6 12.1 3.8 18.7-1.8 6.6-6.1 13.3-12.9 20.15l-42.2 42.2-29.6-29.7L408 74.45c6.8-6.8 13.5-11.06 20.1-12.9 6.1-1.71 14.3-.44 18.6 3.7zM183.2 109.5l-21.3 21.2 45.6 5v-26.2zm129.9 25.2l-43.5 21.8-153 200.1 13.7 13.8 97.5-97.5 11.3 11.3c-32.5 32.5-65 65.1-97.5 97.6l13.8 13.6 200.1-153 21.8-43.5-21.4-42.8zm-256.59.4l7.4 22.2 120.99 83.5 64.5-84.3zm38.1 62.8l-13.1 13.2 24.39 24.3 17.6-17.5zm260.89 64.7l-84.3 64.5 83.5 121 22.2 7.3zm-190.9 4.8l-110.99 9.1-22.6 22.6 82.39 35.4zm212.1 41.2l4.6 41.5 17.1-17.2v-24.3zm-132.1 38.8l-67 51.2 35.3 82.4 22.6-22.6zm-138.7 21.2l-13.09 13.1 37.49 37.4 13.1-13zm188.2 19.9l-17.5 17.6 24.3 24.3 13.2-13.1z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconJetFighterIcon })
);
