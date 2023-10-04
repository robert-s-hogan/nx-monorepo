import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTunePitchIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'tune-pitch'];
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
        d="M228.47 47.906v42.908H19.53V109.5h208.94v21.875H19.53v18.688h208.94V343.03c-16.86-14.274-43.56-23.457-73.626-23.405-50.982.088-92.313 26.714-92.313 59.5s41.332 59.307 92.314 59.22c26.19-.047 49.822-7.113 66.625-18.408h277.467V401.25H240.344c4.22-6.653 6.627-13.906 6.812-21.5.006-.25.03-.5.03-.75h251.75l.002-18.688H247.155V182.25c24.89 40.517 45.422 63.12 64.5 74.656 23.127 13.983 44.285 9.79 60.688 3.28 16.403-6.508 29.112-13.624 42.406-11.655 13.294 1.97 30.884 13.118 55.594 50.595l16.5 25c-11.733-45.096-41.555-105.8-75.72-121.28 27.93-4.62 53.664 11.71 76.376 29.718l-1.53-2.313c-13.05-20.11-24.207-33.715-34.658-42.75-10.45-9.035-20.606-13.596-30.343-14.125-19.477-1.058-32.544 12.03-44.595 18.656-6.025 3.314-11.596 5.395-17.813 5.44-6.216.043-13.607-1.854-23.562-8.47-19.91-13.232-48.717-45.747-89.188-112.5L228.47 47.906z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTunePitchIcon })
);
