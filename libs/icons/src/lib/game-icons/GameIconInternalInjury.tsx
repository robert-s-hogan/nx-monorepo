import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconInternalInjuryIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'internal-injury'];
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
        d="M263.47 19.03c-1.234.04-2.47.126-3.69.126-38.983 0-70.75 33.895-70.75 75.906 0 21.274 8.43 40.465 21.5 54.282-80.868 10.566-98.35 105.42-79.124 191.562h31.656l-1.03-105.344 18.687-.187 1.25 129.25 10.218 130.313h55.53V319.344h18.688v175.594h56.22l12.687-143.313 1.125-116.25 18.687.188-1.03 105.343h33.5c21.795-88.46-5.595-178.95-79.626-190.687 13.658-13.88 22.53-33.346 22.53-55.157 0-39.39-27.808-72.008-63.406-75.907-1.187-.15-2.393-.162-3.625-.125zM248.28 36.5l12.25 35.03 25.095-27-18.594 44.845 44.22-9.125-29.094 19.313 21.594 12.28-34.47 1.75 20.908 38.563-26.375-15.78-10.907 20.03 15.22 27.844 42.343-12.28-29.94 35.874 57-9.063-39.217 34.47 18.5 42.47-22.782-5.19 22.345 104.876-53.656-101.97-62.095 67.814 35.813-90.28-32.813 10 22.22-34.94-49.814-24 54.72.345-27.28-31.78 37.28 9.686.625-52.06-25.125 3.686L241.844 99 211 74.406l31.438 3.563 5.843-41.47z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconInternalInjuryIcon })
);
