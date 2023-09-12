
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconWhistleIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'whistle'];
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
        <path fill="currentColor" d="M93.75 81.443c-5.38 0-12.368 2.49-22.358 8.967 3.966 4.682 8.167 9.687 16.47 19.256 5.782 6.663 11.618 13.29 16.026 18.088.038.042.055.055.092.096l30.894-17.932-14.652-14.148c-11.292-9.404-18.644-13.866-25.418-14.293-.345-.022-.696-.034-1.055-.034zm120.08 15.082c-.885-.01-1.767-.006-2.643.01-10.46.193-20.2 2.23-26.742 5.424l-67.262 39.038c2.45.544 4.885 1.196 7.287 2.02 17.275 5.923 33.093 18.223 49.568 34.7l216.44 213.5 80.978-44.433L258.54 111.38c-8.656-7.84-22.49-12.908-36.693-14.394-2.677-.28-5.363-.43-8.018-.46zM58.192 102.74c-17.543 20.723-20.57 37.186-15.326 57.004.692 2.618 3.057 6.357 6.373 10.47 2.195-3.144 4.55-6.304 7.086-9.478 3.99-4.995 8.385-9.183 13.085-12.558l-.106-.2 2.768-1.61c1.354-.862 2.73-1.66 4.13-2.393l11.868-6.89c-4.175-4.618-8.94-10.017-13.803-15.622-5.956-6.864-11.732-13.62-16.074-18.723zm184.093 13.438l58.415 61.67c-46.086-5.037-56.79 13.2-69.027 34.2l-57.334-59.304 67.946-36.566zM103.702 157.23c-.714-.016-1.43-.016-2.15.002-6.976.18-14.207 2.058-22.252 5.885-3.035 2.29-5.99 5.196-8.91 8.852-25.77 32.264-30.45 59.135-25.484 83.477 4.965 24.343 20.536 46.656 37.916 66.455 13.314 15.168 28.86 23.992 48.472 27.93 19.614 3.94 43.438 2.708 71.98-3.475 33.246-7.2 66.01 8.42 95.81 27.665 26.118 16.868 50.676 37.09 70.98 49.95l8.79-18.935-217.52-214.57-.022-.022c-15.524-15.524-29.565-25.905-42.682-30.402-5.02-1.722-9.925-2.695-14.928-2.813zm367.08 210.456l-73.45 40.304-10.48 22.567 70.833-38.41 13.096-24.46z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconWhistleIcon);
    