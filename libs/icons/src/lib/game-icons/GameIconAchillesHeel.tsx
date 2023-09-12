
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAchillesHeelIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'achilles-heel'];
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
        <path fill="currentColor" d="M362.188 17.998c-12.9 65.825-49.788 140.505-98.616 197.37L352 224l-89.377 19.414 52.197 75.27-71.111-56.364L224 336l-8.576-73.182 2.812-2.779c-45.221 40.71-35.888 74.86.702 96.49 6.775 4.005 16.257 9.046 27.38 8.7 58.243-1.813 93.255 35.012 126.575 76.199 18.234 22.54 48.35 30.059 73.529 44.246 52.44 29.548 67.894-32.667 14.767-53.445l-70.677-111.036c-11.42-53.08 52.186-171.824 103.49-248.37V17.997zM92.454 23.424v32.17l32.799 32.79 8.043-24.126zM78.578 67.352c-.233-.026-.57.037-1.224.199-1.31.323-3.41 1.482-5.075 3.146-1.664 1.664-2.823 3.763-3.146 5.073-.266 1.074-.207 1.3.012 1.61l120.228 120.208 3.275-6.55 6.545-3.272L78.97 67.563c-.123-.086-.24-.195-.39-.211zM21.162 87.029L62 127.86l24.13-8.043-30.335-30.33-.397-.396-.343-.442a17.99 17.99 0 0 1-1.112-1.619zm213.563 103.098l-28.663 14.326-14.33 28.654 38.264 15.303 20.096-19.869z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAchillesHeelIcon);
    