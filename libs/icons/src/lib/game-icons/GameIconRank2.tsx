
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconRank2Icon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'rank-2'];
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
        <path fill="currentColor" d="M255 471L91.7 387V41h328.6v346zm-147.3-93.74L255 453l149.3-75.76V57H107.7v320.26zm146.43-65.76l98.27-49.89v-49.9l-98.14 49.82-94.66-48.69v50zm.13 32.66l-94.66-48.69v50l94.54 48.62 98.27-49.89v-49.9z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconRank2Icon);
    