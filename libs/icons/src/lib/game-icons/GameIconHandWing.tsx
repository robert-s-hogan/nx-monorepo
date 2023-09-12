
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHandWingIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'hand-wing'];
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
        <path fill="currentColor" d="M442.5 24.47C378.5 120.5 186.2 308.5 42.23 340.5c-7.81 0-15.61 30.5-14.12 63.6 41.16-8.5 84.19-23.4 125.49-41.1-2.2-8.9-3.3-17.9-3.1-26.8l.2-5.8 53.7-23.5.7 13c.3 5.7 1.3 11.7 2.8 17.8 11.5-5.7 22.7-11.5 33.4-17.3-.2-1.2-.3-2.3-.4-3.4-.3-6.9.9-12.6 2.3-19 2.6-13.5 7.2-33.4 0-60.2 4.7-3.2 8.5-4.3 11.3-4.3 3 .2 5.3 1.6 7.6 4.9 4.5 5.9 7.3 17.6 8.7 30.7 7 5.4 7.2 4.2 7.3 3.9 11.3-23.7 26.1-48.4 41.2-69.8 3.2-.7 7.3.2 11 2.6 3.4 2 6.2 5.3 7.3 8.2-10.7 15.5-22.1 30.3-31 48.1 2.1 3.2 4.4 6.3 6.5 9.5 16.6-16.5 35.5-31.6 55.9-45.9 1.4.6 2.8 1.3 4 2 .4.2.9.4 1.2.7 5.1 3.4 7.6 8.5 8.9 15.8-20.9 12.7-40.5 27.8-58.7 44.9 1.5 2.6 2.9 5.4 4.4 8.1 21.1-12.3 43.6-20.8 67-26.9 2.4 1.4 4.7 4.5 6 8.6 1.3 4 1.3 8.5-.1 11.8-22.2 5.2-44.1 13.4-65.2 26.3.9 3.3 1.6 6.5 2.1 10 16.5-3.5 32-4.2 47.5-4.2 1.9 2 2.8 5.2 2.4 8.8-.2 3.6-1.7 7.3-4 10.3h-.1c-1.4 0-3.1 0-5.3.3-4.3.2-10.2.7-17.1 1.6-13.5 1.5-30.2 4-43 7.7-7.8 2.2-21.3 5.2-29.1 7.7-6 1.9-12.9.9-19.6-2.2-14.6 9.6-28.8 18.3-42.9 26.3 4.8 8.6 10.1 17 15.5 25l6.3 9.4-54.6 20.6-4.1-5.1c-5.6-7.1-11-14.7-15.9-22.6-43.6 20.1-86.53 34.7-132.76 48.1 7.23 12.5 17.69 22.1 32.39 25.8 69.37 8.6 138.77-1.2 200.27-25.6-22.7-6.8-43.6-16.9-59.3-28 58.3 3.2 100.3-.4 129.7-8.6 17.7-11.7 34.1-24.8 49.1-39.2-19.1-4.5-36.7-11.2-50.2-19 28.3-.4 53.3-3.1 74.8-7.4 24.4-29.3 43-62.6 54-99.1-25.8 4.7-52 4.9-71.8 1.6 32-10.3 58.4-22 79.4-33.9 3.6-20.9 4.7-42.8 3.2-65.3-22 18.1-49 31.7-70.1 37.2 30.9-28 51.9-54.4 64.7-76.2-2.9-13.8-6.7-27.9-11.7-42.16-15.5 17.43-33.7 31.96-49.4 40.46 17.5-25.65 29.8-49.11 38-69.39-3.8-8.43-7.9-16.91-12.4-25.44zM188.6 333.5l-19.8 8.7c1.3 23.6 14.9 51.5 32 74.6l21.1-8c-14.8-23-28.8-48.9-33.3-75.3z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHandWingIcon);
    