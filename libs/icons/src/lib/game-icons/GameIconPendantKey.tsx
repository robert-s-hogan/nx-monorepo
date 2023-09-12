
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPendantKeyIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'pendant-key'];
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
        <path fill="currentColor" d="M71 32c0 51.5 29.1 108.6 66 153.7 9.8 11.9 20.1 23 30.6 32.8-.4 1.8-.6 3.6-.6 5.5 0 13.7 11.3 25 25 25 4 0 7.8-1 11.1-2.7 14.9 9.5 29.7 16 43.9 18V280c-18.2 4.2-32 20.6-32 40s13.8 35.8 32 40v120h18v-14h39v-18h-39v-18h23v-18h-23v-52c18.2-4.2 32-20.6 32-40s-13.8-35.8-32-40v-15.7c14.2-2 29-8.5 43.9-18 3.3 1.7 7.1 2.7 11.1 2.7 13.7 0 25-11.3 25-25 0-1.9-.2-3.7-.6-5.5 10.5-9.8 20.8-20.9 30.6-32.8 36.9-45.1 66-102.2 66-153.7h-18c0 44.5-26.9 99.4-62 142.3-8.6 10.5-17.7 20.3-26.9 29.1-4-2.8-8.9-4.4-14.1-4.4-13.7 0-25 11.3-25 25 0 3.1.6 6 1.6 8.8C281.3 242 266.9 247 256 247c-10.9 0-25.3-5-40.6-14.2 1-2.8 1.6-5.7 1.6-8.8 0-13.7-11.3-25-25-25-5.2 0-10.1 1.6-14.1 4.4-9.2-8.8-18.3-18.6-26.9-29.1C115.9 131.4 89 76.5 89 32H71zm176 266.8V314h18v-15.2c8.3 3.5 14 11.6 14 21.2 0 12.8-10.2 23-23 23s-23-10.2-23-23c0-9.6 5.7-17.7 14-21.2z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPendantKeyIcon);
    