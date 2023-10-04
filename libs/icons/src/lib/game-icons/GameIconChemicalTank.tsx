import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconChemicalTankIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'chemical-tank'];
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
        d="M99.5 18.406V92.22h321.594V18.405H99.5zm24.75 92.5v288.531h18.688v-288.53H124.25zm253.406 0v288.531h18.688v-288.53h-18.688zm-216.47 58.53v230l199.033.002v-230h-43.5c-.717 8.933-8.194 15.937-17.314 15.937s-16.596-7.004-17.312-15.938H267.75c.968 3.02 1.5 6.223 1.5 9.563 0 17.317-14.058 31.344-31.375 31.344S206.53 196.317 206.53 179c0-3.34.535-6.542 1.5-9.563h-46.843zm138.095 30.845c24.18 0 43.783 19.603 43.783 43.782 0 24.18-19.602 43.782-43.782 43.782-24.178 0-43.78-19.602-43.78-43.78 0-24.18 19.602-43.783 43.78-43.783zm-81.25 20.814c14.265 0 25.814 11.58 25.814 25.844 0 14.264-11.55 25.812-25.813 25.812-14.263 0-25.843-11.548-25.843-25.813 0-14.264 11.58-25.843 25.844-25.843zm68.564 79.344c14.264 0 25.844 11.58 25.844 25.843 0 14.265-11.58 25.814-25.844 25.814-14.264 0-25.813-11.55-25.813-25.813 0-14.263 11.55-25.842 25.814-25.842zM99.5 418.125v73.844h321.594v-73.845H99.5z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconChemicalTankIcon })
);
