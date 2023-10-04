import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconMachineGunMagazineIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'machine-gun-magazine'];
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
        d="M146.8 41c-.2 10.26-.6 20.25-1.3 30h175.3c.3-9.83.4-19.82.2-30H146.8zM144 89C131.1 214.5 76.78 297.9 21.96 367.2L137.3 482.6C239.3 357.1 310.3 244.5 320 89h-29.2c-2.2 49-22 109.8-48.6 168.7-26.9 59.5-60.9 117-92.2 157.6l-12.8-12.8c29.7-39.1 62.7-94.9 88.6-152.2 25.9-57.4 44.7-116.6 47-161.3h-30c-2.2 49-22 109.8-48.6 168.7-21.2 46.9-46.8 92.6-72.1 129.7l-12.9-13c23.9-35.6 48.4-79.4 68.6-124.1 25.9-57.4 44.7-116.6 47-161.3h-30c-2.2 49-22 109.8-48.6 168.7-15.9 35.3-34.3 69.8-53.2 100.5l-13.1-13.1c17.6-29.2 35-61.7 49.9-94.8 25.9-57.4 44.7-116.6 47-161.3H144zm192 149c-1 2.4-2.1 5.2-3.2 8.7-3.5 11.3-7 27.1-10 43-4 21.3-6.9 41.8-8.5 53.3h43.4c-1.6-11.5-4.5-32-8.5-53.3-3-15.9-6.5-31.7-10-43-1.1-3.5-2.2-6.3-3.2-8.7zm64 0c-1 2.4-2.1 5.2-3.2 8.7-3.5 11.3-7 27.1-10 43-4 21.3-6.9 41.8-8.5 53.3h43.4c-1.6-11.5-4.5-32-8.5-53.3-3-15.9-6.5-31.7-10-43-1.1-3.5-2.2-6.3-3.2-8.7zm64 0c-1 2.4-2.1 5.2-3.2 8.7-3.5 11.3-7 27.1-10 43-4 21.3-6.9 41.8-8.5 53.3h43.4c-1.6-11.5-4.5-32-8.5-53.3-3-15.9-6.5-31.7-10-43-1.1-3.5-2.2-6.3-3.2-8.7zM313 361v126h46V361h-46zm64 0v126h46V361h-46zm64 0v126h46V361h-46z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconMachineGunMagazineIcon })
);
