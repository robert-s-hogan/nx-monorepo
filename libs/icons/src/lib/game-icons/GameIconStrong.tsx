
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconStrongIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'strong'];
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
        <path fill="currentColor" d="M257.375 20.313c-13.418 0-26.07 7.685-35.938 21.75-9.868 14.064-16.343 34.268-16.343 56.75 0 22.48 6.475 42.654 16.344 56.718 9.868 14.066 22.52 21.75 35.937 21.75 13.418 0 26.038-7.684 35.906-21.75 9.87-14.063 16.376-34.236 16.376-56.718 0-22.48-6.506-42.685-16.375-56.75-9.867-14.064-22.487-21.75-35.905-21.75zm-150.25 43.062c-20.305.574-23.996 13.892-31.78 29.03-23.298 45.304-55.564 164.75-55.564 164.75l160.47-5.436 29.125 137.593-22.78 106.03h149.093l-22.282-106 24.25-137.5 157.53 5.313c.002 0-32.264-119.447-55.56-164.75-7.787-15.14-11.477-28.457-31.782-29.03-17.898 0-32.406 15.552-32.406 34.718 0 19.166 14.508 34.72 32.406 34.72 3.728 0 7.258-.884 10.594-2.126l7.937 74.406L309.437 165c-.285.42-.552.867-.843 1.28-12.436 17.724-30.604 29.69-51.22 29.69-20.614 0-38.782-11.966-51.218-29.69-.277-.395-.54-.816-.812-1.218l-116.75 40.032 7.937-74.406c3.337 1.242 6.867 2.125 10.595 2.125 17.898 0 32.406-15.553 32.406-34.72 0-19.165-14.507-34.718-32.405-34.718z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconStrongIcon);
    