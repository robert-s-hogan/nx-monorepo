import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconAbstract059Icon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'abstract-059'];
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
        d="m146.2844,21-110.1563,33.3406h264.6688 44.3562 27.3188 44.3562v44.3563 10.8687l-44.3562,97.3781v-108.2469h-27.3188v168.1719l-44.3562,97.3781v-265.55h-244.4001l49.4969,53.4625c13.9853-5.1207 29.0376-7.9312 44.7969-7.9312 72.0424,0 130.5719,58.3826 130.5719,130.425s-58.5295,130.425-130.5719,130.425c-21.2703,0-41.3035-5.0701-59.0437-14.1l-38.4813,54.4906h274.95c5.7813,0 10.4281,4.7937 10.4281,10.575s-4.6468,10.4281-10.4281,10.4281h-289.7844l-17.3312,24.5281h470l-172.4313-91.5031 172.4313-378.4969h-344.7156zm-.7344,153.3375c-53.0679,2.687-95.175,46.5761-95.175,100.3156 0,55.4731 44.8425,100.3157 100.3156,100.3157s100.4625-44.8426 100.4625-100.3157-44.9894-100.3156-100.4625-100.3156c-1.7335,0-3.4287-.0865-5.1406,0zm5.1406,34.5157c36.2972,0 65.8,29.5028 65.8,65.8s-29.5028,65.8-65.8,65.8-65.6531-29.5028-65.6531-65.8 29.3559-65.8 65.6531-65.8z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconAbstract059Icon })
);
