import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSausageIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'sausage'];
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
        d="M415.5 20.2c-8.2 0-17 1.12-25.1 3.28 2.5 11.27 4.2 22.1 4.5 33.29 7 1.62 13.6 4.29 19.7 7.79 1.8 1.03 3.5 2.13 5.2 3.28 10.7-4.95 23-8.62 35.8-11.94 10.9-2.85 22-5.3 32.5-7.54-2.9-1.64-6-3.39-8.6-4.76-9.7-5.02-17.9-7.99-32.6-4.92l-12.3 2.58 2.3-18.36c-5.9-1.81-13.4-2.7-21.4-2.7zm-35.7 52.73c-5.5 0-11.2 1-17.1 3.14-15.5 5.72-32.8 20.21-48.9 49.23-5.8 10.4-11.2 20.3-16.4 29.6h.6c6.2-.1 11.9.7 17.3 2.5 10.9 3.6 19.7 10.6 28.5 19.3l-12.6 12.8c-8-7.9-14.6-12.7-21.5-15-6.2-2.1-13.2-2.4-23.1 0-27.5 50.1-46.4 84.5-64.9 110.1 14 11.9 33.2 16.8 57.8 16.3l.4 18c-26.9.5-51.1-5.1-69.2-20.1-20.8 25.1-43.4 40.8-77.5 56.4 11.7 11.2 30.4 19.7 54.6 25.6l-4.2 17.4c-29-7-53-17.7-67.9-35.3-.2.1-.3.1-.5.2-30.64 12.7-43.76 26.9-47.39 38.8-3.63 11.8.83 23.6 11.55 35 10.73 11.3 27.54 20.9 44.84 25.6 17.3 4.8 34.8 4.4 47.3-1.8 80.8-40.1 127.6-80.6 164.1-129.5 36.6-49 62.7-106.9 100.4-181.4 5.1-10 4.5-23.4-1.2-36.6-5.7-13.21-16.3-25.68-29.1-33.01-8-4.59-16.7-7.26-25.9-7.26zM68.25 451.2c-10.4 9.9-26.58 13.3-43.45 16.6-.29 0-.59.1-.88.1 8.39 1.8 16.27 3.8 22.47 6.2 9 3.5 15.21 10.7 20.57 17.7 3.54-9.7 7.82-18.6 14.79-29.4-4.89-3.4-9.43-7.1-13.5-11.2z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSausageIcon })
);
