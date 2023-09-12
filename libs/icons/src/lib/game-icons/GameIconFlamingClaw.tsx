
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconFlamingClawIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'flaming-claw'];
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
        <path fill="currentColor" d="M286.344 15.22c35.747 36.387 36.18 94.69-1.875 112.78-41.352 19.655-99.47-5.62-72.876-74.813-74.166 45.167-89.234 119.982-63.656 192.125-30.293-23.512-90.362-67.5-47.875-117.375-57 11.348-71.862 59.875-42.063 90.532 49.228 50.64 13.02 118.883-28.03 46.718-24.442 123.094 153.718 150.67 155.343 231.28h18.53C195.46 427.78 141.368 388.31 83.282 340l30.25-93.406c.142 1.064.294 2.08.44 3.125-1.64 46.587 15.002 127.502 78.468 121.843-14.43-6.617-26.087-15.86-35.563-26.47 20.738-4.194 38.623-63.316 32.28-156.374l88.126-31.564c-64.46 43.87-78.115 117.557-39.436 154.563l44.72-103.94 85.498-22.343c-64.875 41.348-105.853 95.667-73 144.688l57.875-80.906L458.158 265c-125.27 21.775-157.203 101.965-173.626 176.28 3.107 17.593 10.72 36.258 20.283 55.19h13.656C272.694 372.424 453 363.083 480.843 287.97c26.825-72.37 7.37-109.43-52-157.69 48.237 78.413-19.87 116.58-38.53 85.845-38.098-62.747 70.19-152.574-103.97-200.906z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconFlamingClawIcon);
    