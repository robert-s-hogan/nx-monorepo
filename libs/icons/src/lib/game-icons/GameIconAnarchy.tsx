
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAnarchyIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'anarchy'];
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
        <path fill="currentColor" d="M218.383 21.05L203.92 68.054C113.694 89.428 46 165.01 46 256c0 14.283 1.684 28.18 4.846 41.555L28.23 302.4l7.54 35.2 26.896-5.764c10.105 21.922 24.455 41.74 42.057 58.613l-25.926 84.257 34.406 10.586 21.793-70.824C169.324 436.875 211.146 450 256 450c58.938 0 112.636-22.662 150.98-59.27l41.756 66.81 30.528-19.08-47.616-76.185C453.324 331.823 466 295.355 466 256c0-3.533-.107-7.04-.31-10.525l18.08-3.875-7.54-35.2-16.218 3.475C437.487 124.62 353.984 62 256 62c-3.968 0-7.91.112-11.826.314l-25.79-41.263zm48.28 77.25c77.367 4.207 140.087 53.86 158.107 119.128l-73.772 15.808L266.664 98.3zm-37.046 8.647l83.944 134.31-134.11 28.74 50.167-163.05zm-38.37 2.295l-52.12 169.395-53.072 11.373A144.686 144.686 0 0 1 82 256c0-66.113 44.82-123.37 109.246-146.758zm238.712 143.89c.018.954.04 1.91.04 2.868 0 26.092-6.99 50.8-19.4 72.598l-39.31-62.895 58.67-12.572zm-96.106 20.593l53.644 85.832C355.762 392.824 308.884 414 256 414c-41.952 0-80.12-13.333-109.953-35.45l21.273-69.14 166.534-35.685zM126.998 318.05l-10.127 32.917c-6.922-8.368-12.95-17.373-17.956-26.9l28.084-6.016z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAnarchyIcon);
    