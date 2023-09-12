
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSpinningRibbonsIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'spinning-ribbons'];
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
        <path fill="currentColor" d="M169.027 40.096C93.14 60.823 48.49 138.916 70.605 218.02c1.862-60.04 52.693-111.227 115.96-112.48l-17.536-65.444h-.003zm192.815 7.58l-181.95 315.15C84.5 330.016 29.234 229.346 51.378 135.12c-67.885 114.69-33.277 255.173 73.343 323.26l-.084.145 3.934 2.272c1.443.883 2.89 1.762 4.358 2.62l.045-.08 7.847 4.532 181.528-314.413c98.517 30.923 156.16 133.487 133.623 229.383 69.6-117.59 31.477-262.31-81.553-328.295l-.172.297-12.408-7.166zm72.652 256.68c-1.86 60.038-52.694 111.226-115.96 112.478l17.536 65.443c75.89-20.722 120.538-98.818 98.424-177.92z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSpinningRibbonsIcon);
    