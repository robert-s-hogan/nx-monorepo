import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconRubberBootIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'rubber-boot'];
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
        d="M48.63 25.08c-.16 19.17-.24 38.35-.28 57.54a61147.346 61147.346 0 0 1 97.25 2.47c54.3 1.41 99.9 2.6 107.9 2.8.8-22.02 1.1-43.32.6-62.82zm-.3 75.52v19.7c5.55.2 11.65.4 18.72.6 22.39.6 51.25 1.2 79.95 1.8 50.4 1.1 93.6 1.8 104.8 2 .3-6.3.7-12.6 1-18.8-8.3-.3-53.5-1.4-107.7-2.8-29.4-.8-59.16-1.6-81.85-2.1-5.98-.2-9.96-.3-14.93-.4zm.1 37.7c.16 48.8.63 97.6 1.28 146.2 25.68-6.7 54.29-9.3 76.39 5.4 18.8 12.9 29.3 32.9 46.2 52.6 17 19.7 40 39.9 83.2 54.8 41.8 14.3 102.6 23.4 193.9 20.1-1.1-3.6-2.5-7.1-4.3-10.1-3.7-6.3-8.6-11-16.1-13.6-34.5-11.9-79.8-17.1-117.2-23.8-18.8-3.3-35.5-7-48.7-12.8-6.6-2.9-12.4-6.3-17-11-4.5-4.7-7.7-11-8.2-17.9-1.4-21.3 3.9-71 8.7-130.7 1.4-17.7 2.8-36.2 4.1-54.8-11.8-.2-54.3-1-104.1-2-28.6-.6-57.52-1.3-79.98-1.9-6.74-.2-12.79-.3-18.19-.5zm39.35 158.3c-9.78-.1-21.99 1.9-37.81 6.5.69 47.8 1.52 95.3 2.41 142.6l400.52 6.4c.3-4.5.4-10.2-.1-16.8-94.3 3.5-158-5.6-203.1-21-46.2-15.9-72.7-38.7-91-60-18.3-21.3-29-40.1-42.8-49.5-7.3-5-15.8-8.2-28.12-8.2zM43.24 464.8l.79 22.1H468.8l-2.4-16.6-341.2-5.4z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconRubberBootIcon })
);
