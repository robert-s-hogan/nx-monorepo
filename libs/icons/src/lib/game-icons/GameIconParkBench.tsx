
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconParkBenchIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'park-bench'];
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
        <path fill="currentColor" d="M289.4 18c-1.2 1.9-1.9 3.91-2.3 5.99-1.4 8.93 4.9 18.7 17.5 26.87-40.4 19.75-61.8 52.14-52.5 79.74 7.7 22.9 35.3 38.4 71.8 40.3-3.1 28.7 14.9 50.2 41 48.8 9.2-.5 18.6-3.9 27.2-9.7 11.7 13.7 25.5 21 39.9 21 15.9 0 31.3-9.1 43.8-25.8 5.9 1.4 12 2.1 18.2 1.9V18H289.4zm132.7 230.2L409.5 493h45l-12.6-244.8c-3.2.5-6.5.8-9.9.8-3.4 0-6.7-.3-9.9-.8zM41 283v62h302v-62H41zm60 80v18h18v-18h-18zm164 0v18h18v-18h-18zM25 399v30h334v-30H25zm32 48v46h30v-46H57zm240 0v46h30v-46h-30z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconParkBenchIcon);
    