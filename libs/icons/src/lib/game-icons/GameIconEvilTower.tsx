
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconEvilTowerIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'evil-tower'];
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
        <path fill="currentColor" d="M64 22.683l64 27.632 16-16zm384 0l-80 11.632 16 16zm-204.908 5.902c-17.084 3.209-34.355 12.056-48.1 21.219-11.706 7.804-19.017 14.13-23.594 18.302 7.8 12.21 20.963 24.967 35.594 34.721 12.313 8.209 25.698 14.22 37.088 16.912l-13.445-53.783zm25.816 0l12.457 37.371-13.445 53.783c11.39-2.692 24.775-8.703 37.088-16.912 14.631-9.754 27.793-22.512 35.594-34.72-4.577-4.173-11.888-10.5-23.594-18.303-13.745-9.163-31.016-18.01-48.1-21.219zM256 46.771l-6.635 19.904L256 93.214l6.635-26.54zM128 66.315l-96 16 112 16zm256 0l-16 32 112-16zm-224 48l-80 48 96-32zm192 0l-16 16 96 32zm-152.178 29.928l-25.834 297.074h27.594l13.174-289.845c-4.634-2.16-9.539-4.546-14.934-7.229zm112.356 0c-5.395 2.683-10.3 5.069-14.934 7.229l13.174 289.845h27.594zm-79.739 14.608L219.6 441.317H292.4l-12.84-282.466c-8.328 2.898-15.853 4.462-23.56 4.462-7.707 0-15.232-1.564-23.56-4.462zm-85.943 300.462l-50.008 30.004H199.4l1.364-30.004zm72.285 0l-1.363 30.004h77.164l-1.363-30.004zm92.455 0l1.364 30.004h102.912l-50.004-30.004z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconEvilTowerIcon);
    