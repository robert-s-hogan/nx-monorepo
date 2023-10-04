import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconKnifeForkIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'knife-fork'];
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
        d="M39.906 27.188c-9.118 13.907-11.366 30.99-7.843 50.718 4.2 23.526 16.91 50.038 35.28 75 36.742 49.925 96.05 93.082 148.813 99.625l3.688.47 2.375 2.844L416.374 490.22c19.352 4.624 31.847 1.745 38.344-4.69 6.547-6.484 9.566-19.005 4.717-38.874L39.908 27.187zM414.97 29.5L306.47 138c-12 11.998-12.104 25.2-5.908 39.625l2.563 5.97-4.688 4.5L262 222.844l29.594 29.593 34.594-36.532 4.5-4.75 5.968 2.594c15.165 6.535 29.546 6.267 40.688-4.875l108.5-108.5L471.75 86.28l-70.563 70.532L388 143.595l70.53-70.53L443.5 58.03l-70.53 70.532-13.22-13.218 70.53-70.53-15.31-15.314zM210.936 271.563L25.53 448.469c-4.575 18.95-1.644 30.787 4.532 36.905 6.178 6.118 18.128 8.927 36.844 4.406l173.22-182.967-29.19-35.25z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconKnifeForkIcon })
);
