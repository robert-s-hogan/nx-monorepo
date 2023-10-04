import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconThermometerScaleIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'thermometer-scale'];
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
        d="M132.875 19.594v57.03H369.72v-57.03H132.874zm29.03 75.72v266.405h18.69V95.31h-18.69zm160.095 0v266.405h18.688V95.31H322zm-56.75 17.75v18.686h35.813v-18.688H265.25zm-47.53 42.874v18.687h85v-18.688h-85zm47.53 40.687v18.688h35.813v-18.688H265.25zm0 42.156v18.69h35.813v-18.69H265.25zm-47.53 42.876v18.688h85v-18.688h-85zm47.53 40.688v18.687h35.813v-18.686H265.25zm-132.375 58.094v57H369.72v-57H132.874zm45.656 75.718v34.78l145.532.002v-34.782h-145.53z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconThermometerScaleIcon })
);
