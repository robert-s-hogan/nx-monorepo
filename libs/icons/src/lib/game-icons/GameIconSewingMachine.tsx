import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSewingMachineIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'sewing-machine'];
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
        d="m61.67 119.8-12.69 68.3c-5.47 29.6-1.02 60.1 12.69 86.8h51.03V119.8zm68.63 0v115.6h2.9c6.2 0 11.2-5.1 11.2-11.3V119.8zm31.8 0v104.3c0 15.9-12.9 28.8-28.9 28.8h-2.9v81.7h14.9v-59.7h19.6s7.6-15.3 13.6-27.7c4.7-9.2 14.1-15.1 24.5-15.1h80.2c15 0 27.2 12.1 27.2 27.1v91.5H25.95l10.57 68.5H455.1l10.5-63.1-21.1-236.3zm310.1 23.4c-4.9.4-8.5 4.7-8 9.5l4.3 47.4c.4 4.8 4.7 8.4 9.5 8 4.9-.4 8.4-4.8 8-9.6l-4.2-47.3c-.4-4.5-4.2-8-8.7-8zm-86.8.1c21.7 0 39.2 17.5 39.2 39.2 0 21.7-17.5 39.2-39.2 39.2-21.7 0-39.2-17.5-39.2-39.2 0-21.7 17.5-39.2 39.2-39.2zm0 17.5c-11.9 0-21.7 9.8-21.7 21.7 0 12 9.8 21.7 21.7 21.7 11.9 0 21.7-9.7 21.7-21.7 0-11.9-9.8-21.7-21.7-21.7zm0 89.9c26.6 0 48.2 21.7 48.2 48.2 0 26.6-21.6 48.2-48.2 48.2s-48.2-21.6-48.2-48.2c0-26.5 21.6-48.2 48.2-48.2zm0 17.6c-16.9 0-30.6 13.7-30.6 30.6 0 16.9 13.7 30.5 30.6 30.5 16.9 0 30.5-13.6 30.5-30.5s-13.6-30.6-30.5-30.6zM92.71 287.8v17.6h20.09v-17.6zM36.52 438.9v26.5H454.9v-26.5z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSewingMachineIcon })
);
