
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDominoMaskIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'domino-mask'];
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
        <path fill="currentColor" d="M413.28 123.063C366.787 123.317 306.08 143 255.845 143c-56.868 0-124.174-23.704-171-19.156-23.414 2.274-40.642 10.16-52.28 30.937-11.64 20.78-17.23 56.337-10.97 113.19 8.578 77.917 73.225 118.973 128.656 99.405 11.513-4.064 30.972-25.256 49-46.125 9.014-10.434 17.993-20.687 27.03-28.72 9.04-8.03 18.23-14.624 29.564-14.624 11.335 0 20.493 6.594 29.53 14.625 9.04 8.033 18.018 18.286 27.032 28.72 18.028 20.87 37.487 42.06 49 46.125 55.45 19.574 118.93-21.672 128.688-99.563 7.137-56.986 1.753-92.528-9.938-113.28-11.69-20.754-29.346-28.665-53.22-30.907-2.983-.28-6.05-.46-9.186-.53-1.47-.035-2.97-.04-4.47-.032zM135.064 181.72c22.378-.2 44.746 10.556 67.125 30.78-43.4 54.67-108.488 37.044-130.188 0 21.022-20.738 42.04-30.594 63.063-30.78zm234.625 0c.7-.016 1.394-.007 2.093 0 21.023.186 42.073 10.042 63.095 30.78-21.7 37.044-86.82 54.67-130.22 0 21.68-19.592 43.354-30.312 65.033-30.78z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconDominoMaskIcon);
    