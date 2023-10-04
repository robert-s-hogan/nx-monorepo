import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCragsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'crags'];
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
        d="M256.375 17.47c-132.537 0-240.188 107.618-240.188 240.155s107.65 240.188 240.188 240.188c132.537 0 240.188-107.65 240.188-240.188 0-132.537-107.65-240.156-240.188-240.156zm0 18.686c60.246 0 114.816 23.992 154.72 62.938l-61.626 29.875-21 263.217-.5 6.313-6.033 1.875-96.312 30.063-12.063 44.53c-6.15-1.202-12.23-2.644-18.187-4.343l13.563-50 1.343-4.97 4.876-1.53 21.344-6.656 30.594-247.19.937-7.593 7.595-.593L329.22 148l2.06-25.875.44-5.344 4.81-2.31 10.22-4.94-58.938-21.905-69.437 41-20.78 138.094-.97 6.592-6.563 1.22-10.875 2.03-28.593 175.782c-5.914-3.216-11.647-6.714-17.22-10.438L153.5 318.25l-81.875 5.125L58.845 358c-15.325-30.126-23.97-64.225-23.97-100.375 0-122.436 99.064-221.47 221.5-221.47zm71.344 130.688l-43.033 3.28-28.562 231.22 54.22-16.938 17.374-217.562zm133.342 5.97c2.374 5.73 4.512 11.568 6.407 17.53l-49.408 19.78-30.125 225.75c-5.78 4.273-11.776 8.266-17.968 11.97l-2.44-.313 32.72-245.31.72-5.407 5.06-2.032 55.033-21.968zm-277.75 63.405l-61.343 1.124-14.69 65.062 49.282-3.094 5.25-32.25 1.032-6.5 6.47-1.187 10.81-2 3.19-21.156z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCragsIcon })
);
