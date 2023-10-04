import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBarracksIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'barracks'];
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
        d="M127.596 26.436C111.219 26.126 90.368 38.184 78 32v64c16.008 8.004 48.437-15.563 64 0 16 16 40.004 7.996 48 0V32c-7.755 7.755-32 16-48 0-3.985-3.985-8.946-5.462-14.404-5.564zM39 32v254.373c5.412-12.05 11.43-23.452 18-34.172V32H39zm217 121C135.23 153 28.575 256.151 25.162 439H208V336c0-32 96-32 96 0v103h182.838C483.425 256.151 376.769 153 256 153zm0 26.938l36.025 18.011-8.05 16.102L256 200.063l-27.975 13.988-8.05-16.102L256 179.937zm0 38l36.025 18.011-8.05 16.102L256 238.063l-27.975 13.988-8.05-16.102L256 217.937zm0 38l36.025 18.011-8.05 16.102L256 276.063l-27.975 13.988-8.05-16.102L256 255.937zM80 336h96v48H80v-48zm256 0h96v48h-96v-48zm-80 39v18h32v-18h-32zM25 457v16h158v-16H25zm176 0v16h110v-16H201zm128 0v16h158v-16H329z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBarracksIcon })
);
