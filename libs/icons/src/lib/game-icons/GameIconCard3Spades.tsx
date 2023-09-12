
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCard3SpadesIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'card-3-spades'];
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
        <path fill="currentColor" d="M119.436 36c-16.126 0-29.2 17.237-29.2 38.5v363c0 21.263 13.074 38.5 29.2 38.5h275.298c16.126 0 29.198-17.237 29.198-38.5v-363c0-21.263-13.072-38.5-29.198-38.5H119.436zm26.652 8.047s46.338 33.838 47.271 63.068c.776 24.287-25.024 32.12-40.775 18.584l13.633 32.655h-40.115l13.613-32.635c-15.535 13.88-40.006 5.347-40.758-18.606-.88-28.01 47.13-63.066 47.13-63.066zm99.451 132.488c14.899 0 26.786 4.002 35.662 12.006 8.876 8.004 13.313 17.91 13.313 29.719 0 8.48-2.416 15.809-7.25 21.99-4.755 6.181-12.998 11.65-24.727 16.404 11.333 2.774 20.17 7.37 26.51 13.79 8.083 8.162 12.125 18.266 12.125 30.312 0 13.63-4.836 24.567-14.504 32.808-11.015 9.51-25.359 14.266-43.031 14.266-10.62 0-19.772-1.743-27.46-5.23-7.607-3.487-13.313-8.203-17.116-14.147-3.804-5.943-5.707-12.64-5.707-20.09 0-6.023 1.466-10.776 4.398-14.263 2.932-3.487 6.617-5.23 11.055-5.23 4.041 0 7.291 1.346 9.748 4.04 2.456 2.615 3.685 6.222 3.685 10.819 0 2.932-.634 5.427-1.902 7.488-1.268 1.981-3.486 3.844-6.656 5.588-3.408 1.822-5.112 3.566-5.112 5.23 0 2.378 1.19 5.07 3.567 8.082 2.456 2.932 6.021 5.31 10.697 7.133 4.755 1.743 10.738 2.615 17.95 2.615 12.441 0 21.636-3.052 27.58-9.154 6.022-6.181 9.032-16.046 9.032-29.598 0-14.185-2.575-24.25-7.726-30.193-5.072-6.023-12.64-9.035-22.705-9.035-2.695 0-6.062.317-10.104.95-3.249.476-5.587.714-7.013.714-2.378 0-4.24-.475-5.586-1.426-1.268-1.03-1.903-2.299-1.903-3.805 0-1.664.595-2.93 1.784-3.802 1.268-.951 3.288-1.428 6.062-1.428l6.537.238 5.707.238c10.065 0 17.631-2.575 22.703-7.726 5.072-5.151 7.61-13.117 7.61-23.895 0-13.234-2.418-22.624-7.252-28.172-4.834-5.626-12.046-8.439-21.635-8.439-8.797 0-15.81 1.584-21.041 4.754-5.23 3.17-7.846 6.102-7.846 8.797 0 1.743 1.506 4.081 4.518 7.013 4.28 3.963 6.42 8.084 6.42 12.364 0 3.249-1.19 5.982-3.567 8.2-2.377 2.22-5.43 3.33-9.154 3.33-3.962 0-7.21-1.507-9.746-4.519-2.457-3.01-3.686-7.21-3.686-12.6 0-8.4 3.01-15.848 9.034-22.347 8.558-9.193 20.803-13.789 36.732-13.789zm100.238 177.113h40.118l-13.633 32.653c15.75-13.536 41.551-5.701 40.775 18.586-.933 29.23-47.271 63.068-47.271 63.068s-48.01-35.059-47.131-63.068c.751-23.953 25.222-32.485 40.758-18.604l-13.616-32.635z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCard3SpadesIcon);
    