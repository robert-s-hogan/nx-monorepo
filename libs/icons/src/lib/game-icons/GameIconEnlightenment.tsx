import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconEnlightenmentIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'enlightenment'];
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
        d="M251.828 15.982l-29.2 136.08-56.74-75.652 7.78 90.4-49.154-24.68 22.19 49.643-67.16-13.433 57.817 70.668-55.48-10.514 35.634 26.608c29.894.77 62.017-2.565 90.597 4.35 18.697 4.522 36.167 14.302 48.255 32.74.414.632.82 1.274 1.22 1.923.402-.65.806-1.29 1.22-1.922 12.088-18.44 29.558-28.22 48.254-32.742 27.64-6.685 58.596-3.782 87.643-4.28l35.25-26.676-42.05 8.178 41.468-80.596-59.507 19.852 19.092-77.352-57.234 59.867 6.055-109.607-46.232 97.31-39.715-140.164zM92.236 281.787L50.27 311.02l207.343 72.68L464.95 310.67l-40.99-28.88c-42.595 7.18-92.04-5.54-126.02 10.345l-.116.05-.013.008c-5.226 2.37-9.962 5.418-14.255 9.382-7.564 6.774-13.817 16.048-18.36 28.694l-7.777 13.763-7.158-12.67c-5.434-15.833-13.453-26.5-23.324-33.637-.157-.114-.316-.22-.473-.332-.63-.446-1.267-.883-1.912-1.302-33.565-21.772-86.63-6.6-132.314-14.3zm-64.26 41.3L21.81 340.73l190.67 66.674v17.817h91.55v-18.687h-.055L492.15 340.73l-6.168-17.642-205.658 71.918 4.03 11.527h-54.75l4.03-11.527-205.657-71.918z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconEnlightenmentIcon })
);
