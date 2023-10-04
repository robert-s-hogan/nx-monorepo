import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLayeredArmorIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'layered-armor'];
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
        d="M129.656 21.188L37.936 79.78c3.54 26.805 8.915 53.547 16.127 80.126L240.72 39.594l-19.282-12.5c-31.28-.885-62.204-2.842-91.782-5.907zm253.47.625c-40.51 3.975-83.496 5.938-126.47 5.843l204.625 132.72c7.108-25.89 12.487-51.92 16.095-78.032l-94.25-60.53zM257.937 50.75L59.468 178.656c8.025 26.32 17.865 52.456 29.532 78.313l243.25-158-74.313-48.22zm91.468 59.344l-74.562 48.437 151.28 98.782c11.714-25.803 21.592-51.91 29.688-78.187l-106.406-69.03zm-91.687 59.562L97 274.062c12.202 25.17 26.14 50.064 41.844 74.563l196.094-128.53-77.22-50.44zM352 231.22l-77.53 50.843 101.405 67.187c15.822-24.6 29.895-49.584 42.22-74.875L352 231.22zm-94.53 61.968l-108.345 71.03c13.564 20.062 28.326 39.847 44.28 59.313l132.032-85.28-67.968-45.063zm84.967 56.312L274.5 393.406l47.03 30.375c15.845-19.342 30.513-38.993 44.033-58.936L342.438 349.5zm-84.968 54.875L205.5 437.97c16.233 18.933 33.614 37.54 52.156 55.78 18.385-18.152 35.637-36.678 51.78-55.53l-52.092-33.626.125-.22z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLayeredArmorIcon })
);
