
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPartyHatIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'party-hat'];
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
        <path fill="currentColor" d="M233 25.93L153.2 220.3l25.3 4.6 25.2-23.9 4.6 34.5 30.5 16.6-31.3 15-6.3 34.1-24-25.1-34.4 4.5 16.5-30.6-9.8-20.6-62.33 151.7c-2.47 12.6.28 22 7.44 30.9 7.29 9 19.69 17 35.89 23.2 7.2 2.8 15 5.2 23.4 7.2l3.1-9.9-24.4-32.6 40.7-.6 23.5-33.2 13.2 38.5 38.9 12.1-32.7 24.4.1 10.1c13.2.8 26.7 1 40.2.6 46.6-1.3 93.1-9.2 124.6-21.6 15.8-6.2 27.7-13.6 33.9-20.7 6.2-7.1 7.6-12.5 4.5-20.5L301.3 158.8l-4.5-.2-21.8 27-9.1-33.5-32.5-12.4 29.1-19 1.7-34.09L233 25.93zm74.7 247.97l25.5 31.8 40.7-1.8-22.4 34 14.3 38.1-39.3-10.7-31.8 25.4-1.9-40.7-34-22.4 38.1-14.4 10.8-39.3zm129 133.6c-1.8 5-4.5 9.7-8.1 13.8-1.9 2.2-4.1 4.3-6.5 6.3.3 4.5-.1 8.5-1.1 12-2.7 10.2-9.7 17.5-21.8 23.1-24.2 11.2-67.6 12.5-114 5.9-.5-.1-1-.2-1.5-.2-8.8.7-17.8 1.1-26.7 1.4-19.5.5-39.1 0-57.9-1.8 27 8 55.7 14.4 83.6 18.4 48.1 6.8 93.4 6.9 124.1-7.4 15.4-7.1 27.3-18.7 31.6-34.7 2.9-10.9 2.3-23.1-1.7-36.8z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPartyHatIcon);
    