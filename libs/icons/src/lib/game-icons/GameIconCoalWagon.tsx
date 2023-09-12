
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCoalWagonIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'coal-wagon'];
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
        <path fill="currentColor" d="M304 64c-23.723 1.039-64 32-96 48-32-10.667-79.124-37.34-96-32-22.196 7.024-47.374 44.154-71.533 71h435.719C467.4 130.604 444.747 80.887 432 80c-15.998-1.113-80 48-80 48-16-21.333-36.57-64.5-48-64zM27.133 169l44.144 206H119V169H27.133zM137 169v14h46v-14h-46zm64 0v206h239.725l44.142-206H201zm-64 32v14h46v-14h-46zm0 32v14h46v-14h-46zm0 32v14h46v-14h-46zm0 32v14h46v-14h-46zm0 32v14h46v-14h-46zm0 32v14h46v-14h-46zM25 393v30h462v-30H25zm11.822 48C34.387 445.436 33 450.543 33 456c0 17.227 13.773 31 31 31s31-13.773 31-31c0-5.457-1.387-10.564-3.822-15H36.822zm80 0c-2.435 4.436-3.822 9.543-3.822 15 0 17.227 13.773 31 31 31s31-13.773 31-31c0-5.457-1.387-10.564-3.822-15h-54.356zm81.74 0l15 30h84.875l15-30H198.563zm142.26 0c-2.435 4.436-3.822 9.543-3.822 15 0 17.227 13.773 31 31 31s31-13.773 31-31c0-5.457-1.387-10.564-3.822-15h-54.356zm80 0c-2.435 4.436-3.822 9.543-3.822 15 0 17.227 13.773 31 31 31s31-13.773 31-31c0-5.457-1.387-10.564-3.822-15h-54.356z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCoalWagonIcon);
    