
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconIncomingRocketIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'incoming-rocket'];
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
        <path fill="currentColor" d="M18.36 18.336V93.59l317.51 262.287-52.917.53 82.58 63.884-71.963.394 80.102 32.728-17.404 15.14c34.87 16.374 70.587 22.075 135.648 22.718l.008-.002c-.314-44.892-11.583-91.282-28.666-126.69l-12.5 25.762-43.65-104.975-8.303 72.656-53.752-70.182 5.8 55.584L85.86 18.336h-67.5zm148.736 0L336.303 271.23 232.88 18.336h-65.784zm123.34 0l50.753 183.898 2.468-183.898h-53.22zM18.363 160.074v82.963l241.853 99.272L18.36 160.073zm0 141.29v57.396l201.552-4.795-201.55-52.6zm357.154 77.212c41.388 7.493 81.473 39.554 93.138 89.248-30.75-5.512-52.902-16.592-67.86-31.74-14.722-14.907-22.987-34.03-25.278-57.508z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconIncomingRocketIcon);
    