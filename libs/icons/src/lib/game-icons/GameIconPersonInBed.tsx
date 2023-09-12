
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPersonInBedIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'person-in-bed'];
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
        <path fill="currentColor" d="M25 169v286h30V169H25zm94.1 52.2c-2.9 0-5.8.5-8.3 1.2-6.7 1.9-11.03 5.6-12.96 10.5-1.94 4.9-1.25 10.6 2.36 16.5 3.6 5.9 10 11.6 18.6 14.9 8.6 3.4 17.2 3.6 23.8 1.7 6.7-1.9 11-5.5 13-10.5 1.9-4.9 1.2-10.6-2.4-16.5-3.6-5.9-10.1-11.5-18.6-14.9-4.8-1.9-9.7-2.8-14.2-2.9h-1.3zM73 253.4V295h61.8c1.7-3.4 3.5-6.8 5.5-10.2-9 1.1-18.7-.1-28.1-3.7-12-4.7-21.58-12.8-27.39-22.4-.11-.2-.21-.4-.32-.6L73 253.4zm108.5 4.5c-17.6 19.3-32.4 46-40.5 67.9-4.2 11.5-6.5 21.9-6.7 28.2 0 2.5.2 4 .5 4.8 57.4 7.3 98.1.3 150.6-15.4l2-.6 2 .3c56.3 8.6 111.6 10 161.6 1.6v-35.6c-67.7-29-178.4-46.5-269.5-51.2zM469 281v174h18V281h-18zM73 313v30h44.5c1.3-7.2 3.6-15 6.6-23.4.8-2.2 1.7-4.4 2.6-6.6H73zm0 48v30h378v-27.9c-51 8.1-106.5 6.4-162.3-1.9-53.2 15.7-97.7 23.2-157.8 15.3-5.3-.7-10.2-4.9-12.3-9.3-.9-2-1.5-4.1-1.9-6.2H73z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPersonInBedIcon);
    