import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPackedPlanksIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'packed-planks'];
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
        d="M73 25v62h78V25H73zm96 0v62h78V25h-78zm96 0v62h78V25h-34.8L297 58.6 278 25h-13zm96 0v62h78V25h-78zM41 105v24.4L53.21 151H471v-46H41zm32 64v174h78V169H73zm96 0v174h78V169h-78zm96 0v174h78V169h-78zm96 0v151.9l12.5 22.1H439V169h-78zM41 361v46h430v-46H41zm32 64v62h68l10-30.2V425H73zm96 0v62h78v-62h-78zm96 0v62h78v-62h-78zm96 0v62h78v-62h-78z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPackedPlanksIcon })
);
