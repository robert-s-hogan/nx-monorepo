
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCowledIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'cowled'];
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
        <path fill="currentColor" d="M254.1 18.63c-81.4 0-231.43 155.97-171.63 300.77 8 25.3 27.83 50.4 49.13 77.1 24.4 30.6 51.6 63.2 68.7 96.9h20.5c-18.1-39.8-48.5-75.9-74.6-108.6-27.4-34.3-48.73-65.2-48.73-87.9.1-9.1 2.23-18.1 5.53-26.3 23-61.4 114-119.7 148.5-135l3.6-2 3.9 1.3c60.9 20.9 129.3 66.7 154 135.7 4.1 11.7 5.9 18 5.6 27.3-.5 15.8-24.5 54.7-55 88.7-29.1 32.4-62.4 67.7-80 106.7h20.5c16.8-32.2 46.2-64 73.3-94.2 23.2-25.6 45.3-50 54.9-74.8 52.9-124-99.2-305.67-178.2-305.67zm.8 135.47c-38.7 21.5-85.1 52.2-113.7 88.2 9.7 83 59 146.1 118.3 146.1 59.2 0 108.3-62.7 118.2-145.3-28.9-42.1-78-72.9-122.8-89zm-58.3 83h2.4c13.1.1 26.1 2.7 39.1 7.4-16.8 40.6-59 42-78.1 0 12.2-4.8 24.4-7.2 36.6-7.4zm124.9 0c13-.1 26 2.3 39.1 7.4-19.2 42-61.3 40.6-78.2 0 13.1-4.7 26.1-7.3 39.1-7.4z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCowledIcon);
    