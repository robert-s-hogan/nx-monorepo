
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconEagleHeadIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'eagle-head'];
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
        <path fill="currentColor" d="M242.9 20.46c6.7 19.75 19.7 41.39 4 50.44-38.6 22.04-81.4 41.5-106.2 90.7C103.3 235.7 91.69 412 29.81 451c48.6 3.8 89.69-16.3 108.89-44.2 7.1 34.3 32.6 67 63 84.7-5.2-29-1.8-59.4 19-92.5 16.5 22.9 31.1 59.3 73.8 75.3-16.4-27.5-13.7-52.8-10.7-84.2 8.8 26.9 38.5 50 72.9 58.9-16.8-18.6-23.9-45.5-21-66 14.6 24.9 43.4 38.4 67.1 39.7-153.3-179.6-48.7-291.6 79.4-194.4-.5-49.7-31.4-66.7-67.2-95.7-.9-15.4-9.6-29.3-17.5-43.36-53.7-9.99-121.5-42.01-154.6-68.78zm81.2 74.88c26.1 10.86 46.2 22.56 56.4 35.46-16.6-3.6-39.8-3.5-70-1.1 15-9.7 16.5-21.7 13.6-34.36z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconEagleHeadIcon);
    