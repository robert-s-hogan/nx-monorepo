import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCard7SpadesIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'card-7-spades'];
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
      <path
        fill="currentColor"
        d="M119.436 36c-16.126 0-29.2 17.237-29.2 38.5v363.002c0 21.263 13.074 38.5 29.2 38.5h275.298c16.126 0 29.198-17.237 29.198-38.5V74.5c0-21.263-13.072-38.5-29.198-38.5H119.436zm26.652 8.047s46.338 33.838 47.271 63.068c.776 24.287-25.024 32.122-40.775 18.586l13.633 32.653H126.1l13.615-32.635c-15.535 13.88-40.006 5.349-40.758-18.604-.88-28.01 47.13-63.068 47.13-63.068zm57.846 132.607c7.766 1.982 16.166 2.973 25.2 2.973h73.938v5.467c-10.857 19.099-18.98 35.265-24.369 48.5-5.389 13.155-9.468 25.757-12.242 37.802-2.774 12.046-4.597 26.072-5.469 42.08-.792 13.235-1.546 21.438-2.26 24.608-.713 3.09-2.177 5.467-4.396 7.13-2.14 1.744-4.955 2.616-8.441 2.616-3.963 0-7.053-1.346-9.272-4.04-2.219-2.695-3.328-6.935-3.328-12.72 0-5.15.912-11.57 2.734-19.257 1.823-7.767 5.982-19.337 12.48-34.711 8.639-20.605 16.128-36.812 22.468-48.62l16.404-30.193h-64.428c-4.755 0-8.322 1.664-10.7 4.992-2.297 3.329-5.07 13.275-8.32 29.838h-8.558l8.559-56.465zM345.777 353.65h40.118l-13.633 32.653c15.75-13.536 41.551-5.701 40.775 18.586-.933 29.23-47.271 63.068-47.271 63.068v-.002s-48.01-35.057-47.131-63.066c.751-23.953 25.22-32.487 40.756-18.606l-13.614-32.633z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCard7SpadesIcon })
);
