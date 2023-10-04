import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPointingIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'pointing'];
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
        d="M18.465 20.182v192.9c38.45 80.782 55.772 134.822 150.726 221.098l.167.15.16.158c3.06 3.06 5.89 3.828 10.14 3.455 4.247-.373 9.65-2.494 14.738-5.912 9.313-6.256 16.457-17.503 17.67-22.266l-56.06-56.065 13.214-13.216 62.94 62.944c1.316 1.316 2.67 1.804 6.508 1.115 3.838-.69 9.267-3.1 14.61-6.78 10.098-6.954 19.75-18.663 22.835-26.454l-56.02-56.02 13.216-13.216 63.667 63.67c19.495-3.225 35.412-16.64 41.65-32.52l.756.296-71.514-71.516 13.214-13.215L447.81 415.52c7.58 7.58 14.7 9.95 21.032 9.853 6.33-.096 12.216-2.88 16.62-7.41 8.805-9.06 12.096-23.49-2.255-37.84L259.97 156.88l13.214-13.214 33.08 33.08c46.988-3.724 84.773-17.932 102.148-33.6 8.914-8.04 12.147-15.414 11.424-22.306-.644-6.142-5.172-13.675-15.865-21.79-52.33 22.22-109.035 19.23-162.685 2.538-54.338-16.908-105.852-47.735-148.47-81.406h-74.35z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPointingIcon })
);
