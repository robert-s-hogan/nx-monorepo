
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconInterdictionIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'interdiction'];
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
        <path fill="currentColor" d="M256.22 24.594C174.977 24.444 95.923 66.54 52.374 141.97c-64.817 112.266-26.36 255.744 85.906 320.56 112.268 64.818 255.747 26.362 320.564-85.905 64.817-112.267 26.36-255.745-85.906-320.563-36.838-21.268-77.044-31.395-116.72-31.468zm-.126 45.562c31.98.056 64.38 8.237 94.062 25.375 82.963 47.9 115.894 149.142 80.5 235.376L184 84.25c22.816-9.31 47.322-14.137 72.094-14.094zm-117.125 40.22l265.53 265.53c-9.55 12.227-20.382 23.04-32.22 32.313L106.69 142.624c9.556-12.224 20.435-22.984 32.28-32.25zm-58.407 77.28L327.25 434.344c-52.287 21.37-113.55 19.208-166.25-11.22-82.987-47.912-115.88-149.212-80.438-235.468z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconInterdictionIcon);
    