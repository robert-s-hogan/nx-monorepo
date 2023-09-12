
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconClarinetIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'clarinet'];
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
        <path fill="currentColor" d="M37.1 28.45c-.27 29.1 9.07 46.67 25.07 67.1l9.66-9.6 14.73 14.75-11.46 11.4 9.81 12.6 31.19-31.25-12.2-10.1-7.83 7.8-14.74-14.7 6.37-6.4zm92.2 78.25L98.11 138l14.09 14.1 31.3-31.2zm25.7 25.7-31 31 10 10c10-4 22-1 30 7 15 14 37 37 37 37l29-11zm12 20c3 2 3 7 0 10s-7 3-10 0-3-8 0-10c3.2-2.8 7.3-2.6 10 0zm22 21c3 3 3 8 0 11-3 2-8 2-11 0-3-3-3-8 0-11 3.4-2.8 8.1-2.8 11 0zM141.3 184c-2.9 0-5.5.5-7.9 1.3l76.8 76.7 53.2-17.2s28.4 27.6 44 42.7c6 5.9 14.9 7.7 22.8 4.8-27.1-26.8-55.3-54-82.8-80.9l-53 17.1s-24.2-24.2-38.2-38.1c-4-4.1-9.3-6.3-14.9-6.4zm68.7 10.4c3 3 3 8 0 11s-8 3-11 0c-2-3-2-8 0-11 3.4-2.8 8.1-2.8 11 0zm34.2 31.3 9.5 9.3-40.2 12.6-9.3-9.3zm14.8 31.7-30 11 9 9 73 79 38-37-18-16-1 1c-11 3-22 0-31-7-15-16-40-40-40-40zm3 13c3 3 3 8 0 11s-8 3-11 0-3-8 0-11c4.3-2.7 7.1-2 11 0zm22 22c3 3 3 8 0 11s-7 3-10 0-3-8 0-11c3.3-1.9 7.1-1.9 10 0zm23 23c3 3 3 8 0 11-3 2-8 2-11 0-3-3-3-8 0-11 3.4-2.8 8.1-2.8 11 0zm52.7 15.5-37.3 37.3 14.1 14.1 37.3-37.2zm26.2 26.3-37.3 37.3c19.2 19.2 14.6 55.7 14.6 55.7s11.6-17.5 35.7-41.5l.5-.6c24.5-24.5 42.2-36.2 42.2-36.2s-36.5 4.5-55.7-14.7zm85.5 14.5c-9.4 0-35.6 19.4-62.3 46.1-30.4 30.4-50.7 59.5-45.2 64.9 5.4 5.5 34.5-14.8 64.9-45.2 30.4-30.4 50.7-59.5 45.2-64.9-.6-.6-1.4-.9-2.6-.9z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconClarinetIcon);
    