import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconAbstract042Icon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'abstract-042'];
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
        d="m21,21v120.7313 103.8407h111.1844 68.2971v20.8562h-68.2971-111.1844v103.8409 120.7308h111.1844v-120.7308h68.2971 111.0376 68.2967v120.7308h111.1842v-120.7308-103.8409h-111.1842-68.2967v-20.8562h68.2967 111.1842v-103.8407-120.7313h-111.1842v120.7313h-68.2967-111.0376-68.2971v-120.7313h-111.1844zm139.2373,0v90.0344h191.3785v-90.0344h-191.3785zm0,379.9658v90.0342h191.3785v-90.0342h-191.3785z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconAbstract042Icon })
);
