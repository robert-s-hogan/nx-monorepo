
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDiscGolfBasketIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'disc-golf-basket'];
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
        <path fill="currentColor" d="M245.6 18v69h21V18zM89.27 105v9c0 65.6 20.83 130.8 51.43 180.2 15.3 24.7 33 45.5 52.4 60.5 14.1 10.9 29.4 18.8 45.1 22.3H56.03l23.94 82H245.6v35h21v-35h165.5l23.9-82H273.9c15.7-3.5 31-11.4 45.1-22.3 19.4-15 37.1-35.8 52.4-60.5 30.6-49.4 51.4-114.6 51.4-180.2v-9H245.6zm21.43 18h23.1c1.2 41.2 10.6 100.4 28.3 151.6 4.3 12.7 9.2 24.9 14.7 36.2-6.1-7.6-12-16-17.6-25-27.4-44.4-46.7-103.4-48.5-162.8zm44 0h34.9c.5 68.6 5 129.7 14.1 174.5 2.6 12.9 5.6 24.4 9 34.5-11.8-16.2-22-38.3-30.6-62.6-16.9-49-26.1-107.2-27.4-146.4zm55.9 0h35v230.4c-1.5-2-3.1-4.3-4.6-7-6.2-11.4-12-29.4-16.5-51.9-8.9-43.3-13.4-103.5-13.9-171.5zm56 0h34.9c-.4 68-5 128.2-13.8 171.5-4.6 22.5-10.4 40.5-16.6 51.9-1.5 2.7-3 5-4.5 7zm55.9 0h34.9c-1.3 39.2-10.5 97.4-27.4 146.4-8.5 24.3-18.8 46.4-30.6 62.6 3.4-10.1 6.5-21.6 9-34.5 9.1-44.8 13.7-105.9 14.1-174.5zm55.9 0h23.1c-1.9 59.4-21.1 118.4-48.5 162.8-5.6 9-11.6 17.4-17.6 25 5.4-11.3 10.3-23.5 14.6-36.2 17.8-51.2 27.1-110.4 28.4-151.6zM82.87 395h34.43l13.4 46H96.27zm56.03 0h34.4l13.4 46h-34.4zm56 0h50.7v46h-37.3zm71.7 0h50.7l-13.4 46h-37.3zm72.3 0h34.3l-13.4 46h-34.4zm55.9 0h34.4l-13.4 46h-34.4z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconDiscGolfBasketIcon);
    