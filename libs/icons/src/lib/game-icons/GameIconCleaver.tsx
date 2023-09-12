
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCleaverIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'cleaver'];
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
        <path fill="currentColor" d="M230.3 46.15c-6.4-.1-12.6.7-18.9 2.5 26.1 15.8 35.7 36.4 30.6 55.15-40.2-33.05-98.5-36.45-128.4-4.95 30.7.4 48.8 13.25 53.8 32.15-51.5-8.5-103.61 17.7-113.67 59.7 27.04-14.8 49.77-12.7 63.47 1.6-48.86 18.3-80.89 66.9-68.55 108.4 16.02-26.6 36.67-36.3 55.75-30.8-26.03 31.5-34.03 73.9-21.31 105.1h19.01c5.1-17 15.7-27.5 29.5-31-1.7 10.4-2 20.9-1.1 31H207l18.4-91.9c-6.5-7.2-10.4-16.7-10.4-27.1 0-22.5 18.5-41 41-41s41 18.5 41 41c0 10.4-3.9 19.9-10.4 27.1L305 375h98.9c26.9-9.8 47.9-29.3 53.8-54.4-26.9 14.8-49.5 12.9-63.4-1 48.9-18.3 81.4-67.4 69.1-108.9-15.9 26-36.4 36.2-55.2 31.1 33.1-40.2 35.9-98.5 4.5-128.3-.5 30.6-13.3 48.7-32.2 53.8 8.5-51.4-17.7-103.45-59.7-113.45 14.7 26.8 12.9 49.55-1.1 63.25-15.5-41.35-53-70.65-89.4-70.95zM247.4 265L203 487h106l-44.4-222h-17.2zM54.79 393l-26.86 94H184.6l18.8-94H54.79zm253.81 0l18.8 94h156.7l-26.9-94H308.6z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCleaverIcon);
    