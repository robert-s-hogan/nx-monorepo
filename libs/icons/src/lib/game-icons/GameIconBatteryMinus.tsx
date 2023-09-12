
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBatteryMinusIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'battery-minus'];
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
        <path fill="currentColor" d="M201 16c-15 0-20 3.38-20 20v15h-45c-29.547 0-35 5.453-35 35v375c0 29.547 5.453 35 35 35h240c29.547 0 35-5.453 35-35V86c0-29.547-5.453-35-35-35h-45V36c0-16.62-5-20-20-20H201zm-48.094 69.813c4.666.02 10.594.187 18.094.187h170c40 0 35-5 35 35v305c0 40 5 35-35 35H171c-40 0-35 5-35-35V121c0-32.5-3.31-35.283 16.906-35.188zM171 236c-5.54 0-10 4.46-10 10v50c0 5.54 4.46 10 10 10h170c5.54 0 10-4.46 10-10v-50c0-5.54-4.46-10-10-10H171z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBatteryMinusIcon);
    