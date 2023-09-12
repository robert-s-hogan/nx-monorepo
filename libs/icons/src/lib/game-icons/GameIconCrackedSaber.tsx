
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCrackedSaberIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'cracked-saber'];
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
        <path fill="currentColor" d="M494.72 14.25C464 45.883 422.17 77.54 379.5 100.875c.595 7.333.68 14.613.28 21.813l76.908 67.062c23.812-50.01 37.816-108.077 38.03-175.5zM361.31 110.313c-33.945 16.532-67.536 27.05-95.562 27.343.437 68.376-140.326 159.185-251.938 213.438v50.844c101.23-32.865 193.023-77.914 256.563-130.782 58.435-48.62 92.51-102.763 90.938-160.844zm15.657 34.718c-5.71 29.013-19.22 56.772-38.814 82.876l3.156 28 83.97-12.25c8.167-11.697 15.735-23.928 22.656-36.72l-70.97-61.905zm-55.345 102.94c-11.674 12.995-24.837 25.543-39.28 37.56-24.68 20.535-53.16 39.722-84.47 57.47l60.563 44.438c25.585-14.042 50.32-29.836 73.53-47.625l-10.343-91.844zm87.78 16.905l-66 9.625 5.814 51.47c21.875-18.363 42.155-38.643 60.186-61.095zm-229.592 88.063c-9.147 4.86-18.51 9.6-28.063 14.218l16 62.063c24.345-9.377 48.614-20.028 72.313-32.095l-60.25-44.188zM134.53 375.28c-37.93 17.356-78.593 32.814-120.718 46.25v52.533c42.832-9.02 89.48-21.387 136.344-38.282l-15.625-60.5z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCrackedSaberIcon);
    