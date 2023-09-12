
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBurnIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'burn'];
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
        <path fill="currentColor" d="M256 16C121 16 16 76 16 136c0 30 15 45 30 60-15 15-30 54.417-30 75v165c0 30 30 60 60 60h360c30 0 60-15 60-60V256c0-18.957-15-45-30-60 15-15 30-30 30-60 0-60-105-120-240-120zm0 60c105 0 180 15 180 60 0 15-15 45-30 60 15 15 30 60 30 75v165H76V271c0-15 15-60 30-75-15-15-30-45-30-60 0-45 75-60 180-60zm-10.375 27.125a15 15 0 0 0-10.844 4.375L107.5 234.78a15 15 0 0 0 0 21.22l10.625 10.594a15 15 0 0 0 21.22 0l127.28-127.28a15 15 0 0 0 0-21.19L256 107.5a15 15 0 0 0-10.375-4.375zm100.75 37.125a15 15 0 0 0-10.813 4.375L144.625 335.563a15 15 0 0 0 0 21.187l10.625 10.625a15 15 0 0 0 21.22 0l190.905-190.938a15 15 0 0 0 0-21.187l-10.594-10.625a15 15 0 0 0-10.405-4.375zM383.5 241a15 15 0 0 0-10.813 4.406l-127.28 127.28a15 15 0 0 0 0 21.19L256 404.5a15 15 0 0 0 21.22 0L404.5 277.22a15 15 0 0 0 0-21.22l-10.594-10.594A15 15 0 0 0 383.5 241z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBurnIcon);
    