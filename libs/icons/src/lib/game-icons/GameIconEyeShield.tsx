
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconEyeShieldIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'eye-shield'];
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
        <path fill="currentColor" d="M46.188 19.22c0 69.06 2.795 131.737 12.624 188.5l.032-.032c15.57-13.874 31.41-26.022 47.437-36.5 17.764-63.536 74.074-111.048 142-115.5V34.75c-68.267-.423-136.35-5.625-202.093-15.53zm421.562 0c-65.506 9.935-133.13 15.052-200.78 15.5v20.81c68.906 3.564 126.267 51.43 144.217 115.657 15.123 9.88 30.002 21.25 44.594 34.032 9.36-56 11.97-117.804 11.97-186zM258.72 74c-56.667 0-105.38 33.662-127.283 82.188 42.275-22.723 85.645-33.93 128.907-33.625 42.567.298 84.795 11.728 125.594 33.624C364.04 107.67 315.38 74 258.717 74zm0 68.28c-39.587 0-71.5 31.95-71.5 71.657 0 39.707 31.913 71.688 71.5 71.688 39.584 0 71.5-31.98 71.5-71.688 0-39.706-31.916-71.656-71.5-71.656zm-63.94 8.032c-38.83 11.04-77.54 32.272-115.405 64.344 37.397 31.567 76.353 52.478 115.72 63.25-16.407-16.38-26.564-39.013-26.564-63.97 0-24.788 10.037-47.277 26.25-63.624zm127.94.063c16.176 16.34 26.186 38.805 26.186 63.563 0 24.94-10.143 47.56-26.53 63.937 39.67-10.875 78.655-31.95 115.687-63.188-37.422-31.688-76.133-53.13-115.344-64.312zm-64 17.53c25.27 0 45.936 20.707 45.936 46 0 25.295-20.666 46.032-45.937 46.032-25.273 0-45.94-20.737-45.94-46.03 0-25.295 20.667-46 45.94-46zm0 18.69c-15.15 0-27.25 12.095-27.25 27.31 0 15.217 12.1 27.345 27.25 27.345 15.148 0 27.25-12.128 27.25-27.344 0-15.216-12.102-27.312-27.25-27.312zm-196.783 37.78c22.21 109.62 73.43 196.387 186.344 263.78V372.22c-67.4-4.42-123.376-51.26-141.593-114.064-15.19-9.743-30.137-21.016-44.75-33.78zm389.625 3.406c-13.31 11.332-26.91 21.458-40.78 30.345-18.4 63.513-75.42 110.712-143.813 114.25V487.22c111.535-67.022 162.336-152.06 184.592-259.44zm-66.156 45.064c-40.57 21.2-82.873 32.18-125.437 32.406-43.1.227-86.288-10.57-127.97-32.375 22.16 47.888 70.52 81.03 126.72 81.03 56.206 0 104.54-33.16 126.686-81.06z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconEyeShieldIcon);
    