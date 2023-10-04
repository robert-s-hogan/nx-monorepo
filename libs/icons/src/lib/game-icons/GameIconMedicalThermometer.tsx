import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconMedicalThermometerIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'medical-thermometer'];
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
        d="M409.1 26.44c-14.5-.16-28.9 5.01-42.2 18.31l-16.3 16.29 27.6 27.55-12.8 12.71-27.6-27.49-32.4 32.49 27.5 27.5-12.8 12.8-27.5-27.5-32.5 32.4 27.6 27.6-12.8 12.8-27.6-27.6-32.4 32.5 27.5 27.5-12.8 12.8-27.5-27.5-32.5 32.4 27.6 27.6-12.8 12.8-27.6-27.6-16.2 16.3c-.7.7-2.9 4.5-4.5 9.9s-3 12.3-4.4 19.4c-1.4 7-2.8 14.3-4.8 20.9-1.9 6.6-4 12.6-8.9 17.6l-79.26 79.2c-9.72 9.7-12.79 19.6-12.23 29.2.56 9.5 5.16 18.9 12.23 26 7.08 7 16.45 11.6 26 12.2 9.54.5 19.46-2.5 29.2-12.3L173.1 394c5-4.9 11-7 17.6-8.9 6.6-2 13.9-3.4 20.9-4.8 7.1-1.4 14-2.8 19.4-4.4 5.4-1.6 9.2-3.8 9.9-4.5l226.3-226.3c15.2-15.2 19.8-31.8 18-48.46-1.9-16.66-10.7-33.37-23.6-46.24-12.9-12.86-29.6-21.72-46.2-23.58-2.1-.23-4.2-.38-6.3-.38zM422 77.28L434.8 90 113 411.8l11.3 11.3-29.01 29c-6.71 6.7-14.02 10.6-21.34 11.7-7.32 1-14.7-1.1-19.65-6.1-4.95-4.9-7.13-12.3-6.08-19.6 1.04-7.4 5.02-14.7 11.74-21.4l22.6-22.7 6.37-6.3L100.2 399 422 77.28z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconMedicalThermometerIcon })
);
