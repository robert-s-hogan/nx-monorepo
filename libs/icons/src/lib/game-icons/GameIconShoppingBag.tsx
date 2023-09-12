
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconShoppingBagIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'shopping-bag'];
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
        <path fill="currentColor" d="M256 23c-35 0-62 17.92-79.3 41.71-11.9 16.38-19.6 35.49-23.2 54.29H172c3.4-15.2 9.9-30.77 19.3-43.71C206 55.08 227 41 256 41s50 14.08 64.7 34.29c9.4 12.94 15.9 28.51 19.3 43.71h18.5c-3.6-18.8-11.3-37.91-23.2-54.29C318 40.92 291 23 256 23zM88.25 137L57.81 487H454.2l-30.4-350H88.25zM160 160a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm192 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconShoppingBagIcon);
    