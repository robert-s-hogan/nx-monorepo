
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHeartShieldIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'heart-shield'];
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
        <path fill="currentColor" d="M256 32c-64 48-128 64-224 96 0 128 160 320 224 368 64-48 224-240 224-368-96-32-160-48-224-96zm0 34.75l5.4 4.05c49.7 37.3 99.6 49.9 176.7 75.6l6.2 2v6.5c0 55-33.1 119.7-72 176.4-38.9 56.8-83.6 105-110.9 125.5l-5.4 4.1-5.4-4.1c-27.3-20.5-72-68.7-110.9-125.5-38.9-56.7-72-121.4-72-176.4v-6.5l6.15-2C150.9 120.7 200.9 108 250.6 70.8l5.4-4.05zm0 22.18c-49.4 35.37-99.8 49.17-170.05 72.37 2.58 46.7 32.35 107 68.65 159.9 35.3 51.5 76.6 96.3 101.4 116.8 24.8-20.5 66.1-65.3 101.4-116.8 36.3-52.9 66.1-113.2 68.6-159.9-70.3-23.2-120.6-37-170-72.37zm-45.5 54.97c19.7.5 38.1 14.4 45.5 48.1 18-86.3 110-42.5 110 22.5-1 63.9-92 107.7-110 162.1-19-54.4-108-98.2-110-162.1 0-39.6 33.8-71.3 64.5-70.6z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHeartShieldIcon);
    