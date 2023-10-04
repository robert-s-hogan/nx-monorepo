import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconWokIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'wok'];
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
        d="M465.1 127.9c-4.8 0-9.5 1.6-13.4 4.5l-8 6.1c9.3 6.3 18.7 15.4 25.3 28.2l11.8-7.1c5.9-3.6 8.3-11 5.8-17.4-2.7-6.6-8.2-11.6-15-13.5-2.2-.6-4.4-.9-6.5-.8zm-35.6 21.2-95.2 71.8c7.6 3.1 15.2 7.7 22.3 14.3l98.1-59.7c-6.2-13-16.1-21.2-25.2-26.4zm-111.4 84L303 244.4l26.6 7.3 12.1-7.4c-7.7-6.1-16-9.4-23.6-11.2zm-126.2 12.8c-34.2 0-66 3-92.32 8.2-1.63.3-3.25.7-4.84 1 8.8 1.2 17.9 3.6 26.5 7.9 21.3-3 45.3-4.6 70.7-4.6 60.6 0 113.2 9.5 139.3 23.7 4.9 2.7 8.8 5.6 11.5 8.6 1.9 2.2 3.1 4.4 3.1 6.8 0 2.3-1.2 4.6-3.1 6.8-2.7 3-6.6 5.8-11.5 8.5-26.1 14.3-78.7 23.8-139.3 23.8-16.2 0-31.9-.7-46.6-2-1.8 3.2-4.7 5.8-8.4 7.3-8.5 3.4-18.2-.8-21.6-9.4l-.6-1.6c-15.1-2.4-28.58-5.4-39.99-9-2.08 2-4.73 3.5-7.78 4.3-8.94 2.1-17.95-3.4-20.1-12.3l-1.37-5.7c-1.68-1.3-3.13-2.6-4.31-3.9-1.92-2.2-3.12-4.5-3.12-6.8 0-2.4 1.2-4.6 3.12-6.8l.1-.1c-1.22-4.8-2.39-10.1-2.41-14.5-8.8 6.6-13.27 14-13.27 21.3v.1c0 2.2.43 4.5 1.28 6.8C46.26 389.2 132.7 413 191.9 413c59.3 0 145.7-23.8 165.1-108.7.9-2.3 1.3-4.6 1.3-6.8v-.1c0-9.2-7.1-18.6-21.1-26.2-27.3-14.9-82.1-25.3-145.3-25.3zM79.48 266.4c-15.25-.2-26.8 3-26.8 3-1.87 4.8-1.68 9.3-.35 13.5 26.03 12.7 64.77 9.7 64.77 9.7 2.5-4.6 2.8-12 1-17-12.6-7.1-26.75-9.2-38.62-9.2zm202.32 11.7c-3.2-.2-6.6 2.8-8.1 7.3-1.8 5-.4 10.2 3.1 11.3 3.5 1.2 7.7-2 9.4-7 1.7-5.1.3-10.2-3.1-11.4-.4-.1-.9-.2-1.3-.2zM55.87 297.9l3.15 13.1c.54 2.2 2.79 3.6 5.02 3 2.24-.5 3.62-2.8 3.08-5l-2.02-8.3c-3.12-.8-6.21-1.7-9.23-2.8zm69.73 4c-2.1 1.8-4.7 3-7.5 3.2h-.2l9 22.8c.9 2.1 3.3 3.2 5.4 2.3 2.2-.8 3.2-3.2 2.4-5.4zm147.2 1.7c-3.2-.2-6.6 2.8-8.1 7.3-1.8 5-.4 10.2 3.1 11.3 3.5 1.2 7.7-2 9.4-7 1.7-5.1.3-10.2-3.1-11.4-.4-.1-.9-.2-1.3-.2z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconWokIcon })
);
