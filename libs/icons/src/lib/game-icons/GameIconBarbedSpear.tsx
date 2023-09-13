
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBarbedSpearIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'barbed-spear'];
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
        <path fill="currentColor" d="M18.156 14.938l1.188 109.812 19.5 17.22c15.49-23.43 36.69-41.66 65.094-51.47l-80.5-75.563h-5.282zm168.125 53.78c-.396 44.894-10.642 82.204-31.155 111.5C272.262 286.142 455.438 453.28 455.438 464.407c-11.175 0-197.844-161.162-316.75-264.594-25.878 25.887-62.488 43.38-110.313 52 68.746 39.904 126.46 57.79 191.594 69.282-19.723 11.207-43.54 19.43-71.157 24.406 67.254 39.04 123.215 55.186 187.687 65.906-16.78 9.55-36.457 17.074-59.97 21.313C354.206 477.804 413.56 487 498.314 497.5v-.03c-18.824-85.7-40.233-141.38-96.625-209.845-.202 22.858-3.87 42.68-10.594 60.5-19.436-63.145-45.6-114.738-94.438-174.03-.235 26.606-4.35 50.287-12.094 71.093-20.53-63.15-48.564-116.11-98.28-176.47zm-68.936 37.126c-29.56 7.767-49.585 24.63-64.406 48.53l30.312 26.75c7.968-26.825 21.017-51.348 34.094-75.28zm15.062 11.406c-13.92 25.673-26.966 50.952-33.562 77.656l9.844 8.688c19.153-15.05 40.11-42.41 47.906-63.656l-24.188-22.688z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBarbedSpearIcon);
    