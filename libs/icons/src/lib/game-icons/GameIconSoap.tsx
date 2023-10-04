import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSoapIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'soap'];
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
        d="M248 15c-18.1 0-33 14.88-33 33 0 18.12 14.9 33 33 33s33-14.88 33-33c0-18.12-14.9-33-33-33zm0 18c8.4 0 15 6.61 15 15s-6.6 15-15 15-15-6.61-15-15 6.6-15 15-15zM64 73c-18.12 0-33 14.88-33 33 0 18.1 14.88 33 33 33 18.12 0 33-14.9 33-33 0-18.12-14.88-33-33-33zm0 18c8.39 0 15 6.61 15 15 0 8.4-6.61 15-15 15s-15-6.6-15-15c0-8.39 6.61-15 15-15zm155.9 39.7c-22.5 0-41 18.5-41 41s18.5 41 41 41 41-18.5 41-41-18.5-41-41-41zm0 18c12.8 0 23 10.2 23 23s-10.2 23-23 23-23-10.2-23-23 10.2-23 23-23zM112 162a16 16 0 0 0-16 16 16 16 0 0 0 16 16 16 16 0 0 0 16-16 16 16 0 0 0-16-16zm223 61.4c-5 .2-10.6 2.4-20 7.1l-98.1 49.1c.1.8.1 1.6.1 2.4 0 27-22 49-49 49-11.9 0-22.7-4.2-31.2-11.3l-23.4 11.7c-8.2 4.8-14.26 8.3-18.01 12.9-3.78 4.7-6.39 11-6.39 24.4v43.1c0 10.4.59 14.7 1.18 15.7.6 1.1 3 3 11.52 7.4l78.7 39.4.3.1c16.3 9.7 36.8 8.8 56.7-1.2l199.3-98.9c9.5-5.3 13.6-9.1 15.6-12.7 2-3.7 2.7-8.7 2.7-18.1v-38.6c0-12.7.2-19.8-.8-22.4-.9-2.7-2.5-4.6-12.3-9.4v-.1l-84.8-42.4-.1-.1c-10.9-5.7-16.9-7.3-22-7.1zM168 251c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31zm246.8 34.5l7.8 16.2-154 73.8h-.1c-17 7.8-30.3 14.9-45.3 17.6-14.9 2.6-30.8-.4-49.6-11l.4.3-43.5-21.4 8-16.2 43.7 21.5.2.2c16.6 9.3 26.8 10.7 37.8 8.8 10.9-1.9 23.3-8.2 40.8-16.2l153.8-73.6z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSoapIcon })
);
