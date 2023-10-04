import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCrowNestIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'crow-nest'];
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
        d="M204.34 32l-4.2 215h44.4l-4.2-215zm-19.123 2.615C138.694 43.565 84.74 71.663 29.66 103.07c55.44 5.404 110.725 12.245 154.174 37.74zm145.11 43.916c-7.32 0-14.18 3.754-19.69 10.898-5.51 7.144-9.235 17.565-9.235 29.265s3.724 22.124 9.235 29.268c5.51 7.145 12.37 10.897 19.69 10.897 7.322 0 14.182-3.752 19.693-10.896 5.51-7.143 9.234-17.567 9.234-29.267s-3.724-22.12-9.234-29.265c-5.51-7.144-12.37-10.897-19.692-10.897zM464.34 98v11h-87.738c.42 3.16.652 6.394.652 9.693 0 2.817-.162 5.59-.47 8.307 30.437-.032 59.455.005 87.556 0v11h18V98zm-43.244 46.984c-1.398.002-1.39 0-2.813.002-6.143.01-12.254.028-17.152.05l-10.81 22.693-44.84 6.014c-4.726 1.99-9.82 3.113-15.152 3.113-6.93 0-13.46-1.882-19.29-5.126L279.802 247h72.715l-4.663-37.492-18.46 2.18-2.11-17.877 2.186-.257.067.492 72.84-9.774zM90.526 265l14.154 46h53.015l-7.076-46zm78.304 0l7.076 46h92.867l7.077-46zm125.23 0l-7.076 46H340l14.154-46zm-183.843 64l14.154 46h43.17l-7.075-46zm68.46 0l7.075 46h73.176l7.076-46zm105.538 0l-7.076 46h43.17l14.153-46zM129.91 393l19.076 22h30.864l-9.54-22zm58.61 0l9.54 22h48.56l9.538-22zm85.85 0l-9.54 22h30.863l19.077-22zm-78.643 40l-.41 61h54.046l-.41-61z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCrowNestIcon })
);
