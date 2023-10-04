import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCard4HeartsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'card-4-hearts'];
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
        d="M119.436 36c-16.126 0-29.2 17.237-29.2 38.5v363c0 21.263 13.074 38.5 29.2 38.5h275.298c16.126 0 29.198-17.237 29.198-38.5v-363c0-21.263-13.072-38.5-29.198-38.5H119.436zm57.214 16.174h.002c13.612-.318 26.502 9.855 27.073 28.043.976 31.09-47.738 52.945-52.31 70.015-4.998-18.649-51.416-37.573-52.452-70.015-.995-31.155 37.403-37.91 52.451-11.848 6.261-10.846 15.923-15.977 25.236-16.195zm94.104 127.451h7.726v112.453h27.34v10.104h-27.34v25.32c0 2.219.872 4.002 2.616 5.35 2.536 1.822 5.468 2.734 8.797 2.734h10.103v8.914h-65.975v-8.914h12.245c4.12 0 7.133-.872 9.035-2.615 1.981-1.744 2.97-4.28 2.97-7.608v-23.181h-67.28v-11.41l79.763-111.147zM258.27 211.84l-57.414 80.238h57.414V211.84zM360.73 361.77c4.572 17.07 53.287 38.923 52.31 70.013-.57 18.188-13.46 28.36-27.072 28.043h-.002c-9.313-.218-18.975-5.35-25.236-16.195-15.048 26.061-53.444 19.307-52.45-11.848 1.037-32.442 47.452-51.364 52.45-70.013z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCard4HeartsIcon })
);
