
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconRhinocerosHornIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'rhinoceros-horn'];
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
        <path fill="currentColor" d="M450.125 32.734c-9.41 47.727-17.293 105.183-30.922 156.774-8.34 31.574-18.838 60.978-33.72 84.795-12.89 20.63-29.425 37.144-50.47 46.172 12.023 25.86 43.083 47.34 76.24 53.63 3.538-6.146 7.304-13.7 11.08-22.447 10.868-25.16 21.89-59.925 29.843-99.13 13.89-68.487 18.235-150.56-2.05-219.794zM18 38.904V494h39.537c7.66-8.97 13.41-22.46 17.453-46 36.388 0 55.403-4.45 66.643-11.002-28.225-25.493-51.414-58.844-68.455-101.207 11.647 15.058 25.708 29.464 42.047 42.96 43.04 66.73 107.412 97.86 188.41 106.137.528-.748.977-1.347 1.726-2.532 1.156-1.823 2.407-3.91 4.275-6.074 1.868-2.162 4.978-5.622 10.906-5.264 5.675.342 8.213 3.45 10.146 5.636 1.932 2.186 3.372 4.383 4.71 6.342 1.196 1.756 2.208 3.126 2.928 3.985 33.258.64 59.62-3.37 76.278-12.105 16.926-8.875 24.842-20.973 24.392-42.29-1.524-14.847-11.34-27.683-26.947-40.118-40.617-6.275-78.99-31.115-94.06-66.02-11.03-1.295-20.466-8.332-27.383-16.86-8.08-9.963-13.61-22.38-16.327-34.36-10.642-23.767-32.987-62.51-58.23-95.098-12.69-16.383-26.14-31.236-38.918-41.884-3.5-2.917-6.942-5.467-10.282-7.67l-14.9 7.45c-8.804-17.61-12.764-38.21-16.733-56.073-2.863-12.88-6.157-24.08-9.576-31.213-18.795 14.465-23.428 28.884-22.86 44.033.64 16.96 9.29 35.243 17.27 51.202l-16.1 8.05c-1.334-2.667-2.734-5.49-4.14-8.38-11.03 13.237-20.28 31.073-26.37 50.798-6.42 20.808-9.224 43.544-7.645 65.106l-18.42-20.466c.835-17.014 3.946-34.01 8.865-49.95 7.323-23.725 18.72-45.27 33.504-61.33.698-.758 1.407-1.5 2.123-2.234-3.773-9.99-6.648-20.786-7.074-32.12-.12-3.19-.005-6.415.352-9.653C64.072 65.847 42.305 48.19 18 38.904zM194.36 60.74c-3.418 7.133-6.712 18.332-9.575 31.213-1.77 7.97-3.603 16.458-5.846 24.984 3.252 2.294 6.487 4.795 9.71 7.48 6.103 5.086 12.168 10.863 18.143 17.136 5.438-12.064 9.973-24.722 10.426-36.78.568-15.15-4.065-29.568-22.86-44.033zM351.41 203.564c-5.54 15.163-11.94 31.276-21.65 45.877-7.622 11.46-17.263 21.663-29.983 27.83-1.776.86-3.612 1.625-5.5 2.302 2.51 6.778 6.125 13.518 10.307 18.674 1.25 1.54 2.508 2.906 3.772 4.11l4.384 3.51c1.328.853 2.653 1.508 3.97 1.984l3.183-.938c11.455-3.372 21.48-9.33 30.41-17.547 1.077-3.574 2.058-7.328 2.9-11.252 4.44-20.718 5.33-46.135-1.792-74.55zm-125.21 118.57c6.122.148 12.176 1.467 17.788 3.446 12.83 4.524 24.37 12.33 33.467 19.26l-10.906 14.32c-.79-.602-1.616-1.21-2.442-1.816C261.828 364.064 255.42 369 248 369c-9.282 0-17-7.718-17-17 0-3.94 1.4-7.59 3.71-10.496-8.33-2.39-15.434-2.134-21.774 2.023l-9.872-15.054c6.477-4.247 13.5-6.1 20.508-6.328.876-.03 1.753-.03 2.627-.01zm170.46 100.637c1.472.012 2.965.11 4.473.3l-2.26 17.86c-9.21-1.166-15.993 2.556-23.755 12.58l-14.23-11.02c8.79-11.354 20.693-19.265 34.308-19.7.487-.017.974-.022 1.465-.02z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconRhinocerosHornIcon);
    