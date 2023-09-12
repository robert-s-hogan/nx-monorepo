
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBirdLimbIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'bird-limb'];
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
        <path fill="currentColor" d="M129.5 21.25l-.406 79.72L52.5 94.905l61.094 64.03-92.906 29.314s65.592 16.927 109.062 30.375l50.22-17.094-20.157-39.686-6.938-13.656 15.313.062 40.906.188c-10.145-13.34-18.836-26.114-25.22-37.094C165.518 79.764 129.5 21.25 129.5 21.25zM183.406 167l18.125 35.688 4.876 9.593-10.22 3.47-36.81 12.53c32.72 11.145 64.403 23.95 92.56 42.157l-8.81-31.78-3.22-11.626 12.063-.218 30.124-.562c-19.93-16.5-40.332-37.76-58.063-59.03l-40.624-.22zm215.875 44.53c-.764.014-1.543.03-2.31.064l-42.783 43.156c-12.067 5.72-28.657.866-46.937-10.28l-42.906.81 11.97 43.157c11.953 10.085 23.01 21.54 32.905 34.782.007.01.02.018.03.03l.28.406c31.367 45.788 37.903 122.127-37.155 137.938 71.063 33.236 111.556-45.42 95.594-98.375 33.45 35.653 40.736 89.985-16.126 127.374 96.784 10.962 97.8-108.47 47.687-159.53 45.487 8.812 78.87 53.29 48.783 116.78 90.99-35.057 30.803-137.264-44.438-162.75-3.958 7.772-8.396 14.785-13.688 20.78-5.473 3.44-11.014 5.093-17.187 5.595-7.543.612-16.202-.73-26.03-3.845 10.357-.54 17.71-3.67 24.31-9.28 5.25-4.463 9.99-10.76 14.376-18.75 9.424-27.246 47.878-38.25 99.188 1.405 3.77-30.594-37.373-70.267-85.563-69.47z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBirdLimbIcon);
    