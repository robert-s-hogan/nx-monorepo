
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconConwayLifeGliderIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'conway-life-glider'];
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
        <path fill="currentColor" d="M19.51 19.51V492.3H492.3V19.51H19.51zm18 18H171.1V171.1H37.51V37.51zm151.59 0h133.6V171.1H189.1V37.51zm151.6 0h133.6V171.1H340.7V37.51zm-84.8 9.94a56.85 56.85 0 0 0-56.8 56.85 56.85 56.85 0 0 0 56.8 56.9 56.85 56.85 0 0 0 56.9-56.9 56.85 56.85 0 0 0-56.9-56.85zM37.51 189.1H171.1v133.6H37.51V189.1zm151.59 0h133.6v133.6H189.1V189.1zm151.6 0h133.6v133.6H340.7V189.1zm66.9 10a56.85 56.85 0 0 0-56.8 56.8 56.85 56.85 0 0 0 56.8 56.9 56.85 56.85 0 0 0 56.8-56.9 56.85 56.85 0 0 0-56.8-56.8zM37.51 340.7H171.1v133.6H37.51V340.7zm151.59 0h133.6v133.6H189.1V340.7zm151.6 0h133.6v133.6H340.7V340.7zm-236.4 10.1a56.85 56.85 0 0 0-56.85 56.8 56.85 56.85 0 0 0 56.85 56.8 56.85 56.85 0 0 0 56.9-56.8 56.85 56.85 0 0 0-56.9-56.8zm151.6 0a56.85 56.85 0 0 0-56.8 56.8 56.85 56.85 0 0 0 56.8 56.8 56.85 56.85 0 0 0 56.9-56.8 56.85 56.85 0 0 0-56.9-56.8zm151.7 0a56.85 56.85 0 0 0-56.8 56.8 56.85 56.85 0 0 0 56.8 56.8 56.85 56.85 0 0 0 56.8-56.8 56.85 56.85 0 0 0-56.8-56.8z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconConwayLifeGliderIcon);
    