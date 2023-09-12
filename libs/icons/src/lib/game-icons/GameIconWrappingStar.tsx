
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconWrappingStarIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'wrapping-star'];
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
        <path fill="currentColor" d="M18.314 20.6v48.117c74.127 6.587 148.202 24.124 209.71 61.125C188.913 78.178 130.196 43.38 72.798 20.6H18.313zm146.846 0c45.057 38.643 74.804 81.436 84.725 123.54 10.946-45.05 6.82-86.505-4.574-123.54h-80.15zm84.725 123.54v.003h.002l-.002-.004zM483.13 20.6c-30.043 75.585-73.05 144.09-126.02 192.76 51.52-20.53 100.206-46.577 136.472-75.14V20.6h-10.45zM89.958 100.443c25.695 40.067 57.678 77.776 94.402 112.12C117.17 260.592 59.893 319.067 18.28 383.79c85.442-22.73 167.34-61.815 238.314-112.313 70.607 50.235 152.024 89.175 236.988 111.955v-1.66c-41.502-63.918-98.275-121.68-164.76-169.208 36.724-34.345 68.706-72.054 94.4-112.12-58.198 15.17-114.433 37.902-166.638 66.66-52.2-28.757-108.43-51.49-166.627-66.66zm56.31 118.678c-48.624 7.847-91.077 22.95-127.953 39.675v90.7c35.14-51.477 79.497-98.29 127.954-130.374zm109.4 83.218c-18.59 70.884-14.394 135.865.466 193.514h115.78c-63.8-60.13-104.78-127.385-116.245-193.514zm14.993.375c55.22 91.766 138.833 152.762 212.29 193.14h10.632v-90.847c-89.222-19.35-167.94-55.118-222.922-102.293z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconWrappingStarIcon);
    