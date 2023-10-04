import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSwordMoldIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'sword-mold'];
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
        d="M136.1 18.48c5.4 12.59 14.3 23.16 25.5 34.1 14.2 13.99 31.8 28.2 47.1 47.4 35.9 44.92 40.6 99.42 38.2 149.82-.3 6.6-5.2 10.5-8.6 12.5-3.3 2-6.5 3.2-9.3 4.5-2.7 1.4-4.8 2.8-5.8 3.8-.7.8-.9 1.2-1 2.2.2.1.2.2.8.6 1.6 1.1 4.7 2.7 8.8 4 8.2 2.6 20 4.4 31.9 4.7 11.9.3 23.9-1 32.4-3.6 7-2.2 10.5-4.9 11.9-7.3-1.4-1.3-4.3-3.2-7.5-5.1-3.2-1.9-6.8-3.7-9.9-5.6-1.6-.9-3-1.8-4.5-3-1.4-1.1-3.3-2.1-4.6-6.2-5.6-16.5-6.9-41.6-3.4-69.2 3.5-27.6 11.9-57.4 27.8-81.1 13.3-19.76 32.4-36.25 48.2-51.61 11.4-11.13 20.5-21.62 25.3-30.91H218.3c15.5 26.22 22.9 68.56 15.5 70.93-4.7 1.52-22.8-41.55-42.1-70.93h-55.6zm139.6 38.59l24.4 5.83c-19.9 26.3-21.7 59-33.4 85.9-5.1-27.8-5.2-64.08 9-91.73zM55.95 169L26.2 407h459.6l-29.7-238H298.5c-1 5.1-1.9 10.2-2.5 15.3-3.1 24.6-1.5 47.6 2.1 59.6l.1.1H384l64 28-64 28H273.8c-3.5.1-7 .2-10.5.1-.8 0-1.5-.1-2.3-.1H155.9l-1.9 42h-32l2.4-54H66l2-32h57.9l2.1-48h32l-1.6 36h70.7c1-25.5-.2-50.9-6.3-75H55.95zM25 425v62h462v-62H25z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSwordMoldIcon })
);
