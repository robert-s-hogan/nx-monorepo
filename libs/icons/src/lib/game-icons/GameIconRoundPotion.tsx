
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconRoundPotionIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'round-potion'];
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
        <path fill="currentColor" d="m381.7 27-14.5 20.4 49.5 35.1 14.5-20.3L381.7 27zm-57.4 12.3L310.2 60l111.3 76.2 14.1-20.7-111.3-76.2zM317 92.7l-69.9 82.8c-10.3-2.1-20.9-3.2-31.8-3.2-86.8 0-157.25 70.5-157.25 157.3C58.05 416 128.5 487 215.3 487s157.3-71 157.3-157.4c0-37.8-13.4-72.5-35.6-99.6l51.4-86.9L317 92.7zm7.4 39 29.5 19.5-46.5 78c26.1 23.9 42.5 58.2 42.5 96.4 0 72-58.5 130.4-130.6 130.4-72 0-130.55-58.4-130.55-130.4 0-72.1 58.55-130.6 130.55-130.6 22.6 0 43.9 5.8 62.5 15.9l42.6-79.2zm-31.5 180.5c-47.3-.7-126.2 58.3-178.3 13.5.1 57.7 47 104.3 104.7 104.3 56.1 0 102-44 104.6-99.5-7-13.2-17.8-18.1-31-18.3zm-11.5 23.3c5.1-.1 9.7 1.5 12.7 5 6.9 7.9 3.2 22.4-8.3 32.4-11.4 10-26.3 11.7-33.2 3.8-6.9-7.9-3.2-22.4 8.2-32.4 6.5-5.6 14-8.6 20.6-8.8zm-56.5 49.1c1.2 0 2.4.1 3.7.3 9.9 1.5 17.2 8.2 16.2 15.1-1 7-9.8 11-19.8 10-9.9-2-17.2-8-16.2-15.3.9-6 7.7-10.1 16.1-10.1z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconRoundPotionIcon);
    