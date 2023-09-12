
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCrownedHeartIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'crowned-heart'];
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
        <path fill="currentColor" d="M402.75 23l-89.344 68.938-63.062-67.188-63.094 67.188L105.5 28.25l32.688 126.156h230.125L402.75 23zM250.156 83.375L274.906 106l-24.75 32.53-24.75-32.53 24.75-22.625zm-85.187 22.03c8.495 0 15.186 6.69 15.186 15.19 0 8.493-6.69 15.155-15.187 15.155-8.498 0-15.19-6.662-15.19-15.156s6.693-15.188 15.19-15.188zm175.75 0c8.495 0 15.186 6.69 15.186 15.19 0 8.493-6.69 15.155-15.187 15.155-8.498 0-15.19-6.662-15.19-15.156s6.693-15.188 15.19-15.188zm-2.626 67.75c-30.447 0-57.398 15.37-73.5 38.75-3.405 4.224-6.59 8.79-9.47 13.75-47.705-89.566-166.746-56.19-169.718 38.47-3.167 100.887 128.862 126.438 169.72 227.156 30.69-79.906 117.94-116.335 154.186-175.342 11.27-14.935 17.97-33.502 17.97-53.594 0-12.793-2.745-24.955-7.626-35.97-.07-.19-.146-.372-.22-.56-.018-.044-.042-.084-.06-.126-9.253-24.158-28.222-40.056-50.563-47.063l-.094-.03c-9.557-3.51-19.876-5.44-30.626-5.44zm0 18.69c39.046 0 70.5 31.453 70.5 70.5 0 24.645-12.53 46.278-31.594 58.874 10.26-20.05 8.604-48.964-6.375-74.908-17.312-29.985-47.004-46.536-72.063-42.406 11.263-7.618 24.858-12.062 39.532-12.062z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCrownedHeartIcon);
    