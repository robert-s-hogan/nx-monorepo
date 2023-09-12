
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBattleTankIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'battle-tank'];
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
        <path fill="currentColor" d="M213.3 91.24l-67.2 24.26v65.7l67.2-24.2zm250.4 8.7L279.4 154.8h-1.3c0 1 0 3.3 1.2 6.3 1.2 3.4 3.5 7.1 6 9.5 2.1 2.1 3.9 2.8 5.2 3.1L470.7 120zm-232 16.86v53l-48.2 17.4-11.4 24.7h178.3l-8.1-33.8-49.6 14.7h-1.4c-7.9 0-14.5-3.9-19.3-8.6-4.8-4.7-8.4-10.5-10.6-16.6-2.3-6-3.5-12.4-1.3-19.1 1.9-6.2 8.6-11.6 15.9-12.5l52.4-15.6-1-3.6zm-136.33 114l-10.71 38h92.64l-5.4 57.1h168l-5.3-57.1h83.8l-10.6-38zm-46.56 56.9l-25.83 76.2H149.3l7.1-76.2zm306.69 0l7.1 76.2H489l-26-76.2zm-184.3 57.1l3 38.1h162.3l2.9-38.1zM61 382.8l10.79 38h86.31l-3-38zm294.6 0l-2.9 38h86.2l10.7-38z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBattleTankIcon);
    