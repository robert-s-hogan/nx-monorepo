
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconArrowsShieldIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'arrows-shield'];
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
        <path fill="currentColor" d="M17.47 26.563v20.875L84.812 81.06l-14.5 30.47 155.968 24.03L109.313 29.626 92.876 64.188 17.47 26.562zm354.842 32.5c-4.43.024-8.844.136-13.218.343-45.09 2.137-86.237 14.54-113.28 38.782.172 77.194 5.056 152.54 23.124 213.687 17.983 60.865 48.327 106.972 99.687 129.906 45.97-20.273 76.837-71.63 95.97-138.56 19.067-66.71 26.205-147.742 26.592-224.126-34.766-12.206-75.27-19.68-114.437-20.03-1.48-.015-2.96-.01-4.438-.002zm-6.5 27.968c1.047-.006 2.107-.008 3.157 0 29.384.265 59.388 6.713 85.03 17.44l5.72 2.405v6.22c0 58.435-4.575 121.105-18.064 173.78-13.488 52.675-35.843 96.5-74.375 113.688l-3.905 1.718-3.844-1.78c-40.63-18.93-63.79-58.79-76.592-107.156-12.803-48.366-15.813-106.07-15.813-164.5v-3.688l2.5-2.687c21.535-23.147 53.538-33.397 86.813-35.157 3.12-.166 6.235-.26 9.375-.282zm3 18.69c-3.82-.04-7.618.05-11.375.25-28.647 1.514-54.426 10.133-71.562 26.81.145 56.383 3.362 111.343 15.125 155.782 11.566 43.697 30.844 76.442 62.5 93 27.89-14.766 47.736-51.3 60.03-99.312 12.383-48.354 17.045-107.17 17.376-162.78-22.038-8.363-47.53-13.5-72.094-13.75zM91.875 162.155l-2.844 33.78-71.56-6.592v18.75l69.968 6.47-2.844 33.624 146.97-30.875-139.69-55.157zm9.97 128.156l8.03 27.532L17.47 344.47v19.467l97.624-28.187 9.437 32.344 118.25-76.688-140.936-1.094zm171.436 85.094l-145.155 44.438 19.03 28.5-70.093 46.78.376.563h32.468l47.625-31.78 19.032 28.53 96.72-117.03z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconArrowsShieldIcon);
    