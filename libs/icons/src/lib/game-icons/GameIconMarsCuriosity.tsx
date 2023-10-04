import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconMarsCuriosityIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'mars-curiosity'];
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
        d="M114.512 23.132l-45.358 7.666 2.334 13.806 45.358-7.666zM406 26.868v46h16.844c-6.053-5.835-9.844-14.004-9.844-23s3.79-17.165 9.844-23zm61.156 0c6.053 5.835 9.844 14.004 9.844 23s-3.79 17.165-9.844 23H484v-46zM445 35.866c-7.84 0-14.002 6.163-14.002 14.002 0 7.84 6.162 14.002 14.002 14.002 7.84 0 14.002-6.162 14.002-14.002 0-7.84-6.162-14.002-14.002-14.002zm-144 7.002c-3.973 0-7 3.027-7 7s3.027 7 7 7 7-3.027 7-7-3.027-7-7-7zM129.982 52.972l-23.377 3.95 58.735 48.944c2.017-5.88 6.181-10.805 11.539-13.814zm146.305.652l-71.555 40.889c4.712 3.846 8.021 9.36 8.98 15.6l71.556-40.891c-4.711-3.847-8.021-9.358-8.98-15.598zm43.877 12.209c-3.9 4.662-9.45 7.903-15.709 8.787l61.25 110.248h20.59zm110.11 25.035v94h30.001v-94zM90.1 95.118l-29.73 56.795c3.613-.362 7.476-.824 11.564-1.527 7.002-1.205 14.192-3.023 19.73-5.418 5.539-2.395 9.002-5.344 10.15-7.537 1.148-2.193 1.598-6.719.41-12.635-1.187-5.916-3.79-12.862-6.79-19.303-1.752-3.76-3.572-7.199-5.334-10.375zm98.9 11.75c-3.973 0-7 3.027-7 7s3.027 7 7 7 7-3.027 7-7-3.027-7-7-7zM102 160a67.11 67.11 0 0 1-3.191 1.488c-4.741 2.05-9.776 3.597-14.809 4.801v18.58h18zm129.34 26.87v93.888c5.215-1.056 11.363-.857 16.002.35v-94.239zm-209.34 16v14h78v-14zm96 0v14h95.342v-14zm147.34 0v14h42.488v-14zm60.486 0v14H484v-14zM22 234.868v33.437l78 39v-72.438zm96 0v78h71.035l19.567-13.884a33.532 33.532 0 0 1 4.74-7.29v-56.827zm147.34 0v58.577a33.29 33.29 0 0 1 4.97 9.637l13.897 9.785h23.621v-78zm60.486 0v78H484v-78h-30v64h-98v-64zm-87.185 63.06c-8.538 0-15.264 6.728-15.264 15.265 0 8.538 6.726 15.266 15.264 15.266 8.537 0 15.265-6.728 15.265-15.266 0-8.537-6.728-15.265-15.265-15.265zm-31.944 24.476l-113.47 80.516a57.635 57.635 0 0 1 12.01 11.1l109.552-77.735a33.403 33.403 0 0 1-8.092-13.88zm63.114 2.34a33.552 33.552 0 0 1-9.041 13.203l66.4 46.762c1.838-5.158 5.135-9.645 9.389-12.957zm84.072 59.02c-5.819 0-10.342 4.523-10.342 10.341 0 5.819 4.523 10.342 10.342 10.342 5.818 0 10.342-4.523 10.342-10.342 0-5.818-4.524-10.341-10.342-10.341zm-28.06 14.254l-29.098 13.47a57.255 57.255 0 0 1 8.693 13.608l27.05-12.522c-3.492-4.037-5.871-9.052-6.646-14.556zm55.61 2.668c-1.304 5.4-4.172 10.214-8.091 13.935l26.002 11.23a57.292 57.292 0 0 1 8.908-13.583zm-127.927 8.855a38.865 38.865 0 0 0-39.002 39 38.867 38.867 0 0 0 39.002 39.002c21.646 0 39-17.356 39-39.002s-17.354-39-39-39zM61 410.868c-21.646 0-39 17.354-39 39s17.354 39 39 39 39-17.354 39-39-17.354-39-39-39zm390 0c-21.646 0-39 17.354-39 39s17.354 39 39 39 39-17.354 39-39-17.354-39-39-39z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconMarsCuriosityIcon })
);
