
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCastleRuinsIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'castle-ruins'];
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
        <path fill="currentColor" d="M382.975 17.701L306.678 119.43 459.27 93.998l-76.296-76.297zM106.24 77.895l-17.5 4.21 34.05 141.487 13.6-20.405-30.15-125.292zm-35.209 7.683c-8.85 41.457-17.725 90.065-41.402 111.129 9.026 2.35 21.416-1.194 34.652-23.71 6.948 15.963 2.313 17.464-1.957 28.737 16.561-3.429 25.204-18.531 24.873-37.806l-16.166-78.35zm366.957 30.215L361 128.623V160h-18v-28.377l-32 5.334V199h82v32h30v-32h15.846l-18.776-56.33 17.918-26.877zM148.816 217l-31.04 46.563-41.085 13.695 32 63.998-55.83 18.611L25 387.727V487h90.512l-11.075-33.225-45.43-30.287 9.985-14.976 50.57 33.713L134.488 487h147.95l27.845-55.69-13.398-40.195L208 361.488l-45.154 15.051-5.692-17.078 44.04-14.68 28.245-70.613L204.273 249H151v-32h-2.184zM217 217v19.273l28.33 28.329 62.695 31.347-8.05 16.102-55.252-27.625-24.82 62.054 91.212 30.405 16.752 50.254 31.53 31.529L373.562 487H487V336.816L452.525 359.8l-32.5 16.252-8.05-16.102 31.5-15.748L487 315.184V217h-46v32h-66v-32h-46v32h-66v-32h-46z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCastleRuinsIcon);
    