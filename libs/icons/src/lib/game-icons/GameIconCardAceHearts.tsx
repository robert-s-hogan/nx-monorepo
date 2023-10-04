import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCardAceHeartsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'card-ace-hearts'];
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
        d="M119.436 36c-16.126 0-29.2 17.237-29.2 38.5v363c0 21.263 13.074 38.5 29.2 38.5h275.298c16.126 0 29.198-17.237 29.198-38.5v-363c0-21.263-13.072-38.5-29.198-38.5H119.436zm57.214 16.174h.002c13.612-.318 26.502 9.855 27.073 28.043.976 31.09-47.738 52.945-52.31 70.015-4.998-18.649-51.414-37.573-52.45-70.015-.995-31.155 37.401-37.91 52.45-11.848 6.26-10.846 15.922-15.977 25.235-16.195zm66.17 112.83h7.963l63.121 160.834c2.536 6.498 7.727 9.748 15.573 9.748h5.468v8.916h-70.134v-8.916h5.587c7.291 0 12.442-.792 15.454-2.377 2.06-1.11 3.09-2.815 3.09-5.113 0-1.347-.278-2.774-.833-4.28l-14.62-37.324h-69.423l-8.2 21.397c-2.14 5.706-3.21 10.222-3.21 13.55 0 3.884 1.782 7.213 5.348 9.987 3.645 2.774 8.916 4.16 15.81 4.16h5.944v8.916h-63.715v-8.916c6.815 0 12.204-1.466 16.166-4.399 3.962-3.011 7.61-8.676 10.937-16.998l59.674-149.185zm-3.447 33.879l-31.502 78.336h62.17l-30.668-78.336zM360.73 361.77c4.572 17.07 53.289 38.923 52.312 70.013-.57 18.188-13.463 28.361-27.074 28.043h-.002c-9.313-.218-18.973-5.35-25.235-16.195-15.048 26.061-53.445 19.308-52.45-11.848 1.036-32.442 47.451-51.364 52.449-70.013z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCardAceHeartsIcon })
);
