
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSparkSpiritIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'spark-spirit'];
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
        <path fill="currentColor" d="M420.402 19.873c37.886 49.484 19.76 88.205-39.797 90.787 15.374-23.54 18.565-50.758-1.503-72.215 15.56 37.318-14.397 62.848-50.137 67.096-4.39-.934-8.887-1.99-13.508-3.19-60.132-15.624-114.527 22.936-137.37 78.923-.43-34.33 9.72-68.377 29.83-102.152-50.37 35.038-75.926 89.323-72.616 166.003l-59.41-65.365L89.55 374.43 254.15 494.025 392.703 389.54l52.584-196.853-93.224 72.415c-23.56-25.652-13.02-55.2 33.736-50.293-38.077-22.19-64.97-2.473-75.952 24.356-5.608-27.825 18.206-63.122 50.218-58.686 76.728 10.638 151.882-107.834 60.336-160.607zM119.838 272.05l94.777 73.214-103.095-21.22 29.263-3.05-20.945-48.943zm255.48 12.237l-10.623 25.262 27.8-.28-12.095 23.437-96.25 14.438 91.168-62.858zM204.305 360.13l42.256 62.552 11.247-44.094 17.84 32.598 56.574-48.54-7.23 24.368 51.71-21.274-54.485 61.82 9.654-29.966-76.21 71.62-47.574-55.136 3.176 27.483-74.627-77.593 61.166 29.998 6.505-33.834z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSparkSpiritIcon);
    