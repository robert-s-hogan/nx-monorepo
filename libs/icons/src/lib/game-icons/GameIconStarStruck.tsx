
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconStarStruckIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'star-struck'];
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
        <path fill="currentColor" d="M256.1 19.16c-48.8 0-93.2 25.72-125.9 68.45C97.47 130.3 76.87 189.9 76.87 256c0 66 20.6 125.6 53.33 168.4 32.7 42.7 77.1 68.4 125.9 68.4 48.7 0 93.1-25.7 125.8-68.4 32.7-42.8 53.2-102.4 53.2-168.4 0-66.1-20.5-125.7-53.2-168.39-32.8-42.73-77.1-68.45-125.8-68.45zM149.6 162.2l36 42.7L240 192l-29.5 47.4 29.1 47.7-54.3-13.4-36.3 42.4-4.1-55.7-51.51-21.5 51.71-21 4.5-55.7zm212.7 0l4.5 55.7 51.8 21-51.6 21.5-4 55.7-36.4-42.4-54.2 13.4 29.1-47.7L272 192l54.3 12.9 36-42.7zm-104.8 187c34.5 0 69 7.5 99.3 22.5l6.5 3.2-1.5 7.1s-3.8 17.9-18.8 35.1c-15 17.2-42 34.1-85.5 34.1s-70.4-16.9-85.4-34.1C157 399.9 153.3 382 153.3 382l-1.5-7.1 6.5-3.2c2.8-1.4 5.6-2.6 8.5-3.9v-.4h.8c27.9-12.1 58.9-18.2 89.9-18.2zM185 403.4c.3.5.7 1 1.1 1.4 12 13.7 32.6 27.7 71.4 27.7 38.9 0 59.5-14 71.4-27.7.4-.4.7-.9 1.2-1.4H185z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconStarStruckIcon);
    