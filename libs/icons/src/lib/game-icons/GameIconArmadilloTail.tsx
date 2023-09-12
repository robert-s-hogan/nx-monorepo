
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconArmadilloTailIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'armadillo-tail'];
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
        <path fill="currentColor" d="M126.75 21.563L115.344 72.28l115.687 58.97 92.407-109.688H126.75zm-111 .593V60.28l81.438 7.69L107.5 22.155H15.75zM321.375 53l-74.313 88.188 65.5 56.187 105.813-67.03-97-77.345zM15.75 79.03v91.407c120.73-24.94 305.18 81.97 378.5 237.188l-1.406-45.75-32.813-74.03-52.592-70.283-1.782-1.53-74.062-63.5-2.438-1.25L103.75 87.343l-88-8.313zm386.78 83.5l-76.624 48.5 45.78 61.19 93.783-34.283-62.94-75.406zm49.97 100.064l-71.656 26.156 27.312 61.594 77.375-2.72-33.03-85.03zm11.53 104.47l-52.28 1.842 2.875 93.188c3.34 12.008 5.99 24.238 7.875 36.625 33.85-37.927 45.03-83.554 41.53-131.658z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconArmadilloTailIcon);
    