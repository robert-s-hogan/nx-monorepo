import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconAbstract017Icon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'abstract-017'];
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
        d="m143.4937,21c-50.162,0-90.7687,39.7025-90.7687,89.0062v2.35h94.7344c13.5616,0 24.5282,13.3384 24.5282,29.9625s-10.9666,29.9625-24.5282,29.9625h-94.7344v15.7156h94.7344c13.5616,0 24.5282,13.4853 24.5282,30.1094s-10.9666,29.9625-24.5282,29.9625h-94.7344v15.7156h94.7344c13.5616,0 24.5282,13.3385 24.5282,29.9625s-10.9666,30.1093-24.5282,30.1093h-94.7344v15.7157h94.7344c13.5616,0 24.5282,13.3384 24.5282,29.9625s-10.9666,29.9625-24.5282,29.9625h-94.7344v40.0969h-14.5407v37.1594h-17.1843v14.2469h17.1843 435.7782 17.0375v-14.2469h-17.0375v-37.1594h-14.6875v-329.5875c0-49.3037-40.1662-89.0062-90.3281-89.0062s-90.6218,39.7025-90.6218,89.0062v2.35h92.9718c13.5616,0 24.5282,13.3384 24.5282,29.9625s-10.9666,29.9625-24.5282,29.9625h-92.9718v15.7156h92.9718c13.5616,0 24.5282,13.4853 24.5282,30.1094s-10.9666,29.9625-24.5282,29.9625h-92.9718v15.7156h92.9718c13.5616,0 24.5282,13.3385 24.5282,29.9625s-10.9666,30.1093-24.5282,30.1093h-92.9718v15.7157h92.9718c13.5616,0 24.5282,13.3384 24.5282,29.9625s-10.9666,29.9625-24.5282,29.9625h-92.9718v40.0969h-44.5032v-329.5875c0-49.3037-40.1662-89.0062-90.3281-89.0062z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconAbstract017Icon })
);
