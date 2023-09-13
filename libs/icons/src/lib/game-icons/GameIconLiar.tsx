
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconLiarIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'liar'];
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
        <path fill="currentColor" d="M197 41c-40.8 0-78.1 23.07-105.76 61.8-4.37 6.1-8.48 12.6-12.31 19.5 1.03 2 2.05 4 3.06 6.1 9.95 20.9 20.01 46 11.35 67-3.5 8.4-10.59 13.7-17.91 17-7.31 3.2-15.18 4.6-22.4 4.6-1.46 0-2.96-.1-4.46-.2-1.66 12.7-2.53 25.8-2.53 39.2 0 60.1 17.49 114.4 45.2 153.2C118.9 447.9 156.2 471 197 471c40.8 0 78.1-23.1 105.8-61.8 10.1-14.2 18.8-30.4 25.8-48.2H197v-18h272c20 0 20-46 0-46H197v-18h150.1c.6-7.5.9-15.2.9-23 0-60.1-17.5-114.4-45.2-153.2C275.1 64.07 237.8 41 197 41zM53.04 112.8c-3.76 6.2-8.38 14.3-12.71 23.4-9.25 19.3-15.17 42.2-10.97 52.4 1.08 2.6 4 5.3 8.56 7.3 4.56 2 10.41 3.1 15.12 3.1 4.71 0 10.56-1.1 15.12-3.1 4.57-2 7.48-4.7 8.57-7.3 4.19-10.2-1.73-33.1-10.97-52.4-4.34-9.1-8.96-17.2-12.72-23.4zM133 215c13.7 0 25 11.3 25 25s-11.3 25-25 25-25-11.3-25-25 11.3-25 25-25zm128 0c13.7 0 25 11.3 25 25s-11.3 25-25 25-25-11.3-25-25 11.3-25 25-25zm-64 168c10.7 0 20.5 3.2 28 8.8 7.6 5.7 13 14.3 13 24.2 0 9.9-5.4 18.5-13 24.2-7.5 5.6-17.3 8.8-28 8.8s-20.5-3.2-28-8.8c-7.6-5.7-13-14.3-13-24.2 0-9.9 5.4-18.5 13-24.2 7.5-5.6 17.3-8.8 28-8.8z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconLiarIcon);
    