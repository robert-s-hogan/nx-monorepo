
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTennisRacketIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'tennis-racket'];
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
        <path fill="currentColor" d="M365.6 31c-6.6 0-13.2.6-19.7 1.59-34.5 5.44-66.5 23.14-88.3 44.96-28.8 28.85-49.6 70.85-58.4 111.65-1.6 6.7-2.6 13.6-3.5 20.4L162.2 334l15.8 15.8 124.3-33.5c6.8-.9 13.7-2 20.5-3.5 40.8-8.8 82.8-29.6 111.6-58.4 21.9-21.9 39.6-53.9 45-88.4 5.2-34.5-2.4-72.3-31.9-101.71-23.8-23.93-53.1-33.44-81.9-33.29zm.1 19.29c24.3-.28 47.9 7.49 68.2 27.71 25 24.9 31 55.2 26.3 85-4.6 29.9-20.7 58.8-39.5 77.6-25.4 25.4-64.7 45.2-102 53.2-37.2 8.2-71.2 3.8-87.8-12.9-16.5-16.5-20.9-50.4-12.8-87.7 8.1-37.2 27.8-76.6 53.3-101.94 18.7-18.78 47.7-34.84 77.6-39.55 5.5-.88 11.2-1.36 16.7-1.42zm-166 214.81c3.7 11.3 9.3 21.5 17.5 29.5 8.1 8.2 18.2 14 29.5 17.6l-63 16zm-50.3 83.6L50 448.2l-5.25-5.1-13.71 13.7L55.41 481l13.7-13.6-5.41-5.4 99.5-99.6zm211 45.1c-19.5 0-35.6 16-35.6 35.5s16.1 35.5 35.6 35.5c19.4 0 35.5-16 35.5-35.5s-16.1-35.5-35.5-35.5z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTennisRacketIcon);
    