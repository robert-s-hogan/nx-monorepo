
  import DynamicIconWrapper from '../DynamicIconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDistraction copyIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'distraction copy'];
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
        <path fill="currentColor" d="M114.938 22.844L83.5 93.624l-60.906-44.06 41.062 56.405-43.343-4.595 50.375 22.375-31.782 78.75 47.657-61.062L121.906 202l-13.875-61.75 94.94 10.063-85.345-37.907 30.406-38.5-40.186 15.907 7.094-66.97zm291.28 22.094c-19.627.28-40.815 11.495-61.75 31.843-23.783 23.117-71.204 21.85-78.53 56.158C379.428 87.395 403.99 165.45 316.5 179.75 198.353 199.06 142.72 345.227 21.188 348.22c20.53 25.438 106.22 51.04 199.625 50.468l27.656 68.53c-21.106 2.08-41.81 10.63-56.5 27.282h229.56c-13.726-17.922-41.577-28.49-69.936-27.75l-32.125-79.47c18.65-4.504 36.797-10.47 53.936-18.124 81.08-36.2 137.183-123.264 106.188-238.937-15.96-59.563-42.756-85.727-73.375-85.282zm-11.905 23.968c9.13 0 15.875 7.338 15.875 16.47 0 9.13-6.745 16.437-15.875 16.437-9.13 0-16.47-7.307-16.47-16.438 0-9.13 7.34-16.47 16.47-16.47zM300.75 391.313l31.438 77.78c-8.766 1.93-17.27 5.064-25.094 9.532-10.98-6.175-24.303-10.146-38.28-11.437l-27.876-69.032c19.95-.934 40.083-3.135 59.812-6.843z"/>
      </svg>
    );
  };
  
  export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDistraction copyIcon })
);

    