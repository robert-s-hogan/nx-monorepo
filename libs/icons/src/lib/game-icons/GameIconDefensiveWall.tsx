import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDefensiveWallIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'defensive-wall'];
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
        d="M25 41v110h462V41h-21v55h-36V41h-60v55h-36V41h-60v55h-36V41h-60v55h-36V41H82v55H46V41H25zm0 128v206h62v-46H64v-18h71v-46H96v-18h96v18h-39v46h71v18h-7v46h270V169h-30v39h-18v-39H329v39h-18v-39H201v39h-18v-39H73v39H55v-39H25zm247 78h176v18h-87v55h-18v-55h-71v-18zm-167 82v46h94v-46h-94zm-80 64v94h47.973l14.297-57.184 17.46 4.368L91.527 487h328.946l-13.203-52.816 17.46-4.368L439.027 487H487v-94H346.98l13.846 69.234-17.652 3.532L328.62 393H183.38l-14.554 72.766-17.652-3.532L165.02 393H25z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDefensiveWallIcon })
);
