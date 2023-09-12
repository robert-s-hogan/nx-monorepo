
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTunisiaIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'tunisia'];
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
        <path fill="currentColor" d="M165.6 81.82L244 34.67l27.4 6.02 2.6 34.98 39.9-23.06 9.6 21.28-35.7 29.01c-15.8 28.8 10 46.6 35.2 64.6-14.7 27.3-17 58.6-59.7 76.8 2.8 10.2 1 26.3 29.5 23.4 20.4 29.1 28.6 31 48.6 31.1l3.1 52.5c-23.7 34-49.5 39.7-74.9 50.6l10.6 38.4-39.9 47.4-28.4-117.4-38.9-26.9-29.9-46.2-9.5-50 37.9-38.4z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTunisiaIcon);
    