import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPressureCookerIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'pressure-cooker'];
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
        d="M256 29.37c-144.8 0-140.1 65.85-140.1 65.85l57.8-11.42s8.2-35.08 82.3-35.08 82.3 35.08 82.3 35.08L396 95.22s4.8-65.85-140-65.85zM238 67.7l-3.3 11.01 43.4.4c-1.5-3.85-2.7-7.82-4-11.76zm18 26.71c-48.7.1-97.5 5.99-146.2 17.39l-25.87 27.6-1.18 10.8c115.55-16.6 230.95-16.9 346.55 0l-1.2-10.8-25.9-27.6c-48.7-11.7-97.4-17.46-146.2-17.39zm0 60.89c-61.9 0-123.8 4.2-185.7 12.4H36.08v18.6l35.78 29.2v-25.1c122.74-17.7 245.54-17.9 368.34 0v25.1l35.7-29.2v-18.6h-34.2c-61.9-8.4-123.8-12.5-185.7-12.4zM110.7 197l-27.87 3.8v218.8l27.87 2.7zm290.9 0v225.3l27.8-2.7V200.8zm-195.9 28.8c-17.2 0-31 13.8-31 31v117.9c0 15.8 11.9 29.1 27.8 30.8 35.8 3.6 71.5 3.5 107.2 0h.2c15.7-1.7 27.7-15 27.7-30.8V256.8c0-17.2-13.8-31-31-31zm0 18.1h100.9c7.3 0 13.1 5.8 13.1 12.9 0 27.6 0 91.5-.1 117.9 0 6.6-5.1 12.1-11.6 12.9-34.5 3.3-69.1 3.5-103.7 0-6.6-.7-11.5-6.3-11.5-12.9V256.8c0-7.1 5.7-12.9 12.9-12.9zM217 261v47.6h78.5V261zm-4.1 65.5c-4.3 0-7.9 3.4-7.9 7.8s3.6 7.8 7.9 7.8h27.5c4.4 0 7.9-3.4 7.9-7.8s-3.5-7.8-7.9-7.8zm59.3 0c-4.3 0-7.9 3.4-7.9 7.8s3.6 7.8 7.9 7.8h27.6c4.3 0 7.8-3.4 7.8-7.8s-3.5-7.8-7.8-7.8zm-59.3 32.1c-4.3 0-7.9 3.5-7.9 7.9 0 4.3 3.6 7.8 7.9 7.8h27.5c4.4 0 7.9-3.5 7.9-7.8 0-4.4-3.5-7.9-7.9-7.9zm59.3 0c-4.3 0-7.9 3.5-7.9 7.9 0 4.3 3.6 7.8 7.9 7.8h27.6c4.3 0 7.8-3.5 7.8-7.8 0-4.4-3.5-7.9-7.8-7.9zM87.32 437.8 111 470.4c96.7 16.3 193.2 16.4 289.9 0l23.7-32.6c-99.7 12.7-211.3 13.5-337.28 0z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPressureCookerIcon })
);
