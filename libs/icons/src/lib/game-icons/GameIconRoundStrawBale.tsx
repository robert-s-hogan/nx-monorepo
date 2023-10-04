import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconRoundStrawBaleIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'round-straw-bale'];
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
        d="M327.77 39.993c-41.907 6.704-70.758 3.13-101.303 17.678h-26.88c.342.33.692.644 1.03.98 9.635 9.633 18.07 22.32 25.375 37.445l1.516-.606c33.74 15.472 48.943 42.502 61.947 70.177-18.663-17.576-35.772-38.473-56.088-52.52 12.214 31.56 20.324 71.11 22.815 114.79l.17-.567 16.855 76.555-16.45-31.533c-1.61 52.21-11.177 99.253-26.243 134.865-8.283 19.577-18.21 35.75-29.897 47.434-.338.338-.688.65-1.03.98h98.767c-22.975 6.925-50.947 9.928-74.31 16.112 38.377.768 85.118.466 119.317-16.11H352c9.276 0 18.522-4.346 27.89-13.712 9.37-9.366 18.405-23.653 26.048-41.717 14.13-33.397 23.546-79.537 24.89-130.88 6.415 7.794 11.654 17.045 16.574 27.382-3.274 40.622-11.47 77.23-23.285 106.582v41.91l-10.283-19.88c-6.3 11.585-13.36 21.478-21.217 29.333-.338.338-.688.65-1.03.98H416c9.276 0 18.522-4.344 27.89-13.71 6.75-6.748 13.325-16.063 19.333-27.492l3.603 26.3 16.076-79.992c1.674-6.65 3.187-13.577 4.543-20.718l-21.8 24.267 25.628-48.404C493.68 297.2 495 277.3 495 256.67c0-45.56-6.38-87.61-16.89-121.138 4.86 6.194 9.62 12.975 14.54 20.174-6.124-27.588-20.115-50.18-36.63-69.12-3.917-5.962-7.99-11.066-12.13-15.204-9.368-9.366-18.614-13.71-27.89-13.71h-24.412c.34.33.69.642 1.03.98 11.687 11.684 21.613 27.856 29.896 47.433C439.08 145.24 449 198.205 449 256.67c0 6.046-.112 12.028-.32 17.946-4.48-14.128-10.872-27.217-18.155-39.332-2.122-47.848-11.26-90.684-24.587-122.185-7.643-18.065-16.68-32.352-26.047-41.718-9.368-9.366-18.614-13.71-27.89-13.71h-79.742c17.065-5.663 40.283-9.433 55.513-17.68zM96 57.67c-9.276 0-18.522 4.346-27.89 13.712-9.37 9.366-18.405 23.653-26.047 41.717-4 9.455-7.62 19.942-10.79 31.27-3.858-16.566-3.208-32.146-3.96-52.232-9.42 39.392-8.33 72.102-7.225 110.445C18.086 219.788 17 237.93 17 256.67c0 56.41 9.778 107.446 25.063 143.573a193.892 193.892 0 0 0 4.83 10.535c-8.746-10.814-15.728-22.887-24.297-33.826 12.706 19.757 21.097 43.046 39.45 58.184 1.998 2.496 4.022 4.783 6.063 6.824 9.368 9.366 18.614 13.71 27.89 13.71s18.522-4.344 27.89-13.71c9.37-9.366 18.405-23.653 26.047-41.717 2.293-5.42 4.46-11.18 6.49-17.238-12.02 9.263-27.215 20.65-29.304 20.65-2.774 0 24.35-31.1 36.193-44.54 4.93-20.015 8.494-42.332 10.31-66.13a81.142 81.142 0 0 0-2.5-2.572l2.675.127a478.222 478.222 0 0 0 1.2-33.87c0-4.557-.07-9.076-.195-13.56 3.753 10.688 7.577 22.448 11.634 36.454-3.523-30.028-8.096-64.585-15.792-86.862-4.274-30.565-11.487-57.8-20.71-79.603-7.643-18.065-16.68-32.352-26.047-41.718-9.368-9.366-18.614-13.71-27.89-13.71zm39.588 0c.34.33.69.644 1.03.98 11.687 11.686 21.613 27.858 29.896 47.435C183.08 145.24 193 198.205 193 256.67c0 13.244-.514 26.2-1.494 38.782 21.076 26.906 23.5 56.24 23.867 85.28-8.803-21.494-15.322-44.94-25.9-64.92-4.258 34.785-12.206 66.028-22.96 91.445-8.282 19.577-18.208 35.75-29.896 47.434-.338.338-.688.65-1.03.98H160c9.276 0 18.522-4.344 27.89-13.71 9.37-9.366 18.405-23.653 26.048-41.717C229.22 364.116 239 313.08 239 256.67c0-26.82-2.214-52.419-6.176-75.784 4.327 5.647 8.596 11.74 12.994 18.174-3.69-16.626-10.24-31.435-18.474-44.73-3.736-15.19-8.257-29.06-13.406-41.23-7.643-18.065-16.68-32.352-26.047-41.718-9.368-9.366-18.614-13.71-27.89-13.71h-24.412zm209.258 14.485c25.247 16.81 34.262 41.267 41.437 66.02-17.208-22.52-31.504-49.7-54.783-62.508l13.346-3.512zM116.236 85.85l-7.75 26.48c2.683 1.692 5.332 4.213 7.903 7.6 24.142 31.81 33.814 122.726 23.68 195.915-11.788 85.14-44.5 119.04-70.756 82.033-11.732-16.536-21.186-45.314-27.134-80.34 6.253 13.644 14.966 26.91 20.238 29.143 3.32 8.92 7.032 16.408 11.05 22.07 21.26 29.968 47.877 2.376 57.296-65.65 7.957-57.47.328-129.188-18.295-153.724-15.28-20.13-34.28.26-40.466 49.336-4.867 38.61.462 86.45 13.025 100.836 9.26 10.603 20.707-2.47 23.68-32.287.974-9.757.7-21.466-.65-30.6-1.353-9.135-3.496-15.446-6.644-17.667-1.502-1.06-3.746-.072-5.178 2.45-1.43 2.525-1.983 4.742-2.013 9.164l-10.147-.688c.113-16.41 3.4-29.625 7.195-36.32 3.797-6.694 8.17-8.712 12.366-5.753 6.42 4.53 11.164 18.747 13.62 35.344 2.146 14.503 2.764 31.013 1.7 46.827l-.224.076c.05.49.08.976.11 1.46-.132 1.765-.278 3.522-.45 5.263-.212 2.11-.455 4.147-.712 6.15-3.856 14.255-16.13 25.742-28.278 36.12 6.435 1.698 15.85-5.43 24.272-14.98-7.548 28.537-20.868 38.327-32.12 25.44-18.357-21.02-25.846-88.2-18.99-142.6 5.43-43.08 17.81-69.57 31.36-75.785l22.308-25.31zM46.918 268.66c1.802 21.987 5.182 42.453 9.756 59.724C46.56 317.382 41.87 303.82 38.45 290.61c-.505-4.6-.972-9.248-1.36-13.982l9.828-7.97zM353.1 286.814h12.912c-9.574 23.627-30.99 45.624-55.125 62.08 15.558-20.322 36.29-39.35 42.213-62.08zm21.478 108.65l3.303 13.397c-17.2 24.983-41.794 33.616-66.655 40.405 22.785-16.856 50.186-30.726 63.353-53.803z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconRoundStrawBaleIcon })
);
