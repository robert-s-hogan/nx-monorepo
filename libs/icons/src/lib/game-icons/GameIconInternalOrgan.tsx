import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconInternalOrganIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'internal-organ'];
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
        d="M326.78 18.72c6.46 13.506 7.87 29.775 4.94 45.686-3.504 19.017-13.202 37.958-28.69 52.25l2.25 1.5c9.883 4.933 19.126 10.383 27.69 16.28 3.686-27.3 19.256-54.748 39.405-77.905 12.86-14.777 27.536-27.85 42.844-37.81h-88.44zM139.157 19c12.773 12.03 24.17 26.366 32.625 40.844 6.53 11.18 11.317 22.402 13.345 33.156.213 1.127.384 2.246.53 3.375 7.196-1.952 14.92-3.137 23.126-3.438.858-.03 1.728-.018 2.595-.03-2.124-2.135-4.023-4.486-5.688-6.97-5.29-7.89-8.625-17.228-10.593-26.874-2.79-13.674-3.13-27.843-.25-40.063h-55.688zm314.22 0c-14.606 36.104-43.01 79.36-75.032 111.75-16.91 17.103-34.727 31.146-52.72 39.063-17.99 7.916-37.322 9.495-53.343-.594l9.97-15.814c9.742 6.135 21.243 5.737 35.844-.687 1.63-.72 3.294-1.508 4.97-2.376-22.53-15.707-50.637-28.256-83.783-35.72-10.917-2.457-20.806-3.396-29.75-3.093-14.903.507-27.167 4.487-37.124 10.72-11.57 7.245-20.222 17.774-25.906 30.375 5.518 2.052 10.838 3.677 15.875 4.844 14.97 3.468 26.99 2.66 34.813-1.657l9.03 16.375c-13.683 7.55-30.446 7.55-48.062 3.468-17.615-4.082-36.5-12.42-55.437-23.562-30.115-17.72-60.192-42.528-83.814-69.47v88.564c24.622-4.884 58.445-2.227 90.78 5.656 19.126 4.662 37.468 11.29 52.408 20.156 14.94 8.867 27.01 20.166 31.25 35.156l-17.97 5.094c-2.287-8.088-10.18-16.69-22.81-24.188-3.913-2.32-8.223-4.503-12.845-6.562 4.08 28.99 19.643 58.363 47.28 77.47l-10.656 15.374c-20.736-14.335-35.69-33.434-45-54.28-41.857 52.08 3.743 170.083 101.312 150.56-6.696-6.154-14.234-12.452-22.78-19l11.374-14.843c55.814 42.757 74.897 81.865 79.188 132.25h125.968c-27.98-25.526-52.253-51.017-69-78.686-20.326-33.583-29.493-70.83-20.75-112.875l18.28 3.81c-2.135 10.277-3.1 20.096-2.998 29.564 1.583-1.585 3.127-3.172 4.593-4.78 23.425-25.727 32.506-54.315 30.033-82.627-1.45-16.6-7.06-33.208-16.47-48.937-.734 1.74-1.395 3.46-1.968 5.188-4.448 13.407-4.265 26.174 1.844 39.218l-16.94 7.906c-8.134-17.37-8.35-35.835-2.655-53 5.695-17.164 16.975-33.19 31.72-47.78 28.02-27.73 68.84-50.444 111.78-64V19h-40.5zm40.062 184.875c-30.608 19.412-64.055 25.41-92.282 20.688 2.004 7.327 3.345 14.75 4 22.25.283 3.24.42 6.5.438 9.75 27.857-8.366 58.94-7.692 87.844 6.656v-59.345zm-182.25 107.313c2.956 14.85 4.755 27.457 5.406 38.125 25.255 108.866 7.434 110.33-53.344 23.375-6.55-6.855-13.592-15.437-21.313-25.844l15-11.125c11.724 15.802 21.758 26.8 29.125 32.75 3.684 2.972 6.697 4.625 8.375 5.186.596.2.9.277 1.094.313.172-.22.52-.725.94-1.876.768-2.113 1.47-5.907 1.655-11.063.368-10.31-1.255-25.963-5.28-46.186l18.342-3.656zm-207.063 23.218c-28.22 7.457-56.7 11.148-85.438 8.688v78.687c30.875-26.967 62.133-50.02 93.938-68-3.35-6.25-6.192-12.733-8.5-19.374z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconInternalOrganIcon })
);
