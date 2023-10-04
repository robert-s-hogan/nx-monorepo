import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconImpLaughIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'imp-laugh'];
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
        d="M61.5 20.313S35.274 174.364 44.187 218.5c11.368 56.304 43.725 84.982 71.657 86.78 28.856 61.26 81.21 126.335 141.562 186.69 63.627-63.63 114.57-127.272 142.5-186.72 27.856-2.006 60.022-30.67 71.344-86.75 8.913-44.135-17.313-198.188-17.313-198.188s-25.825 44.997-50.968 93.313c-59.33-121.507-231.224-122.252-290.533-.03C87.297 65.286 61.5 20.312 61.5 20.312zm93.125 116.406c27.414-.006 49.235 14.294 66.156 41.155-32.622 17.113-60.617-1.23-86.06-38.844 6.93-1.547 13.58-2.31 19.905-2.31zm205.125 0c6.326 0 12.944.763 19.875 2.31-25.445 37.616-53.408 55.958-86.03 38.845 16.92-26.86 38.74-41.16 66.155-41.156zm-158.125 74.5l31.094 84.593 26.624-84.594 27.094 85.874 30.25-82.438 25.468 84.72 30.97-77.876c20.487 43.275-12.03 117.294-41.595 154.125l-22.56-62.72-22.064 118.658-23.812-102.657-26.78 94.656-24.564-99.218-22.563 58.125c-40.972-55.047-53.096-112.023-32.625-160.97l21.657 66.47 23.405-76.75z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconImpLaughIcon })
);
