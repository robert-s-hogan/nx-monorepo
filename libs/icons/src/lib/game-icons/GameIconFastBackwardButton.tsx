
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconFastBackwardButtonIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'fast-backward-button'];
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
        <path fill="currentColor" d="M467.4 106a26 26 0 0 1 25.7 29.3c-16 124-16 117.4 0 241.4a26 26 0 0 1-35.8 27.3l-138.7-57.7c1.2 9.5 2.4 18.9 3.9 30.4 2.5 19.8-17.3 35-35.8 27.3L34.72 280c-9.7-4-16-13.5-16-24s6.3-20 16-24L286.7 108c3.2-1.3 6.6-2 10.1-2 15.6.1 27.7 13.8 25.7 29.3-1.5 11.5-2.7 20.9-3.9 30.4L457.3 108a26 26 0 0 1 10.1-2z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconFastBackwardButtonIcon);
    