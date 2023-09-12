
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconEvilMinionIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'evil-minion'];
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
        <path fill="currentColor" d="M118.1 20.63l-2.9 20.19-53.11-2.48 49.01 31.6L96.24 174.2A28.31 28.31 0 0 0 79.43 200a28.31 28.31 0 0 0 10.04 21.6l-6.55 45.9 20.78 2.4 12.4-42.9a28.31 28.31 0 0 0 3.1-1.2l61.1 28.9 49.1-30.9 26 61.1-73 79.3 11.2 78.7-38.6 48.5h48.5l19.6-46.4-11.9-68.8 43.5-21.1 6.3 49.2 56.2 2.1 2.8-47.1 65.3 35.1 3.5 51.3-10.2 45.7h62.2l-30.2-45.7-5.6-68.1-80.1-80.8 26.7-82.1 61.8 21-27.2 25.3a28.31 28.31 0 0 0-6.8-.8 28.31 28.31 0 0 0-28.3 28.3 28.31 28.31 0 0 0 28.3 28.3 28.31 28.31 0 0 0 28.3-28.3 28.31 28.31 0 0 0-1.5-9.2l43.7-49.2L333 155.3a42.7 62.07 0 0 0 1.1-13.9 42.7 62.07 0 0 0-2.4-20.2c55.4-12.5 61.7-67.54 15.5-97.18 8.6 26.64 22.2 51.09-33 64.97a42.7 62.07 0 0 0-22.8-9.69 42.7 62.07 0 0 0-23.5 10.32c-58.2-13.78-44.2-38.57-35.5-65.6-47 30.17-39.6 86.68 18.5 97.98a42.7 62.07 0 0 0-2.2 19.4 42.7 62.07 0 0 0 2.7 21.6l-73.2 61.5-43.1-17.4a28.31 28.31 0 0 0 .9-7.1 28.31 28.31 0 0 0-6.8-18.3l42-145.18zM280.2 126.5a10.43 10.43 0 0 1 10.5 10.4 10.43 10.43 0 0 1-10.5 10.4 10.43 10.43 0 0 1-10.4-10.4 10.43 10.43 0 0 1 10.4-10.4zm34.5 0a10.43 10.43 0 0 1 10.5 10.4 10.43 10.43 0 0 1-10.5 10.4 10.43 10.43 0 0 1-10.4-10.4 10.43 10.43 0 0 1 10.4-10.4z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconEvilMinionIcon);
    