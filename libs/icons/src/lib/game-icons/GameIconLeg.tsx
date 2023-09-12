
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconLegIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'leg'];
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
        <path fill="currentColor" d="M19.09 16.96V170.7C73.51 193.5 202.7 200 259.8 189.4c-18.1 105.6 34 177.3 31.1 226.5-2 33.3-22.9 39-13.5 69.3 4.9 15.6 193 5.1 201.1 4.9 7.7-.3 5.4-19.2-13.3-27.2-35.2-15.1-80.2-10.7-110.1-47-9.7-14.6 6.9-180.3 10-241.4.8-15.7 4.7-78.91-60-100.5C225 47.24 123 27.32 19.09 16.96z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconLegIcon);
    