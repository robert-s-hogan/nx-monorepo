import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconStaticGuardIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'static-guard'];
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
        d="M190.39 18.406l13.176 64.625h41.957l-.002 18.69h-38.145l7.635 37.438h82.63l7.45-37.44h-40.88V83.032h44.597l12.855-64.61-131.273-.014zM331.8 63.238l-18.823 94.608h-113.23l-18.99-93.127L38.98 114.395l148.973 247.342-60.967-203.168 17.9-5.37 39.247 130.784 72.35 10.62 71.53-10.696 39.094-130.664 17.905 5.358-60.018 200.587L473.06 114.323 331.8 63.238zm-9.708 240.45l-65.582 9.81-66.447-9.754 56.59 188.578V339.475h18.69v152.847h.31l56.44-188.633z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconStaticGuardIcon })
);
