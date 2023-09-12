
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMiddleArrowIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'middle-arrow'];
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
        <path fill="currentColor" d="M77.637 20.836l-.598 56.236-55.913.28 67.1 50.492 19.673-6.393 53.3 53.302-9.3-35.73-30.578-30.58 6.813-20.504-50.498-67.102zm338.855.818l-116.535 107.96-45.37-99.557-19.972 111.193-71.658-41.87 26.834 103.077-134.104 4.162 91.375 63.427-98.93 70.617 103.343-7.61L82.06 457.9l116.268-66.023-1.838 82.47 63.98-81.036 41.163 54.12 14.08-63.637 53.14 25.486-67.777-67.776c-10.955 6.72-22.698 11.65-34.62 14.172l.026.135c-1.48.27-2.95.495-4.412.682-33.335 5.352-58.06-10.3-64.695-37.465-3.09-10.107-3.674-21.624-1.465-33.785 8.17-44.95 48.8-85.58 93.75-93.75 5.62-1.02 11.1-1.447 16.37-1.304 6.487.174 12.644 1.225 18.345 3.072 26.107 6.87 41.242 30.692 36.727 62.78-.215 1.987-.503 3.996-.872 6.022l-.18-.033c-3.006 14.26-9.466 28.265-18.314 40.976l31.776 31.775 94.43-7.585-74.294-50.908 91.8-52.576-86.134-12.692 72.557-97.62-94.765 38.963 39.387-130.706zM247.06 234.178c-4.628 4.188-8.946 8.75-12.847 13.584L411.36 424.91l-48.223 26.666 129.7 45.11-45.118-129.694-24.158 43.69-66.933-66.932-.114-.406L330.37 317.2c-.046.05-.095.1-.14.15l-83.17-83.172z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMiddleArrowIcon);
    