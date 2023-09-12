
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCraneIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'crane'];
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
        <path fill="currentColor" d="M213.293 19.46L29.691 120.34h37.375l133.489-73.346-15.819 73.346h18.41l11.584-53.701 13.688 53.7h18.574l-19.447-76.294 202.941 76.295h51.147zM25 138.34v30h462v-30zm32 48v30h62v-30zm144 0v46h30v-46zm48 0v46h19.273L279 221.613V186.34zm190 0v141.707a24.618 24.618 0 0 1 9-1.707c3.166 0 6.2.61 9 1.707V186.34zm-238 64v242h30v-242zm247 94c-3.973 0-7 3.027-7 7s3.027 7 7 7 7-3.027 7-7-3.027-7-7-7zm-20.393 21.365l-16.421 24.635h21.63l9.743-14.613c-6.118-1.384-11.417-5.04-14.952-10.022zm40.786 0c-3.535 4.981-8.834 8.638-14.952 10.022l9.743 14.613h21.63zM409 408.34v30h78v-30zm-226 24.5l-60.4 45.3 10.8 14.4 49.6-37.2zm66 0v22.5l49.6 37.2 10.8-14.4z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCraneIcon);
    