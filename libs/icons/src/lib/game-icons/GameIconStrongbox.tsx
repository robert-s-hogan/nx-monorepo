
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconStrongboxIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'strongbox'];
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
        <path fill="currentColor" d="M25 25v414h462V25H25zm30 30h402v32h16v66h-16v158h16v66h-16v32H55V55zm18 18v318h366v-14h-32v-66h32V153h-32V87h32V73H73zm352 32v30h30v-30h-30zm-217 30c21.3 0 40.8 7.5 56.1 20.1l17.5-17.5 12.8 12.8-17.5 17.5c12.6 15.3 20.1 34.8 20.1 56.1 0 21.3-7.5 40.8-20.1 56.1l17.5 17.5-12.8 12.8-17.5-17.5C248.8 305.5 229.3 313 208 313c-21.3 0-40.8-7.5-56.1-20.1l-17.5 17.5-12.8-12.8 17.5-17.5C126.5 264.8 119 245.3 119 224c0-21.3 7.5-40.8 20.1-56.1l-17.5-17.5 12.8-12.8 17.5 17.5c15.3-12.6 34.8-20.1 56.1-20.1zm0 18c-16.4 0-31.4 5.5-43.4 14.8l21.6 21.6c6.3-4.1 13.8-6.4 21.8-6.4s15.5 2.3 21.8 6.4l21.6-21.6c-12-9.3-27-14.8-43.4-14.8zm152 14c18.1 0 33 14.9 33 33 0 7-2.2 13.5-6 18.9V272c0 19.4-12.7 33-27 33s-27-13.6-27-33v-53.1c-3.8-5.4-6-11.9-6-18.9 0-18.1 14.9-33 33-33zm-208.2 13.6c-9.3 12-14.8 27-14.8 43.4s5.5 31.4 14.8 43.4l21.6-21.6c-4.1-6.3-6.4-13.8-6.4-21.8s2.3-15.5 6.4-21.8l-21.6-21.6zm112.4 0l-21.6 21.6c4.1 6.3 6.4 13.8 6.4 21.8s-2.3 15.5-6.4 21.8l21.6 21.6c9.3-12 14.8-27 14.8-43.4s-5.5-31.4-14.8-43.4zM360 185c-8.4 0-15 6.6-15 15s6.6 15 15 15 15-6.6 15-15-6.6-15-15-15zm-152 16c-12.8 0-23 10.2-23 23s10.2 23 23 23 23-10.2 23-23-10.2-23-23-23zm143 30.7V272c0 12.6 5.3 15 9 15s9-2.4 9-15v-40.3c-2.9.8-5.9 1.3-9 1.3-3.1 0-6.1-.5-9-1.3zm-164.8 26.9l-21.6 21.6c12 9.3 27 14.8 43.4 14.8s31.4-5.5 43.4-14.8l-21.6-21.6c-6.3 4.1-13.8 6.4-21.8 6.4s-15.5-2.3-21.8-6.4zM425 329v30h30v-30h-30zM73 457v30h34.2l20-30H73zm311.8 0l20 30H439v-30h-54.2z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconStrongboxIcon);
    