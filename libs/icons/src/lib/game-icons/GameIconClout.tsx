import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCloutIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'clout'];
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
        d="M33.107 27.95l145.817 205.456L58.3 236.428l127.833 107.056-99.274 18.84 188.798 64.412c-27.16-26.503-51.394-55.114-71.83-84.88l15.406-10.577c39.313 57.257 93.652 110.5 155.83 151.78 26.423-5.435 52.822-21.64 73.036-42.826 20.17-21.14 33.822-46.97 36.597-70.004-43.09-60.1-94.658-111.11-156.87-151.148l10.112-15.717c30.99 19.946 59.436 42.53 85.55 67.483L378.963 86.6l-39.83 97.197L249.395 60.35l-3.14 124.414L33.108 27.95zm398.788 304.42l10.552 15.425c-34.503 23.6-64.288 57.193-90.49 92.758l-15.045-11.086c26.87-36.472 57.815-71.673 94.983-97.096z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCloutIcon })
);
