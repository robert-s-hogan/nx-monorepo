import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconMagicPotionIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'magic-potion'];
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
        d="M409.248 29.684c3.828 12.413 9.872 22.882 19.256 31.27 10.446 9.34 25.473 16.427 47.517 19.835-8.642-26.622-29.204-43.506-66.772-51.106zm-14.38 13.21c-2.17 7.77-3.924 16.89-6.038 24.815 2.105 13.02 10.736 23.494 20.97 30.718 5.298 3.74 10.93 6.518 15.74 8.176 4.367 1.506 7.928 1.833 9.284 1.798 10.123-4.084 19.774-8.003 27.32-11.963-19.234-4.405-34.26-11.893-45.638-22.067-9.954-8.9-16.9-19.664-21.637-31.48zM359.087 66.98c1.425 19.454 7.056 35.45 18.18 47.17 12.518 13.19 32.85 22.053 65.656 23.135-.76-2.868-1.82-5.89-3.23-9.06-.303-.682-.633-1.37-.965-2.057l-.79.11c-5.922.82-11.746-.41-18.265-2.66-6.52-2.247-13.513-5.733-20.25-10.487-13.235-9.34-25.767-23.95-28.567-43.506-4.077-1.236-8.03-2.127-11.77-2.645zm-17.99.57c-5.79 1.495-10.09 4.375-12.754 8.302-4.722 6.955-4.81 17.894 1.217 31.45 6.024 13.554 18.04 28.607 34.45 40.827 16.41 12.22 33.933 19.162 48.136 20.67 14.204 1.51 24.04-2.167 28.762-9.122.896-1.32 1.622-2.784 2.174-4.38-36.37-1.108-62.263-11.254-78.873-28.755-14.836-15.63-21.543-36.268-23.114-58.99zm-112.367 40.42c-2.578.033-5.56.327-8.615.944-6.11 1.234-12.59 3.6-17.375 6.252-4.785 2.65-7.348 6.072-7.267 5.844l-.008.023-.01.026c-14.557 40.605-22.74 81.154-26.424 119.723.542-.242 1.075-.49 1.618-.73 15.643-6.942 32.042-13.412 48.895-18.987 4.993-36.947 12.116-72.98 17.67-110.75-.047-.224-.078-.57-.164-.668-.142-.156-.71-.64-2.142-1.06-1.433-.42-3.603-.648-6.18-.615zm27.684 11.63c-.792-.003-1.59.005-2.387.01-5.035 33.06-11.004 64.28-15.562 95.648 28.016-7.912 56.962-12.99 85.558-13.307 13.124-.146 26.172.726 39.024 2.766-.228-11.615-.755-23.75-1.584-36.415-2.54-1.658-5.067-3.41-7.568-5.274-14.78-11.005-26.613-23.993-34.71-37.487-18.547-2.153-37.928-5.467-59.02-5.897-1.244-.025-2.494-.04-3.75-.044zm-86.105 20.386c-16.768 8.332-34.632 19.79-53.812 35.375-48.44 39.358-67.29 89.586-68.45 136.283 7.318-5.54 16.118-11.827 26.325-18.603 20.598-13.675 46.584-29.165 75.834-43.457 2.675-35.187 8.91-72.17 20.102-109.598zm209.79 38.518c.546 10.29.91 20.28 1.056 29.924 4.237 1.074 8.445 2.28 12.62 3.648-1.557-10.684-2.98-20.677-3.868-29.697-3.254-1.11-6.53-2.41-9.808-3.874zm-50.864 41.637c-1.795-.017-3.594-.01-5.396.013-49.042.673-100.334 16.134-145.89 36.35-36.446 16.173-69.07 35.233-93.622 51.533-12.276 8.15-22.54 15.613-30.22 21.636-7.452 5.845-12.548 10.57-14.018 12.217-4.238 6.17-7.326 26.743-4.412 41.902 1.473 7.667 4.37 13.902 6.703 16.36 2.055 2.162 2.33 2.648 5.266 1.3 149.357-153.41 299.423-134.323 367.02-134.576.004-.17-.09-.05.006-.48.437-1.952.406-6.08-.447-10.51-.854-4.432-2.404-9.233-4.125-13.097-1.432-3.213-3.003-5.448-3.733-6.385-24.053-11.125-50.198-16.023-77.13-16.265zm29.772 64.052c-36.22.19-79.797 3.29-127.686 18.88.005 37.683 4.587 77.873 17.182 123.456 11.903-2.708 22.84-6.48 32.822-11.395-1.527-2.203-2.997-4.336-4.283-6.235-1.376-2.03-2.566-3.82-3.508-5.295-.942-1.475-1.398-1.8-2.38-4.257l16.712-6.686c-.315-.79-.302-.782-.11-.424.19.358.557 1.068.95 1.684.787 1.232 1.913 2.928 3.236 4.88 1.456 2.15 3.17 4.632 4.97 7.223 7.838-5.41 14.96-11.716 21.376-18.962 11.918-13.463 21.59-30.53 28.872-51.583l-11.77-2.277 3.42-17.672 13.555 2.624c2.72-10.468 4.934-21.78 6.64-33.96zm18.297.11c-1.76 13.298-4.115 25.725-7.073 37.308l12.125 2.346-3.42 17.67-13.806-2.67c-8.043 24.044-19.125 43.952-33.364 60.034-7.39 8.346-15.574 15.56-24.516 21.72 4.183 5.897 7.668 10.782 7.668 10.782l-14.63 10.488s-3.926-5.503-8.542-12.017c-11.684 5.995-24.44 10.53-38.203 13.738 2.102 6.75 4.38 13.617 6.84 20.61 35.275-9.565 69.29-27.967 97.933-53.252 36.618-32.324 44.638-79.417 43.202-126.274-7.524-.14-15.59-.348-24.213-.485zM213.52 309.398c-14.842 5.707-30.04 12.67-45.514 21.163.44 6.155.974 12.196 1.596 18.106 6.714 63.8 24.172 113.214 35.207 130.86.405.22.858.477 1.547.734 1.758.655 4.275 1.378 7.143 1.99 5.735 1.224 12.928 2.02 19.21 1.85 6.284-.17 11.603-1.674 13.202-2.766.8-.546.69-.58.715-.672.026-.09.234-.792-.525-2.85l-.004-.013-.006-.015c-23.465-64.19-31.912-118.596-32.572-168.387zm-62.77 31.225c-26.05 16.06-52.765 36.623-79.75 62.912 6.44 10.74 13.832 19.65 21.664 26.063l.154.125.15.132c25.377 22.736 55.29 35.62 86.716 40.108-2.678-6.23-5.332-13.262-7.9-21.026-8.723-.56-17.685-1.407-26.88-2.53l2.18-17.868c6.55.8 12.936 1.447 19.17 1.956-6.127-22.523-11.352-49.515-14.555-79.947-.345-3.27-.658-6.584-.95-9.927z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconMagicPotionIcon })
);
