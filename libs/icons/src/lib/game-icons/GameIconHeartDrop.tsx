
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHeartDropIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'heart-drop'];
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
        <path fill="currentColor" d="M145.25 56.72c-61.374.112-120.404 46.204-122.844 121.093-4.38 134.45 178.216 168.506 234.72 302.718 53.49-134.2 231.247-176.35 235.437-302.717 4.18-126.053-147.904-156.787-221.438-70.657-7.116 15.426-7.685 30.843-5.406 39.344 21.644 80.778 64.56 103.038 64.56 167.375 0 36.398-35.61 62.72-73.092 62.72-36.658 0-74.563-28.165-74.563-66.5 0-67.058 43.713-80.063 66.188-163.94 2.656-9.91-1.38-32.71-14.563-50.968-.03-.032-.063-.06-.094-.093-25.38-26.418-57.45-38.433-88.906-38.375zm128.344 195.06c8.576 8.258 13.937 19.843 13.937 32.69 0 25.066-20.337 45.374-45.405 45.374-4.06 0-8.005-.533-11.75-1.53 5.736-4.15 9.594-11.757 9.594-20.44 0-13.13-8.817-23.75-19.657-23.75s-19.625 10.62-19.625 23.75c0 4.104.864 7.976 2.375 11.345 6.368 23.624 27.828 40.905 53.53 40.905 30.76 0 55.5-24.74 55.5-55.5 0-24.82-16.12-45.704-38.5-52.844z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHeartDropIcon);
    