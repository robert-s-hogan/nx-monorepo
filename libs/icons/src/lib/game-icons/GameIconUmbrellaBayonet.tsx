import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconUmbrellaBayonetIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'umbrella-bayonet'];
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
        d="M455.486 12.676c-1.345-.015-2.7.037-4.058.156-10.875.95-22.054 6.227-31.098 16.914l-38.93 46c1.242-.1 2.39-.19 3.71-.3l8.97-.75.746 8.972c.11 1.322.21 2.466.317 3.707l38.927-46.002c12.92-15.267 26.22-13.18 34.998-5.752 8.78 7.43 13.037 20.2.118 35.468l13.74 11.63c18.087-21.375 13.42-47.594-2.23-60.837-6.845-5.793-15.794-9.104-25.21-9.204zM283.636 35.19l-146.74 343.417 314.417-201.523c-5.007-.68-9.623-2.192-13.49-5.465-5.344-4.523-7.665-10.97-9.067-18.116-.987-5.028-1.612-11.194-2.223-18.082-6.894.537-13.08.94-18.2.8-7.28-.202-14.023-1.425-19.366-5.947-5.344-4.52-7.663-10.97-9.065-18.115-.986-5.028-1.613-11.194-2.224-18.082-6.894.537-13.078.94-18.2.8-7.278-.202-14.02-1.423-19.365-5.944-5.343-4.522-7.664-10.97-9.066-18.116-.987-5.028-1.612-11.194-2.223-18.082-6.894.537-13.08.94-18.2.8-7.28-.202-14.023-1.424-19.366-5.946-3.868-3.273-6.123-7.575-7.62-12.4zm14.48 40.167l15.757 8.71-165.738 281.26L347.98 115.24l13.74 11.63-213.585 238.458 249.972-209.98 11.194 14.1-261.165 195.88 149.982-289.97zM120.5 383.305L25.896 491.287s31.418-12.377 44.532-22.64c18.82-14.724 52.028-52.562 70.883-76.073l-16.736 2.004-4.076-11.273z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconUmbrellaBayonetIcon })
);
