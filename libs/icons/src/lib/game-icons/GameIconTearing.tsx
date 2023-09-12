
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTearingIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'tearing'];
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
        <path fill="currentColor" d="M14.223 16.04C61.87 72.49 129.64 160.757 96.22 203.394c56.01 18.077 119.235 143.897 150.99 175.052 1.477-24.13 23.964-14.4 51.776 7.51 10.106-14.555 19.463-30.113 28.04-46.437-71.51-21.026-159.736-152.712-108.915-135.123C159.834 150.63 67.013 58.298 14.224 16.04zm392.732.126c.013.28.022.557.035.838 3.71 31.3 4.355 64.147 2.094 97.443 35.58 48.458 39.525 120.59 24.836 190.244-11.444 54.268-34.302 107.376-64.797 147.394 23.478 24.646 40.965 44.89 40.965 44.89 56.49-99.385 157.33-291.34-3.133-480.808zm-.865 129.848c-11.03 90.59-42.957 181.907-92.518 252.078 14.08 12.273 28.75 26.505 42.31 40.304 27.426-37.093 49.073-86.927 59.75-137.562 11.892-56.388 10.05-113.31-9.542-154.82z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTearingIcon);
    