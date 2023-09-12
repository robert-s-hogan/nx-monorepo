
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBangingGavelIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'banging-gavel'];
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
        <path fill="currentColor" d="M155 18L80.47 38.98l15.9 55.79L283.5 41.95 276.8 18zm105.5 48l-131 37 61.1 216.4 130.9-37zm53.3 52.9l-19.4 5.5 24 85 19.5-5.5zm-182.7 51.6l-19.5 5.5 24 85 19.5-5.4zm-30.9 27.6L18 221.3v54.3l96.5-27.4zm287.4 19.7l-55.7 34.7 6.5 24.6 28.4-8 24.4 89.6L171 421.3c-8.4-30-16.9-60-25.3-90l27.3-7.7-6.3-22.7-70.53-3.8L137 336.7 28.26 385.6s117.34 4.1 114.34 4.6c-3.1.5-31.3 84.4-31.3 84.4l88-45.2 22.9 64.3 70.6-76.4 94.4 49.7-24.7-70.9 113.5-5.6-77.7-53.7 94.6-66.3-113.4 3.5zM354 290.7l-187.3 52.9 15.7 55.9 187.2-52.9z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBangingGavelIcon);
    