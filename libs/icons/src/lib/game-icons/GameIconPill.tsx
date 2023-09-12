
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPillIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'pill'];
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
        <path fill="currentColor" d="M383.72 70.188c-1.145-.01-2.293 0-3.44.03-16.662.428-33.436 4.925-48.81 13.907-148.594 86.803-101.707 58.72-253.533 146.375l-4.656 2.688v.312c-45.61 29.694-60.683 90.445-33.155 138.125 28.464 49.3 91.974 66.493 141.188 37.78 151.39-88.32 104.363-60.41 253.5-146.374 49.327-28.43 66.307-91.824 37.843-141.124-18.957-32.834-53.47-51.442-88.937-51.72zm1.342 16.468c25.255.406 49.682 13.512 63.094 36.844 1.82 3.164 2.786 6.918 4.094 10.22-22.875-25.86-61.86-33.04-92.97-15-64.527 37.42-83.64 48.864-105.686 61.874 22.46 19.385 44.32 52.128 54.25 82.03-56.72 32.796-51.65 30.67-148.844 87.032-31.11 18.04-70.094 10.858-92.97-15 1.31 3.3 2.277 7.055 4.095 10.22 20.438 35.552 66.447 47.306 102 26.687 93.043-53.956 91.828-53.805 141.188-82.313.507 9.606-1.02 18.18-5.094 24.938-28.792 16.492-53.304 30.647-136.345 79.093-40.39 23.566-92.154 9.545-115.563-31-23.408-40.542-9.574-92.186 30.97-115.592l4.687-2.72c73.185-42.234 98.623-56.668 125.81-72.25 37.072-21.5 44.154-26.065 128.376-74.905 12.222-7.088 25.678-10.37 38.906-10.157z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPillIcon);
    