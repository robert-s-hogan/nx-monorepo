
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCloakedFigureOnHorsebackIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'cloaked-figure-on-horseback'];
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
        <path fill="currentColor" d="M225.6 16.72S122.1 45.53 104.5 169.7l48.9-29.8 8.6 21.5S-47.78 300.6 46.01 449.3c9.45-61.8 76.09-77.7 85.99-142.2 12.5 39-28.4 98-28.4 98s103.3-44.1 82.6-148.6c35 25.2 17.1 106.2 17.1 106.2l45.2-96.3S113.7 130.9 231.8 39.81c60.1 45.37-12.3 126.59 37 180.49l5.8-14.9c-23.9-27.5 47.4-125.86-49-188.68zM353.6 96l3.9 25.2-55-23.2 16.4 51.4-62.1 158.3c9.7 14.9 55 77.1 137.6 83.2 4.4-40.3-1.5-90.7-32.3-148.5 39 38.1 51.3 2.6 109.5 59.3l7.4-16-121.7-77.8-13.1-70.6 6.8-3.5c13.6-7.2 27.5-11.8 41.7-13.1L353.6 96zm48.5 45.3c-11.8-.2-23.3 2.5-34.6 7.6l.7 3.5 55.2 44.9 10.9 35.1 53.4 34.2 2.4-5.1-66.5-116.4c-7.3-2.4-14.4-3.7-21.5-3.8zm-28 42.7 2 11.2 31 19.8-1.7-5.5-31.3-25.5zM247.7 330.7 183.1 495h169.2s27.6-30 38.8-83c-75.9-7-123.3-55.5-143.4-81.3z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCloakedFigureOnHorsebackIcon);
    