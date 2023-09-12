
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconRomanTogaIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'roman-toga'];
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
        <path fill="currentColor" d="M259.676 18.033c-1.164.028-2.346.125-3.5.125-32.842 0-59.594 33.926-59.594 75.938 0 21.274 7.08 40.465 18.094 54.28-68.132 10.568-82.852 105.422-66.655 191.563h23.563l-1.031-105.343 18.687-.186.467 47.377c38.873-41.234 72.862-84.997 104.984-128.039 5.484-8.33 5.534-10.99 9.93-15.967 6.932-12.34 11.117-27.354 11.117-43.685 0-39.387-23.416-72.038-53.408-75.936-.5-.075-.987-.11-1.5-.125a20.26 20.26 0 0 0-1.156 0l.002-.002zm56.58 134.412c-1.351.055-2.158.49-2.719 1.053-.748.751-1.266 1.937-.953 4.266.313 2.328 1.69 5.397 4.281 7.978 2.592 2.581 5.668 3.947 7.998 4.25 2.33.303 3.512-.221 4.26-.972.748-.751 1.268-1.936.955-4.264-.313-2.329-1.691-5.4-4.283-7.98-2.592-2.582-5.666-3.946-7.996-4.249a9.144 9.144 0 0 0-1.543-.082zm-15.07 22.684c-33.448 44.473-69.433 89.819-111.225 132.357l.53 53.612.314 4.78c18.93-13.416 40.206-37.142 57.326-62.673 11.38-16.972 21.161-34.666 27.996-50.322 6.835-15.656 10.527-29.574 10.527-37.156h18c0 12.564-4.671 27.499-12.031 44.357s-17.602 35.336-29.543 53.145c-20.411 30.44-45.087 59.124-70.912 73.341l.777 11.803c33.132-15.428 56.322-29.443 87.774-72.736l14.562 10.578c-34.968 48.134-63.652 64.098-101.072 81.365l.861 13.059 122.309-47.37 3.234-43.33h.032l1.011-100.566c-.624-15.32 1.939-34.818 3.192-51.342a25.74 25.74 0 0 1-2.309-.19c-6.714-.873-13.143-4.133-18.377-9.345a35.673 35.673 0 0 1-2.976-3.367zm42.277 5.47c-.222 6.175-3.853 45.72-3.068 53.997l-1.065 105.343h24.533c12.656-60.968 5.615-122.891-20.4-159.34zm-27.568 222.547l-51.094 19.79v71.035h44.312l6.782-90.825zm-69.78 27.026L196.31 449.46l2.931 44.512h46.875v-63.801z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconRomanTogaIcon);
    