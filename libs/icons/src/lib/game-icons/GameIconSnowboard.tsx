import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSnowboardIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'snowboard'];
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
        d="M390.1 18.73h-1.2l42.8 178.05c4.4-3.8 8.9-7.7 13.6-11.6L405.9 20.89c-5.3-1.36-10.6-2.12-15.8-2.16zm-18.8 3.52c-6.6 2.7-12.7 7.03-17.9 13.26C228.9 182.7 182.7 228.8 35.53 353.4-27.91 407 105 539.9 158.6 476.5 264.5 351.4 313.7 299.2 416.4 210l-8-33.3-64 30.3-38.7 18.4-8.2 3.9-20.7 9.8-7.8-16.2 21.2-10.1c-5.1-13.4-7.3-27.6-5.3-41.2 2.5-16.4 11.8-31.8 28.6-40.7h.2l.1-.1c6.5-3.1 13.1-4.7 19.5-4.9.7 0 1.3 0 2-.1 10.1 0 19.8 2.9 28.2 8 11.9 7.1 21.7 18 28.9 30.5l11.7-5.5zm55.1 6.71L460.7 172c5.2-4.4 10.3-8.8 15.8-13.4 41.4-35-.9-103.72-50.1-129.64zM334.3 143.6c-4 .2-8.2 1.3-12.6 3.4-11.7 6.3-17.2 15.5-18.9 27.3-1.4 9.3.1 20.1 3.8 30.8l35.6-16.9 33.8-16.1c-5.9-9.7-13.6-18-21.8-22.9-6.1-3.7-12.2-5.7-18.6-5.6zM219.5 272.3l16.2 7.8-9.8 20.7-27.4 57.8-31.4 66.1-16.2-7.8 10-21.2c-12.5-7.2-23.4-17-30.5-28.9-8.6-14.4-11.2-32.4-3-49.6v-.2l.1-.2c8.9-16.8 24.4-26.1 40.7-28.6 3.1-.4 6.2-.7 9.4-.7h3.1c9.6.3 19.4 2.5 28.8 6zm-41.8 33.3c-2.3 0-4.6.1-6.8.5-11.7 1.7-21 7.2-27.3 18.9-5.5 11.8-3.9 22.2 2.2 32.5 5 8.2 13.2 15.9 22.9 21.8l16.5-34.7 16.5-34.7c-7.3-2.6-14.6-4.1-21.6-4.3z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSnowboardIcon })
);
