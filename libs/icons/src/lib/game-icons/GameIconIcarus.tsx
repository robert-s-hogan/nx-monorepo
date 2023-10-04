import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconIcarusIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'icarus'];
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
        d="M302.4 16l-86.31 19.338 154.303.508c-23.036 14.658-42.405 26.662-42.405 26.662l72.971-15.494-106.158 74.888 108.23-42.664c-26.617 38.024-66.965 98.803-66.965 98.803l93.135-93.73-37.039 129.697 72.49-101.764-8.84 42.97 24.393-35.946.51 144.587L496 194.525V16H302.4zm-48.64 42.293c-45.38 14.758-78.855 73.772-87.635 123.473-2.227 12.608-.143 25.4 3.879 37.95 6.236 4.847 11.868 10.48 15.832 17.346 14.103-8.238 27.262-16.72 37.768-26.447.21-10.789 1.005-22.01 2.275-33.388-5.121 6.429-9.29 13.13-14.697 19.478 1.67-16.455 5.557-27.424 13.084-38.539l-22.545 10.73c7.886-17.055 18.37-29.314 30.838-39.171-10.797 3.067-20.605 8.771-30.946 13.052 9.58-19.93 23.921-30.338 38.432-40.406 4.204-16.017 8.897-31.028 13.715-44.078zm35.66 126.334l-22.522.709-39.8 44.264-37.713 25.699.138.017a679.22 679.22 0 0 0-12.011.914c-1.793-9.724-8.403-19.86-17.908-27.464-17.01-13.597-38.213-15.324-47.358-3.858-9.146 11.466-2.77 31.783 14.24 45.381 10.738 8.566 23.695 12.746 34.203 11.031-30.645 33.666-26.294 65.218-29.359 109.518l21.49-.803c-3.118-33.882.277-53.678 14.743-81.672 5.324-5.143 10.863-9.893 16.644-14.156 51.185 19.768 47.438 26.427 71.063 78.158l-30.643 38.569-8.4 36.52 13.982 4.317 16.227-33.095c3.219-6.566 34.38-42.514 34.625-47.746-3.829-20.89-12.152-32.555-21.055-54.55l39.103 46.487c-4.567 19.966-5.499 42.743-9.773 56.881l8.135 31.547 19.716-5.38-8.787-30.32c12.776-21.065 15.275-40.373 15.36-63.714-28.884-39.892-55.997-88.098-96.14-93.781-.072-.313-.143-.627-.212-.942l26.13-21.785 35.882-50.746zM122.578 287.049c-7.988 2.306-15.02 5.596-20.08 10.213-50.032 45.65-56.446 152.635-44.68 198.21 6.204-11.83 12.511-25.025 19.075-38.888-2.228-18.17-2.482-36.92 2.24-57.135 1.136 11.92 2.746 23.641 9.021 33.444.233-.486.464-.97.698-1.455-2.113-17.38.353-38.04 9.316-56.711-1.75 11.64.502 21.612 3.107 31.437a718.174 718.174 0 0 1 13.028-24.52c-.081-16.2 1.957-36.697 7.113-57.306 2.703-10.802 6.242-21.646 10.895-31.826-3.438-1.649-6.688-3.522-9.733-5.463z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconIcarusIcon })
);
