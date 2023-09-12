
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTwoHandedSwordIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'two-handed-sword'];
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
        <path fill="currentColor" d="M24.68 24.68c-3.535 3.537-5.85 9.779-5.85 16.264 0 4.39 1.123 8.6 2.905 12.003l23.41-7.803 7.802-23.409c-3.403-1.782-7.612-2.904-12.003-2.904-6.485 0-12.727 2.314-16.263 5.85zm17.133 40.545L84.49 105.82c2.94-4.483 5.96-8.317 9.486-11.843 3.526-3.525 7.36-6.546 11.843-9.486L65.226 41.814l-5.854 17.558zm64.892 41.48c-3.067 3.067-5.818 6.763-8.872 11.806l77.446 73.667c2.645-3.307 5.214-6.216 7.948-8.95 2.735-2.735 5.644-5.304 8.951-7.949l-73.667-77.446c-5.043 3.054-8.739 5.805-11.806 8.872zm88.941 88.94c-9.114 9.115-17.08 22.447-35.67 50.598l11.092 11.092c34.16-51.62 34.647-52.106 86.267-86.267l-11.092-11.092c-28.15 18.59-41.483 26.556-50.597 35.67zm24.042 24.043c-3.998 3.997-7.577 8.54-11.858 14.661l242.865 237.584 42.474 21.236-21.236-42.474L234.349 207.83c-6.12 4.281-10.664 7.86-14.661 11.858z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTwoHandedSwordIcon);
    