
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCrocJawsIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'croc-jaws'];
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
        <path fill="currentColor" d="M145.53 23.844L21.47 42.937v391.47l81.155-21.157 15.25 34.844L193.75 418l20.375 40.75 67.03-29.47 19.064 37.345 73.81-29 28.626 45.438 78.28-78.563-34.592.813-7.28.156-1.94-7.033L425.5 356.22l-.813.467-.406-1.062-52.717 40.25-11.844 9.03-2.97-14.592-8.78-43.188-46.5 36.5-11.47 9-3.406-14.188-11.25-47.406-52.53 25.69-10.283 5-2.874-11.033-9.28-35.468-34.876 17.124-9.22 4.562-3.624-9.625-49.78-131.436 17.468-6.625 10.53 27.81 43.626-21.436 54.28-31.28 5.407-3.126 4.938 3.812 33.344 25.656 35.25-31.687 6.25-5.626 6.28 5.625 29.97 27.06 25.124-24.28 6.28-6.094 6.5 5.875 30.938 28.032 28.157-32.312 5.717-6.53 6.938 5.186 32.97 24.625 5.936-35.5-51.655-69.75-17.625 28.314-42-53.563-28.375 45.845-125.72-16.406 30.75 28.374-12.655 13.75-105.97-97.75zm-.28 37.656l.344.438.094-.094 52.78 59.812-14 12.375-37.343-42.343-46.25 29.97-53.75-32.126L145.25 61.5zm310.375 114.563l-26.53 30.406 35.842 49.25 23.313-55.282-32.625-24.375zM313.97 178.5l-32.314 29.063 21.47 27.5 34.187-35.5-23.344-21.063zm68.092 2.75l-25.125 24.313-1.03 1 25.624 41.593 27.75-42.22-27.217-24.686zm-149.343 2.375l-26 15 20.81 37.5 32.44-31.53-27.25-20.97zm-45.282 65.188l-32.72 31.156L166.5 311.06l34.063-16.78-13.125-45.47zM259 264.342l-44.03 32.813.593 2.25 9.28 35.5 47.845-23.375L259 264.345zm74.094 12.282l-42.97 35.78.688 2.97 10.594 44.53 42.813-33.624-11.126-49.655zm66.562 14l-36.5 37.563.094.375 8.844 43.375 45.28-34.532-17.718-46.78zm86.406 29.47l-43.937 26.186 11.063 40.158 32.312-.75.563-65.594z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCrocJawsIcon);
    