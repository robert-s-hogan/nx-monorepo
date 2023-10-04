import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconShinyPurseIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'shiny-purse'];
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
        d="M149.25 18.313L168.156 115c-.274.174-.54.356-.812.53L94 97.876l17.47 74.22c-.655 1.046-1.306 2.093-1.94 3.155l-91.28-8.875 73 51.156c-.808 2.82-1.546 5.658-2.22 8.532l-64.53 40 63.906 39.22c.28 1.282.57 2.57.875 3.843l-46.468 36.563 55.97-7.907c3.506 8.184 7.588 16.056 12.218 23.564l-17 72.344 64.344-15.47-9.094 75.563 52.188-58.06c7.553 2.82 15.352 5.14 23.343 6.936l37.407 61.094L299 443.656c5.876-1.156 11.655-2.6 17.313-4.312l29.406 31.03-5.47-40.187c7.902-3.694 15.49-7.96 22.72-12.718l67.405 16.217-15.906-67.656c5.62-8.506 10.555-17.504 14.686-26.936l47.563 6.594-39.095-30.438c1.175-4.23 2.192-8.526 3.063-12.875l59.187-36.313-59.75-37.03c-1.686-7.793-3.87-15.397-6.53-22.782l59.5-47.656-73.94 17.03c-1.645-2.777-3.367-5.507-5.155-8.186l16.375-69.563-70.344 16.938c-5.638-3.56-11.49-6.824-17.53-9.75l3.22-63.376-37.22 51c-2.527-.64-5.088-1.215-7.656-1.75l-38.656-63.156-39.282 64.19c-4.772 1.127-9.475 2.438-14.094 3.936L149.25 18.312zm115 88.874c88.423 0 159.875 71.484 159.875 159.907 0 88.423-71.452 159.875-159.875 159.875s-159.906-71.453-159.906-159.876 71.483-159.906 159.906-159.906zm49.03 44.157c-5.278.115-10.207 2.383-16.936 9.562l-6.563 7-6.81-6.72c-7.39-7.28-13.218-9.29-19.126-9.03-5.91.26-12.856 3.336-20.625 9.625l-6.22 5.032-5.906-5.343c-8.9-8.053-16.485-10.44-23.75-10.064-5.288.273-10.775 2.265-16.25 5.75l40.97 73.688c15.445 9.445 47.003 13.015 68.717 2.094l39.626-73.375c-7.51-3.063-14.258-6.202-20.094-7.407-2.112-.436-4.07-.755-5.968-.812-.356-.01-.71-.008-1.063 0zm-90 96.187c-18.017 12.748-32.488 34.71-38.093 66.876-5.436 31.197 3.127 52.266 18.282 66.625 15.154 14.36 37.9 21.77 61 21.47 23.098-.3 46.134-8.31 61.624-22.938 15.49-14.626 24.25-35.456 19.28-65.218-5.132-30.736-18.383-52.115-35.155-65.063-28.498 15.077-64.154 11.872-86.94-1.75z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconShinyPurseIcon })
);
