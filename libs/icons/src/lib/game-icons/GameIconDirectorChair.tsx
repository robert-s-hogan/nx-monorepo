import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDirectorChairIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'director-chair'];
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
        d="M157 21.234v16h18v-16zm180 0v16h18v-16zM153 55.232v62.002h206V55.232zm-3.89 80c-26.567 5.315-53.134 10.626-79.7 15.942l3.531 17.648L87 166.01v80.222h18V162.41l52-10.4v45.224h18v-62.002zm187.89 0v62.002h18V152.01l52 10.4v83.822h18V166.01l14.059 2.812 3.53-17.648c-26.565-5.315-53.132-10.628-79.698-15.942zm-174 80l-40.004 30.002h266.008L349 215.232zm-69.836 48l118.363 82.854c-37.367 27.406-74.74 54.805-112.105 82.213l10.642 14.514 18.743-13.745-8.008 20.823-37.332 26.13 10.322 14.745L256 377.216c54.07 37.851 108.142 75.698 162.21 113.55l10.323-14.745-37.332-26.13-8.008-20.823 18.743 13.745 10.642-14.514c-37.367-27.406-74.737-54.809-112.105-82.213l118.363-82.854h-31.383l-102.307 71.616-13.927-10.215 83.728-61.4H324.51L256 313.472l-68.51-50.24h-30.437l83.728 61.4-13.927 10.215-102.307-71.616zM256 335.793l13.574 9.955L256 355.25l-13.574-9.502zm-28.9 21.193l13.209 9.246-93.125 65.188 8.48-22.047zm57.8 0l71.436 52.387 8.48 22.047-93.125-65.186z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDirectorChairIcon })
);
