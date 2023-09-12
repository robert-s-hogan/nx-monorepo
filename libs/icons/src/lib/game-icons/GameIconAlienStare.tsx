
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAlienStareIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'alien-stare'];
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
        <path fill="currentColor" d="M256 21.313c-134.918 0-192.22 105.22-192.22 211.375C63.78 338.841 256 493.656 256 493.656s192.22-154.814 192.22-260.969c0-106.154-57.303-211.375-192.22-211.375zm-.063 74.374c.77.6 1.4 1.12 2.157 1.72 46.445 36.343 46.445 95.154 0 131.5-.755.616-1.385 1.14-2.156 1.718-.77-.598-1.43-1.14-2.188-1.72-46.445-36.344-46.445-95.155 0-131.5.757-.615 1.416-1.12 2.188-1.718zm0 40.72c-14.884 0-26.937 12.052-26.937 26.937 0 14.884 12.053 26.937 26.938 26.937 14.884 0 26.937-12.052 26.937-26.936 0-14.885-12.053-26.938-26.938-26.938zM135.03 203.093c39.988-.483 72.49 27.44 78.94 73.062.11.935.234 1.775.374 2.75-.944.262-1.643.695-2.563 1.03-54.698 22.052-105.62-7.323-113.874-65.717-.168-.973-.266-1.776-.406-2.75.953-.263 1.68-.677 2.594-1.032 11.965-4.824 23.74-7.21 34.937-7.344zm244.126 0c11.196.135 22.973 2.52 34.938 7.344.914.355 1.64.77 2.594 1.03-.14.976-.24 1.78-.407 2.75-8.252 58.395-59.174 87.77-113.874 65.72-.92-.337-1.618-.77-2.562-1.032.14-.975.263-1.815.375-2.75 6.448-45.622 38.95-73.545 78.936-73.062zm-223.937 14.97c-9.102.202-17.867 5.04-22.75 13.5-7.444 12.89-3.017 29.37 9.874 36.81 12.89 7.443 29.37 3.016 36.812-9.874 7.442-12.89 3.016-29.37-9.875-36.813-4.43-2.558-9.294-3.73-14.06-3.625zm203.75 0c-4.768-.108-9.633 1.065-14.064 3.624-12.89 7.442-17.317 23.922-9.875 36.812 7.444 12.89 23.923 17.317 36.814 9.875 12.89-7.442 17.317-23.922 9.875-36.813-4.885-8.46-13.65-13.296-22.75-13.5z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAlienStareIcon);
    