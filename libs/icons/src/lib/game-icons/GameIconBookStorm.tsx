import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBookStormIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'book-storm'];
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
        d="M256.313 29.844c-16.47-.022-32.95 2.724-49.282 8.343l5.69 16.563L17.53 123l6.19 17.656L231.405 68.03l-5.562-15.905c19.548-4.75 38.93-4.86 58.5-.5l-5.72 16.406 207.688 72.626L492.47 123 299.624 55.562l5.906-17.374c-16.29-5.517-32.75-8.322-49.217-8.344zm-.657 49.593L46.25 152.844l42.406 29.53c70.69-11.9 160.54 31.24 166.906-90.25 2.175 32.524 10.254 53.188 22.282 66.282 6.658 7.576 14.5 12.432 23.687 15.688.04.015.086.016.126.03.216.077.44.145.656.22 33.978 12.23 80.744 1.187 121.344 8.03l41.406-29.155-209.406-73.782zm.47 81.032c-.263.413-.516.842-.782 1.25-12.194 18.6-29.79 28.466-48.656 33.03-3.486.843-7.013 1.528-10.594 2.094l41.437 74.094-67.25 16.78 31.345 61.594-61.813-54L283.938 496.75l-61.875-143.625 52.438 69.5L235.03 320l58.5-10.094-17.092-52.75 93.468 141.28-81.47-196.748 56.845 83.406L323 197.75c-5.9-.68-11.71-1.63-17.375-3-18.865-4.564-36.494-14.43-48.688-33.03-.27-.413-.548-.832-.812-1.25z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBookStormIcon })
);
