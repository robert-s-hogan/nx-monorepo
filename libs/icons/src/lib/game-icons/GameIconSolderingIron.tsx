import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSolderingIronIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'soldering-iron'];
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
        d="M372.5 33.27c-24.9.2-51.8 13.41-70.6 46.03l-.2.4 14.4 8.3.2-.4c16.2-27.8 39.1-38.9 60.2-37.6 30.6 1.9 56.5 29.9 47.6 66.4-2 8.4-5.9 17.3-11.8 26.4-33 50.5-73 84.1-103.3 116.7-32.3 34.8-53.8 68.7-47.4 117.9C268.1 428 317 458 371.4 461c39.3 3 81-8 110.1-33v-23c-25.3 30-68.7 43-108.9 40-46.1-3-89-27-94.5-69.7-5.6-43.8 14.4-73.5 43.1-104.4 30.8-33.2 71.5-67.6 105-119 7.1-10.9 11.7-21.5 14.1-31.6 11.7-47.8-22.5-84.4-62.8-86.9-1.6-.1-3.3-.14-5-.13zM84.26 41.44C-6.511 138.9 158.5 160.1 75.56 268.1c-62.2 80.9-10.68 102.6-.96 195.1 0 0 .32-1.7.86-4.4 4.77-23.9 1.58-48.8-9.12-70.8-26.01-53.4-5.18-74.8 56.26-143.4 71.9-80.4-58.81-126.2-38.34-203.16zM287.3 90.3s-17.6 29.9-38.9 62.9c-13.8 21.4-30.8 42.9-41.4 61.4-4.9 8.5-8.7 16-11.3 21.8l-10-5.8-9.3 16 57.8 33.4 9.2-16-10-5.8c3.7-5.2 8.3-12.3 13.2-20.7 10.7-18.4 20.9-43.9 32.5-66.6 17.9-35 35-65.1 35-65.1l-26.8-15.5zM180.5 264.5l-5.4 9.4 36.1 20.8 5.4-9.4-36.1-20.8zm-4.6 24.7-55 95.2 21.7 12.5 54.9-95.2-21.6-12.5zm-60.4 107.3-3.7 12.2 14.8 8.6 8.8-9.3-19.9-11.5zm-7.8 23.4-15.53 26.9-3.11 17.9L103 453l15.5-26.8-10.8-6.3z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSolderingIronIcon })
);
