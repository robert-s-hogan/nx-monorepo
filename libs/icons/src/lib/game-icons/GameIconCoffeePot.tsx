
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCoffeePotIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'coffee-pot'];
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
        <path fill="currentColor" d="M49.66 45.63L108.1 148.3h217.5V78.25zm27.9 120.67v19.6H334.6c48 0 82.2 29.3 103.2 64.3 19 31.5 28.2 67.7 29.9 95.6h20.1c-2.1-32.8-15.2-76.2-37.2-111.8-24.1-38.9-57.8-67.7-98-67.7zm13.29 37.6c-3.15 4.7-9 15.1-14.87 28.6-7.34 16.9-15.6 38.8-23.3 62.9C37.29 343.7 24.2 400.9 24.2 443.3c0 6 3.27 13.1 8.54 18.5 5.27 5.3 12.2 8.6 17.99 8.6H370.6c5.6 0 12.6-3.3 17.9-8.6 5.3-5.4 8.6-12.5 8.6-18.5 0-42.4-13.1-99.6-28.6-147.9-7.7-24.1-16-46-23.4-62.9-5.9-13.5-11.8-23.9-15-28.6zM65.01 337.1H355.6c7.5 29.1 12.8 59.7 12.8 84.3 0 13.8-14.6 28.3-29.2 28.3H81.04c-14.29 0-28.73-14.5-28.73-28.3 0-24.6 5.24-55.2 12.7-84.3z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCoffeePotIcon);
    