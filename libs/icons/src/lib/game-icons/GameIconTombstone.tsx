
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTombstoneIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'tombstone'];
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
        <path fill="currentColor" d="M253.75 18.906c-77.635.03-154.875 54.01-154.875 167.5v209.72c25.67 19.717 46.68 41.386 52.156 69.124-3.507-44.464-4.166-88.692 14.595-133.156 5.265 38.52 8.087 77.137 26.875 115.656 25.316-53.302 59.948-75.555 102.188-72.438-29.706 25.94-56.26 55.26-74.75 95.22 31.477-30.2 66.886-38.728 103.968-40.907-21.57 15.247-41.576 30.414-54.156 50.22h78.344c6.443-27.99-4.756-54.648-17.78-82.908 27.59 18.168 51.09 40.4 61.905 77.657 3.525-39-3.843-73.686-15.19-106.875 13.34 6.44 23.875 15.568 31.595 27.374V186.406c0-113.616-77.24-167.528-154.875-167.5zM150.156 144.594h114.938v18.687H150.156v-18.686zm152.438 0h56.125v18.687h-56.126v-18.686zm-152.438 42.75h36.5v18.687h-36.5v-18.686zm72.25 0H358.72v18.687H222.405v-18.686zm-72.28 40.312h95.81v18.688h-95.81v-18.688zm126.31 0h82.283v18.688h-82.283v-18.688zm-177.56 189.53v62.658h23.686c-4.638-21.58-13.086-42.375-23.687-62.656z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTombstoneIcon);
    