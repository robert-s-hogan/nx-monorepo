
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconRollingBombIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'rolling-bomb'];
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
        <path fill="currentColor" d="M335.063 18.47L351.406 50l-125.562-5.25 23.375 14.594L114.312 105.5l46.718 4.656-121.593 91.03 34.063-8.5L24 301.938 135.344 153.97l126.72-60.157-8.752 18.093 106.282-21.03-33.875 34.468 66.467-14.125 25.875-19.814-4.093-24.594-25.75-46.593-.595 32.718-52.563-34.47zM136.47 45.562l-44.126 4.5 40.625 15.53 78.186-7.093-74.687-12.938zm299.81 41.374l1.158 6.907.937 5.562-4.47 3.406-2.936 2.25c21.198 10.998 35.443 31.69 39.905 54.47 3.217 16.425 1.528 33.693-6.688 49.218l10.407 17.875c14.85-21.558 19.235-47.146 14.625-70.688-5.718-29.19-24.874-55.763-52.94-69zM105.814 95.53l-55.876 5.75-31.874 24.376 39.5.813 48.25-30.94zm166.468 71.376c-55.766.386-109.805 29.512-139.75 81.375-44.958 77.872-18.37 177.167 59.5 222.126 77.872 44.96 177.167 18.34 222.126-59.53 44.96-77.872 18.37-177.167-59.5-222.126-24.334-14.05-50.76-21.09-76.97-21.78-1.8-.05-3.606-.076-5.405-.064zM440.095 204.5l-23.625 13.75c11.814 15.223 20.996 32.132 27.405 50l24.875-14.47-28.656-49.28z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconRollingBombIcon);
    