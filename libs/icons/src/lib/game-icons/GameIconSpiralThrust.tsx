
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSpiralThrustIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'spiral-thrust'];
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
        <path fill="currentColor" d="M36.633 19.08L15.506 40.207 99.51 124.21l21.127-21.126L36.633 19.08zM204.64 45.51L42.034 208.115l24.87 24.87c19.88-29.31 42.286-56.78 66.806-82.09l258.89 258.89 13.214-13.215-258.9-258.9c25.565-24.827 53.23-47.375 82.594-67.29l-24.87-24.87zm-17.068 80.12c-4.37 3.738-8.69 7.543-12.955 11.41l262.6 262.605 27.838 69.77-69.772-27.835L132.73 179.025c-3.858 4.27-7.655 8.596-11.388 12.98l15.908 15.907c-11.892 19.5-16.246 39.67-14.814 58.34-3.69 59.48 66.362 99.08 130.736 57.582l69.14 69.14c-23.845 8.237-51.302 13.04-82.884 12.856l-.008.012c87.233 25.69 168.06 59.824 253.518 93.443-.018-.07-.038-.145-.055-.217l3.037 1.21-7.477-18.737c-14.61-55.61-36.398-119.265-54.95-178.485-9.992-31.56-67.812-54.614-110.876-42.38l-89.86-89.86c29.51-11.725 58.15-10.98 83.57-5.598-20.15-23.84-63.71-24.393-102.114-12.947l-26.64-26.64zm-23.54 109.063l65.708 65.71c-45.45 8.77-74.317-29.476-65.71-65.71zm190.753 58.15c28.89 1.334 42.642 19.908 40.094 40.094l-40.095-40.093z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSpiralThrustIcon);
    