import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconWoodBeamIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'wood-beam'];
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
        d="M268.4 48.99L42.55 335H82.2l75.9-104.2 14.6 10.6-68.3 93.6h27.5l28.2-30.4-1.6 30.4h116.8L470.9 48.99h-50.6l-150 219.91-14.8-10.2L398.6 48.99h-34.9l-47.8 66.51-14.6-10.6 40.2-55.91zM479 69.08L289 346.8v30.7l68.9-100.8 14.8 10.2L289 409.3v32.3l190-292.3v-11.7l-22 5.8 22-33.3zM32.98 353v110h23.83l10.54-38.1L78.48 463h37.62c-2.2-5.7-3.4-11.8-3.4-18.2 0-18.6 10.4-35 25.9-46.3 15.5-11.2 36.2-17.8 58.9-17.8 22.7 0 43.4 6.6 58.9 17.8 5.6 4.1 10.6 8.9 14.6 14.2V353zm164.52 45.7c-19.2 0-36.4 5.7-48.3 14.4-12 8.7-18.5 19.8-18.5 31.7 0 6.4 1.9 12.5 5.5 18.2h16.3c-3.3-4.7-5.4-10.1-5.4-16.1 0-11.2 7.1-20.4 16.5-26.3 9.3-6 21.3-9.2 34.4-9.2 13.1 0 25.1 3.2 34.4 9.2 9.4 5.9 16.5 15.1 16.5 26.3 0 6-2.1 11.4-5.4 16.1h15.3c3.6-5.7 5.5-11.8 5.5-18.2 0-11.9-6.5-23-18.5-31.7-11.9-8.7-29.1-14.4-48.3-14.4zm.5 30.7c-10 0-19 2.7-24.8 6.4-5.8 3.7-8.1 7.6-8.1 11.1s2.3 7.4 8.1 11.1c3.3 2.1 7.6 3.9 12.5 5h24.6c4.9-1.1 9.2-2.9 12.5-5 5.8-3.7 8.1-7.6 8.1-11.1s-2.3-7.4-8.1-11.1c-5.8-3.7-14.8-6.4-24.8-6.4z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconWoodBeamIcon })
);
