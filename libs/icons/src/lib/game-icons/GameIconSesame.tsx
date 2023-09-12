
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSesameIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'sesame'];
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
        <path fill="currentColor" d="M208.4 25.12c-30.5.3-61.8 19.64-76.4 47.46 39.5 30.52 98.8 5.06 118.5-33.01-12.5-10.18-27.2-14.59-42.1-14.45zm89.1 33.98c-30.6 38.5-7.1 96.9 34.5 118.2 30.1-40 3.8-99-34.5-118.2zm119.8 10.65c-20.4 44.55 16.2 95.65 61.8 106.35 19.6-46-20-96.89-61.8-106.35zM86.29 71.19C38.12 80.72 18.2 140.3 36.19 183.5c48.72-11 66.91-72.9 50.1-112.31zM186.6 171.4c-42.3 0-76.5 42.7-77 85.1 49.2 9 90.3-40.9 90.3-83.7-4.5-1-9-1.4-13.3-1.4zm114.6 24.8c-30.6 38.5-7.1 96.9 34.5 118.2 30.1-40 3.8-99-34.5-118.2zM458 248.9c-49.9 2.1-79 59.8-69.5 101.6 49.1-.8 79.4-55.9 69.5-101.6zm-318.8 65.8c-39.4 29.3-31.8 91.7 3 123 39.3-30.9 29.1-94.7-3-123zM265.3 325c-24.8-.2-50.2 9.9-65.8 26.5 28.2 40.3 90.8 34.5 123.1.7-13.9-18.9-35.4-27.1-57.3-27.2zM53.46 365.7c-29.71 39-5.16 96.9 36.9 117.4 29.24-40.6 1.8-99-36.9-117.4zm362.74 24.2c-45.4-.3-78.8 47.9-75 92.3 49.9 4.3 86-49.3 81.8-91.9-2.3-.3-4.5-.4-6.8-.4z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSesameIcon);
    