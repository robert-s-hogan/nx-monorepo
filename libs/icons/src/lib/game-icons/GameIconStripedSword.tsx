import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconStripedSwordIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'striped-sword'];
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
        d="M20.492 18.445V48.32l142.8 230.215 13.263-14.068L23.953 18.445h-3.46zm62.363 0L221.78 244.19l-.116.12 57.42 98.366c13.31-10.723 26.58-20.305 39.62-29.184l-61.907-105.66-21.63 22.457L104.8 18.444H82.854zm80.303 0l113.24 186.012.06-.035 57.827 98.697c14.364-9.413 28.354-18.235 41.688-27.07l-70.545-118.71-21.957 22.797-98.433-161.692h-21.88zm80.96 0L326.935 157.1l.066-.04 64.45 108.454c13.838-9.718 26.8-19.798 38.538-31.08l-75.97-127.543-21.79 22.626-66.34-111.07h-21.77zm76.56 0l54.984 88.522.113-.07L443.37 220.38c11.33-13.075 21.146-27.87 29.054-45.384L415.11 78.6l-29.126 9.564-43.306-69.72h-22zm76.136 0L442.42 87.96l38.508 64.772c8.563-26.848 13.343-59.395 13.343-100.128l-43.354 14.238-31.748-48.397h-22.354zM20.492 162.34v34.78l93.502 146.724 81.238 129.408 46.653-27.14-15.565-24.794-24.6 26.12-76.808-128.2 22.406-23.763-9.09-14.48-30.728 17.878L20.492 162.34zm187.7 95.96l-6.49 6.737-28.397 30.117 55.463 94.74c11.814-12.983 23.79-24.55 35.79-35.03l-56.367-96.565zm-48.25 51.026l-11.73 12.442 56.84 94.87 11-11.677-1.767-2.814-54.342-92.82zm-39.374 80.14c-29.078 28.91-67.018 54.394-98.775 73.612-.106 8.052 1.748 14.447 5.334 19.082 3.678 4.754 9.542 8.254 18.602 9.875 25.252-25.11 59.002-52.65 92.245-74.844l-17.407-27.725z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconStripedSwordIcon })
);
