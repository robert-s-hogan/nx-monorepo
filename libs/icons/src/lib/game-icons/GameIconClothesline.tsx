import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconClotheslineIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'clothesline'];
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
        d="M23.97 71.4v414.3H57.3V71.4zm109.83 37.7c-12.1-.2-23.6 3.9-32.8 11.2 3.5.4 7 1.1 10.4 2 9.4 2.6 20.2 5.4 28.4 7.7 7.8 2 14.5 7.1 18.5 14.1.3.6.6 1.2.9 1.7 3.5 6.5 4.6 14.3 2.5 21.9-4.1 15.6-19.8 25-35.4 21.6-14.3-4.3-28.59-6.3-41.23-11.8 5.51 15 17.93 27.1 34.53 31.6 27.1 7.2 55-8.9 62.3-36 7.2-27.1-8.9-55-36-62.2-4.1-1.1-8.1-1.7-12.1-1.8zm48.6 2.1c4.8 4.9 8.9 10.6 12.1 16.7H490v-16.7zm-91.16 25.1c-8.82-.1-17.66 1.6-25.9 5.2a64.377 64.377 0 0 0 34.6 23.6c9.36 2.5 20.16 5.4 28.36 7.6 3.5.9 7.3.4 10.5-1.5 3.1-1.7 5.4-4.7 6.4-8.3.9-3.6.4-7.3-1.4-10.4-1.8-3.2-4.8-5.6-8.4-6.5-8.2-2.2-18.9-5.1-28.4-7.6-5.2-1.4-10.46-2.1-15.76-2.1zm277.06 46.6V275l90.4 20V182.9zm-151.4.1 15 236.9 40-10s7.1-92.7 10.6-139c.1-1.1.9-1.9 2-1.9 1 0 1.9.8 1.9 1.9 3.6 46.3 10.6 139 10.6 139l40 10L352 183zm-22.4 9.1c-3.2 6.2-7.3 11.8-12.1 16.6h20.1v-16.6zm278.6 0v16.7H490v-16.7z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconClotheslineIcon })
);
