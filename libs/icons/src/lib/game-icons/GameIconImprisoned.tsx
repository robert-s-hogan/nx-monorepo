
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconImprisonedIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'imprisoned'];
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
        <path fill="currentColor" d="M81 17.656v15.22c-11.175 4.177-18.906 15.608-18.906 28.343 0 12.734 7.73 24.165 18.906 28.343v23.374c-11.175 4.178-18.906 15.61-18.906 28.344 0 12.736 7.73 24.167 18.906 28.345v24.47c-11.175 4.177-18.906 15.607-18.906 28.343 0 12.735 7.73 24.165 18.906 28.343v20.407l-15.875-4.03-43.063 120.906c-.01.034-.022.06-.03.093-2.42 9.276-.887 15.685 2.374 20.656 3.274 4.99 8.77 8.62 15.063 10.188 6.292 1.567 13.143.948 18.686-1.844 5.544-2.79 10.056-7.47 12.438-15.906l.125-.438.155-.406 26.28-67.75 3.064-7.875 8.155 2.25 54.875 15.19 5.656 1.56 1.063 5.72 26.624 143.625h15.5v.063h89.594v-.063h15.406L343.72 349.5l1.06-5.72 5.658-1.56 54.875-15.19 8.156-2.25 3.06 7.876 26.283 67.75.156.406.124.438c2.382 8.437 6.862 13.115 12.406 15.906 5.544 2.792 12.425 3.41 18.72 1.844 6.292-1.567 11.787-5.198 15.06-10.188 3.263-4.97 4.797-11.38 2.376-20.656l-.03-.094-43.063-120.906-14.563 3.72V250.78c11.184-4.177 18.938-15.607 18.938-28.343 0-12.735-7.754-24.165-18.938-28.343v-24.47c11.184-4.177 18.938-15.608 18.938-28.343 0-12.734-7.754-24.165-18.938-28.343V89.564c11.184-4.178 18.938-15.61 18.938-28.344 0-12.736-7.754-24.167-18.938-28.345v-15.22h-18.688v15.22c-11.175 4.178-18.906 15.61-18.906 28.344 0 12.734 7.73 24.165 18.906 28.343v23.374c-11.175 4.178-18.906 15.61-18.906 28.344 0 12.736 7.73 24.167 18.906 28.345v24.47c-11.175 4.177-18.906 15.607-18.906 28.343 0 12.735 7.73 24.165 18.906 28.343v24.845l-84.093 21.438c.79 4.353 1.217 8.83 1.217 13.406 0 41.343-33.718 75.06-75.062 75.06-41.344 0-75.063-33.717-75.063-75.06 0-4.49.426-8.88 1.188-13.158l-84.406-21.5h.594v-25.03c11.183-4.18 18.937-15.61 18.937-28.345s-7.754-24.165-18.938-28.343v-24.47c11.184-4.177 18.938-15.608 18.938-28.343 0-12.734-7.754-24.165-18.938-28.343V89.564c11.184-4.178 18.938-15.61 18.938-28.344 0-12.736-7.754-24.167-18.938-28.345v-15.22H81zm9.344 32.22c4.922 0 9.594 4.528 9.594 11.343 0 6.813-4.673 11.343-9.594 11.343-4.92 0-9.563-4.53-9.563-11.344 0-6.816 4.642-11.345 9.564-11.345zm334.312 0c4.922 0 9.594 4.528 9.594 11.343 0 6.813-4.673 11.343-9.594 11.343-4.92 0-9.562-4.53-9.562-11.344 0-6.816 4.64-11.345 9.562-11.345zm-334.312 80.06c4.922 0 9.594 4.53 9.594 11.345 0 6.816-4.673 11.345-9.594 11.345-4.92 0-9.563-4.53-9.563-11.344 0-6.813 4.642-11.343 9.564-11.343zm334.312 0c4.922 0 9.594 4.53 9.594 11.345 0 6.816-4.673 11.345-9.594 11.345-4.92 0-9.562-4.53-9.562-11.344 0-6.813 4.64-11.343 9.562-11.343zM90.344 211.096c4.922 0 9.594 4.53 9.594 11.344 0 6.814-4.673 11.343-9.594 11.343-4.92 0-9.563-4.528-9.563-11.343 0-6.814 4.642-11.343 9.564-11.343zm334.312 0c4.922 0 9.594 4.53 9.594 11.344 0 6.814-4.673 11.343-9.594 11.343-4.92 0-9.562-4.528-9.562-11.343 0-6.814 4.64-11.343 9.562-11.343zm-167.28 43c-31.245 0-56.376 25.13-56.376 56.375 0 19.348 9.646 36.356 24.406 46.5v-19.626h18.688v27.906c4.257 1.02 8.702 1.594 13.28 1.594 4.782 0 9.418-.61 13.845-1.72v-27.78h18.686v19.22c14.44-10.188 23.844-26.995 23.844-46.095 0-31.245-25.13-56.376-56.375-56.376z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconImprisonedIcon);
    