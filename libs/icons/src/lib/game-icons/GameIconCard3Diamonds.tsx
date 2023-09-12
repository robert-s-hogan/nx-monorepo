
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCard3DiamondsIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'card-3-diamonds'];
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
        <path fill="currentColor" d="M119.436 36c-16.126 0-29.2 17.237-29.2 38.5v363c0 21.263 13.074 38.5 29.2 38.5h275.298c16.126 0 29.198-17.237 29.198-38.5v-363c0-21.263-13.072-38.5-29.198-38.5H119.436zm26.884 3.717h.002l47.393 58.271-47.393 58.287-47.377-58.289 47.375-58.27zm100.303 136.818c14.899 0 26.786 4.002 35.662 12.006 8.876 8.004 13.315 17.91 13.315 29.719 0 8.48-2.418 15.809-7.252 21.99-4.755 6.181-12.996 11.65-24.725 16.404 11.332 2.774 20.168 7.37 26.508 13.79 8.083 8.162 12.125 18.266 12.125 30.312 0 13.63-4.834 24.567-14.502 32.808-11.015 9.51-25.359 14.266-43.031 14.266-10.62 0-19.774-1.743-27.461-5.23-7.608-3.487-13.314-8.203-17.117-14.147-3.804-5.943-5.706-12.638-5.706-20.088 0-6.023 1.467-10.778 4.399-14.265s6.617-5.23 11.055-5.23c4.041 0 7.29 1.346 9.748 4.04 2.456 2.615 3.683 6.222 3.683 10.819 0 2.932-.632 5.427-1.9 7.488-1.268 1.981-3.489 3.844-6.658 5.588-3.408 1.822-5.112 3.566-5.112 5.23 0 2.378 1.19 5.07 3.567 8.082 2.457 2.932 6.023 5.31 10.699 7.133 4.755 1.743 10.738 2.615 17.95 2.615 12.441 0 21.634-3.05 27.577-9.152 6.023-6.181 9.035-16.048 9.035-29.6 0-14.185-2.577-24.25-7.728-30.193-5.072-6.023-12.639-9.035-22.703-9.035-2.695 0-6.064.317-10.106.95-3.249.476-5.585.714-7.011.714-2.378 0-4.241-.475-5.588-1.426-1.268-1.03-1.903-2.299-1.903-3.805 0-1.664.595-2.93 1.784-3.802 1.268-.951 3.288-1.428 6.062-1.428l6.54.238 5.704.238c10.065 0 17.633-2.575 22.705-7.726 5.072-5.151 7.608-13.117 7.608-23.895 0-13.234-2.418-22.624-7.252-28.172-4.834-5.626-12.046-8.439-21.635-8.439-8.797 0-15.809 1.584-21.04 4.754-5.23 3.17-7.845 6.102-7.845 8.797 0 1.743 1.506 4.081 4.518 7.013 4.28 3.963 6.418 8.084 6.418 12.364 0 3.249-1.19 5.982-3.567 8.2-2.377 2.22-5.427 3.33-9.152 3.33-3.962 0-7.212-1.505-9.748-4.517-2.457-3.011-3.686-7.212-3.686-12.601 0-8.4 3.013-15.85 9.036-22.348 8.558-9.193 20.801-13.789 36.73-13.789zm119.04 175.988h.001l47.39 58.272-47.39 58.287-47.377-58.289 47.375-58.27z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCard3DiamondsIcon);
    