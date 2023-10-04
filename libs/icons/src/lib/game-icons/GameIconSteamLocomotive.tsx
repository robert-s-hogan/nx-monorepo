import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSteamLocomotiveIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'steam-locomotive'];
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
        d="M18 18v31.758C38.244 53.855 59.076 55.953 80 56a317.745 317.745 0 0 0 50.658-4.27C143.375 100.622 200.964 135.96 268 136c15.1-.044 30.093-1.903 44.395-5.504 3.702 25.632 27.322 44.78 55.275 44.813.475-.01.95-.027 1.424-.048 4.215 14.473 20.33 24.72 38.906 24.738 22.09 0 40-14.327 40-32-.022-13.555-10.718-25.63-26.697-30.137a48.067 48.067 0 0 0 2.203-14.21c-.02-19.245-11.602-36.886-30.057-45.772C402.962 63.617 407.94 47.92 408 32c-.033-7.4-1.128-6.774-3.268-14zm-2 205v18h23v48H25v94h142v-94h-14v-48h23v-18zm360 0v18h17v46h46v-46h17v-18zM57 241h14v48H57zm32 0h46v48H89zm231 20c-7.25 0-14.577 1.013-19.154 2.54-2.077.69-3.287 1.444-3.846 1.855V287h46v-21.605c-.56-.41-1.77-1.164-3.846-1.856C334.577 262.012 327.25 261 320 261zm-135 44v30h247v18H185v30h279c36 0 36-78 0-78zM25 401v37.22L75.67 401zm416 0v78h53.906c-4.965-9.187-9.113-19.953-12.734-31.557-4.94-15.833-8.498-32.39-10.227-46.443zm-289 1.49c-10.72 0-20.57 3.55-28.455 9.533L164.325 463h32.714a47.358 47.358 0 0 0 1.96-13.51c0-26.064-20.936-47-47-47zm112 0c-8.46 0-16.374 2.217-23.213 6.088L284.327 463h24.712a47.358 47.358 0 0 0 1.96-13.51c0-26.064-20.936-47-47-47zm112 0c-8.46 0-16.374 2.217-23.213 6.088L396.327 463c1.68 2.254 1.69 1.93 1.673 4.2V481h-56.945c8.586 9.524 21.034 15.49 34.945 15.49 26.064 0 47-20.936 47-47s-20.936-47-47-47zm-278.994 5.174L43.456 447H87.06c.512-13.423 5.137-25.816 12.633-35.975zm130.105 12.633C220.78 428.302 217 438.43 217 449.49c0 4.703.69 9.234 1.96 13.51h42.313zm112 0C332.78 428.302 329 438.43 329 449.49c0 4.703.69 9.234 1.96 13.51h42.313zm-227.684 5.392c-4.08 6.97-6.426 15.096-6.426 23.8 0 26.064 20.936 47 47 47 13.91 0 26.36-5.966 34.945-15.49h-31.27zM25.023 465c.522 16.756 14.085 30 30.977 30s30.455-13.244 30.977-30zm204.032 16c8.586 9.524 21.034 15.49 34.945 15.49 13.91 0 26.36-5.966 34.945-15.49z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSteamLocomotiveIcon })
);
