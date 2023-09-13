
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHollowCatIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'hollow-cat'];
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
        <path fill="currentColor" d="M198.313 56.688l-8.438 14.28-22.938 38.844c-18.317-4.358-35.37-5.354-55.375.126l-41.687-41.47-8.375-8.312-6.156 10.063C19.29 128.875 14.09 177.377 33.437 212.28c9.654 17.415 24.894 30.734 44.094 40.157-4.407 32.957.132 71.53 10.657 108.625l1.938 6.782h97.156c.022 13.4 3.196 26.253 8.72 37.875 18.2 38.29 59.696 64.798 98.625 67.624 42.657 3.095 79.943-12.74 110.156-36.438 30.215-23.696 53.762-55.214 70.533-84.937 27.083-48.002 23.293-97.405-.72-133.22-22.51-33.576-62.396-55.233-108.906-54.844-3.1.026-6.218.15-9.375.375-33.52 2.39-70.68 16.482-108.218 44.97-5.187-3.536-10.218-6.792-15.156-9.813 9.13-31.093 2.846-72.824-26.782-128.125l-7.844-14.624zM65.405 90.374l36.844 36.656 4.063 4.032 5.406-1.75c21.994-7.123 36.01-5.824 57.28.094l6.906 1.938 3.625-6.188 17.657-29.844c11.94 25.023 18.157 45.963 20.157 63.5-29.35-13.022-46.757 3.998-49.438 31.157 23.753 11.46 38.94 9.244 48.563-1.907-1.185 5.91-2.98 11.267-5.282 16.093-11.72 24.558-37.484 38.487-65.75 46.22-46.488-3.5-80.715-20.203-95.657-47.157-14.135-25.5-12.516-62.744 15.626-112.845zm26.875 63.97c-8.15-.045-17.81 2.947-28.874 9.81 7.008 29.103 23.402 43.218 59.47 25.814-2.045-20.708-12.664-35.53-30.595-35.626zm273.564 28.25c40.662-.374 74.304 18.35 93.22 46.56 20.174 30.093 24.05 70.946-.033 113.626-15.854 28.103-38.213 57.787-65.78 79.408-27.567 21.62-59.918 35.21-97.25 32.5-31.075-2.256-68.383-25.954-83.125-56.97-7.37-15.507-9.546-32.477-3.656-50.624 5.89-18.147 20.176-37.867 47.374-57.406 21.33-15.324 36.078-10.8 42.437-3.625 3.18 3.587 4.542 8.016 3.595 12.968-.947 4.953-4.324 10.816-12.625 16.283-25.07 16.512-36.64 35.432-35.5 53.312 1.14 17.88 15.07 31.54 32.53 37 34.927 10.922 86.795-8.394 110.314-77.75l-17.72-6c-3.582 10.567-7.777 19.537-12.343 27.313h-87.436c4.227-5.682 10.68-11.854 20.437-18.282 11.62-7.65 18.666-17.773 20.69-28.344 2.02-10.57-1.13-21.222-7.94-28.906-13.62-15.367-40.788-18.203-67.342.875-29.526 21.213-46.817 43.975-54.22 66.783-.85 2.62-1.538 5.236-2.124 7.843H104.5c-7.996-30.958-10.887-62.56-8.313-89.156 15.005 4.93 31.685 7.97 49.5 9.188l1.532.093 1.5-.374c30.016-7.953 60.795-22.987 76.936-52.062 5.58 3.466 11.348 7.264 17.344 11.5l5.72 4.03 5.5-4.343c37.01-29.482 72.603-42.928 103.405-45.124 2.77-.197 5.508-.287 8.22-.312zm-92.656 185.28h80.25c-20.555 21.655-44.696 24.956-60.844 19.906-11.815-3.693-18.643-11.213-19.406-19.905z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHollowCatIcon);
    