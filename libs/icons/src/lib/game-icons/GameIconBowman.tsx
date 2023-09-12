
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBowmanIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'bowman'];
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
        <path fill="currentColor" d="M281.28 15.28l-4.655 7.5-56.28 90.44c-7.312-18.505-21.67-30.9-37.126-30.44-.66.02-1.308.06-1.97.126-21.174 2.14-35.927 27.865-32.938 57.47 1.005 9.948 3.91 19.074 8.094 26.718-44.558 1.188-76.495 11.61-92.812 38.25 20.32 19.086 59.816 22.993 91.844 18.625l4.843 3.124.126.094 18.906 51.375-52.78 212.718h34.156l61.125-168.905L332 491.28h33.563L261.438 292.19l97.156 62.53c-.08.262-.17.52-.25.782.173-.202.328-.422.5-.625l6.937 4.47 9 5.78 4.533-9.656c32.03-68.4 40.24-134.49 25.843-192.064l23.938-4.812 6.187 23.812 55.408-46.656-73.875-24.313 7.562 29.032-24.563 4.968C381.796 93.172 343.996 49.38 289.033 19.5l-7.75-4.22zm3.408 29.907c31.818 30.565 54.66 66.986 69.093 106.094l-136.686 21.25c5.196-8.662 8.24-19.857 8.28-32.06l59.314-95.282zm77.5 132.688c13.773 51.64 13.89 106.532 1.562 157.906l-113.625-73.124-4.125-61.72 116.188-23.06z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBowmanIcon);
    