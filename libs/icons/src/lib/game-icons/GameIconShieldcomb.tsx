
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconShieldcombIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'shieldcomb'];
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
        <path fill="currentColor" d="M72.02 21.88l-.9 64.34L32.88 108l.93 6.3c18.95 128 92.49 254.1 216.79 369.8l6.4 6 6.4-6c123.2-115.5 195.2-242 214.8-369.6l.9-6.3-38.7-22.21-.8-60.64C320.4 41.15 182 38.72 72.02 21.88zm18.4 21.71c32.58 4.95 64.88 8.72 97.18 11.22v31.85L138.9 115 89.82 86.44zm330.78 3.56l.5 39.29L372.6 115l-49.2-28.6V56.82c32.1-1.63 64.6-4.67 97.8-9.67zm-214.5 9.13c32.5 1.98 65 2.47 97.9 1.42v28.7l-48.9 28.5-49-28.53zM80.22 102.6l49.18 28.6v57.4l-48.38 28.2c-13.02-32.9-22.25-65.9-27.63-99zm351.48 0l26.9 15.3c-5.5 33.1-14.8 66.1-27.6 98.9l-48.5-28.2v-57.4zm-117.7 0l49.1 28.6v57.4L314 217.2l-48.7-28.3v-58zm-116.8.2l48.9 28.4v57.7l-48.7 28.3-49.1-28.6v-57.4zM140 206.2l49.2 28.6v57.4l-52.5 30.6c-18.9-28.7-34.8-57.7-47.68-86.9zm117.2 0l48.7 28.4v57.9l-48.7 28.3-49.2-28.6v-57.4zm116.5 0l49.7 28.9c-12.8 29.3-28.5 58.4-47.1 87.2L325 292.5v-57.9zm-66.5 107.7l40.7 23.6v25.4c-11.9 15.7-24.6 31.3-38.3 46.8-14.4-8.4-28.7-16.9-43.1-25.3v-46.9zm-100.3 0l40.7 23.6v46.8c-14.3 8.4-29.7 17.6-43.5 25.6a816.7 816.7 0 0 1-37.9-45.6v-26.8zm50.2 86.9l26.8 15.6v20.7c-11.3 11.4-19.1 19.2-26.9 27.2-9.3-8.8-18.3-17.7-27-26.6v-21.2z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconShieldcombIcon);
    