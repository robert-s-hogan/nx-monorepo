import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconRabbitIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'rabbit'];
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
        d="M242.29 27.29c-4.165 0-4.79.695-5.593 3.058-.803 2.362-.714 8.368 4.065 17.097 8.758 16 32.356 39.726 78.675 64.582 7.15-7.48 15.604-12.92 24.57-16.713-25.48-14.076-44.05-29.58-58.892-42.158-18.93-16.04-31.326-25.867-42.826-25.867zm-66.274 54.66c-3.815.007-4.68.864-5.07 1.355-.39.49-1 1.882-.485 5.125 1.03 6.484 7.16 18.015 18 28.943 21.683 21.855 60.793 42.287 109.542 34.72 2.13-.33 4.725-.616 7.846 1.194 3.12 1.81 4.73 5.96 4.77 8.36.076 4.807-1.495 6.874-2.722 9.546-2.452 5.345-4.35 11.657-4.375 11.47v.003c1.98 15 14.374 26.28 32.396 34.63 18.023 8.353 40.75 13.004 58.875 14.737 12.552 1.2 27.23.995 40.9-1.388-1.555-2.715-2.676-5.576-3.31-8.516-1.763-8.156.105-16.39 4.093-23.327 6.392-11.12 18.112-19.685 32.36-22.83-4.64-7.837-10.434-16.323-17.024-24.592-19.92-24.992-47.433-46.955-67.978-47.384-20.465-.427-44.107 6.055-57.367 24.242-2.24 3.07-5.56 4.144-8.018 4.46-2.457.318-4.623.1-6.92-.284-4.592-.766-9.7-2.373-15.613-4.527-11.825-4.308-26.625-10.89-42.127-17.774-15.502-6.883-31.668-14.06-45.744-19.44-14.076-5.38-26.546-8.735-32.027-8.724zm224.422 61.915a16 16 0 0 1 15.533 15.994 16 16 0 0 1-32 0 16 16 0 0 1 16.467-15.995zM39.79 190.777c-.804.006-2.017.25-4.017 1.24a9 9 0 0 0-.002 0c-4.252 2.103-7.437 7.213-8.883 16.325-1.447 9.11-.696 21.27 1.888 33.53 2.585 12.263 6.954 24.683 12.116 34.634 3.023 5.827 6.386 10.568 9.53 14.133 4.966-17.297 13.943-33.833 27.697-48.44-3.153-2.038-5.968-4.422-8.365-7.046-7.05-7.717-11.604-16.873-15.648-24.877-4.045-8.003-7.82-14.854-10.64-17.605-1.408-1.376-2.22-1.714-2.99-1.84-.192-.032-.414-.057-.683-.055zm437.63 2.06c-11.655 1.13-21.29 7.89-25.342 14.936-2.183 3.797-2.794 7.368-2.105 10.555.51 2.36 1.71 4.797 4.408 7.29 11.853-4.564 21.157-11.42 26.145-20.938-.286.42.182-1.32-.504-4.184-.494-2.07-1.397-4.71-2.6-7.66zm-198.496 7.724c-2.463-.004-4.896.007-7.3.034-71.537.806-120.588 13.47-152.624 32.187-36.613 21.393-51.716 50.092-54.844 81.44-3.128 31.346 6.6 65.513 22 94.56 14.84 27.988 35.094 51.027 51.97 62.22H312.19c-.134-1.91-.67-3.555-1.502-5.188-1.637-3.21-4.918-6.56-10.032-9.687-10.228-6.256-27.12-11.045-44.812-14.438-17.693-3.392-36.175-5.596-50.625-8-7.227-1.2-13.393-2.377-18.532-4.125-2.57-.873-4.92-1.813-7.313-3.593-2.392-1.782-5.313-5.385-5.313-9.97 0-2.61 1.27-4.982 2.375-6.22 1.107-1.236 2.03-1.74 2.75-2.124 1.442-.765 2.283-.952 3.125-1.156 1.686-.408 3.238-.605 5.125-.813 3.776-.414 8.714-.75 14.72-1.187 12.01-.875 28.107-2.106 44.968-4.688 33.722-5.162 69.382-16.778 81.156-36.437 6.403-10.69 5.69-20.67-.56-31.156-6.253-10.487-18.818-20.728-35.72-27.376-33.803-13.297-84.07-12.464-132.72 22.47l-10.5-14.627c33.327-23.93 67.99-33.66 99-33.78 18.608-.072 35.892 3.33 50.782 9.187 19.854 7.81 35.666 19.93 44.594 34.906 8.93 14.976 10.196 33.537.563 49.625-17.64 29.45-58.476 39.55-93.876 44.97-5.897.902-11.315 1.47-16.844 2.092 8.423 1.25 17.318 2.606 26.22 4.313 18.544 3.556 36.893 8.25 50.842 16.78 6.975 4.267 12.99 9.656 16.657 16.845 2.058 4.04 3.204 8.593 3.37 13.375h130.66c2.072-1.76 3.435-3.254 3.844-4.063.538-1.064.46-1.178.25-2.062-.423-1.77-3.667-6.165-7.78-11.125-2.527-3.044-11.017-7.917-21.658-10.594-10.64-2.677-23.344-3.65-34.25-2.22l-2.344.283-2.218-.876c-6.667-2.715-11.864-9.652-12.25-16.313-.386-6.66 1.89-12.352 4.72-18.467 5.655-12.23 14.802-26.366 22.186-42.72 7.384-16.352 12.907-34.52 11.72-53.843-1.153-18.73-8.467-38.93-27.84-60.88-.622-.052-1.248-.1-1.86-.16h-.002c-19.505-1.864-43.524-6.62-64.08-16.146-15.233-7.06-29.065-17.167-36.415-31.074-4.692-.1-9.332-.172-13.85-.18z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconRabbitIcon })
);
