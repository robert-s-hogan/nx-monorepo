
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPinballFlipperIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'pinball-flipper'];
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
        <path fill="currentColor" d="M99.162 35.82a78.03 78.03 0 0 0-78.03 78.03 78.03 78.03 0 0 0 78.03 78.03 78.03 78.03 0 0 0 78.03-78.03 78.03 78.03 0 0 0-78.03-78.03zM95.26 47.525a62.423 62.423 0 0 1 30.79 8.172 78.03 78.03 0 0 0-7.38-.37 78.03 78.03 0 0 0-78.03 78.028 78.03 78.03 0 0 0 .422 7.413 62.423 62.423 0 0 1-8.224-30.82A62.423 62.423 0 0 1 95.26 47.524zm52.05 228.46c-20.196-.23-31.676 32.785-12.646 43.386 87.042 50.526 175.913 102.776 261.92 152.034 35.522 13.912 75.596-3.603 89.508-39.125 13.912-35.523-3.607-75.598-39.13-89.51-103.56-22.994-199.013-43.756-295.503-66.28-1.418-.327-2.805-.49-4.15-.506zm273.49 107.94a24.02 22.947 21.388 0 1 9.37 1.72 24.02 22.947 21.388 0 1 13.996 30.128 24.02 22.947 21.388 0 1-30.732 12.61 24.02 22.947 21.388 0 1-13.997-30.127 24.02 22.947 21.388 0 1 21.364-14.332z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPinballFlipperIcon);
    