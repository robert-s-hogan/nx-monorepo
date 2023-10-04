import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCctvCameraIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'cctv-camera'];
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
        d="M109.285 30.402c-14.82-.007-30.414 2.144-46.822 6.932a9.5 9.5 0 0 0-.145.05 9.5 9.5 0 0 0-.496.173 9.5 9.5 0 0 0-.39.152 9.5 9.5 0 0 0-.47.218 9.5 9.5 0 0 0-.384.193 9.5 9.5 0 0 0-.463.273 9.5 9.5 0 0 0-.342.22 9.5 9.5 0 0 0-.435.32 9.5 9.5 0 0 0-.324.256 9.5 9.5 0 0 0-.397.357 9.5 9.5 0 0 0-.297.29 9.5 9.5 0 0 0-.37.405 9.5 9.5 0 0 0-.247.293 9.5 9.5 0 0 0-.342.463 9.5 9.5 0 0 0-.215.315 9.5 9.5 0 0 0-.282.472 9.5 9.5 0 0 0-.193.354 9.5 9.5 0 0 0-.233.497 9.5 9.5 0 0 0-.156.367 9.5 9.5 0 0 0-.178.512 9.5 9.5 0 0 0-.122.386 9.5 9.5 0 0 0-.17.688L33.42 156.55a9.5 9.5 0 0 0 5.625 10.614l82.023 34.578 31.62 162.133-116.534 25.313a9.5 9.5 0 0 0-7.5 9.156l-1.062 76.47a9.5 9.5 0 0 0 12.375 9.186l146.468-46.813 24.123-4.677c.177.003.353.015.53.015 9.956 0 19.332-4.742 25.88-12.472 6.543-7.724 9.966-17.79 9.956-28.16v-.026c.006-6.574-1.372-13.037-4.045-18.855l-25.273-130.57 125.774 53.02a9.5 9.5 0 0 0 .155.058 9.5 9.5 0 0 0 .545.197 9.5 9.5 0 0 0 .35.11 9.5 9.5 0 0 0 .543.138 9.5 9.5 0 0 0 .416.086 9.5 9.5 0 0 0 .483.073 9.5 9.5 0 0 0 .482.05 9.5 9.5 0 0 0 .43.02 9.5 9.5 0 0 0 .54.004 9.5 9.5 0 0 0 .363-.01l83.406-5.28a9.5 9.5 0 0 0 7.97-5.438l50.522-106.954.008-.014a9.5 9.5 0 0 0 0-.002 9.5 9.5 0 0 0 .02-.047 9.5 9.5 0 0 0-5.51-13.137c-7.787-4.27-15.802-7.26-23.956-9.148L152.273 36.688a9.5 9.5 0 0 0-.802-.268c-13.317-3.843-27.364-6.01-42.185-6.018zM82.938 44.125a9.5 9.5 0 0 1 3.687.72l290.75 116.53a9.508 9.508 0 0 1 5.77 10.79 9.5 9.5 0 0 0-.707 1.46l-.836 2.07a9.508 9.508 0 0 1-11.29 3.336L79.563 62.47a9.5 9.5 0 0 1 3.376-18.345zm357.308 128.367c4.4.038 8.75.508 13.068 1.404l14.74 5.72-23.67 50.114c.912-4.058 1.378-8.082 1.335-11.855-.1-8.732-2.94-15.95-7.845-19.563-4.905-3.613-11.688-3.48-18.375.25-1.65.92-3.305 2.063-4.906 3.375.614-.822 1.19-1.72 1.687-2.687 1.417-2.757 2.248-5.952 2.22-8.78-.032-2.835-.945-5.243-2.563-6.47-.808-.613-1.74-.922-2.75-.906-1.01.016-2.102.332-3.156.937-2.107 1.212-4.08 3.52-5.5 6.282-1.417 2.764-2.25 5.948-2.217 8.782.03 2.833.945 5.242 2.562 6.47 1.617 1.225 3.798 1.147 5.906-.064-3.416 3.562-6.546 7.9-9.092 12.72-4.608 8.716-7.226 18.798-7.125 27.53.1 8.732 3 15.98 7.906 19.594 4.904 3.614 11.624 3.45 18.31-.28 4.178-2.332 8.29-6.018 11.91-10.582l-8.41 17.8-62.75 4 37.253-92.39c14.635-7.746 28.272-11.513 41.463-11.4zm-298.078 38.145l16.014 6.752 29.732 139.555c-3.005-.917-6.143-1.41-9.342-1.41-2.724 0-5.4.366-7.988 1.037l-28.416-145.935zm37.353 15.748l17.017 7.174 23 118.83c-2.732-.75-5.564-1.156-8.447-1.156-1.643 0-3.266.14-4.865.39l-26.704-125.24zM211.09 370.3c3.863 0 8.258 1.978 11.472 5.772 3.215 3.795 5.433 9.89 5.424 15.795a9.47 9.532 0 0 0 0 .026c.01 5.905-2.21 12-5.423 15.795-1.525 1.8-3.316 3.177-5.188 4.142l-6.143 1.19c2.106-5.273 3.184-11.002 3.178-16.827v-.025c.004-3.773-.452-7.51-1.342-11.107a9.5 9.5 0 0 0-.193-2.248l-2.656-12.458c.29-.022.583-.055.87-.055zm-32.518 4.3c3.864 0 8.26 1.978 11.475 5.773 3.214 3.795 5.43 9.89 5.422 15.795a9.47 9.532 0 0 0 0 .025c.008 5.905-2.21 12-5.423 15.795-3.215 3.795-7.61 5.774-11.475 5.774-3.863 0-8.233-1.98-11.447-5.774-3.214-3.794-5.458-9.89-5.45-15.795a9.47 9.532 0 0 0 0-.025c-.008-5.905 2.236-12 5.45-15.795s7.584-5.773 11.447-5.773zm-34.496 10.59c-.87 3.56-1.316 7.25-1.312 10.978v.025c-.01 10.37 3.41 20.437 9.953 28.16.838.99 1.723 1.93 2.648 2.817L46.78 461.875l.782-55.72 96.514-20.966z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCctvCameraIcon })
);
