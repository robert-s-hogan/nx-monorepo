
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCardJackHeartsIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'card-jack-hearts'];
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
        <path fill="currentColor" d="M119.436 36c-16.126 0-29.2 17.237-29.2 38.5v363c0 21.263 13.074 38.5 29.2 38.5h275.298c16.126 0 29.198-17.237 29.198-38.5v-363c0-21.263-13.072-38.5-29.198-38.5H119.436zm57.214 16.174h.002c13.612-.318 26.502 9.855 27.073 28.043.976 31.09-47.738 52.945-52.31 70.015-4.998-18.649-51.414-37.573-52.45-70.015-.995-31.155 37.401-37.909 52.45-11.848 6.26-10.845 15.922-15.977 25.235-16.195zm51.666 116.515h77.743v8.915h-11.055c-4.359 0-7.489.793-9.39 2.378-1.823 1.585-2.735 3.883-2.735 6.895v113.998c0 8.797-2.139 16.76-6.418 23.893-4.28 7.053-10.541 12.68-18.783 16.88-8.242 4.121-17.552 6.182-27.934 6.182-14.106 0-25.637-4.121-34.592-12.363-8.955-8.321-13.433-18.465-13.433-30.432 0-8.876 2.258-15.968 6.775-21.277 4.517-5.31 10.065-7.965 16.643-7.965 5.389 0 9.827 1.744 13.314 5.23 3.487 3.408 5.23 7.767 5.23 13.077 0 4.596-1.426 8.478-4.279 11.648-2.853 3.09-6.142 4.637-9.867 4.637-1.426 0-3.407-.397-5.943-1.19-2.14-.634-3.566-.95-4.28-.95-1.347 0-2.416.554-3.208 1.663-.872 1.11-1.31 2.775-1.31 4.994 0 5.944 2.973 11.372 8.917 16.286 6.023 4.834 13.392 7.25 22.11 7.25 9.905 0 17.711-3.408 23.417-10.223 5.706-6.895 8.559-16.484 8.559-28.768v-112.57c0-3.09-1.07-5.389-3.21-6.895-2.06-1.585-5.626-2.378-10.698-2.378h-15.573v-8.915zM360.73 361.77c4.572 17.071 53.289 38.924 52.312 70.014-.57 18.189-13.462 28.362-27.074 28.043-9.314-.217-18.975-5.349-25.237-16.195-15.048 26.061-53.445 19.307-52.45-11.848 1.036-32.442 47.451-51.364 52.449-70.013z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCardJackHeartsIcon);
    