
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconGlobeRingIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'globe-ring'];
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
        <path fill="currentColor" d="M256 18.5c-35 0-61.747 17.777-79.027 39.377-14.67 18.338-23.127 39.13-25.354 56.623h18.348c2.349-13.123 9.296-30.672 21.06-45.377C205.747 50.723 227 36.5 256 36.5s50.253 14.223 64.973 32.623c11.764 14.705 18.711 32.254 21.06 45.377h18.348c-2.227-17.492-10.683-38.285-25.354-56.623C317.747 36.277 291 18.5 256 18.5zm13.893 35.03c14.406 12.58 31.53 37.293 18.646 60.97h34.84c-1.092-12.498-24.592-55.762-53.486-60.97zm-125.32 78.97c-.22.219-.77.852-1.348 2.154C141.978 137.46 141 142.5 141 147.5s.978 10.041 2.225 12.846c.579 1.302 1.129 1.935 1.347 2.154h222.856c.218-.219.768-.852 1.347-2.154C370.022 157.54 371 152.5 371 147.5s-.978-10.041-2.225-12.846c-.579-1.302-1.129-1.935-1.347-2.154zm3.984 48C107.479 212.564 81 262.518 81 318.5c0 96.437 78.563 175 175 175s175-78.563 175-175c0-55.982-26.479-105.936-67.557-138h-90.691C341.782 188.73 395 247.191 395 318.5c0 76.98-62.02 139-139 139-76.98 0-139-62.02-139-139 0-71.308 53.219-129.77 122.248-138z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconGlobeRingIcon);
    