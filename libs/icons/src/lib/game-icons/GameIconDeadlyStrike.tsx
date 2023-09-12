
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDeadlyStrikeIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'deadly-strike'];
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
        <path fill="currentColor" d="M196.38 16.29l12.018 214.677-69.382-213.75h-19.65l70.52 217.25c-17.16-18.22-34.434-44.74-52.243-80.246 18.864 62.058 35.573 139.067 40.552 192.04L19.38 62.393v38.277l144.89 258.98c-33.493-21.316-67.86-56.375-97.918-92.87 26.712 52.73 55.26 104.847 73.076 160.54L19.378 289.453v28.46l107.997 124.026C99 434.69 70.625 422.05 42.25 408.165c38.03 26.607 62.036 50.897 84.234 85.82H230.84l-6.785-91.082H197.77c0-44.845 2.87-108.728 40.767-115.86-6.993-8.433-11.533-20.27-11.533-33.523 0-23.93 14.228-43.758 32.45-46.127h.005c.303-.038.61-.056.923-.063.934-.02 1.895.063 2.83.063 19.957 0 36.205 20.602 36.205 46.128 0 12.928-4.304 24.595-10.996 32.99 41.4 6.42 40.496 71.424 40.496 116.394h-24.94l-6.003 91.082h90.96c19.418-30.77 60.864-56.727 96.524-75.234-38.585 10.67-75.927 17.602-109.66 21.02l117.97-86.97v-23.218l-125.78 92.728c24.4-49.363 55.902-88.075 90.164-122.648-40.56 27.323-73.25 37.7-107.027 43.785L493.77 158.7v-30.58L339.297 328.19c1.19-51.24 16.946-114.427 39.156-171.047-17.383 25.054-33.876 46.073-49.713 62.742l56.406-202.668h-19.398l-53.412 191.906 3.832-192.834h-119.79z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconDeadlyStrikeIcon);
    