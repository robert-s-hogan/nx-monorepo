
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCard4SpadesIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'card-4-spades'];
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
        <path fill="currentColor" d="M119.434 36c-16.126 0-29.2 17.237-29.2 38.5v363c0 21.263 13.074 38.5 29.2 38.5h275.3c16.126 0 29.198-17.237 29.198-38.5v-363c0-21.263-13.072-38.5-29.198-38.5h-275.3zm26.654 8.047s46.338 33.838 47.271 63.068c.776 24.287-25.024 32.122-40.775 18.586l13.633 32.653H126.1l13.613-32.635c-15.535 13.88-40.004 5.349-40.756-18.604-.88-28.01 47.13-63.068 47.13-63.068zM269.67 179.625h7.726v112.453h27.34v10.106h-27.34v25.318c0 2.219.872 4.002 2.616 5.35 2.536 1.822 5.468 2.734 8.797 2.734h10.103v8.916h-65.974v-8.916h12.244c4.12 0 7.133-.872 9.035-2.615 1.981-1.744 2.97-4.28 2.97-7.608v-23.18h-67.28v-11.412l79.763-111.146zm-12.483 32.215l-57.416 80.238h57.417V211.84zm88.59 141.808h40.118l-13.633 32.653c15.75-13.536 41.551-5.701 40.775 18.586-.933 29.23-47.271 63.068-47.271 63.068s-48.012-35.059-47.133-63.068c.751-23.953 25.222-32.485 40.758-18.604l-13.614-32.635z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCard4SpadesIcon);
    