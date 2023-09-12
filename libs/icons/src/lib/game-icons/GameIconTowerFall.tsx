
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTowerFallIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'tower-fall'];
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
        <path fill="currentColor" d="M91.033 22.14v84.368l46.434 57.56v16.166l98.93 44.13 27.29-34.305 65.9 4.01v-30l46.433-57.562v-84.37h-48.916v39.796H297.33V22.14h-49.45v39.794h-29.24V22.14h-49.45v39.794h-29.243V22.14H91.033zm46.434 178.557v195.17h-29.88l-21.792 94.695h295.463l-21.79-94.695h-29.882V370.02l-38.72-24.07-23.712 29.292 28.432 25.737-12.543 13.854L241.5 377.23l33.37-41.222-91.65-56.973 33.288-43.082-79.04-35.256zm155.013 19.11l19.04 34.994 31.005-5.405-17.287-29.588H292.48zm66.682 10.088l17.293 74.527 55.553 2.068-13.442-57.967-59.404-18.628zm-135.47 27.328l-13.034 16.865 37.393 23.244 18.167-20.61-42.526-19.5zm73.115 13.056l-32.66 37.056 65.44 40.68V298.2l-32.78-27.92zm85.154 51.745l-5.16 29.584 33.49 18.158-.093-31.258-28.236-16.485zm79.91 6.928l-23.073 23.197 8.697 33.106 25.717-18.08-11.34-38.223zm-65.85 68.992l-10.97 36.977 24.88 17.49 8.414-32.025-22.323-22.442z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTowerFallIcon);
    