import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPencilBrushIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'pencil-brush'];
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
        d="M54.438 29.793a23.808 23.808 0 0 0-1.204.012c-4.688.157-7.914 1.734-10.113 3.933-2.932 2.932-4.76 7.689-3.588 15.305 1.174 7.616 5.683 17.754 15.272 28.941 67.894 79.21 132.935 155.56 183.703 211.97 12.273 13.636 23.693 26.079 34.125 37.134 12.095-31.902 34.57-54.144 62.902-64.715-10.825-10.199-22.936-21.313-36.197-33.248C242.93 178.357 166.578 113.314 87.369 45.42c-11.186-9.59-21.325-14.098-28.941-15.272a29.555 29.555 0 0 0-3.99-.355zm375.109 1.043c-.307-.003-.6.004-.875.023-2.212.147-3.34.654-4.576 1.891l-27.58 27.58 55.156 55.154 27.578-27.58c1.238-1.236 1.745-2.362 1.89-4.574.15-2.21-.37-5.434-1.804-9.164-2.87-7.46-9.277-16.667-17.055-24.445-7.778-7.778-16.985-14.185-24.445-17.055-3.264-1.255-6.138-1.81-8.287-1.83h-.002zm-45.758 42.22l-9.9 9.901 9.9 9.898 12.727 12.729 9.9 9.898 12.729 12.729 9.898 9.9 9.9-9.9-55.154-55.154zm-22.627 22.628l-87.389 87.39 10.467 9.332 86.822-86.822-9.9-9.9zm22.627 22.629l-86.092 86.09 10.469 9.331 85.523-85.523-9.9-9.899zm22.629 22.624l-84.795 84.795 10.469 9.332 84.226-84.226-9.898-9.9h-.002zm-213.857 123.35L72.664 384.186l9.898 9.898 119.342-119.342-9.343-10.455zm157.66 12.147c-30.461 7.627-53.24 29.184-63.608 65.218 5.652 5.785 10.956 11.085 15.78 15.707 7.58 7.264 14.096 13.007 19.21 16.957 1.777-17.225 10.045-33.062 21.645-44.691 10.601-10.628 24.496-18.006 39.125-19.092-3.87-4.836-9.139-10.75-15.629-17.523-4.838-5.047-10.416-10.623-16.523-16.576zm-136.303 11.748L95.289 406.809l9.9 9.902 118.075-118.074-9.346-10.455zm21.361 23.894L117.918 429.437l9.896 9.9 116.81-116.806-9.345-10.455zm150.293 16.307c-10.397.137-20.929 5.28-29.582 13.955-11.537 11.565-18.674 28.851-16.267 45.701 5.334 37.342 23.75 65.81 49.46 81.236 22.728 13.636 51.452 17.35 83.643 6.983-24.222-4.01-46.475-30.705-48.197-50.649 10.63 12.814 23.94 24.547 38.426 31.75-9.881-22.578-9.201-45.453-11.088-64.322-1.352-13.522-3.891-24.982-11.377-35.162-7.486-10.18-20.423-19.8-44.74-27.906a31.062 31.062 0 0 0-10.278-1.586zm-322.35 71.816l-.003.002.002.002.002-.004zm-.001.004l-12.117 30.3 30.392 30.395 30.305-12.12-6.61-6.612-12.732-12.727-9.898-9.898-12.73-12.728-6.61-6.61zm-19.395 48.485l-12.992 32.476 32.478-12.992-19.486-19.485z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPencilBrushIcon })
);
