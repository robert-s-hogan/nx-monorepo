
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSpoonIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'spoon'];
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
        <path fill="currentColor" d="M67 20.31c-42.25.41-79.45 58.42-19.84 72.19C151 116.5 232 178.6 295.1 275.6c8.2 16.3 14.4 32.5 11.3 48.8-4.4 15.9-5.3 32-3.2 45.9 4.1 25 16.5 52.2 37.8 75.4 21.2 23.2 46.9 37.8 71.4 44 24.5 6.1 49 4.3 65.4-10.7 16.5-15.1 18.6-38.2 12.9-61.7-5.7-23.5-20-48.8-41-71.7-21-23-44.9-39.5-67.8-47.3-8.2-2.8-16.5-4.6-24.4-5-13.6-5.5-23.6-17.1-32.6-30.5C269.3 154.7 186.7 84.04 90.4 26.66c-7.62-3.79-16.14-6.35-23.4-6.35zM322.2 335.8c24.6 61.8 73.3 110.8 127.6 137.5-8.4 1.5-18.9 1.1-30.3-1.7-21-5.3-44.5-18.3-63.8-39.3-19.3-21.1-30.7-46.4-34.2-67.9-1-9.7-1.3-20.1.7-28.6z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSpoonIcon);
    