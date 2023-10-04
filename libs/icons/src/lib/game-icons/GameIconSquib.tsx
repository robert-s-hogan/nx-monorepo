import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSquibIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'squib'];
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
        d="M59.395 20.285l109.447 137.043L18.89 98.084 143.737 246.75 36.975 338.582l137.287-12.72-31.457 160.187 112.27-115.142 83.08 101.588-8.58-127.873 165.988-22.76-141.383-74.597 141.04-56.778v-67.236L388.605 189.18l106.5-128.567L292.05 160.55 240.98 40.616l-53.037 90.26L126.63 20.285H59.396zm280.996 0l-25.812 98.61 93.05-98.61H340.39zM219.8 169.29l35.042 59.308-72.737-30.795c4.267-16.433 18.46-27.994 37.696-28.512zm104.62 1.77c16.857 9.28 24.173 26.062 20.428 42.62l-18.866-8.112-35.28 17.522 15.986-26.145-11.715-6.8 29.447-19.086zm-65.5 18.872l24.332 4.218-11.7 37.862-12.632-42.08zm-16.12 58.87l-1.208 21.895 22.87 2.412-38.76 54.28c-34.81-3.42-53.307-34.73-38.737-71.263L242.8 248.8zm32.034 18.862l51.99 16.72c2.035 11.373-2.796 20.542-13.455 24.466l7.767 8.576c-4.758 13.162-16.607 18.498-31.276 12.222l-4.9-47.962-10.126-14.022zm-143.688 85.15L74.613 396.34l-26-15.01-24.95 43.213 43.216 24.95 21.698-37.585 42.568-59.094zm223.293 10.32l85.85 81.178 11.68 42.05 39.712-12.266-12.264-33.287 19.857-36.796-39.13 10.513-105.706-51.392z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSquibIcon })
);
