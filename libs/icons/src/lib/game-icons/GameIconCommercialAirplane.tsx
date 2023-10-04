import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCommercialAirplaneIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'commercial-airplane'];
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
        d="M468 26.25c-.8-.02-1.7-.02-2.6.02v-.01c-7.2.28-16.2 2.74-25.5 6.7-18.4 7.91-37.7 21.75-48 31.99L137.4 340.8l10.5 10.5 38.9-38.8 12.8 12.8-38.8 38.9 10.5 10.5 275.8-254.6c10.2-10.3 24.1-29.61 32-48.05 3.9-9.23 6.4-18.25 6.7-25.44.2-7.19-1.3-12.01-4.9-15.55-3.1-3.09-7.1-4.66-12.9-4.81zM167.7 53.16l-14.9 16.47 43 14.36 1.4-1.23c0-.61-.3-1.79-1.1-3.55-1.9-3.97-6-9.47-10.7-14.21-4.7-4.73-10.2-8.81-14.2-10.7-1.7-.83-2.9-1.04-3.5-1.14zm240.4 5.48l34 11.31 11.3 33.95-11.3 11.3-45.3-45.25 11.3-11.31zM90.3 67.77c-8.08.35-17.37 4.63-27.48 12.21C55.09 85.78 47 93.45 38.8 101.5l201.8 100.8 59.6-64.6L90.3 67.77zm143.4 9.85l-13.2 14.6 42.6 14.18c-.1-.6-.4-1.5-1-2.7-1.8-3.99-5.9-9.49-10.7-14.23-4.7-4.73-10.2-8.81-14.2-10.7-1.7-.83-2.9-1.05-3.5-1.15zM374.3 211.8l-64.7 59.7 100.9 201.8c8.1-8.2 15.8-16.4 21.6-24.1 7.5-10.1 11.8-19.4 12.2-27.4l-70-210zm31.3 37.1l14.2 42.6 14.6-13.2c0-.6-.3-1.7-1.1-3.5-1.9-4-6-9.5-10.7-14.2-4.8-4.7-10.3-8.8-14.3-10.7-1.1-.5-2-.8-2.7-1zm23.7 65.9l-1.3 1.4 14.4 43 16.4-14.8c0-.6-.3-1.8-1.1-3.5-1.9-4-6-9.5-10.7-14.3-4.7-4.7-10.2-8.8-14.2-10.7-1.7-.8-2.9-1.1-3.5-1.1zM71.69 340l-22.77 22.7 60.28 40.2 40.1 60.2 22.8-22.8-9.8-49.2-14.3-14.2-27.6 27.6-12.8-12.8 27.6-27.6-14.3-14.3-49.21-9.8z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCommercialAirplaneIcon })
);
