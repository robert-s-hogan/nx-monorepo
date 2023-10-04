import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSunbeamsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'sunbeams'];
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
        d="M17.488 17.883V27.1l31.72 13.17c-4.947 16.663-7.873 34.187-8.507 52.275L17.49 89.443v63.428l28.852-3.917c3.968 16.532 9.893 32.31 17.527 47.068l-46.38 19.193v85.652l77.298-60.297c10.784 11.913 22.92 22.575 36.154 31.762L17.487 419.047v74.812h79.15l80.544-197.33c14.558 5.425 29.874 9.278 45.746 11.35l-24.914 185.98H299.93L275.055 308.18c16.05-1.902 31.553-5.62 46.29-10.948l79.96 196.63h92.16v-58.548L368.043 273.34c13.018-8.875 24.983-19.18 35.68-30.682l89.742 69.053V221.18l-57.643-23.737c7.784-14.768 13.854-30.573 17.95-47.15l39.693 5.292V87.275l-33.748 4.543c-.694-18.028-3.672-35.49-8.65-52.09l42.398-17.505v-4.338h-112.22l-42.282 32.527c-4.65-8.143-10.22-15.098-16.805-21.683l8.13-10.845H167.655l7.59 9.758c-6.94 6.73-12.477 14.34-17.346 22.767l-41.744-32.527H17.488zm416.22 29.012c4.37 15.116 6.913 31.006 7.392 47.43l-88.584 11.925c.04-1.177 0-2.065 0-3.254 0-7.216-.776-14.88-2.168-21.683l83.36-34.418zM66.57 47.48l78.856 32.747c-1.546 7.146-2.168 15.16-2.168 22.767 0 1.19-.04 2.075 0 3.254L59.31 95.03c.42-16.463 2.93-32.39 7.262-47.55zm82.65 87.5c2.51 7.588 5.67 14.977 9.758 21.684l-77.84 32.21c-7.003-13.298-12.48-27.522-16.204-42.446l84.287-11.448zm197.872 1.086l88.07 11.743c-3.854 14.962-9.48 29.21-16.63 42.514l-81.74-33.658c3.9-6.395 7.833-13.4 10.3-20.6zm-171.852 41.74c5.61 5.437 11.178 10.017 17.89 14.096l-50.806 65.703c-12.01-8.234-23.03-17.804-32.846-28.5l65.762-51.298zm144.203.003l69.49 53.47c-9.706 10.252-20.536 19.43-32.296 27.33l-52.915-68.333c5.71-3.65 10.837-7.81 15.72-12.468zm-37.404 22.768l32.274 79.365c-13.294 4.732-27.27 8.03-41.74 9.715L261.44 206.54c6.972-.943 14.133-3.712 20.6-5.962zm-66.138 1.084c6.534 2.07 13.58 4.128 20.6 4.88l-11.096 82.825c-14.282-1.85-28.07-5.276-41.18-10.1l31.676-77.605z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSunbeamsIcon })
);
