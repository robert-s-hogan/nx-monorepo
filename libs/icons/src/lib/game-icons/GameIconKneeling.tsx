import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconKneelingIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'kneeling'];
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
        d="M373.773 42.58c-15.476-.073-32.25 4.32-48.15 13.15-18.172 10.09-32.025 24.21-39.816 39.635-4.937 9.773-7.42 20.355-6.534 30.48-142.235 35.935-140.19 127.28-148.97 211.997-8.83 85.21 31.418 103.056 84.02 110.176-75.802-1.733-65.734-.497-113.788-.364 0 0-45.96 45.96-49.496 48.79 52.562-2.26 344.12 23.87 345.276-31.32.793-37.823-78.186-55.176-135.845-74.976-21.276-7.306-29.62-92.502-.2-169.12 20.044 61.258 65.636 140.037 87.248 143.894 24.542.216 82.012-121.896 113.443-166.68-28.153-15.767-62.88 16.397-77.355 40.235.612 13.085 1.608 31.266 5.567 35.2l-40.947 42.313c-26.15-43.612-43.326-105.71-50.62-158.75-.257.126-.498.256-.75.383.185-.22.38-.437.567-.658 7.89 5.473 17.617 8.64 27.898 9.56 17.213 1.542 36.523-2.75 54.696-12.84 18.172-10.09 32.026-24.214 39.818-39.64 7.79-15.426 9.48-32.862 1.437-47.348-8.042-14.485-23.737-22.27-40.95-23.812-2.15-.193-4.336-.295-6.547-.305z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconKneelingIcon })
);
