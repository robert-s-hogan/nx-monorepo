import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSharpHalberdIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'sharp-halberd'];
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
        d="M355.414 37.057l-72.865 34.96 38.507 38.506zM76.804 60.02c5.94 22.94 6.843 41.02 6.973 57.7 12.274 1.806 26.093 6.842 40.993 12.573 12.252 4.712 24.655 9.693 36.613 14.305-4.61-11.958-9.59-24.364-14.303-36.616-5.73-14.9-10.768-28.72-12.574-40.992-16.682-.13-34.76-1.03-57.7-6.97zm201.712 33.417l-47.207 47.21c9.54 4.895 19.098 9.503 28.655 13.767l39.764-39.764zM175.178 130.02c3.663 9.255 7.183 18.426 10.054 27.04l5.692 17.077-17.078-5.692c-8.615-2.87-17.786-6.39-27.04-10.054 20.598 34.496 39.182 70 52.467 105.872 19.01 51.326 26.685 103.905 12.985 153.963 108.61-34.56 188.19-114.144 222.752-222.754-50.058 13.7-102.637 6.028-153.963-12.982-35.87-13.285-71.374-31.87-105.87-52.467zm316.55 39.392c-11.713 7.82-23.67 14.096-35.81 18.998-35.135 124.333-126.39 215.586-250.723 250.72-4.902 12.14-11.177 24.1-18.996 35.813 69.376-15.54 138.225-56.89 193.433-112.097 55.208-55.21 96.555-124.057 112.096-193.434zm-334.296 45.11l-47.207 47.207 21.213 21.213L171.2 243.18c-4.263-9.557-8.873-19.116-13.768-28.66zm-59.936 59.935l-12.213 12.215h24.428zm-30.21 30.213L51.34 320.613h42.426l15.943-15.943zM51.34 338.61l12.213 12.214L75.77 338.61zm-21.73 3.73L18 353.953v42.428l32.828-32.827z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSharpHalberdIcon })
);
