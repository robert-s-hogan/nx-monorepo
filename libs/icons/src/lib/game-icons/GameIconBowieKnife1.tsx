
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBowieKnife1Icon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'bowie-knife-1'];
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
        <path fill="currentColor" d="M416.833 424.997a51.536 51.536 0 0 0-13.354 22.973l-78.98-78.98 44.972-44.97 78.98 78.978a51.536 51.536 0 0 0-22.974 13.354zm-209.087-202.24l-86.28-97.65 97.653 86.277 90.77 80.19 14.927-14.927c-90.534-99.383-137.713-167.87-176.19-212.085 0 0-39.608 13.795-122.627-38.08 0 0 7.062 120.442 252.034 296.948l9.913-9.913zm155.22 82.16a14.43 14.43 0 0 0-20.37-20.37l-57.57 57.567a14.43 14.43 0 0 0 20.37 20.37zM486 429.15a33.746 33.746 0 0 0-47.722 0l-8.646 8.647a33.746 33.746 0 0 0 0 47.722z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBowieKnife1Icon);
    