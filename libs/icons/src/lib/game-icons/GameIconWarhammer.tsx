
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconWarhammerIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'warhammer'];
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
        <path fill="currentColor" d="M351.4 31.4l-55.9 27.75 54 34.62 1.9-62.37zM143.2 67.33l20 33.47L182 71.5l-38.8-4.17zm57 9.16l-7.6 11.82 100.2 64.19-9.7 15.1-100.2-64.1-24.8 38.7 100.2 64.1-9.7 15.2-100.2-64.1-7.5 11.7 150 96.1 37.9-7.6 44.8-70L200.2 76.49zm93.2 2.73l-16.2 25.28 38.7 24.7 16.2-25.2-38.7-24.78zM108.7 121.2l20 33.5 18.8-29.3-38.8-4.2zm280.1 76.1L346.7 263l11.8 7.5 42.1-65.7-11.8-7.5zm-224.1 8.5l.6 36 72.8 46.6 33-14.5-106.4-68.1zm250.4 9.9l-33.2 51.8c11.7 2.8 24 7.3 36.5 12.3 19.3 7.6 39.1 16.7 56.6 24-9.5-27.2-22.2-57.9-59.9-88.1zm-242.5 52.1L27.77 494h54.61L211.4 292.6l-38.8-24.8z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconWarhammerIcon);
    