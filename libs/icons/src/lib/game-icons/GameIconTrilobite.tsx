import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTrilobiteIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'trilobite'];
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
        d="M159.9 19.55c-20.7.2-41.7 7.8-60.4 20.8-53.2 37-89.8 119.45-56.7 216.85 14 41.3 17.2 76.3 12.5 102.9-4.6 26.5-16.6 44.3-33.4 53.5l9 16.4c22.5-12.3 37.5-36 42.8-66.7 5.4-30.7 1.6-68.6-13.2-112.1-30.7-90.4 3.9-163.55 49.7-195.45 22.9-16 48.2-21.4 69.9-14.6 8.8 2.7 17.2 7.5 24.9 14.6 6.8-1.9 13.9-3.4 21-4.5-11.5-14-25.3-23.3-40.4-28-9.2-2.48-17.2-3.7-25.7-3.7zm166.5 3.8c-14.9 4.6-28.5 13.7-40 27.4 7.3 1 14.5 2.4 21.6 4.2 7.4-6.7 15.5-11.2 24-13.8 21.7-6.8 46.9-1.4 69.8 14.6 45.8 31.9 80.5 105.05 49.7 195.45-14.7 43.5-18.6 81.4-13.2 112.1 5.4 30.7 20.4 54.4 42.8 66.7l9-16.4c-16.7-9.2-28.8-27-33.4-53.5-4.6-26.6-1.5-61.6 12.5-102.9 33.1-97.4-3.5-179.75-56.7-216.85-18.7-13-39.7-20.6-60.3-20.8-8.9.1-18.5 1.48-25.8 3.8zM258 67.45c-45.6 0-86 15.3-115.4 46.25-18.4 19.4-32.6 45.3-40.6 78.1 25.2-18.3 62.6-29.2 87.9-33.8 3-.4 4.9-.3 7.4 1.1 40.3 20.3 84.2 21.5 121.7 0 2.4-1.8 3.6-1.6 6.4-1.1 35.8 5 64.1 15.1 88.5 33.4-8.1-32.6-22.2-58.3-40.6-77.7C344 82.75 303.5 67.45 258 67.45zM190.9 177c-28.4 7.6-94.13 24.2-95.2 57h-.2c-.5 6-.8 12.2-.9 18.6 27.9-23.9 64.7-34.3 97.2-40.1-.5 6.3-.9 12.7-1.3 19.2-30.8 6.8-92.77 17.3-94.6 56.1v.2c.7 7 1.5 13.8 2.6 20.6 22.9-21.8 63.8-35.3 90.8-40.6-.2 6.4 0 13.3 0 19.1-26.5 8.6-82.9 20.6-84.9 50.7 2 7.8 4.3 15.6 6.8 23 18.7-20.2 55.9-32.8 79.3-37.7.4 6.4.8 12.7 1.3 18.9-24.7 5.7-66.7 19.4-71.6 41.5 4.2 9.5 8.9 18.5 13.9 26.9 15.2-17.6 42-26.7 61.5-31.3.8 6.4 1.8 12.5 2.8 18.7-15.1 5.1-50.3 13.9-52.3 30.7 6.9 9.3 14.4 17.8 22.2 25.3 9.9-10.1 26-15.7 37.8-18.5 1.6 6.3 3.3 12.3 5.2 18-10.8 3.9-21.6 5.4-28.7 12.5 22.7 17.1 48.3 26.6 75.4 26.6 26.6 0 51.8-9.1 74.3-25.8-7.6-7.1-20-10.8-28.7-13.1 1.8-5.7 3.6-11.7 5.2-18 12.9 3.3 30.8 10.5 37.8 19.3 8.8-8.2 17-17.7 24.6-28.2-8.6-18.2-37.1-25.7-54.4-29.5 1-6 2-12.1 2.8-18.6 23.7 5.2 49 13 63 30.7 4.7-8.1 9.1-16.7 13.1-25.7-6.4-24.2-52.2-37.4-72.2-41.7.5-6.2.9-12.4 1.3-18.8 27.5 5.7 63.2 18.2 79.9 37.7 2.5-7.2 4.7-14.6 6.6-22.2-13.7-27.7-60.3-45.9-85.3-51.2 0-6.8.3-13 0-19.2 34.5 11.7 70 18.2 91.2 42.4 1.2-7.4 2.1-14.9 2.8-22.5-7.3-35.6-67.6-51.1-95.2-56.4-.4-6.5-.8-13-1.3-19.2 34.9 7 72.7 16.8 97.8 40.2-.1-8-.5-15.8-1.2-23.3-13.5-33.4-66.2-46.7-95-52.2-44.8 21.5-92.3 22.1-134.2-.1zm114 37c.5 6.7 1 13.6 1.4 20.6-31.3 12.6-68.2 13-97.3.6.4-6.8.8-13.5 1.4-20.2 28.4 13.4 68.6 14.8 94.5-1zm2.5 55.7c0 7.4-.1 15.3-.2 21.8-31.6 13.2-69.7 13.5-99.1.6-.1-7.9-.2-13.9-.2-21.2 30.3 15.1 72.2 16.8 99.5-1.2zm-1.6 55.3c-.5 7.6-1 15.1-1.7 22.3-30 11.6-65 11.9-92.9.6-.7-7-1.2-14.3-1.7-21.7 28.2 14.2 71 15.9 96.3-1.2zm-5.7 56.1c-1.1 7.6-2.3 14.8-3.6 21.8-26.1 7.7-53.6 7.9-77.9.3-1.2-6.8-2.4-13.9-3.5-21.4 26.7 10.5 60.4 11.6 85-.7zM225 432.6c19.5 8.1 46.4 9.7 64.9.1-2.2 8.2-4.5 15.7-6.9 22.5-17.3 3.7-35.1 3.9-51.2-.2-2.4-6.7-4.6-14.2-6.8-22.4z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTrilobiteIcon })
);
