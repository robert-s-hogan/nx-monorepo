import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconStonePathIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'stone-path'];
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
        d="M158.8 18c-8.4 20.13-22.8 56.15-36.1 95.9l28.9.9c4.9-26.18 15.9-51.18 27.5-77.02L186 18zm46.3 0l-8.3 23.72 46.7 10.36 66.6-7.47c9.6-10.68 9.3-19.68 11.7-26.61zm-14.3 40.83c-13.5 17.65-17.5 36.95-19.7 56.57l42.2 1.3 21.1-.3c-1-15.8-1.1-31.5 4.8-46.79zm111.5 4.78l-44.9 5.03c-5.2 15.82-6.1 31.66-4.8 47.46l31.1-.4c11.2-16.81 15.2-35.36 18.6-52.09zM117 131.7c-11.3 6.8-11.5 18.9-9.4 32.1 31.9 11.8 56.8 14 89.2 17.4-.1-15.6-1.6-31.3 3.7-46.9zm161.4 2.1c-19.7 2.3-39.4 4.1-59.8.8l-3.9 48.8c28.8-.5 42.3 5.4 52.4 7.4 1.7-17.9 5.8-37.5 11.3-57zm-175.2 47.4c-11.75 28.4-14.76 56.3-8.94 83.1l41.54-25.2 11.1-46.2zm61.7 13.8l-11.7 48.4 79.3 35.4 51.7 1.8c-8.9-25-17.2-47.6-17.8-71.8-33.8-7.8-67.7-14.4-101.5-13.8zm-24.6 62.3l-44.34 27c2 18.4 5.14 38.1 9.14 57.9l106.4-53.1zm101.1 39.8l10.2 66.1c24.5 3.8 42.7-3.9 63.3-7.1l1.1-12c-8.6-15-16.7-30.2-23.7-45.3zm-25.8 9.5l-89 44.9 59.2 19.1c18.7 4.7 35.9.8 47.9-5.4-1.4-20.1-3.8-42.8-18.1-58.6zm-105.7 58.5c-14.64 3.8 9.1 92.3 23 88.7l62.3-20.2-20-47.4zm221.9 5.4c.7 21.3.2 42-5.4 59.8 9.9 6.5 49 14.2 57.6 16.5-5.7-28-27.8-52.4-52.2-76.3zm-18.5 3.8c-38.3 7.1-76.2 15.1-117.9 13.3l17 40.4 46.3-15.1c12.9 6.6 34.9 10.2 49.9 14.1 5.2-17.6 5.1-35.1 4.7-52.7zm-61.6 59.8c-36.2 16.2-74 28.7-113.7 37.1-11.5 7.9-1.5 20.6 7.1 22.8h148.6zm23.9 2.9l40.1 57h104.9c-5.2-6.4-11.5-14.2-19.1-24z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconStonePathIcon })
);
