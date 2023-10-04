import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDespairIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'despair'];
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
        d="M45.215 19.162v438.443l18.687-27.334V19.163H45.215zm50.21 0v408.082h18.688V19.162H95.426zm54.07 0V294.11h3.21c4.71-5.543 9.902-10.77 15.48-15.684V19.162h-18.69zm50.21 0v236.98c6.047-3.43 12.296-6.582 18.69-9.44V19.16h-18.69zm50.21 0v216.033c6.18-1.787 12.42-3.34 18.69-4.625V19.162h-18.69zm48.923 0v207.262c5.177-.357 10.33-.54 15.432-.512 1.088.006 2.17.03 3.255.055V19.162h-18.687zm54.07 0v211.12c4.172.978 8.25 2.142 12.237 3.46 1.688-2.06 3.45-4.088 5.31-6.07.376-.4.763-.78 1.143-1.174V19.162h-18.69zm50.21 0v184.172c6.14-2.986 12.41-5.27 18.69-6.81V19.16h-18.69zm50.208 0v176.336c6.655 1.35 12.978 3.786 18.69 7.395V19.163h-18.69zM440.61 212.85c-3.508-.006-7.176.35-10.97 1.074-15.174 2.895-31.835 11.907-45.554 26.533-4.884 5.208-9.023 10.747-12.434 16.412-93.246-57.583-331.013 75.585-179.697 189.32H72.64l-26.453 47.744h257.165l-88.48-103.25c24.272-26.71 67.455-43.708 96.997-45.067 13.792 45.098 36.248 113.5 71.734 148.315h60.865c-43.9-47.444-77.84-111.502-82.236-183.94 1.887 5.67 4.938 10.597 9.137 14.55 9.046 8.518 22.192 11.497 37.366 8.603 15.175-2.895 31.838-11.905 45.557-26.532 13.72-14.626 21.666-31.854 23.61-47.22 1.943-15.367-1.85-28.35-10.895-36.868-6.784-6.387-15.875-9.66-26.4-9.675z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDespairIcon })
);
