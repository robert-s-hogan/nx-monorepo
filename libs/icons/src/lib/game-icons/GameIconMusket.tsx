
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMusketIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'musket'];
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
        <path fill="currentColor" d="M424.045 26.605l2.54 11.19 16.15-13.06zm-205.53 312.32a24.07 24.07 0 0 0 1.54-36l6.15-5.17c.72.73 1.41 1.5 2.07 2.31a32.09 32.09 0 0 1-45.62 44.74q2.13-3.69 4.14-7a24.12 24.12 0 0 0 31.72 1.12zm-18.1-19.47l10.32 7.66-15.53-2.3c.58-.81 1.14-1.58 1.69-2.29zm76.89-80.34l-31.33-38.65 15.26-12.34 31.33 38.65zm137.88-111.75l-31.33-38.65 15.27-12.37 31.33 38.64zm-41.83-26.18l25.91 32c-26.82 22.18-62.15 51.42-96.92 80.29l-26.75-33zm-252.76 239.74l10 1.16 32.83-65.86a28.13 28.13 0 0 0 41-38.11l4.52-3.67 26.53-21.52 27.14 33.48c-32.82 27.33-61.6 51.43-77.37 65-26.12 32.63-84.5 163.79-95.81 175.86-13.73-4.68-26.77-40.12-54-55.2 9.14-18.66 85.16-91.14 85.16-91.14zm33.05-113.81c1.5 2.11 5.69 5.81 8.38 5.81h.06c.35 0 1.29.17 2.48-1.65 7.15-11 18-16.41 25.26-12.77l-3.59 7.2c-1.77-.89-5.5.3-9.38 3.63l14.75 18.2a12.13 12.13 0 1 1-18.91.1l-6-7.44a10 10 0 0 1-4.4 1.12h-.23c-8.12 0-14.83-9.36-14.89-9.45zm259.84-158.46l46.5-37.73 11.06 13.68-46.49 37.69zm63.08 1.27l-37.46 30.31-5.73-7.07 37.42-30.34z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMusketIcon);
    