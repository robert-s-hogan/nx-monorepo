
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCard7DiamondsIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'card-7-diamonds'];
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
        <path fill="currentColor" d="M119.436 36c-16.126 0-29.2 17.237-29.2 38.5v363c0 21.263 13.074 38.5 29.2 38.5h275.298c16.126 0 29.198-17.237 29.198-38.5v-363c0-21.263-13.072-38.5-29.198-38.5H119.436zm26.884 3.717h.002l47.393 58.271-47.393 58.287-47.377-58.289 47.375-58.27zm58.7 136.937c7.766 1.982 16.164 2.971 25.199 2.971h73.94v5.469c-10.858 19.099-18.981 35.265-24.37 48.5-5.389 13.155-9.47 25.755-12.244 37.8-2.774 12.046-4.595 26.074-5.467 42.083-.792 13.234-1.546 21.435-2.26 24.605-.713 3.09-2.18 5.469-4.398 7.133-2.14 1.743-4.953 2.615-8.44 2.615-3.962 0-7.052-1.346-9.271-4.04-2.219-2.695-3.328-6.937-3.328-12.722 0-5.15.91-11.568 2.732-19.255 1.823-7.767 5.984-19.337 12.483-34.711 8.638-20.605 16.127-36.812 22.466-48.62l16.405-30.193h-64.428c-4.755 0-8.322 1.664-10.7 4.992-2.297 3.329-5.07 13.275-8.32 29.838h-8.558l8.559-56.465zm160.642 175.87h.002l47.39 58.27-47.39 58.288-47.377-58.287 47.375-58.272z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCard7DiamondsIcon);
    