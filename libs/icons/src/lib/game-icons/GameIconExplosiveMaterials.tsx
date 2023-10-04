import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconExplosiveMaterialsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'explosive-materials'];
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
        d="M16.504 12.025v151.26l54.93 177.096c-.248.088-.49.187-.737.276l90.278 47.748-32.21 40.035 28.817 38.04 89.61 27.946H361.08l-196.783-37.424c2.446-3.86 4.57-7.94 6.326-12.22l325.95 18.11V413.25l-321.627 17.313c.957-4.734 1.49-9.623 1.563-14.627l320.062-60.504v-50.81l-320.8 99.216c-.693-5.032-1.873-9.9-3.463-14.578l324.263-170.49v-65.41L167.35 377.767c-2.26-4.262-4.905-8.283-7.88-12.032L496.567 62.836v-50.81l-.002.005H456.27L148.533 354.456c-3.74-3.154-7.778-5.96-12.068-8.38L364.578 12.032H298l-172.725 328.83c-3.336-1.24-6.783-2.25-10.318-3.037l101.28-325.793H168.35l-60.963 324.473c-3.043-.37-6.14-.567-9.282-.584l17.1-323.89h-44.97l17.812 324.466c-3.38.41-6.693 1.03-9.926 1.85L16.505 12.025zm22.642 349.84c-12.633 13.97-20.314 32.506-20.314 52.897 0 43.655 35.188 78.843 78.844 78.843 19.185 0 36.72-6.81 50.36-18.136l-54.415-39.784 29.425-32.424-83.9-41.397z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconExplosiveMaterialsIcon })
);
