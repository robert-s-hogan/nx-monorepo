
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTrumpetFlagIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'trumpet-flag'];
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
        <path fill="currentColor" d="M476 18.28c-11 13.93-27.6 26.14-45.2 37.31C408.3 69.93 384 82.05 368 90.1l-1.9.9H325v30h41.1l1.9.9c16 8 40.3 20.2 62.8 34.5 17.6 11.2 34.2 23.4 45.2 37.3 3.5-6.9 6.8-16.1 9.2-27.1 3.8-17.7 5.8-39.1 5.8-60.6 0-21.45-2-42.93-5.8-60.6-2.4-11-5.7-20.18-9.2-27.12zM36 79c-5 0-10.04.98-12.85 2.22-1.3.58-1.93 1.13-2.15 1.35v46.83c.22.2.85.8 2.15 1.4C25.96 132 31 133 36 133s10.04-1 12.85-2.2c1.3-.6 1.93-1.2 2.15-1.4V82.57c-.22-.22-.85-.77-2.15-1.35C46.04 79.98 41 79 36 79zm33 12v30h46V91zm64 0v30h30V91zm48 0v30h78V91zm96 0v30h30V91zm-176 48v349l55-65.2 64 72 64-72 55 65.2V139zm66.2 45.4c10 19.2 27.3 18.1 44.2 18.1l36.7 1.4 5.3 16.7 52.4 6.9 2.4 34.2c-19 5.5-56.9 4.2-57 12.5-.1 13.8 24.7 10.7 53.1 3.5l-16.4 37.2-41.8 3c2.6 31.4-.8 52.6-24.2 75.1L207 355.4c-8.6 15.4-20.4 26.4-39 28.2 7.2-17.7 13-31.8 6.6-51.8-9.2 8.9-23.9 12.6-44.1 11.2 21.5-33.7 32.9-68.8 42.3-103.3L157 226c-4.5-16-.9-29.8 10.2-41.6z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTrumpetFlagIcon);
    