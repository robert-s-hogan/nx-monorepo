
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCardboardBoxClosedIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'cardboard-box-closed'];
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
        <path fill="currentColor" d="M256 73.32L74.6 155.1l82.3 37.1 173.2-85.5L256 73.32zm95.4 42.98l-173.2 85.5 77.8 35.1 181.4-81.8-86-38.8zM61.7 169v182L247 434.6v-182L61.7 169zm388.6 0L265 252.6v182L450.3 351V169z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCardboardBoxClosedIcon);
    