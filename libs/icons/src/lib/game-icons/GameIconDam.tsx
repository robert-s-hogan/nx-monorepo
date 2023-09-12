
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDamIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'dam'];
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
        <path fill="currentColor" d="M247 78.56l-46 23.04V487h109l-30.8-292.4-32.2-64.5V78.56zM137.6 163c-8-.3-16.7 5.6-27 13.7-10.4 8.2-22.34 18.4-38.64 18.3-15.91-.1-32.07-9.1-45.61-17.4-3.71-2.2-6.26-4.1-9.35-6.2V487h166V190c-2.8-2.5-7.9-6.9-15.4-12.4-10.4-7.5-23.8-14.3-30-14.6zm240.2 246c-2.7-.1-6.9 2.3-12.6 6.3-5.7 4.1-13 9.9-23.4 9.7-8-.2-14.8-3.6-20.9-7l7.2 69H495v-68.2c-4.6 3.2-9.9 5.9-16.6 6.2-10.1.4-16.9-5.6-22-9.7-5.1-4-8.7-6.2-10.6-6.3-2.7-.1-6.9 2.3-12.6 6.3-5.7 4.1-13 9.9-23.4 9.7-9.8-.2-16.3-6-21.3-9.9-5.1-3.9-8.6-6-10.7-6.1z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconDamIcon);
    