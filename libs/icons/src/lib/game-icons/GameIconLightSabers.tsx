
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconLightSabersIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'light-sabers'];
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
        <path fill="currentColor" d="M478.89 21.842c-6.434-.113-15.047 3.628-24.242 12.822L328.912 160.4c0-.007.003-.015.004-.023l-60.228 60.228.01.01-12.727 12.727-.01-.01-22.657 22.658.01.01-12.44 12.44-.01-.01-30.884 30.884c0 .005.002.01.004.014l-55.656 55.656 22.627 22.627 320.32-320.32c18.827-18.825 14.79-35.217 1.616-35.448zm-445.84.06c-13.176.232-17.213 16.623 1.614 35.45l185.912 185.912 22.658-22.66-44.164-44.16c0 .02 0 .038-.002.058L57.29 34.725C48.098 25.53 39.484 21.79 33.05 21.902zm234.538 36.39c-9.308 42.14-12.624 79.314-27.922 121.454-21.636-16.89-30.623-41.47-43.836-63.414.586 10.88 1.66 22.256 2.42 33.838l57.71 57.71 78.485-78.485a2474.362 2474.362 0 0 1 4.078-21.237c-21.27 28.796-42.452 44.68-71.396 73.475-6.752-45.418.278-77.923.46-123.34zM87.873 170.623c-.052.003-.08.017-.082.044-.258 5.25 104.427 78.357 96.222 83.578-13.465 8.55-57.975 31.11-83.508 44.914 19.72-3.345 53.538-7.933 72.18-8.002l35.453-35.453-63.655-63.652c-27.027-10.216-54.915-21.568-56.61-21.43zm245.143 56.144l-29.086 29.086 56.174 56.17c10.848.735 21.692 1.416 32.5 1.218-24.518-15.9-71.99-43.734-71.64-50.568.353-6.887 63.447-21.216 95.518-31.606-27.787-2.137-55.973 3.846-83.466-4.3zm-41.813 41.812l-22.656 22.656 86.437 86.438 22.627-22.627-44.473-44.475h.06l-41.994-41.992zm-35.098 35.098l-57.703 57.703c.408 14.207.21 28.454-.52 40.38 11.322-26.84 17.846-51.86 45.827-74.473 14.444 11.985 24.816 40.267 37.224 60.4-.91-19.042-6.873-52.002-5.03-64.214l-19.8-19.797zM111.7 354.984L98.974 367.71l45.256 45.257 12.725-12.73-45.252-45.253h-.002zm288.538.06l-45.254 45.253v.002l12.727 12.727 45.257-45.256-12.73-12.725zM94.023 385.39l-9.9 9.9 32.527 32.526 9.9-9.9-32.527-32.527zm323.893.06l-32.527 32.527 9.9 9.9 32.526-32.527-9.9-9.9zm-346.52 22.568L21.9 457.512l32.528 32.527 10.603-10.604 10.73 10.726 17.847-17.848-10.728-10.726 21.042-21.043-9.9-9.9-38.89 38.89-12.728-12.728 38.89-38.89-9.9-9.9zm369.15.06l-9.9 9.9 38.89 38.89-12.73 12.728-38.89-38.89-9.898 9.9 49.494 49.494 32.527-32.528-10.604-10.603 10.726-10.73-17.848-17.847-10.726 10.728-21.043-21.042z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconLightSabersIcon);
    