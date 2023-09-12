
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCrackedDiscIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'cracked-disc'];
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
        <path fill="currentColor" d="M257.344 20.063c-10.24 0-20.324.65-30.22 1.906l28.532 69.093 44.844 33.124 68.25-11.53-42.625 30.468 42.938 31.75-84.313-13.344 27.125 65.657 70.844 36.25-66.095-1.28-50.656.843 10.342 21.906 45.032 32.188-32.406-5.47 59.843 126.72-84.81-88.53-50.126 22.936 33.312-40.5-49-51.156-76.875 35.156 51.095-62.094-61.22-63.906 90.907 5.72L114.188 68C56.94 111.312 20 180.002 20 257.406c0 131.19 106.154 237.344 237.344 237.344s237.344-106.154 237.344-237.344S388.533 20.062 257.344 20.062z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCrackedDiscIcon);
    