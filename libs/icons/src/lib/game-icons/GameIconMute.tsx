import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconMuteIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'mute'];
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
        d="M25.78 18v140.684c15.804 55.05 35.45 105.15 69.534 141.127 29.986 31.652 71.13 53.17 133.186 58.106-1.465-21.612-2.782-44.32-3.77-68.687-8.28 1.9-18.098 4.388-30.546 7.5l-4.368-17.46c13.796-3.45 24.812-6.15 34.26-8.112-.565-17.64-.957-36.102-1.068-55.773-24.658-2.122-51.63-6.376-86.008-12.608V208h-18v-32h18v5.81c39.205-4.887 66.136-8.12 89.102-9.67 3.264-9.885 9.035-18.425 17.01-24.765 11.33-9.01 26.565-13.45 44.077-12.875 2.5.082 5.05.267 7.64.555l7.383.822.594 7.402c.802 9.988 1.367 20.126 1.843 30.402 18.964 1.793 41.274 4.504 70.35 8.13V176h18v32h-18v-5.066c-26.533 5.123-48.64 8.784-68.684 11.082.872 20.248 2.045 41.043 4.444 62.418 3.592.882 7.386 1.826 11.424 2.836l-4.368 17.46c-1.735-.433-2.93-.728-4.568-1.138 2.71 18.324 6.478 37.062 11.902 56.242 40.524-9.445 70.1-27.748 93.098-52.023 34.084-35.977 53.73-86.076 69.533-141.126V18H325.4c2.027 10.094 3.343 20.117 3.596 29.764l-17.992.472c-.247-9.402-1.785-19.666-4.14-30.236H204.995C202.512 29.056 201 39.368 201 48h-18c0-9.32 1.253-19.484 3.355-30zm162.08 49.887c3.933-.04 7.64.68 10.935 2.092 7.532 3.227 12.568 8.657 17.568 13.657C226.363 93.637 235 103 256 103s29.637-9.363 39.637-19.363c5-5 10.036-10.43 17.568-13.658 7.532-3.23 17.21-2.836 26.82 1.97l-.004.007c5.888 2.693 10.056 8.65 10.056 15.467 0 9.282-7.718 17-17 17-8.693 0-16.01-6.77-16.906-15.252-2.246 1.778-4.84 4.224-7.807 7.19C298.363 106.363 283 121 256 121s-42.363-14.637-52.363-24.637c-2.968-2.967-5.56-5.413-7.807-7.19-.895 8.482-8.214 15.25-16.906 15.25-9.282 0-17-7.717-17-17 0-6.815 4.168-12.773 10.055-15.466l-.005-.008c4.805-2.403 9.627-3.703 14.19-4 .57-.036 1.135-.057 1.696-.063zm84.93 85.547c.27 22.19-.193 39.466 2.6 48.912 1.55 5.247 3.35 7.76 6.753 9.734 1.467.852 3.46 1.59 6.01 2.13-.92-21.412-1.5-41.967-2.825-61.53-4.22-.41-8.644.04-12.537.754zm-18.022 7.685c-.15.115-.307.227-.455.345C245.813 168.223 241 178.245 241 192v.045c-.466 92.33 4.96 159.972 9.81 223.818 20.016 4.087 36.912 7.04 51.19 9.352 13.76 2.227 24.982 3.81 34.55 5.326-35.895-71.67-44.2-138.057-47.505-197.91-6.045-.726-11.33-2.307-15.94-4.984-7.74-4.493-12.573-12.06-14.978-20.2-3.815-12.905-3.428-28.14-3.36-46.327zm-117.49 258.24c-6.108 7.06-11.408 19.73-15.366 34.786-3.253 12.375-5.668 26.162-7.873 39.854h33.308c-.47-20.78 5.12-37.688 24.004-39 71.475 12.15 148.648 12.283 207.306 30.576-.96-4.436-1.874-8.294-2.773-11.465-2.262-9.82-7.972-17.038-15.862-19.99-10.02-3.684-29.098-5.988-60.898-11.136-31.8-5.147-76.5-13.428-139.68-30.298-8.803-2.765-17.193 1.01-22.166 6.673zm-33.423 32.806c-4.966 1.588-10.514 4.09-15.714 7.324-12.333 7.672-21.705 18.87-22.072 30.05l.99 4.46h28.637c2.237-13.862 4.762-28.343 8.16-41.834zM162.328 494h190.93c-29.295-9.362-83.06-14.25-177.9-21.023-10.978.135-13.992 15.12-13.03 21.023z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconMuteIcon })
);
