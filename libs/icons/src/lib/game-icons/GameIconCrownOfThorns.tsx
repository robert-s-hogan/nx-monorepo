
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCrownOfThornsIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'crown-of-thorns'];
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
        <path fill="currentColor" d="M255.094 24.875c-16.73 9.388-34.47 42.043-41.688 59.47-14.608-2.407-28.87-3.664-42.562-3.75-11.446-.074-22.49.68-33.03 2.218-16.34-8.284-34.766-29.065-42.626-50-9.324 15.704-9.558 42.313-5.782 64.593-19.443 9.72-35.107 23.633-45.53 41.688-7.262 12.577-11.5 26.34-12.97 40.875 13.294-25.904 35-46.957 65.656-54.345-34.99 31.783-59.85 87.186-51.5 129.406-1.2 22.87-9.48 37.647-24.75 44.595 16.335 4.59 35.497 3.343 49.438-1.28 24.94 34.82 60.818 67.882 105.063 94.342-6.952 17.613-16.677 49.21-16.47 66.032 10.846-13.178 37.433-40.585 61.72-42.783 23.656 10.27 47.35 17.698 70.312 22.313 12.423 17.25 12.895 38.867 7.375 53.594 16.402-9.2 33.82-33.187 39.938-48 47.1 1.423 88.046-10.534 114.718-35.563 17.536 5.52 30.744 15.707 39.813 30.5.243-19.578-8.05-44.353-18-60.31 13.42-28.268 12.786-61.81.5-96.158l.405.47c9.976-11.804 18.304-33.19 18.063-52.907-8.535 10.373-20.727 15.14-36.75 14.188-13.56-22.597-31.81-44.812-54.032-65.375 10.56-19.27 30.402-36.43 44.156-47.97-18.985-5.337-67.794 5.2-80.78 17.782l5.906 8.5c5.637 11.99 9.503 24.423 11.093 37.063-26.323-37.275-70.72-74.72-114.905-95.625-15.894-25.424-19.322-56.118-12.78-73.563zm-82.875 97.063c1.13-.015 2.258-.008 3.405 0 31.56.2 68.888 8.842 107 25.656-8.8 20.095-14.74 44.482-10 61.344 13.33-18.637 37.313-34.22 55.406-37.5 55.904 34.315 96.215 78.718 111.658 118.718l.093.22c16.088 37.88 13.36 85.186-26.56 117.312 4.79-11.41 7.986-23.828 9.5-36.438-14.078 10.012-33.524 15.304-56.314 15.97-1.954-17.242-9.117-52.874-22.28-65.72 1.565 16.122-8.11 46.272-26.22 61.063-31.916-6.495-66.794-19.67-101.03-39.438-9.538-5.506-18.65-11.307-27.314-17.344-3.444-23.614 7.842-53.562 20.563-64.03-18.967-.234-46.71 22.156-59.313 32.75-40.974-38.47-64.14-81.11-61.25-115 16.275-1.708 36.144.927 51.72 8-3.92-15.382-18.553-31.733-34.407-44.344 14.757-13.826 37.7-20.852 65.344-21.22z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCrownOfThornsIcon);
    