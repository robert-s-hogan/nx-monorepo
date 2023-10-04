import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFlamingArrowIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'flaming-arrow'];
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
        d="M57.875 21.28l10.78 10.782.25-.25 235.282 235.313 5.157-25.188 1.062-5.187 5-1.78 22.625-7.907 8.564-3 3.25 8.468 67.062 174 7.563 19.626-19.626-7.53-174.25-66.813-8.53-3.282 3.092-8.592 8.188-22.907 1.75-4.936 5.156-1.063 29.406-6.03L32.686 68.03l.064-.03-15.625-15.625v26.438l92.156 92.156c-30.99 4.08-64.743-6.566-88-41.25-5.772 45.12 27.467 71.417 67.595 90.093 142.86 66.488 62.58 154.315-21 68.312C91.465 422.337 345.872 515.98 446.22 443.03c81.28-59.088 28.39-317.88-124.564-357.342 35.845 25.814 3.98 39.604-35.844 34.906 33.436 18.52 53.9 43.222 28.188 65.687-25.476 22.26-62.792-19.648-67.75-56.78-7.816-58.527-13.53-89.41-90.53-86.125 31.365 24.65 36.576 52.646 26.843 76.188L84.313 21.28H57.874zm277.78 226.407l-9.06 3.188-11.94 58.188-1.217 6.062-6.032 1.22-58.25 11.936-3.344 9.376 146.094 55.97-56.25-145.938z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFlamingArrowIcon })
);
