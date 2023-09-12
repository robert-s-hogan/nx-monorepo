
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconStaplerIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'stapler'];
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
        <path fill="currentColor" d="M476.5 195.8 52.59 216.6l-6.56 28.7H186l2.2 15.3h298.1zM41.78 271l-20.77 92.6 6.56 27.6H486.6l4.4-27.6-311.4-2.2L161 271zm150.72 8.1 7.1 41h269.5v-41zM427 295h26.4c3.8 0 6.8 3 6.8 6.9 0 3.6-3 6.7-6.8 6.7H427c-3.9 0-6.9-3.1-6.9-6.7 0-3.9 3-6.9 6.9-6.9z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconStaplerIcon);
    