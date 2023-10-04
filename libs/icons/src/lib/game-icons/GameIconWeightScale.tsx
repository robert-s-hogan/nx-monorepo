import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconWeightScaleIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'weight-scale'];
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
        d="M69.14 41L41 67.85V444.3L67.12 471H444.3l26.7-26.7V67.73L444.3 41H69.14zM247 72.07V112h18V72.07c25.3.3 50.5 1.83 74.6 4.63l-12.3 49.1 17.4 4.4 12.8-51.15C384.7 83.02 410 88.67 432 96l-48 112c-26.1-6.5-62.9-10.4-101.5-11.6 4.1 5.5 6.5 12.3 6.5 19.6 0 18.1-14.9 33-33 33s-33-14.9-33-33c0-7.3 2.4-14.1 6.5-19.6-38.7 1.2-75.4 5.1-101.5 11.6L80 96c22-7.33 47.3-12.98 74.5-16.95l12.8 51.15 17.4-4.4-12.3-49.1c24.1-2.8 49.3-4.33 74.6-4.63zm-30.7 20.39l-16.6 7.08 38.1 88.96c5.1-3.3 11-5.3 17.4-5.5l-38.9-90.54zM256 201c-8.4 0-15 6.6-15 15s6.6 15 15 15 15-6.6 15-15-6.6-15-15-15zM128 359h256v18H128v-18zm0 48h256v18H128v-18z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconWeightScaleIcon })
);
