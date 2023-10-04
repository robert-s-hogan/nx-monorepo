import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBoxTrapIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'box-trap'];
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
        d="M246.253 280.552l71.99 97.834-166.207 48.293zm.274-37.243L138.877 97.006 21 279.83l107.65 146.3 114.21-177.108zm162.63 9.728l34.46-53.457-38.665 11.226v33.426zm-115.097-2.12l-10.515-4.89-18.56 5.388-7.17 11.126 77.33 105.143 31.99-49.628-20.28-42.88zm45.55-88.33h65.405v27.44l44.9-13.06L342.254 30.566 154.83 85.02l107.712 146.39 77.055-22.45v-46.373zm45.45 86.06v-66.105h-25.507v49.49l-13.533-5.1-34.012 10.277 49.89 22.937 104.62 221.287 24.482-7.11z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBoxTrapIcon })
);
