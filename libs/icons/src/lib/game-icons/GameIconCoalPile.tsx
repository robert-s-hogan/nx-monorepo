
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCoalPileIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'coal-pile'];
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
        <path fill="currentColor" d="M367.5 18l-45.2 135.5c6 1.5 11.8 3.4 17.1 5.7L386.5 18zm-73.1 150.5c-12.3 0-26.2 1.8-28.5 9L247.6 232l-1.1.2-38.9-25.9-47.9 44.4-53.3 19.3 6.8 41.3L62 334.9l4.02 74.1-55.45 34.2 78.9 33.1 83.23-10.5 67.1 31.5 76-10.6 26.7-24.3L424 492l69.2-28.7-34.4-56.1-31.1-15.8 21.1-19.3-40.4-82.5-62.5-4.5 24.3-72.8c-1-15.5-20.3-27.8-32.4-34L309.3 223c-1.1 1.5-.9.5-1.2-.9l4.1-52.3c-3.5-.6-10.3-1.3-17.8-1.3zm-85 60.6l33.1 22.1 53.9-8.8 14.4 47.7-35.6 23.1-43.2-16.6 40.6 48.7 60.6-43.1 63.6 4.6 13.4 27.2-58.9 14.6 67.6 3.1 7.9 16.2-30.3 27.9 49.7 25.2 20.6 33.7-43.2 17.9-85.1-30.8-30.7 27.9-65.2 9-66.9-31.5-83.71 10.7-42.16-17.7 34.75-21.4-3.94-72.7L119 328.4l33.6 39.5 35.7-31.1-39 2.7-16.3-18.6-6.4-39.1 22.9-8.3 45.6 1.7-20-14.3zm138.2 162l-66.2 20.2-36.5-14.4 50.4 43zm-230.3 17.6l40.2 24.7 56.5-2.8z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCoalPileIcon);
    