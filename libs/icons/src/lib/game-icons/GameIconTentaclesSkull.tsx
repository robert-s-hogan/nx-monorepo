import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTentaclesSkullIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'tentacles-skull'];
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
        d="M255.672 18.535c-71.2 0-127.248 47.1-127.248 102.24 0 25.67 12.008 49.233 32.187 67.452l2.925 2.638 2.14 55.63 57.368-31.026 33.887 54.335 33.3-53.743 55.303 30.272 1.598-54.844 3.026-2.68c20.666-18.306 32.764-41.967 32.764-68.035 0-55.14-56.048-102.24-127.248-102.24zm-79.76 89.14c23.366-.295 58.385 18.522 58.385 18.522 0 21.772-17.648 39.422-39.422 39.422-21.774 0-39.424-17.65-39.424-39.423h.003c.416-13.678 9.048-18.38 20.46-18.523zm159.516 0c11.41.142 20.043 4.844 20.46 18.522 0 21.772-17.65 39.424-39.423 39.424-21.772 0-39.422-17.65-39.422-39.423 0 0 35.02-18.817 58.385-18.523zm-79.756 48.118l20.334 45.418h-40.67l20.336-45.417zm-39.192 84.47l-22.2 12.008c6.823 35.1 2.77 66.833-17.956 98.933-17.857 27.644-63.35 49.007-95.68 28.678-40.016-25.15-11.61-63.596 12.72-39.98-1.513-52.516-48.833-47.87-63.393-16.078-40.502 88.417 95.507 149.848 170.432 82.79.808 41.927 23.872 78.693 72.996 84.695 39.8 4.862 72.77-38.585 22.364-71.606 8.466 37.96-46.156 42.623-46.707-11.58-.213-20.954 10.71-39.112 26.29-52.454 7.443 13.896 16.868 27.638 28.616 41.078C376 479.168 526.48 416.23 484.147 323.822c-14.56-31.79-61.88-36.438-63.394 16.078 24.33-23.616 52.737 14.83 12.723 39.98-32.332 20.33-77.825-1.033-95.682-28.677-20.493-31.74-24.678-63.12-18.176-97.75l-22.828-12.496-39.808 64.248-40.502-64.94z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTentaclesSkullIcon })
);
