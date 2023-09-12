
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTinkerIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'tinker'];
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
        <path fill="currentColor" d="M409.28 19.313c-20.507.34-40.836 8.245-56.53 23.937-20.558 20.558-27.823 49.56-22.188 76.156l1.032 4.938-3.594 3.594-43.406 43.406c3.86 2.906 7.167 6.498 9.72 10.625 7.166 11.59 6.305 28.69-6.22 41.218l-11.97 11.968 30.438 30.47 79.563-79.563 3.563-3.594 4.968 1.06c26.44 5.525 55.136-1.98 75.75-22.593 23.596-23.595 29.518-57.696 18.688-87.093l-49.22 49.25c-13.71 13.708-36.3 15.01-50.093 1.22-13.79-13.793-13.07-36.618.814-50.5l49.22-49.25c-8.545-3.15-17.475-4.93-26.44-5.22-1.367-.045-2.726-.054-4.093-.032zM72.157 21.53c-13.533.162-25.857 6.134-34.937 15.69-18.163 19.108-23.575 51.08 4.56 79.218l86.126 86.124c30.25 2.733 53.004 26.662 53.906 57.532L182 266c.883 5.654 4.31 10.126 8.844 12.47 5.734 2.963 12.387 3.145 19.625-4.095l64.405-64.406c7.718-7.72 6.896-12.716 3.53-18.157-3.364-5.442-11.272-10.063-18.81-10.063h-.19l-.186-.03c-30.125-1.298-53.427-23.487-56.5-53l-86.595-86.595C100.84 26.84 85.69 21.37 72.155 21.53zm191.188 227.314l-14.03 14.03 136.5 136.532 3.31 3.313-.655 4.655-4.595 31.813 77.188 49.375L489 460.625l-49.375-77.22-31.78 4.595-4.658.688-3.312-3.313-136.53-136.53zm-27.72 26.812l-11.936 11.938c-12.238 12.24-29.134 13.86-41.438 7.5-4.515-2.334-8.513-5.66-11.656-9.72l-41.78 41.782-3.595 3.594-4.97-1.063c-26.596-5.632-55.6 1.632-76.156 22.188-23.598 23.596-29.52 57.697-18.688 87.094l49.25-49.25c13.883-13.877 36.71-14.605 50.5-.814 13.792 13.792 12.494 36.384-1.22 50.094l-49.25 49.25c29.398 10.83 63.498 4.906 87.095-18.688 20.613-20.615 28.114-49.342 22.595-75.78l-1.03-4.938 3.56-3.563 79.19-79.186-30.47-30.438z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTinkerIcon);
    