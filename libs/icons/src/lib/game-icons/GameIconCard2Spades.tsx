import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCard2SpadesIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'card-2-spades'];
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
        d="M119.436 36c-16.126 0-29.2 17.237-29.2 38.5v363c0 21.263 13.074 38.5 29.2 38.5h275.298c16.126 0 29.198-17.237 29.198-38.5v-363c0-21.263-13.072-38.5-29.198-38.5H119.436zm26.654 8.045s46.338 33.84 47.271 63.07c.776 24.287-25.026 32.12-40.777 18.584l13.633 32.653h-40.115l13.613-32.633c-15.535 13.88-40.006 5.347-40.758-18.606-.88-28.01 47.133-63.066 47.133-63.066v-.002zm99.687 132.49c9.59 0 18.465 2.06 26.627 6.182 8.242 4.12 14.424 9.549 18.545 16.285 4.121 6.657 6.182 13.946 6.182 21.871 0 5.468-1.031 11.016-3.092 16.643-2.06 5.626-5.07 10.897-9.033 15.81-6.816 8.48-13.83 15.731-21.041 21.754l-31.383 26.389c-7.925 6.657-13.71 12.322-17.355 16.998v.002c-3.646 4.675 14.344 7.011 53.968 7.011 5.944 0 10.183-1.544 12.72-4.634 2.535-3.091 5.428-11.651 8.677-25.678h8.084L294.87 344.5h-106.51v-6.418l34.592-39.348c19.257-20.921 30.828-34.076 34.711-39.464 5.547-7.688 9.59-15.097 12.125-22.229 2.536-7.212 3.805-13.75 3.805-19.615 0-9.748-2.695-17.394-8.084-22.942-5.39-5.626-12.878-8.44-22.467-8.44-10.778 0-19.573 2.576-26.389 7.727-6.815 5.152-10.224 10.62-10.224 16.405 0 1.981.516 3.487 1.547 4.517.95 1.03 3.01 1.94 6.18 2.733 8.003 1.902 12.007 6.578 12.007 14.027 0 4.042-1.348 7.41-4.043 10.104-2.694 2.615-6.142 3.923-10.342 3.923-4.834 0-9.073-2.218-12.718-6.656-3.646-4.517-5.47-10.382-5.47-17.594 0-8.083 2.061-15.414 6.182-21.992 4.2-6.657 10.5-12.085 18.9-16.285 8.401-4.28 17.436-6.418 27.104-6.418zM345.78 353.648h40.116l-13.633 32.653c15.75-13.536 41.551-5.701 40.775 18.586-.933 29.23-47.271 63.068-47.271 63.068s-48.01-35.059-47.131-63.068c.751-23.953 25.222-32.485 40.758-18.604l-13.614-32.635z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCard2SpadesIcon })
);
