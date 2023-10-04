import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconRavenIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'raven'];
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
        d="M343.313 22.22c-57.33 0-61.26 36.153-91.125 54.874C154.782 42.52 133.115 221.496 169.844 330c-15.396 31.924-30.736 75.9-43.813 134.906 56.828 30.66 119.124 38.655 182.22 9.906-6.2-37.715-14.18-68.858-21.97-95.375 25.025-12.63 59.594-14.573 86.5 14.407.24-28.626-19.022-40.956-40.53-42.25l-22.03-47.313c42.606-45.056 74.38-100.18 57.905-157.06-10.303-38.45 58.203-62.225 122.344-53.75-24.523-21.164-55.99-30.482-85.845-33.876-8.843-21.763-32.616-37.375-61.313-37.375zm10.968 21.936c9.808 0 17.783 7.944 17.783 17.75 0 9.807-7.974 17.75-17.782 17.75-9.807 0-17.75-7.943-17.75-17.75 0-9.806 7.945-17.75 17.75-17.75zm-58.092 274.25l16.28 34.938c-11.62 2.698-22.325 8.217-29.312 15.687-3.298-10.84-6.498-20.903-9.47-30.28 7.58-6.45 15.128-13.253 22.502-20.344z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconRavenIcon })
);
