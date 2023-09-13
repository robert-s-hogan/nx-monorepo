
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMadScientistIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'mad-scientist'];
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
        <path fill="currentColor" d="M311.406 34.53c38.542 34.197 66.87 98.28 74.875 174.72-11.743-12.09-28.16-19.625-46.342-19.625-31.736 0-58.082 22.898-63.532 53.063-8.41-4.385-17.872-6.64-27.344-6.72-8.31-.07-16.654 1.55-24.312 4.876-6.17-29.252-32.13-51.22-63.22-51.22-22.542 0-42.38 11.558-53.936 29.064C113.944 141.055 141.15 75.113 179 38.563c-19.415 11.684-37.058 28.147-52.156 48.5-31.764 42.817-51.75 102.623-51.75 168.875 0 66.25 19.986 126.057 51.75 168.875 18.93 25.516 41.84 44.93 67.25 56.468-45.36-32.216-78.958-104.326-86.375-191.28 11.57 17.39 31.35 28.844 53.81 28.844 33.153 0 60.45-24.968 64.157-57.125 15.126-10.57 37.57-8.8 50.657 3.81 5.34 30.3 31.764 53.314 63.594 53.314 18.094 0 34.454-7.425 46.187-19.406-9.26 85.518-43.967 155.398-89.906 184.875 28.267-10.987 53.744-31.607 74.436-59.5 31.764-42.818 51.78-102.624 51.78-168.875.002-66.252-20.016-126.058-51.78-168.875-16.92-22.81-37.022-40.748-59.25-52.532zM139.186 361.69c54.808 94.924 164.16 94.283 218.595 0-61.404 35.452-146.178 34.58-218.592 0z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMadScientistIcon);
    