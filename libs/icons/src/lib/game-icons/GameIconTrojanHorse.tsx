import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTrojanHorseIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'trojan-horse'];
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
        d="M336 16l9.605 34.55v36.473l59.786 44.84 69.99 35.85 11.015-33.04-88.81-97.118-19.59 4.898L336 16zm-12.492 20.13L270.455 155.5h28.057l29.093-72.732v-42.54l-4.097-4.1zm67.86 21.415l34.88 35.84-41.643-11.637 6.764-24.203zm-52.93 46.603l-24.14 60.35 50.718 126.795 24.77-148.633-51.347-38.512zM89.606 173.5v142h62v-96h146v96h57.707l-56.8-142H89.605zm-18 9l-46 34.5v117.014l30 10V240.77l16-16V182.5zm98 55v14h110v-14h-110zm0 32v14h110v-14h-110zm0 32v14h110v-14h-110zm-80 32v78.51c2.29-.33 4.624-.51 7-.51 7.913 0 15.395 1.912 22.028 5.277l37.012-83.277h-66.04zm209.057 0l9.004 81.04c5.286-1.963 10.992-3.04 16.94-3.04 5.2 0 10.213.83 14.925 2.348l17.857-80.348h-58.725zm-202.057 96c-17.227 0-31 13.773-31 31s13.773 31 31 31c17.228 0 31-13.773 31-31s-13.772-31-31-31zm228 0c-17.227 0-31 13.773-31 31s13.773 31 31 31c17.228 0 31-13.773 31-31s-13.772-31-31-31zm-228 15c8.837 0 16 7.163 16 16s-7.163 16-16 16c-8.836 0-16-7.163-16-16s7.164-16 16-16zm228 0c8.837 0 16 7.163 16 16s-7.163 16-16 16c-8.836 0-16-7.163-16-16s7.164-16 16-16zm-179.847 7c.548 2.92.847 5.926.847 9s-.3 6.08-.847 9h131.695c-.548-2.92-.848-5.926-.848-9s.3-6.08.848-9H144.758z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTrojanHorseIcon })
);
