import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconAbstract058Icon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'abstract-058'];
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
        d="m21,21v228.5688h168.1719v115.5594h-21.0031v-94.1469h-147.1688v220.0188h470v-220.0188h-147.1687v94.1469h-21.0032v-115.5594h168.1719v-228.5688h-35.1031v145.1125h-108.8344v-145.1125h-36.5719v145.1125h-108.8343v-145.1125h-36.7188v145.1125h-108.8344v-145.1125z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconAbstract058Icon })
);
