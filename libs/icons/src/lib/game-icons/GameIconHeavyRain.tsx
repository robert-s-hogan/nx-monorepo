
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHeavyRainIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'heavy-rain'];
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
        <path fill="currentColor" d="M50.656 22.125c24.862 31.888 280 358.568 341.063 411.72 76.902 66.936 132.718-3.814 73-73-52.197-60.47-369.484-308.088-408.814-338.72h-5.25zm188.656 0c45.33 61.388 132.53 178.237 165.25 206.72 53.745 46.78 93.142-3.023 51.407-51.376C429.4 146.69 326.902 69.273 263.25 22.124h-23.938zm131.375 0C385.11 38.203 397.84 51.793 404 57.155c41.042 35.724 71.142 1.755 46.125-35.03h-79.438zM17.375 132.5v54.313c42.702 54.933 87.407 110.516 108.03 128.468 53.748 46.783 93.143-2.456 51.407-50.81-21.41-24.807-95.776-83.243-159.437-131.97zm0 165.844V355c45.978 54.937 90.37 107.056 106.28 120.906 47.652 41.476 81.973-2.693 44.97-45.562-16.444-19.05-84.786-76.927-151.25-132z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHeavyRainIcon);
    