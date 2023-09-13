
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBoxUnpackingIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'box-unpacking'];
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
        <path fill="currentColor" d="M61.39 25.39C93.9 58.33 115.8 96.55 133.3 134.5c4.9-12 7.3-22.2 18.9-32.3 47 26.5 60.3 43.3 64.4 80.4h66.8c1.8-36 7.6-56.3 36.5-82.81 15.9 12.41 20 26.91 28.1 40.71 8.5-38.9 37.3-81.28 76.7-101.89-52.5-11.56-108.5-.43-153.3 17.54 9.3 6.39 22.7 11.23 26.9 19.5-19 9.79-39.5 42.35-51.2 69.35-14.1-25.1-43.5-53.44-72-67.64 11.5-11.58 23-15.79 34.5-22.89C176.6 36.1 117.5 27 61.39 25.39zm8.85 175.21l-41.25 110H137.8l41.2-110zm134.76 0l41.2 110H483l-41.2-110zm-22 40.6l-32.8 87.4H73v158h110zm18 0v245.4h238v-158H233.8z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBoxUnpackingIcon);
    