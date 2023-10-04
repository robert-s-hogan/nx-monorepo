import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconMorbidHumourIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'morbid-humour'];
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
        d="M259.95 17.338c-61.708 0-102.232 20.943-128.57 55.848-25.517 33.818-37.445 81.93-38.17 137.86 33.63 19.018 56.805 39.508 70.78 61.804 7.797 12.44 12.592 25.422 14.803 38.656l16.494 2.492-4.635 30.69c4.333 1.272 9.355 2.47 14.83 3.402.99.168 2.03.317 3.047.474l3.646-24.134 18.478 2.79-3.552 23.514c7.145.598 14.607.988 22.185 1.145v-20.5h18.688v20.417c7.532-.217 14.968-.652 22.09-1.318l-3.516-23.26 18.477-2.79 3.577 23.66c.388-.066.798-.124 1.183-.192 6.83-1.2 12.908-2.776 17.99-4.466l-4.445-29.434 17.785-2.685c8.21-38.67 34.413-73.048 85.563-100.422-.764-52.846-12.427-100.878-37.823-135.42C362.577 39.727 322.07 17.34 259.95 17.34zm-73.663 116.344c24.028-.286 46.155 15.473 52.942 39.556-3.906.72-7.97 1.394-11.933 2.453-37.542 10.045-65.257 32.45-72.463 55.626-9.722-7.055-17.098-16.803-20.45-29.287-7.768-28.947 9.456-58.735 38.444-66.49 4.495-1.203 9.01-1.805 13.46-1.858zm141.783 0c4.45.053 8.965.655 13.46 1.857 28.99 7.755 46.213 37.543 38.445 66.49-3.35 12.483-10.728 22.23-20.45 29.286-7.206-23.175-34.92-45.58-72.462-55.625-3.962-1.058-8.028-1.732-11.934-2.452 6.786-24.083 28.913-39.842 52.94-39.556zm-70.828 84.963c13.88 29.26 24.89 58.52 30.358 87.78-20.238-6.68-40.475-7.568-60.713 0 7.39-29.26 16.27-58.52 30.355-87.78zM166.44 362.84c-5.255 17.464-13.684 35.014-24.208 52.68 27.1 53.567 74.66 77.275 120.766 76.037 46.057-1.238 90.19-27.462 110.525-76.305-10.655-17.354-19.13-33.665-23.72-51.45-4.847 5.995-10.002 11.43-15.4 16.31l10.788 20.325-16.506 8.762-9.237-17.405c-4.638 3.094-9.402 5.822-14.267 8.172l6.025 19.41-17.85 5.54-5.662-18.243c-6.32 1.825-12.745 3.05-19.216 3.666v21.002h-18.69v-20.928c-7.14-.623-14.243-1.988-21.23-4.088l-5.77 18.59-17.85-5.54 6.192-19.944c-4.808-2.374-9.523-5.116-14.122-8.22l-9.55 17.987-16.507-8.762 11.13-20.967c-5.47-4.968-10.703-10.512-15.64-16.63z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconMorbidHumourIcon })
);
