
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconForearmIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'forearm'];
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
        <path fill="currentColor" d="M470.92 53.162c21.738 76.755-126.736 189.16-213.57 251.49 4.21 19.66 2.796 37.915 0 55.825 20.223 32.576.83 44.814 2.76 82.5-1.05 13.887-23.797 12.58-28.066-8.576 4.852-31.07-2.95-57.924-15.472-54.243l-31.933 43.23-47.61 67.04c-5.897 5.975-27.768 1.664-22.4-12.69l39.123-71.307-3.784-2.538-74.42 79c-6.056 6.26-26.28-7.956-19.953-16.503l69.72-74.202-3.783-1.925-66.576 44.227c-7.596 5.33-22.805-10.34-12.628-17.663l63.976-50.98-43.874 22.025c-6.156 2.1-12.68-10.355-5.976-13.335l50.997-32.6c26.468-21.393 58.785-57.834 94.072-65.2 55.417-83.656 104.97-167.018 175.057-253.61 26.274-13.577 86.7 8.58 94.34 30.035z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconForearmIcon);
    