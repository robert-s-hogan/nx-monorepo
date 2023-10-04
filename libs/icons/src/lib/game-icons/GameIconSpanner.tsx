import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSpannerIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'spanner'];
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
        d="M331.188 16.72c-40.712-.002-81.41 15.408-112.438 46.436-43.866 43.864-56.798 107-38.813 162.25L17.03 388.312v25.75l170.22-170.218c2.75 5.84 5.847 11.555 9.344 17.094L17.03 440.5v51.78H64l181.875-181.874c5.516 3.515 11.212 6.668 17.03 9.438L90.44 492.28h27.03l164.75-164.75c55.182 17.85 118.21 4.884 162-38.905 41.415-41.414 54.998-99.91 41.282-152.813L380.22 241.125l-90.033-23.938-23.968-90.03L371.53 21.843c-13.213-3.41-26.772-5.125-40.342-5.125z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSpannerIcon })
);
