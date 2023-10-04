import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSwirlStringIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'swirl-string'];
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
        d="M17.493 22.18V127.3c78.742 126.922 174.79 219.187 252.88 237.11-7.142 1.665-14.68 2.528-22.78 2.337-67.67-1.59-153.3-68.902-230.102-171.702v70.082c76.9 77.2 159.02 128.697 227.768 137.245-8.208 2.318-16.913 4.15-26.28 4.673-58.776 3.28-130.573-30.502-201.485-88.77v46.137C182.62 479.155 356.19 508.117 441.49 422.817c69.39-69.39 71.76-265.946-29.786-330.554-16.728-10.643-35.31-18.69-56.65-18.69-53.35 0-96.946 43.013-96.946 96.363s43.597 96.947 96.947 96.947c45.006 0 83.972-31.806 80.228-72.418-5.44-59.032-88.172-44.01-98.33 7.59-.467 2.362-.835 4.685-1.17 7.01-4.268-11.258-5.688-23.116-2.336-35.625 8.496-31.707 41.295-51.128 73.002-42.632 11.888 3.186 21.69 10.036 29.2 18.69 11.045 12.727 14.586 29.672 14.016 47.303-1.934 59.767-24.98 108.154-87.018 119.14C210.906 342.814 88.242 190.12 17.493 22.18z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSwirlStringIcon })
);
