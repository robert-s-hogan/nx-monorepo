
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCardAceSpadesIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'card-ace-spades'];
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
        <path fill="currentColor" d="M119.436 36c-16.126 0-29.2 17.237-29.2 38.5v363c0 21.263 13.074 38.5 29.2 38.5h275.298c16.126 0 29.198-17.237 29.198-38.5v-363c0-21.263-13.072-38.5-29.198-38.5H119.436zm26.654 8.047s46.338 33.838 47.271 63.068c.776 24.287-25.024 32.122-40.775 18.586l13.633 32.653h-40.117l13.613-32.635c-15.535 13.88-40.006 5.349-40.758-18.604-.88-28.01 47.133-63.068 47.133-63.068zm95.646 120.957h7.963l63.121 160.834c2.536 6.498 7.727 9.748 15.573 9.748h5.468v8.916h-70.134v-8.916h5.587c7.291 0 12.442-.792 15.454-2.377 2.06-1.11 3.09-2.813 3.09-5.111 0-1.347-.278-2.774-.833-4.28l-14.62-37.326h-69.423l-8.2 21.397c-2.14 5.706-3.21 10.222-3.21 13.55 0 3.884 1.782 7.213 5.348 9.987 3.645 2.774 8.916 4.16 15.81 4.16h5.944v8.916h-63.715v-8.916c6.815 0 12.204-1.466 16.166-4.399 3.962-3.011 7.61-8.676 10.938-16.998l59.673-149.185zm-3.447 33.879l-31.502 78.338h62.17l-30.668-78.338zm107.49 154.765h40.116l-13.633 32.653c15.75-13.536 41.551-5.701 40.775 18.586-.933 29.23-47.27 63.068-47.27 63.068s-48.011-35.058-47.132-63.068c.751-23.953 25.222-32.485 40.758-18.604l-13.614-32.635z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCardAceSpadesIcon);
    