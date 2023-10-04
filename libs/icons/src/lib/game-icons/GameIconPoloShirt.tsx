import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPoloShirtIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'polo-shirt'];
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
        d="M256 33.978c-12.67 0-25.34 2.52-38.01 7.535 1.27 3.61 3.864 7.593 8.373 12.102C232.68 59.93 242.613 66.83 256 73.847c13.386-7.018 23.32-13.916 29.637-20.232 4.51-4.51 7.103-8.492 8.373-12.102-12.67-5.016-25.34-7.535-38.01-7.535zM201.88 49.1l-16.144 8.073c1.306 5.74 4.437 13.84 9.752 21.813 6.26 9.39 15.44 18.664 27.082 25.695l18.475-18.473c-11.317-6.394-20.465-12.923-27.408-19.866-5.34-5.34-9.265-11.148-11.756-17.24zm108.24 0c-2.492 6.092-6.417 11.9-11.757 17.24-6.943 6.944-16.09 13.473-27.408 19.867l18.475 18.474c11.64-7.03 20.823-16.305 27.082-25.694 5.315-7.973 8.446-16.072 9.752-21.813L310.12 49.1zm-140.6 17.775l-36.918 9.23-71.875 71.873L112 199.252l9.637-9.637 16.738-16.738L128 467.977c76.448 13.61 193.653 13.173 256 0l-10.375-295.1L400 199.252l51.273-51.274-71.875-71.873-36.92-9.23c-2.243 7.068-5.946 14.53-10.99 22.095-8.768 13.152-21.853 26.254-39.463 35.06l-5.802 2.9L265 105.706v122.27h-18v-122.27l-21.223 21.222-5.802-2.9c-17.61-8.806-30.695-21.908-39.463-35.06-5.044-7.566-8.747-15.027-10.99-22.095zM48 160.705l-19.273 19.273L80 231.252l19.273-19.274L48 160.705zm416 0l-51.273 51.273L432 231.252l51.273-51.274L464 160.705z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPoloShirtIcon })
);
