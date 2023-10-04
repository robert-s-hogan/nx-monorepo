import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconContortionistIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'contortionist'];
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
        d="M290.6 36.6c-6.1 1.55-42 10.9-86.3 28.22-48.2 18.84-101.8 46.78-122.69 76.68-26.68 38-36.09 98.3-16.68 139.4 8.38 17.7 37.77 37.9 65.27 51.9 27.6 14 52.6 22.6 52.6 22.6l6.2 2.1-.1 6.6c-.6 38.4-1.9 73.8-2.7 111.3H257c-.2-7.7-27.4-16.9-46-23.8l1.4-6.7c6.7-33.1 9.9-73.1 12.4-110.5-6.3-.6-12.5-2.4-18.3-5.3-12.6-6.2-23.5-17.4-30.6-32-.6-1.3-1.2-2.7-1.8-4-10.1-2.9-19-6.4-26.9-10.8-20.9-11.6-34.4-29.4-45.5-54.6l-3.69-8.5 8.59-3.4c15.7-6.4 25.1-11.3 32.8-20.1 7.6-8.9 14.1-22.8 21.3-48.1l1.2-3.9 117.9-56.4 102 71.9c-2.4 7.9-5.4 15.6-3.6 23.2 12 6.9 35.8 13.7 56.1 18.1 8.9 1.9 16.6 3.3 23.1 4.4-4.4-10-10.8-17.8-19.1-25.3-11.7-10.4-27.2-19.8-44.5-31.2l-.9-.6-.8-.9c-35.3-39.5-65.9-80.67-101.5-110.3zm-5.3 76.7c16.9 21.8 35.2 44.4 45.8 70.6l1.8 4.4c-3.9 6.6-8.5 12-9.7 19.3 14.5 9 37.2 16.1 56.4 20.5 7.5 1.7 14.2 3 19.9 4-3.1-4.6-7.1-9.7-12.1-14.7-10.3-10.5-23.7-21-36.1-29.2l-3.8-2.4-.3-4.5c-.8-11.2-4.4-21.3-9.4-31zm-74.4 121.5c-3.5 0-6.9.8-10 2.3-7 3.4-11.8 10.3-13.7 19.7-1.9 9.5-.6 21.2 4.8 32.4 5.5 11.3 13.9 19.5 22.6 23.9 8.6 4.2 16.9 4.7 24 1.3 7-3.4 11.8-10.3 13.8-19.7 1.9-9.5.5-21.2-4.9-32.5-5.5-11.2-13.9-19.5-22.5-23.8-4.8-2.4-9.6-3.6-14.1-3.6z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconContortionistIcon })
);
