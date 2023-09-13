
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHangGlider1Icon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'hang-glider-1'];
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
        <path fill="currentColor" d="M400.565 406.14a19 19 0 1 1 19-19 19 19 0 0 1-19 19zm0 16a35 35 0 0 1-7.16-.74l-2.58 1.31-.08 18 47.16-24-10.4-7.22a34.91 34.91 0 0 1-26.94 12.65zm-78.51 35.63l-26.5-100.05-16.5.35 32.61 123.16 30.61-15.83-1.39-17.25zm92.66-107.81l-1.4 4.61a34.94 34.94 0 0 1 21.36 40.38l24.77 17.19 16.72-8.07zm-183.25 9.14l7.47 13.13 28.9 5.73-5.17-19.53zm153.59-3.33l-73 1.59 8.21 31 32.43 6.41 5.64 70.06 16.34-7.77.22-46.2a34.95 34.95 0 0 1 10.16-55.09zm43.74-52.49l47.34 75.91-2.79 1.42 13.13 11.26 12.47-6.36-63.89-102.58zm-245.64-131.62c-11 20.84-45.92 74.64-114.6 78.7l300.28 73zm158.68-48.89c-26.33 36.77-102.7 41.12-137.32 41.12h-5.6l189.06 154.42zm28.22 217.33l-324.78-78.93c-7.22 10.32-18.64 20.11-32.22 29.17v57.5zm-14.05-226.93l49.8 211 88.88-293.4h-17c-28.87 31.7-76.8 76.49-121.68 82.4z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHangGlider1Icon);
    