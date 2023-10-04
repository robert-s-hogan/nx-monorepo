import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLightningShieldIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'lightning-shield'];
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
        d="M464.188 21.844l-10.97 1.937C322.7 46.84 193.83 49.9 62.376 25.188c-17.847-.33-4.407-.276-19.063-.28l.376 8.062c0 20.07.373 39.718 1.187 58.81l.313 7.5 7.406 1.282c23.815 4.14 41.906 24.693 41.906 49.782 0 21.526-12.815 39.36-31.5 46.812L55.875 200l1.406 7.53C79.423 327.95 134.21 423.74 249.25 490.157l4.688 2.72 4.656-2.72C371.38 425.04 426.936 328.466 450 207l1.406-7.406-6.937-2.938c-18.255-7.72-31.095-25.293-31.095-46.312 0-25.048 18.128-45.617 41.906-49.78l7.376-1.283.344-7.468c.888-19.207 1.188-38.74 1.188-58.843V21.843zm-18.782 22.062c-.08 13.617-.337 26.97-.844 40.063-28.778 8.433-49.875 34.948-49.875 66.374 0 25.886 14.477 48.117 35.532 59.937C407.48 323.113 356.802 410 253.905 471.126 148.812 408.765 98.946 322.767 77.062 211.03c21.635-11.7 36.126-34.465 36.126-60.686 0-31.43-21.077-57.958-49.876-66.375-.476-13-.747-26.278-.843-39.782C138.186 58.14 213.08 62.986 287.812 60.28L196.03 182.25h51.69l-91.876 159.97 93.72-96.064h39.436l-95.53 147.156 183.093-184.625h-90.47l60.25-61.75H290l75.938-92.187c26.47-2.762 52.955-6.384 79.468-10.844z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLightningShieldIcon })
);
