import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSwordInStoneIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'sword-in-stone'];
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
        d="M101.938 19.938c-8.837 0-15.813 6.978-15.813 15.812 0 7.358 4.84 13.427 11.563 15.25l23.134 55.4c-12.618 7.364-23.065 19.85-30.17 37.528L64.22 163.75l11.218 14.938 8.177-6.135c31.722-21.112 72.4-39.987 110.12-49.975l27.327-4.078-2.78-18.5-33.294 4.982c-13.01-4.957-25.152-7.096-36.113-6.607-3.67.164-7.202.62-10.6 1.334l-23.088-55.304c1.6-2.48 2.532-5.436 2.532-8.656 0-8.837-6.945-15.813-15.782-15.813zM178.81 147c-17.714 6.11-35.908 13.923-52.875 22.656l68.407 165.03 14.625-7.842 28.28-38.75L178.812 147zm169.094 111.53l-68.125 3.033-56.967 78-1.25 1.718-1.875 1.033-65.313 35.03-28.47 117.188h345.25l-15-63.686-165.56-54.688 5.874-17.75 89.905 29.688-38.47-129.563z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSwordInStoneIcon })
);
