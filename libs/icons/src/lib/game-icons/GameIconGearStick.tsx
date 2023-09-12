
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconGearStickIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'gear-stick'];
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
        <path fill="currentColor" d="M177.3 26.41c-3.6.05-7.3.36-11.2.96-19.5 2.98-32.7 8.95-40.2 16.45-7.5 7.51-10.5 16.58-8.9 30 1.3 10.49 3.2 15.8 5.3 19.24 2.2 3.45 5.1 5.87 10.5 9.94 10.4 7.8 27.4 20.7 49.9 55.4 8.1 2.4 14.8 2.1 21.6-.1 6-1.9 12-5.4 18-9.9-3.2-13.2-1.2-25.7 1.5-36.8 3.2-13.03 7-24.74 7-35.91 0-24.85-17.7-48.1-50-49.25-1.1-.04-2.3-.05-3.5-.03zm45.1 143.49c-4 2.2-8.1 4.2-12.6 5.6-5.1 1.6-10.6 2.5-16.2 2.5l46.3 165.6 29.1-7.3-46.6-166.4zm121.4 167.3c-1.5 0-3.1.2-4.7.6l-158.8 36.6c-17 3.9-20.1 21.9-13 32.5-16.6 4.9-20.7 23.6-13.9 35.9-29.5 5.4-27.4 47.6 6.6 47.6h217.4c36.2 0 36.2-48.2 0-48.2H275.6l93.2-10.9c31.9-3.7 27.7-51.6-4.3-47.9l-79.8 9.3-.3-1.1 61.6-14.1c24.4-5.6 20.3-39.8-1.2-40.3h-1z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconGearStickIcon);
    