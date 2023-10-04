import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLoinclothIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'loincloth'];
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
        d="M118.486 25l-26 78h29.028l26-78zM256 25c-10.926 0-25.17 4.748-36.14 12.404-10.97 7.656-18.208 17.732-18.883 27.235-.8 11.25 6.06 25.301 17.205 36.216C229.327 111.771 244.286 119 256 119c11.714 0 26.673-7.23 37.818-18.145s18.005-24.966 17.205-36.216c-.675-9.503-7.912-19.579-18.882-27.235C281.17 29.748 266.926 25 256 25zm108.486 0l26 78h29.028l-26-78zM48 41c.5 0-1.724.573-4.688 4.326-2.963 3.754-6.244 9.694-9.04 16.219-3.649 8.512-6.348 18.184-7.877 25.455h52.453l15.334-46zm113.152 0L145.82 87h41.239c-3.062-7.525-4.614-15.498-4.036-23.639.585-8.231 3.555-15.718 8.01-22.361zm159.815 0c4.455 6.643 7.425 14.13 8.01 22.361.578 8.141-.974 16.114-4.036 23.639h41.239l-15.332-46zm96.853 0l15.332 46h52.453c-1.53-7.271-4.228-16.943-7.876-25.455-2.797-6.525-6.078-12.465-9.041-16.219C465.724 41.573 463.5 41 464 41zM46.465 105C25.239 204.294 25.03 361.524 25.033 487h159.883a3096.51 3096.51 0 0 0 9.82-40.824c-15.585 2.554-31.613 6.054-48.425 10.521L135 459.703V448c0-117.577-13.686-235.189-40.635-327H67.514l5.334-16zm93.355 0l-5.334 16h-21.43c25.844 90.393 38.94 202.608 39.766 315.66 72.384-17.715 133.99-17.605 206.354.014C360 323.617 373.099 211.396 398.943 121h-21.43l-5.333-16h-57.928a92.688 92.688 0 0 1-7.84 8.715C292.565 127.276 274.456 137 256 137s-36.565-9.724-50.412-23.285a92.688 92.688 0 0 1-7.84-8.715zm299.332 0l5.334 16h-26.851C390.686 212.811 377 330.423 377 448v11.684l-11.297-2.983c-16.814-4.439-32.844-7.93-48.43-10.484 3.24 13.88 6.52 27.504 9.811 40.783h159.883c.003-125.476-.206-282.706-21.432-382z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLoinclothIcon })
);
