
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconWatchtowerIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'watchtower'];
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
        <path fill="currentColor" d="M256 32l-96 48h23v71h-32v50h30.945L155.36 440.244l-.653.477.522.72-4.175 37.566-.994 8.945 17.89 1.99.995-8.946L171.61 457h168.78l2.665 23.994.994 8.945 17.89-1.99-.995-8.944-4.174-37.567.523-.72-.654-.476L330.054 201H361v-50h-32V80h23l-96-48zm-48 64h32v48h-32V96zm64 0h32v48h-32V96zm-103 73h14v14h-14v-14zm32 0h14v14h-14v-14zm32 0h14v14h-14v-14zm32 0h14v14h-14v-14zm32 0h14v14h-14v-14zm32 0h14v14h-14v-14zm-113.328 32h80.656L256 236.848 215.672 201zm-16.65 9.283L240.33 247h-45.385l4.08-36.717zm113.955 0l4.08 36.717h-45.385l41.305-36.717zM192.945 265h31.383l-34.822 30.953 3.44-30.953zm58.477 0h9.156l51.75 46H199.672l51.75-46zm36.25 0h31.383l3.44 30.953L287.67 265zm-83.994 64h104.644L256 367.053 203.678 329zm-18.8 8.586L236.323 375h-55.6l4.157-37.414zm142.243 0L331.278 375h-55.6l51.444-37.414zM178.724 393h41.6l-45.26 32.914 3.66-32.914zm72.205 0h10.144l63.25 46H187.678l63.25-46zm40.75 0h41.6l3.658 32.914L291.678 393z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconWatchtowerIcon);
    