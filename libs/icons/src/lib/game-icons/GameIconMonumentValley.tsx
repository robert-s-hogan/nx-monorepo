
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMonumentValleyIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'monument-valley'];
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
        <path fill="currentColor" d="M441.9 43a29 29 0 0 0-29 29 29 29 0 0 0 29 29 29 29 0 0 0 29-29 29 29 0 0 0-29-29zm-304.3 82.6l-19.8 13.6-3.8 94.7-6.9-86.4c-21.72 53-10.81 109.5-11.11 164.1 14.11.8 28.21 1.3 42.21 1.7l-.8-50.4 7.4 11 4.9 39.7c58.5 1.4 115.9.2 173.5-.8l-15.4-134.7-14.3 2.6-4 68.1 6.8 38.6-13.2-46.2h.1l-4.7-9.3-16.5-3.7-2.6-69.6-18.7-10.5 1 79.3 9.9 25.2 1 48.6-7.9-6.4c-2-21-8.5-49.1-9.6-66.1-2.1-27.7-4.3-58.7-6.4-87.4l-.1-.1-47.6.2-7.6 55.4 24.9 24.4-1.2 69-5.2-52.7-17.5-27.5-4.3 10.9-3.4-79.8-29.1-15.5zm-42.09 204c-23.4 17-49.35 37.2-77.92 57.3v108.9H494.4v-24.2c-70.6-39.3-123.1-97.2-171.5-140.8-28.5.5-57 1-85.7 1.3l55.7 36.7 4.3 46.4-26-36.9-52-46.1c-30.9.2-62.1-.1-93.7-1.3l68.1 91.5 17.9 44.8-28.2-47.8-75.4-89.2c-4.1-.2-8.25-.4-12.39-.6zm212.89 30l73.4 78.7-47.7-32.5-25.7-46.2zm86.6 13.9c29.5 27.3 61.3 54.5 97.7 76.4v-76.4H395zm-177.4.4l60 71.1-58.8-52.2-1.2-18.9z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMonumentValleyIcon);
    