
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPaperBagCrumpledIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'paper-bag-crumpled'];
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
        <path fill="currentColor" d="m323 56-87 8 41 15-11 11 27 73-107 69 6 46v1l17-11-5-21 117-70 8-8-10-64 33-6 29-20 5-10h-21l-42-13zm-4 7 42 12-44 2 39 7-32 6h-41l11-13-28-9 53-5zm-94.1 7.63 41.9 79.47-69.4 52.2 80.7-48.4-27.6-63.85 11.4-7.92-37-11.5zm139.5 40.27-25.6 23.5 9.5 39.1-30.7 52.7 30.2 48.3-18.4-46.6 37-51.3-15.4-39.3 13.4-26.4zM327 188.6 222.3 252l3.6 20.1-74.1 52.8.8-19.5 21.7-17.6-2.4-22-59.1 63.1 21.1 47.9 96.4-20.6 63.8 35.7-68.6-20.8-104.9 20.8-17.8-51.2 9.3 65.4-9.5 21.7 46.5 8.4 56.9-16 66.1 35.7 47.7-51.6-19.4-72.6 45.2-36.2-52.5-74.5 33.9-32.4zm39.8 6.1-14.6 35.7 37.8 74-29.8 87.4 42.5 44.7 6.6-11.3-15.4-15 9.8-33.4v-74.7l-38.6-73.2 1.7-34.2zm2.2 108.5-41.3 33.6 10.8 54.1 30.5-87.7zm-21.7 105.6-55 47.2 28.2-.3 61.6-18.4-34.8-28.5z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPaperBagCrumpledIcon);
    