
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSpainIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'spain'];
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
        <path fill="currentColor" d="M105.596 82.69c-35.235-.159-63.219 3.749-79.754 13.432l22.717 61.192 72.273 16c-30.57 62.613-31.05 127.647-40.273 192l64 64c42.477-17.102 81.95-22.872 128-23.945 10.226-18.087 18.296-38.667 46.611-44.924-1.617-30.208 15.277-36.212 32.686-52.81-4.287-31.292-.694-49.583 20.918-88.274l84.212-58.535-9.13-25.68c-114.8-25.068-252.215-52.047-342.26-52.455zm369.408 156.983c-9.503-.388-11.76 5.157-10.271 11.533 6.318 5.616 13.497 7.355 21.136 7.024 1.07-6.96-.788-13.039-6.338-18.012-1.663-.312-3.17-.49-4.527-.545zm-33.486 11.07c-9.603.076-18.698 8.776-27.637 20.13 2.107 1.053 28.094 18.962 28.094 18.962l15.1-31.254c-5.36-5.55-10.528-7.877-15.557-7.837zm-47.625 38.303c-8.017.003-15.008 1.902-15.83 15.188l10.183 7.373 9.131-22.475a82.611 82.611 0 0 0-3.484-.086z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSpainIcon);
    