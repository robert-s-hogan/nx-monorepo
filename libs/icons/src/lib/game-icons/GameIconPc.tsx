
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPcIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'pc'];
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
        <path fill="currentColor" d="M29.65 117.89v276.22h124.62V117.89H29.65zm90.55 253.16a11 11 0 1 1 11-11 11 11 0 0 1-11 11zm18-189.16H45.56v-16h92.63v16zm0-32H45.56v-16h92.63v16zm153 188.51h73.1v39.71h41.74v16H249.48v-16h41.74V338.4zm-118-220.51V322.4h309.15V117.89H173.19zM466.35 306.4H189.19V133.89h277.16V306.4z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPcIcon);
    