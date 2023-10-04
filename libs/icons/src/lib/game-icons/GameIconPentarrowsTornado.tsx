import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPentarrowsTornadoIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'pentarrows-tornado'];
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
        d="M274.988 19.434l-23.2 108.6 33.9-7.214 16.814 83.756c-11.957-9.916-26.682-16.604-42.818-18.7l.013-.15-138.765-12.802 3.552-35.438L19.072 172.48l96.37 55.186 3.622-36.137 83.233 7.677c-15.232 10.115-27.014 25.034-33.143 42.578l-56.93 129.186-29.867-14.638L78.44 467.33l85.3-71.11-34.715-17.015 38.477-87.314c4.95 17.906 15.685 33.437 30.047 44.47l98.95 88.745-23.754 25.915 105.373 35.097-44.134-101.908-24.853 27.112-64.246-57.62c1.29.058 2.587.093 3.892.093 20.67 0 39.627-7.51 54.316-19.922l107.713-61.555 17.883 30.57 64.625-90.33-110.392 12.104 18.44 31.52-73.268 41.87c3.23-8.927 4.996-18.548 4.996-28.57 0-7.546-1.006-14.863-2.88-21.83l-26.24-130.724 36.462-7.762zm-27.326 184.453c24.706 2.07 40.725 20.068 40.088 43.728-.217 8.056-5.445 16.797-13.086 22.893.672-6.495-1.987-13.894-7.707-19.613-9.01-9.01-22.183-10.438-29.43-3.192-6.963 6.963-5.894 19.39 2.192 28.346 22.283 27.566 61.67 16.448 74.514-11.08.1 1.492.172 2.993.172 4.512 0 19.38-8.32 36.742-21.592 48.735-2.665 2.024-20.406 12.52-20.406 12.52-7.327 2.815-15.288 4.372-23.63 4.372-14.37 0-27.626-4.59-38.413-12.368l-7.236-6.49-.212.234c-12.2-11.903-19.764-28.534-19.764-47.004 0-7.174 1.156-14.067 3.266-20.52l1.914-4.343-.277-.124c9.658-23.564 32.594-40.16 59.605-40.61z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPentarrowsTornadoIcon })
);
