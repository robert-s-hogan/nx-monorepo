
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconLuciferCannonIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'lucifer-cannon'];
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
        <path fill="currentColor" d="M376 76c30 60-120 30-210 75 150 0 270 15 270 105S316 361 166 361c90 45 240 15 210 75 90-15 120-120 120-180S466 91 376 76zm-95.625 105.938C216.005 182.577 127.562 203.5 16 256c255 120 390 75 390 0 0-42.188-42.865-74.886-125.625-74.063z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconLuciferCannonIcon);
    