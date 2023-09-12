
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconOppositeHeartsIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'opposite-hearts'];
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
        <path fill="currentColor" d="M238 22c-26.2 0-49.9 13.17-64 34.23-3.5 3.51-6.1 7.9-8.8 12.28C123.1-10.46 18.67 18.49 16.07 101.8c-2.6 88.7 113.23 111.6 149.13 199.3 27.2-70.2 103.6-101.8 135.2-153.6 10.5-13.1 18.2-30 15.7-47.4-6.7-46.43-34.6-77.8-78.1-78.1zm108.7 188.9c-27.2 70.2-103.6 101.8-135.2 153.6-10.5 13.1-18.2 30-15.7 47.4 6.7 46.4 34.6 77.8 78.1 78.1 26.2 0 49.9-13.2 64-34.2 3.5-3.5 6.1-7.9 8.8-12.3 42.1 79 146.5 50 149.2-33.3 2.6-88.7-113.3-111.6-149.2-199.3z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconOppositeHeartsIcon);
    