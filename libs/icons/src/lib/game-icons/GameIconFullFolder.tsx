import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFullFolderIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'full-folder'];
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
        d="M402.488 45.148c-29.932 24.474-69.636 42.525-111.175 57.262C335.04 94.3 376.27 83.816 413.135 69.98c-2.7-8.61-6.116-16.916-10.647-24.83zM41 73v135.764c11.918-41.227 23.38-84.748 34.512-126.996L77.82 73H41zm41.518 0l5.884 3.096c27.917 14.682 57.075 28.881 87.127 42.482 2.96-.305 5.913-.62 8.866-.937L169.514 73H82.518zm366.652 1.447c-88.208 40.349-203.608 56.834-319.715 66.387L131.451 151h327.77c-4.066-30.318-7.69-57.252-10.051-76.553zM90.059 97.143C71.419 167.87 51.807 241.39 30.283 302.035l24.479 10.158L88.697 151h24.412l-3.246-16.525-1.947-9.91 10.07-.795c7.394-.584 14.783-1.197 22.164-1.84A1638.49 1638.49 0 0 1 90.06 97.143zM103.303 169L43.092 455h381.605l60.211-286H103.303zM477.27 292.654l-19.336 91.852c9.008-.398 17.683-.77 27.27-1.213-.725-21.697-3.794-54.23-7.934-90.639zM41 325.97v51.594l9.99-47.45L41 325.97z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFullFolderIcon })
);
