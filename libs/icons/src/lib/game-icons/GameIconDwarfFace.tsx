import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDwarfFaceIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'dwarf-face'];
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
        d="M127.4 14.4c-74.28 104.4-5.3 124.5 37.5 148.1 7.4-16.1 15.9-30.7 27.3-44.4-52-22.1-61.4-70.2-64.8-103.7zm257.2 0c-3.4 33.5-12.8 81.6-64.8 103.7 11.4 13.7 19.9 28.3 27.3 44.4 42.9-23.6 111.7-43.7 37.5-148.1zM256 89.5c-45.3 27.6-62.3 54.4-78.4 94.8 47.9 11.7 108.8 11.7 156.8 0-16.1-40.4-33.1-67.2-78.4-94.8zM148.8 196.1c-5.3 10.3-24.6 74.7-24.8 91.8 4.7-4.9 9.5-9.9 14.2-14.9l6.6 5.8c1.1-25.6 12.6-52.8 25.1-77.5-6.5-1.6-14.5-3.3-21.1-5.2zm214.4 0c-6.2 1.7-15.3 3.9-21.1 5.2 12.4 24.7 24 51.9 25 77.5l6.7-5.8 14.2 14.9c10.5-12.4-19.5-81.5-24.8-91.8zm-173.6 8.8l-7.9 23.8c22.8 6.5 43.6 12.6 69 20l-6.5 17c-5.6-1.6-11.4-3.2-17.1-4.9-2.9 5.8-9.5 9.6-16.7 9.6-10.2 0-18.3-7.2-18.3-16 0-1.3.1-2.5.4-3.7l-16.6-4.7-13.9 41.7 36.1 34.3 14.6-27h86.5l14.7 27 36.1-34.3-13.9-41.7c-5.4 1.5-10.8 3-16.1 4.6.4 1.2.5 2.5.5 3.8 0 8.8-8.1 16-18.4 16-7.3 0-13.9-3.9-16.8-9.7-5.9 1.7-11.7 3.3-17.5 5l-6.6-17c23.2-6.8 44.4-12.9 69.1-20l-8-23.8c-47.7 11.1-84.9 11.1-132.7 0zm-43.2 94.8l-70.42 73.7h47.42l-18.4 48h57.5L147.8 447l37.5-10.9 70.7 61.5 70.7-61.5 37.4 10.9-14.7-25.6h57.5l-18.3-48H436l-70.5-73.7-57.4 49.9-21.9-38.2h-60.7l-21.9 38.2zm91.2 25.7h36.8v18h-36.8z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDwarfFaceIcon })
);
