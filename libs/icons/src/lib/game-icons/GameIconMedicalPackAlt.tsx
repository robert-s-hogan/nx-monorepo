import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconMedicalPackAltIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'medical-pack-alt'];
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
        d="M76 46c-33.24 0-60 26.76-60 60v300c0 33.24 26.76 60 60 60h360c33.24 0 60-26.76 60-60V106c0-33.24-26.76-60-60-60H76zm0 60h360v300H76V106zm150 60v60h-60v60h60v60h60v-60h60v-60h-60v-60h-60z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconMedicalPackAltIcon })
);
