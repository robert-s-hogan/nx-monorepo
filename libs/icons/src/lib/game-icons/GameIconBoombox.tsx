
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBoomboxIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'boombox'];
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
        <path fill="currentColor" d="M369.1 24.54l-12.6 12.92c-9.2 14.71-9.7 34.33-7.6 53.05-2.9-.39-5.9-.46-8.9-.2-16.1 1.38-28.4 11.59-27.4 22.89 1 11.2 14.8 19.2 30.9 17.8 8.8-.7 17-4.2 22.1-9.5 1.7 10.8 15.2 18.2 30.7 16.9 16.1-1.4 28.4-11.6 27.4-22.9-.2-2.3-.9-4.5-2.1-6.5-3.4-19.63-4.2-38.02 4.8-57.07-18.6-5.91-44-16.31-57.3-27.39zm2.4 24.77c10.1 6.59 21.3 11.42 32 14.24-2.6 11.7-2.6 23.19-1.6 34.32-3-.42-6-.5-9.1-.24-8.8.77-16.9 4.27-22 9.57-.3-2-1.1-3.9-2.2-5.7-3.1-17.98-3.9-34.87 2.9-52.19zM111.4 63.88c-13.92 5.83-36.33 8.22-53.82 3.71l-4.5 17.43c2.08 18.88 10 35.28 19.99 49.68a20.44 29.25 55.36 0 0-8.08 4.4 20.44 29.25 55.36 0 0-12.45 33.4 20.44 29.25 55.36 0 0 35.69.2 20.44 29.25 55.36 0 0 12.47-33.4 20.44 29.25 55.36 0 0-5.4-4.7c-11.6-14-20.7-28.3-23.28-46.69 16.57.96 33.18-1.91 46.38-7.43l-7-16.6zM151 167v48h16v-32h178v32h16v-48H151zM25 233v238h462V233H25zm39 14h64v18H64v-18zm112 0h160v18H176v-18zm208 0h64v18h-64v-18zM48 279h416v18H48v-18zm64 32c40.2 0 73 32.8 73 73s-32.8 73-73 73c-40.21 0-73-32.8-73-73s32.79-73 73-73zm87 0h114v82H199v-82zm201 0c40.2 0 73 32.8 73 73s-32.8 73-73 73-73-32.8-73-73 32.8-73 73-73zm-288 18c-30.48 0-55 24.5-55 55s24.52 55 55 55c30.5 0 55-24.5 55-55s-24.5-55-55-55zm105 0v46h78v-46h-78zm183 0c-30.5 0-55 24.5-55 55s24.5 55 55 55 55-24.5 55-55-24.5-55-55-55zm-288 30c13.7 0 25 11.3 25 25s-11.3 25-25 25-25-11.3-25-25 11.3-25 25-25zm288 0c13.7 0 25 11.3 25 25s-11.3 25-25 25-25-11.3-25-25 11.3-25 25-25zm-288 18c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7zm288 0c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7zm-185 39h18v32h-18v-32zm32 0h18v32h-18v-32zm32 0h18v32h-18v-32z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBoomboxIcon);
    