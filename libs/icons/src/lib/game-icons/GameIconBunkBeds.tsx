
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBunkBedsIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'bunk-beds'];
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
        <path fill="currentColor" d="M25 41v446h30V41zm56.8 40.15c-.1 14.49 1.03 25.35 3.31 32.75 2.77 8.9 6.33 12.9 12.45 16 11.34 5.7 35.34 5.3 70.54 5.1.8-8.5-.5-15.1-3.2-20.4-3.5-6.8-9.4-12.2-18.1-16.86-15.4-8.19-39.1-12.83-65-16.59zM457 105v382h30V105zM73 153v46h238v-46zm256 0v46h110v-46zm-18 64v158h18v-46h110v-18H329v-46h110v-18H329v-30zM81.79 321.3c-.1 14.4 1.03 25.3 3.3 32.6 2.78 9 6.33 13 12.46 16 11.35 5.7 35.35 5.3 70.55 5.1.8-8.5-.5-15-3.2-20.3-3.4-6.8-9.4-12.2-18.1-16.8-15.4-8.2-39.1-12.8-65.01-16.6zM73 393v46h238v-46zm256 0v46h110v-46z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBunkBedsIcon);
    