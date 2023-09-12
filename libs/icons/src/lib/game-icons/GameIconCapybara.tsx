
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCapybaraIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'capybara'];
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
        <path fill="currentColor" d="M374 74.47c-7.1.26-10.8 6.79-4.3 15.89l24-3.41c-6.5-9.11-14.1-12.69-19.7-12.48zm-38 9.1c-3.5 0-6.6 1.01-9 2.73-7.1 5.1-7.6 16.8 7.9 28-8.9 15.9-29.8 45.8-60.2 43.2l32.1 9.8c-2.7 1.6-5.7 3.1-9.2 4.5C118.7 119.4 29.29 275.1 29.29 275.1c51.1 69.9 4.1 98.9 4.1 98.9l7.81 63h28.81l3.19-41s32.5-3 62.8-63.3c29 9.8 71 9.1 102.6 3.3l-4.1 7.1-37.4 11.1c31.2 2.8 58.5-2.3 78.7-8.5-3.4-15.1-4.5-31.5 3.5-52.8L307.2 437h25.9s-4.6-75 34.4-143.5c5-7.8 9.4-15.1 13.1-23.7l2 11.1-10.5 23.2s39-15.7 29.2-96c23 3.9 45.6 1.7 66.6-4.6 5.3-1.7 9.5-5.8 11.2-11 5-15.6 9.5-32.5 10.4-47.3l-9.7.8c-.2-15.3-21.2-13.1-14.9.8l-10.5.5-4.9-15.5s16.9-12.3 38.4-7.1c-.9-3.2-2.2-6-3.9-8.6-13.8-20.8-54.3-27.8-122.4-15.6-8-12.24-17.8-16.96-25.6-16.93zm49.9 33.83c12.4 1.4 21.9 4.3 30.2 9.6h-15.9c-1.6 4.8-7.5 8.4-14.5 8.4s-12.9-3.6-14.5-8.4h-15.5c4.2-3 15.3-9.7 30.2-9.6zm9.6 181.6c-15.2 30.3-34.5 33.8-34.5 33.8-13.4 37.7-10.4 71.8 1.8 103.9H385c-3.8-44.7-3.2-78.4 10.5-137.7zm-251.1 50.3L126.6 376l27.2 25.1 13.9 35.6h29.9l-20.1-81.8z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCapybaraIcon);
    