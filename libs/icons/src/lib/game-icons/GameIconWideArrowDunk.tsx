
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconWideArrowDunkIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'wide-arrow-dunk'];
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
        <path fill="currentColor" d="M213.006 18.303c-21.637-.01-42.777 4.028-62.66 11.787v-.002C34.204 75.41-38.364 247.605 86.88 479.638-1.625 185.493 192.23 114.806 335.583 306.48l-29.55 21.86c60.543 45.71 107.035 83.703 163.136 156.812 30.35-98.22 35.076-175.94 7.385-283.75l-32.032 24.037C390.41 80.73 297.89 18.347 213.007 18.304zM203.25 78.39c54.92-.455 114.01 35.336 160.82 112.112l22.928-13.592c25.364 48.176 30.742 96.352 31.47 144.528-28.858-41.125-62.888-75.81-104.222-101.403l27.565-16.34C241.768 94.185 110.326 56.397 43.71 269.428 61.548 146.686 128.538 79.01 203.25 78.39z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconWideArrowDunkIcon);
    