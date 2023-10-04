import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLanternIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'lantern'];
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
        d="M257.25 23.375c-41.54 0-75.438 33.896-75.438 75.438 0 17.043 5.714 32.786 15.313 45.437-34.426 29.59-75.093 52.47-118.094 72.844H435.44c-44.283-20.26-85.17-43.21-118.782-71.938 10.015-12.8 16-28.89 16-46.344 0-41.54-33.865-75.437-75.406-75.437zm0 18.72c31.44 0 56.72 25.276 56.72 56.718 0 12.707-4.13 24.41-11.126 33.843-18.043-17.45-33.484-36.936-45.594-59.094-13.017 21.97-28.66 41.102-46.28 58.126-6.585-9.263-10.47-20.59-10.47-32.875 0-31.442 25.31-56.72 56.75-56.72zm-104.03 193.53v203.813h208.03V235.625H153.22zm103.5 18c.953-.008 1.92.007 2.874.03 13.893.35 27.9 4.052 40.75 11.47 41.115 23.738 55.27 76.604 31.53 117.72-23.737 41.114-76.57 55.268-117.687 31.53-41.115-23.738-55.268-76.572-31.53-117.688 15.81-27.383 44.494-42.824 74.062-43.062zm9.31 19.188v36.718h51.626c-5.71-11.41-14.736-21.335-26.656-28.217-7.946-4.588-16.426-7.372-24.97-8.5zm-18.686.156c-19.64 2.913-37.79 14.456-48.53 33.06-.67 1.157-1.285 2.325-1.876 3.5h50.406v-36.56zm-56.625 55.25c-1.64 9.37-1.235 18.9 1.03 27.936h55.594V328.22H190.72zm75.31 0v27.936h56.69c2.342-9.27 2.677-18.784 1.092-27.937h-57.78zm-66.467 46.624c5.7 9.358 13.775 17.458 23.968 23.344 7.592 4.382 15.664 7.12 23.814 8.343v-31.686h-47.78zm66.468 0v31.844c19.585-2.564 37.804-13.686 48.845-31.844H266.03zm-144.5 83.28v38.563H392.94v-38.562H121.53z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLanternIcon })
);
