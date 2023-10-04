import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCardQueenHeartsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'card-queen-hearts'];
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
        d="M119.436 36c-16.126 0-29.2 17.237-29.2 38.5v363c0 21.263 13.074 38.5 29.2 38.5h275.298c16.126 0 29.198-17.237 29.198-38.5v-363c0-21.263-13.072-38.5-29.198-38.5H119.436zm57.214 16.174h.002c13.612-.318 26.502 9.855 27.073 28.043.976 31.09-47.738 52.945-52.31 70.015-4.998-18.649-51.414-37.573-52.45-70.015-.995-31.156 37.401-37.91 52.45-11.848 6.26-10.846 15.922-15.977 25.235-16.195zm69.26 112.83c14.978 0 28.647 3.804 41.01 11.412 12.363 7.529 22.27 18.385 29.719 32.57 7.449 14.106 11.173 29.916 11.173 47.43 0 16.008-2.932 30.274-8.796 42.795-5.786 12.521-14.898 23.972-27.34 34.353 1.268 3.25 2.654 7.688 4.16 13.315 2.774 10.54 5.429 17.394 7.965 20.564 2.536 3.17 5.428 4.754 8.678 4.754 3.01 0 5.586-1.703 7.726-5.111 2.219-3.329 3.408-8.914 3.566-16.76h7.133c-.079 14.265-2.854 24.764-8.322 31.5-5.468 6.736-12.6 10.106-21.396 10.106-8.163 0-14.82-3.29-19.971-9.868-5.072-6.498-8.44-19.018-10.104-37.562-4.438 1.11-8.717 1.941-12.838 2.496-4.12.555-8.044.832-11.77.832-14.74 0-28.37-3.804-40.892-11.412-12.442-7.687-22.346-18.663-29.716-32.928-7.291-14.344-10.936-30.51-10.936-48.5 0-25.518 8.28-47.31 24.844-65.379 15.057-16.404 33.76-24.607 56.107-24.607zm.358 9.035c-9.827 0-18.665 2.773-26.51 8.32-7.767 5.548-13.869 14.226-18.307 26.034-4.358 11.728-6.537 27.698-6.537 47.906 0 14.264 1.307 26.507 3.922 36.73 2.615 10.223 6.697 19.93 12.244 29.123-.158-3.645-.238-6.576-.238-8.795 0-9.826 3.132-17.91 9.392-24.25 6.34-6.34 14.621-9.51 24.844-9.51 10.302 0 18.94 3.448 25.914 10.342 5.23 5.23 10.144 14.304 14.74 27.221 4.28-8.083 7.41-16.839 9.391-26.27 1.981-9.43 2.973-21.24 2.973-35.425 0-19.97-2.18-35.74-6.54-47.31-4.358-11.65-10.5-20.248-18.425-25.796-7.925-5.547-16.878-8.32-26.863-8.32zm-1.547 114.83c-7.45 0-13.552 2.378-18.307 7.133-4.755 4.755-7.13 10.895-7.13 18.424 0 7.45 2.932 14.503 8.796 21.16 5.627 2.457 11.53 3.685 17.711 3.685 4.755 0 9.232-.594 13.432-1.783a46.815 46.815 0 0 0 11.888-5.23c-.158-14.265-2.021-24.606-5.588-31.026-4.517-8.241-11.451-12.363-20.802-12.363zm116.008 72.9c4.572 17.071 53.289 38.924 52.312 70.014-.57 18.189-13.464 28.364-27.076 28.045l.002-.002c-9.314-.217-18.975-5.349-25.237-16.195-15.048 26.061-53.445 19.307-52.45-11.848 1.036-32.442 47.451-51.364 52.449-70.013z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCardQueenHeartsIcon })
);
