
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconLevelFourIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'level-four'];
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
        <path fill="currentColor" d="M16 16c48 96 24 120 72 168 0 0 44.864 0 69.53-21.688A135.765 135.765 0 0 0 120.25 256a135.765 135.765 0 0 0 271.5 0 135.765 135.765 0 0 0-36.375-92.906C380.22 183.997 424 184 424 184c48-48 24-72 72-168-96 48-120 24-168 72 0 0 .004 44.6 21.5 69.313a135.765 135.765 0 0 0-186.72-.344C183.987 132.19 184 88 184 88c-48-48-72-24-168-72zm72 312c-48 48-24 72-72 168 96-48 120-24 168-72 0 0 0-48-24-72s-72-24-72-24zm336 0s-48 0-72 24-24 72-24 72c48 48 72 24 168 72-48-96-24-120-72-168z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconLevelFourIcon);
    