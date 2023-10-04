import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDeskLampIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'desk-lamp'];
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
        d="M240.8 20.1h-1.9c-15.5.84-35.2 15.23-45 32.14-6.5 11.26-10.1 25.99-9.4 38.6.7 12.66 5.2 22.36 14.2 27.56 30.7 17.6 61.4 35.3 92.1 53l.7 4.5c3 21.4 12.5 43.1 27.7 61.9l97.9-169.58c-24-3.84-47.6-1.36-67.7 6.74l-4.3 1.7L253 23.58c-4-1.97-8.4-3.4-12.2-3.48zm252.6 45.12l-74.6 39.08c3.5 5.2 6.4 10.8 8.5 16.6l66.1-34.59zM407.6 122l-47.2 81.8c18.3-1.3 35.5-11.3 45.4-28.4 7.4-18 8.6-38.8 1.8-53.4zm24.4 22.1c.2 6.2-.3 12.5-1.6 18.7l63 1.5v-18.7c-20.5-.5-41-1-61.4-1.5zm-215.8 8.3c-3.3 7.2-6.3 14.3-9.1 21.4l27.4 10.5c2.6-6.3 5.3-12.7 8.2-19-9-4.8-18.7-9.1-26.5-12.9zM424 181c-2.8 5.6-6.7 11.2-10.4 15.5l79.8 49.9v-22c-23.1-14.5-46.2-29-69.4-43.4zm-223.7 10.2c-2.8 7.7-5.4 15.4-7.8 23.1l28.3 7.8c2.1-6.8 4.5-13.6 6.9-20.4-9.1-3.5-18.2-7-27.4-10.5zm202.4 15.6c-5 3.8-10.4 7-16.1 9.5l60.1 112.9 16.5-8.8c-20.1-37.8-40.3-75.7-60.5-113.6zm-33.4 14.6c-6.1 1-12.4 1.3-18.7.9l-4.3 124.1 18.7.7zm-182 10.9c-2 7.3-3.9 14.7-5.6 22.2l28.5 6.2c1.6-7 3.3-13.8 5.2-20.7-9.3-2.6-18.7-5.1-28.1-7.7zm-9.4 40.5c-1.4 7.4-2.6 14.8-3.8 22.3l29 3.1c1-6.5 2.1-12.9 3.3-19.2-9.5-2.1-19-4.2-28.5-6.2zm-6.2 40.9c-.9 7.4-1.7 14.9-2.3 22.5l29.1 1.5c.6-7.1 1.3-14.1 2.1-21-9.6-1-19.3-2-28.9-3zm-3.6 41.1s-.9 16.5-1.1 25l29.2-.5c.2-7.8.6-15.5 1-22.9-9.7-.6-19.4-1.1-29.1-1.6zm27.7 43.2l-29.2.5c-.1 5.7-.1 11.4-.1 17.3 9.8-1.8 19.5-3.3 29.3-4.5zm53.9 28.5c-38.1.2-76.4 5.6-114.7 15.5-4.9 14.7-8.9 32.3-11.6 52.4h252.4c-2.7-20.2-6.6-37.9-11.5-52.6-38.2-10.5-76.4-15.4-114.6-15.3zM83.23 446.8c-20.57-.1-41.18 3.1-64.34 9.2v19.4c34.27-9.5 60.58-12.2 89.91-7.5 1.3-6.5 2.8-12.7 4.4-18.6-10.2-1.7-20.07-2.5-29.97-2.5z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDeskLampIcon })
);
