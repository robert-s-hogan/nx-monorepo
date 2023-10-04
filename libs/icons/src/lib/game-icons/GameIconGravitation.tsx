import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconGravitationIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'gravitation'];
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
        d="M357.6 34.58h-.1c.4-.13-6.8 4.48-13.5 11.36-6.8 6.87-14.6 15.94-21.7 25.09-3.9 4.91-7.4 9.74-10.6 14.38 2.8 2.57 13.4 8 16.6 9.5 10.2-16.03 23.2-32.74 45.7-38.18-3.8-7.61-7.7-18.67-16.4-22.15zm-129.7.38c-39.9.55-84.7 27.32-106.3 60.28-16.5 25.06-27.64 58.86-29.82 92.16-2.18 33.3 4.56 66 22.12 89.7 2.5 3.4 5.6 5.2 10.4 6.6 4.8 1.3 11 1.9 17.9 2.2 13.7.5 30.2-.3 44.3 9 12 8 16.7 21 21.6 31.2 2.4 5 4.6 9.1 6.9 12.1V189.9h82v149.2c36.7-12.5 71.6-37.4 93.3-66 13.7-18.1 24.5-42.8 28.5-67.5 4.1-24.7 1.4-49.1-9.9-67.6-7.7-12.3-22.7-16.1-42.2-18.8-19.6-2.7-42.4-3.6-60.9-15.7-15.8-10.33-24.4-27.24-33.2-41.08-8.8-13.84-16.8-23.82-28-26.03-5.4-1.05-11-1.53-16.7-1.43zM233 207.9v170.2h-55l78 103.7 78-103.7h-55V207.9z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconGravitationIcon })
);
