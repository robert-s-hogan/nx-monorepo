import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconExplodingPlanetIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'exploding-planet'];
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
        d="M452.6 27.68L361.9 145.7l51.2 5.5 80.4-43.5-40.9-8.62zm-128.4-7.36l-36.6 5.62 8.5 26.69zm10.2 18.26L266.9 139.4l33.1 1 101.2-82.2zm-99.9 21.16c-53 .1-104.1 19.63-143.67 54.96h87.67v18H72.96c-20.03 22.6-35.08 49.2-44.2 78H210.5v18H23.94c-2.27 9.9-3.84 19.9-4.7 30H130.5v18H18.54c.1 21 3.25 41.9 9.38 62H274.5v18H34.4c6.64 16.3 15.26 31.8 25.65 46H162.5v18H74.73c10.1 11.1 21.34 21.2 33.57 30h118.2v18h-88.9c30.1 15.1 63.2 23 96.9 23 72.9-.1 140.9-36.9 180.7-98l-51.7-42.9L372 318l-65.6 8.4 4-76.4-92.3 54.1 44.1-101.3-67-27.4s70.4-81.81 94.1-108.32c-17.9-4.78-36.3-7.25-54.8-7.34zm208.1 99.96l-49.9 35.4 97.3-25.9zM312.9 170l-32.3 54.6 45.2-25.8zm134.4 37.1L342 245.7l-9.8 33.7 104.6 1.4zm-32.5 88.5l4.9 39.3 60.4 35.2-4.9-41.5zm33.7 85l17.3 77.9 22.4-43.2z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconExplodingPlanetIcon })
);
