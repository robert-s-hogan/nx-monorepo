
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconFloodIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'flood'];
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
        <path fill="currentColor" d="M256.1 76.12L93.42 224h23.08L256 99.96 395.5 224h23.1L256.1 76.12zM329 105v13.1l30 27.2V105h-30zm-73 19L137 229.8v117.9c8.5 6.6 16 11.3 23 11.3 2.3 0 4.6-.5 7-1.4V279h66v49.1c11.5 2.8 20.6 10.5 28.6 16.9 10 8 18.5 14 26.4 14 7.9 0 16.4-6 26.4-14s21.6-18 37.6-18c8.9 0 16.4 3.1 23 7.2V229.8L256 124zm-71 173v49.1c.5-.4.9-.7 1.4-1.1 8-6.4 17.1-14.1 28.6-16.9V297h-30zm-89 48c-15.95 0-32.12 9-45.66 17.3C36.8 370.7 26.39 379 26.39 379l11.22 14s9.66-7.7 22.16-15.3C72.26 370 88.1 363 96 363c7.9 0 16.4 6 26.4 14s21.6 18 37.6 18 27.6-10 37.6-18 18.5-14 26.4-14c7.9 0 16.4 6 26.4 14s21.6 18 37.6 18 27.6-10 37.6-18 18.5-14 26.4-14c7.9 0 16.4 6 26.4 14s21.6 18 37.6 18 32.1-9 45.7-17.3c13.5-8.4 23.9-16.7 23.9-16.7l-11.2-14s-9.7 7.7-22.2 15.3C439.8 370 423.9 377 416 377c-7.9 0-16.4-6-26.4-14S368 345 352 345s-27.6 10-37.6 18-18.5 14-26.4 14c-7.9 0-16.4-6-26.4-14S240 345 224 345s-27.6 10-37.6 18-18.5 14-26.4 14c-7.9 0-16.4-6-26.4-14S112 345 96 345zm0 62c-15.96 0-32.13 9-45.68 17.3-13.54 8.4-23.96 16.7-23.96 16.7l11.22 14s9.66-7.7 22.16-15.3C72.25 432 88.09 425 96 425c7.9 0 16.4 6 26.4 14s21.6 18 37.6 18 27.6-10 37.6-18 18.5-14 26.4-14c7.9 0 16.4 6 26.4 14s21.6 18 37.6 18 27.6-10 37.6-18 18.5-14 26.4-14c7.9 0 16.4 6 26.4 14s21.6 18 37.6 18 32.1-9 45.7-17.3c13.5-8.4 23.9-16.7 23.9-16.7l-11.2-14s-9.7 7.7-22.2 15.3C439.8 432 423.9 439 416 439c-7.9 0-16.4-6-26.4-14S368 407 352 407s-27.6 10-37.6 18-18.5 14-26.4 14c-7.9 0-16.4-6-26.4-14S240 407 224 407s-27.6 10-37.6 18-18.5 14-26.4 14c-7.9 0-16.4-6-26.4-14S112 407 96 407z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconFloodIcon);
    