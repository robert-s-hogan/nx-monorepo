
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconFluffyCloudIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'fluffy-cloud'];
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
        <path fill="currentColor" d="M225.438 18.156c-15.105.14-32.56 2.526-52.407 7.844-35.26 9.45-65.035 28.973-88.374 54.844-17.668 13.755-36.98 46.39-51.437 85.97-16.415 55.046-16.447 120.304-2.157 188.155C34.84 372.91 44.14 385.08 57.5 392.093c13.36 7.01 31.353 8.776 52.688 3.062 13.473-3.608 23.028-12.44 28.812-22.75 5.784-10.31 7.226-22.05 5.313-29.187-4.335-16.17-19.078-25.202-32.313-21.658-9.02 2.417-13.433 10.27-13.5 16.97-.034 3.35.976 6.065 2.75 7.968 1.774 1.903 4.493 3.497 10 3.594l-.344 18.687c-9.57-.168-17.87-3.693-23.312-9.53s-7.856-13.482-7.78-20.906c.148-14.85 10.064-30.185 27.342-34.813 24.03-6.434 48.515 9.84 55.22 34.845 3.605 13.45.802 29.11-7.095 43.188-7.896 14.077-21.48 26.63-40.25 31.656-4.174 1.117-8.282 1.972-12.343 2.624 98.875 90.13 248.893 110.83 349.344 9.72 18.164-18.283 31.29-40.735 38.595-65.127.02-.063.044-.124.063-.187 9.94-40.298 4.91-84.342-17.5-123.156-44.153-76.474-142.198-106.276-193.094-78.28-57.27 23.11-71.688 56.892-76.625 81.874-21.635 61.008 4.65 135.55 67.686 156.375 43.724 14.443 97.45-5.348 111.656-51.25 9.364-30.262-4.29-66.992-35.437-75.532-9.543-2.616-20.58-1.58-29.438 2.658-8.858 4.237-15.41 11.2-17.78 21.093-1.297 5.42-.55 11.935 1.906 16.814 2.455 4.88 5.99 8.01 11.25 8.97 1.883.342 4.31-.074 6.28-.845-2.017-.512-3.482-1.562-4.343-2.345-1.39-1.288-3.168-3.693-3.656-6.563-.78-4.998 2.214-9.82 5.03-11.906 2.818-2.086 5.51-2.925 8.845-2.906 6.21.034 11.453 3.97 14.03 8.125 2.577 4.154 3.51 8.625 2.97 13.28v.033c-.982 8.283-6.386 14.75-12.533 18.187-6.146 3.438-13.153 4.556-19.968 3.313-11.435-2.087-20.017-9.842-24.595-18.938-4.578-9.096-5.78-19.644-3.406-29.563 3.774-15.756 14.824-27.336 27.905-33.593 13.08-6.257 28.324-7.683 42.438-3.813 42.675 11.702 60.497 59.787 48.343 99.064-17.637 56.99-82.493 80.936-135.375 63.47-68.184-22.526-99.163-97.1-84.28-163.44-18.918-16.436-34.28-39.526-40.47-62.624-14.74-55.014 32.67-114.382 82.19-130.563 42.26-13.775 79.575 5.404 60.124 39.094 33.446-28.243 15.37-79.8-57.406-79.124z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconFluffyCloudIcon);
    