
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMetalDiscIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'metal-disc'];
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
        <path fill="currentColor" d="M279.53 17.594c-25.88 0-50.532 7.233-72.874 20.375L440.75 249.155c.064 2.51.125 5.03.125 7.563 0 48.374-11.77 92.984-31.375 128.905L126.656 130.5c18.283-38.372 48.536-73.165 79.97-92.53l-4.75-3.907h-23c-26.634 21.17-51.19 50.724-67.657 85.374l2.968.032 12.343 11.124c-4.922 10.525-9.25 21.577-12.905 33.125l277.438 250.25c-7.94 10.24-16.614 19.337-25.875 27.155L103.78 205.345c2.375-14.753 6.394-29.394 9.782-41.72L109 159.5H95.406c-3.734 12.13-6.807 24.154-9.125 37.094h7.69l9.78 8.844c-1.135 7.016-2.067 14.14-2.72 21.375l249.626 225.156c-10.244 6.75-21.046 12.017-32.312 15.655l-218.156-196.75c3.004 59.868 22.88 113.578 53.062 152.97 32.824 42.835 77.36 68.624 126.28 68.624 6.896 0 13.707-.53 20.408-1.533.166-.022.333-.04.5-.062.335-.05.665-.102 1-.156 41.91-6.194 79.226-31.575 106.812-68.533 31.904-42.742 51.312-101.145 51.313-165.468 0-17.144-1.398-33.854-4.032-49.97-.132-.816-.265-1.625-.405-2.438-7.573-45.756-25.125-86.527-49.313-118.093-32.823-42.838-77.36-68.626-126.28-68.626zm-76.092.812c-17.844 1.912-34.983 7.274-51.032 15.625h26.72c7.77-5.878 15.89-11.115 24.31-15.624zm-132.72 101c-6.665 12.61-12.44 26.114-17.187 40.375h41.72c4.374-14.114 9.698-27.613 15.875-40.374H70.72zm-26.78 77.03c-1.885 9.768-3.286 19.787-4.22 30h42.594c.874-10.188 2.2-20.2 3.97-30H43.937zm38.5 30.19c-1.088 11.86-1.082 21.727-1.344 32.343H38.438c.8 64.638 21.266 122.89 53.437 164.874 29.497 38.495 68.465 63.195 111.563 67.812-24.67-13.206-46.746-32.573-65.032-56.437-34.936-45.595-56.473-107.688-57.28-176.19h5.624l13.313 11.69c-1.658-13.463-.116-30.614 1.093-43.5l-.656-.595H82.437z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMetalDiscIcon);
    