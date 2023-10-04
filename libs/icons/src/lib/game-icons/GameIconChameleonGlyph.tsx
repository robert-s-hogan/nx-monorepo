import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconChameleonGlyphIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'chameleon-glyph'];
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
        d="M339.84 22.826c-11.426-.31-12.328 45.05-22.45 39.772a191.87 191.87 0 0 0-14.56-6.83c-16.185-14.734-46.642-37.874-64.021-24.497-3.572 3.012-6.117 6.768-7.7 10.99-11.616-10.495-28.427-14.229-41.449-4.036-4.47 3.694-7.297 8.63-8.633 14.033-9.662-2.189-19.68-2.032-29.4 5.806-4.347 3.57-7.173 8.353-8.508 13.663-4.285 2.856-8.32 6.333-12.389 9.687l117.891 64.455-142.697-39.525c-.932 1.118-1.771 2.33-2.67 3.478l130.928 71.567L83.35 139.598c-.403.714-.87 1.364-1.243 2.078l137.668 75.262L67.08 174.65c-.248.621-.435 1.243-.684 1.864l135.31 73.923c26.421-21.888 62.156-24.309 85.474-30.083 36.791-9.098 51.943-16.954 51.943-16.954l116.928 19.034c35.023-38.19-66.162-198.242-116.211-199.608zm37.988 93.654a15.824 15.824 0 0 1 12.31 5.73c5.62 6.738 4.72 16.798-2.019 22.417-6.768 5.651-16.829 4.75-22.447-2.049-5.62-6.737-4.72-16.765 2.017-22.385a15.969 15.969 0 0 1 10.14-3.713zM55.967 211.068c-.249.932-.498 1.833-.715 2.733l122.64 67.033c2.328-4.098 4.472-8.135 7.266-12.389 4.564-6.954 9.936-12.418 15.617-17.261L55.967 211.068zm-6.397 37.756c-.187 1.707-.186 3.446-.31 5.123l113.2 61.88c3.013-10.153 7.453-20.742 13.663-31.95L49.57 248.824zm219.752 15.485c-28.142.391-44.547 9.23-44.547 9.23s-.23.121-.31.154c-34.637 14.406-45.39 72.114-36.078 96.002 11.053 28.358 41.303 47.732 60.855 51.975 17.773 3.857 45.333-.696 65.418-31.824 6.697-10.378 14.323-57.535-27.416-69.58-26.456-7.635-34.93 7.98-34.93 7.98s14.164-5.73 28.1 5.62c20.187 16.437 18.34 54.34-21.576 51.864-27.85-1.726-45.872-29.982-37.217-55.947 9.119-27.357 34.752-33.761 62.457-29.822 29.473 4.19 42.504 28.068 42.504 28.068l.434.807c4.937 8.166 8.134 17.201 9.687 26.422 3.229 18.473-.62 37.723-9.562 53.154 0 0-11.37 27.842-49.83 37.631-44.693 11.375-95.271-30.419-100.659-39.215-9.92-16.198-16.239-32.165-18.318-48.838L53.482 328.96c1.18 5.59 2.857 11.052 4.442 16.548l89.82 49.088-80.32-22.262c12.201 28.72 30.365 55.42 56.166 77.713 0 0 60.818 48.07 155.93 37.652 76.495-8.38 105.011-74.86 96.832-139.273 0 0 .047-60.048-61.815-77.793-17.205-4.935-32.423-6.503-45.215-6.324zm-220.59 23.79c.125 3.074.125 6.117.373 9.16l109.196 59.675c-1.367-12.016-.311-24.466 3.166-37.6L48.732 288.1z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconChameleonGlyphIcon })
);
