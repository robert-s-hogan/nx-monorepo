import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCelebrationFireIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'celebration-fire'];
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
        d="M290.72 13.396c-79.94 38.87 9.013 152.854-74.402 191.567 21.946-43.348 30.93-118.453-39.69-169.342v.003c57.41 92.152-39.578 101.073 10.68 235.037.884 2.098 1.724 4.216 2.467 6.383-.86-2.16-1.682-4.286-2.468-6.383-17.056-40.42-58.356-69.442-47.875-146.558-92.397 139.136 61.726 179.234 39.968 296.226-20.22-52.322-96.068-38.077-65.88-94.582-81.617 64.483 68 99.77-25.282 168.19h349.006c-44.892-35.722-38.733-108.488-9.29-92.71-14.63-42.75-54.515-10.383-56.477 22.604-15.55-101.866 86.23-108.78 74.388-226.197-19.395 67.794-73.366 65.522-92.71 55.322 68.964-32.598 91.818-125.04 17.15-161.248 23.033 28.635 15.785 123.762-33.243 84.998-18.193-14.385-70.182-60.235-46.34-163.31zm-165.656 4.778c-6.35.16-12.967 2.232-19.62 6.578 38.005 7.337 57.7 61.682 52.892 122.08 34.38-59.225 5.54-129.638-33.272-128.658zm218.29 44.633c8.507 47.444-17.105 75.028-38.82 30.52 22.306 83.01 95.766 93.25 38.82-30.52zm103.84 93.88c35.616 36.454 25.294 104.74-14.133 160.057 81.137-36.52 81.26-153.81 14.133-160.057zm-379.22 78.917c19.553 54.61-90.043 56.077 5.62 157.767-38.953-68.595 67.41-69.424-5.62-157.766z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCelebrationFireIcon })
);
