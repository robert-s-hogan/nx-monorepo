import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconAriesIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'aries'];
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
        d="M160.167 257.36H75.53C-26.474 176.527 26.283-13.776 164.023 52.574c43.01 20.716 71.747 65.968 90.757 120.75 19.006-54.782 47.74-100.034 90.754-120.75C483.274-13.772 536.03 176.526 434.03 257.36h-84.635s25.075-43.914 28.016-50.135c4.49-9.495 30.98-78.244-6.486-54.04-50.684 32.744-62.257 149.633-67.79 201.062-5.566 51.764-8.797 120.12-8.797 120.12H215.224s-3.23-68.356-8.79-120.12c-5.534-51.434-17.107-168.318-67.796-201.062-37.462-24.204-10.982 44.54-6.482 54.04 2.936 6.22 28.01 50.136 28.01 50.136z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconAriesIcon })
);
