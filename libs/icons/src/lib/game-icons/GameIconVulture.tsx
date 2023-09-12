
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconVultureIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'vulture'];
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
        <path fill="currentColor" d="M363.188 28.063c-34.372 0-62.25 27.863-62.25 62.218 0 2.92.204 5.782.593 8.595-17.072 3.958-33.287 12.576-46.592 25.875-12.052 12.046-30.82 44.714-50.813 83.625L120.25 272.28l32.03.72-84.718 43.406 74.032-3.562-38.438 25.656L143 336.125c-1.84 4.05-3.69 8.165-5.406 11.97l-121.688 66.25 46.75-1.283L19 461.094l46.75-17.03-3.625 32.873 126.938-104.28c5.69 16.434 15.305 28.105 27.156 32.624l32.124 59.47c-20.13 2.938-39.952 12.047-55.063 26.47h129.5c-13.087-17.008-32.674-25.766-53.624-27.283l-31.406-58.156c21.746-6.568 46.638-34.228 67.875-92.28 19.033-10.784 34.323-20.795 42.375-28.844 33.67-33.656 72.28-103.9 53.844-145.687.006-.006.025.004.03 0 38.314-5.095 66.074-7.915 86.438 21.53 5.48-46.96-25.07-65.864-57.406-74.53-1.616-6.128-4.74-11.664-8.97-16.157-8.466-24.3-31.55-41.75-58.748-41.75zm31.53 48.593c10.484 0 18.75 8.3 18.75 18.78 0 10.482-8.267 18.783-18.75 18.783-10.482 0-18.78-8.302-18.78-18.782s8.297-18.782 18.78-18.782z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconVultureIcon);
    