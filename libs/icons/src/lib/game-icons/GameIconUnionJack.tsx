import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconUnionJackIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'union-jack'];
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
        d="M21.584 18L171.02 167.436v3.584h-44.69L18 61.836v25.557l82.975 83.627H18v32h185.02V18h-32v85.436L85.584 18zm286.057 0v185.02H494v-32h-86.775L494 84.244v-64L343.225 171.02h-3.584v-44.69L448.825 18h-25.556l-83.627 82.975V18zM18 309.293v32h85.436L18 426.73v64l149.436-149.437h3.584v44.69L62.152 494h25.555l83.313-82.662V494h32V309.293zm289.64 0V494h32v-85.123L424.765 494h64L339.64 344.877v-3.584h44.69L494 451.826V426.27l-84.314-84.977H494v-32z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconUnionJackIcon })
);
