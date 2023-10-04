import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconShiningClawIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'shining-claw'];
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
        d="M164.72 29.125c-1.535.012-3.06.03-4.595.063-14.043.306-28.164 1.517-42.313 3.687h-.03c-40.47 6.208-68.176 25.313-83.407 50-15.23 24.687-18.025 54.264-11.53 81.28 6.492 27.02 22.268 51.823 45.405 67.126 23.137 15.304 53.82 20.5 87.156 8.564 88.876-31.822 154.224-18.526 202 22.125 47.297 40.24 77.402 109.05 90.25 190.53 9.29 10.237-.1.206 9.657 10.375 9.74-8.25-.16-.032 9.593-8.406 49.368-122.298 18.986-236.885-52.062-315.69C353.21 70.42 261.34 28.377 164.72 29.126zm129.718 69.53L385.125 135c4.922 4.69 9.668 9.56 14.25 14.563-4.09-2.25-8.194-3.45-11.938-3.563-10.212-.307-17.585 7.21-13.593 21.875 8.252 30.456 55.747 34.927 45.187 5.5 9.34 12.627 17.642 26.007 24.75 40.03-6.273-8.833-12.323-12.982-17.342-13.093-13.9-.306-19.88 30.236-.875 77.188 20.765 51.37 43.424 59.815 45.906 31.438 3.183 34.31-.184 70.722-11.408 108.437-15.63-70.58-45.05-130.96-90.53-169.656-14.414-12.265-30.428-22.22-48-29.532l-40.907-22.313 77.53 2.938-111.25-56 102.22 5.03z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconShiningClawIcon })
);
