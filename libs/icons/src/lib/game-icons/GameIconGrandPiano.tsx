import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconGrandPianoIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'grand-piano'];
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
        d="m376.3 30.6-63.3 3L61.43 230.9l261.47-51.5c5.8-4.6 10.9-9 15.4-13.1L302 75.6l15.5-6.2 33.7 84.2c55.1-60.2-20.4-71.1 25.1-123zM357 168l-13.2 11.9 9.6 24.1c-9.1-.4-19.2-.6-30.5-.7L61.43 254.9s.34 2.2.84 5.5c2.36 15.5-7.73 30.2-23.07 33.6-8.93 2-16.61 3.7-16.61 3.7l3.95 21.2 334.16 30.5 126-53.9-.9-43.4c-81.1-8.7-11.4-39.4-114-47L357 168zm-16.2 51.3c7.1.1 13.4.4 19 .7l21.5 53.8-273.6-14.5 209.9-39.9c8.5-.1 16.2-.2 23.2-.1zm37.6 2.4c56.8 7.8 14.9 32.1 65 36.5l-44.9 13.5-20.1-50zM83.78 284.8 358.4 307l-18.1 16.1-280.68-25.9 24.16-12.4zm-1.35 53.6 13.65 97.1-3.47 6.2.36 15.8 17.13 1.6 17.1-6.2v-13.2l-4.8-3.9 9.1-93-49.07-4.4zM184 350.5V426l105.2 9v-75.2l-16.7-1.5V417l-71.8-6v-59l-16.7-1.5zm209.8 2.7-29.4 10.9-24.8-2 15.6 99.4-3.9 5.1.8 18 17.1 1.7 15.9-7.4.3-13.2-3.9-3.9 12.3-108.6zm-208.7 89.6-28.4 9.5 3.1 14.4 102.3 10.1 21-7.4 1.1-18.3-99.1-8.3z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconGrandPianoIcon })
);
