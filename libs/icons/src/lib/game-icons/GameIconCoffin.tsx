import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCoffinIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'coffin'];
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
        d="M312.094 21.97l59.094 119.686h52.093L362.595 22l-50.5-.03zM173 22.687l-63.594 127.218 65.844 345.75 114.688.094L354.467 150 291.626 22.75 173 22.687zm16.063 76.28h88.78v18.688h-88.78V98.97zm0 36.22h88.78v18.687h-88.78v-18.688zm182.5 25.156L309 495.438l47.25.03 68.313-335.124h-53z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCoffinIcon })
);
