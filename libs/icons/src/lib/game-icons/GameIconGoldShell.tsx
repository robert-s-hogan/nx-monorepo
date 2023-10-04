import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconGoldShellIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'gold-shell'];
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
        d="M255.902 21.777c-57.656 0-110.49 20.826-151.41 55.34l-.02.018C89.573 88.44 76.664 102.23 66.358 117.883c-28.625 38.948-45.555 87.01-45.555 138.994 0 60.03 22.573 114.835 59.67 156.406l-.428.428c2.47 2.472 4.99 4.866 7.545 7.2 42.715 43.82 102.358 71.065 168.31 71.065 129.73 0 235.1-105.367 235.1-235.098 0-129.73-105.37-235.1-235.1-235.1zm18.557 19.485c110.923 9.397 197.856 102.235 197.856 215.615 0 93.92-59.656 173.746-143.185 203.725 21.783-10.06 42.125-23.996 59.99-41.86 83.66-83.66 81.477-221.553-4.095-308.117-27.37-34.46-66.12-59.47-110.566-69.363zm-70.942 21.244c50.418 0 94.77 25.548 120.845 64.426-23.568-22.81-55.268-36.417-87.088-37.588-1.74-.064-3.482-.09-5.222-.08-26.108.163-51.995 8.817-73.223 27.744-37.01 33-47.4 93.67-11.256 132.697 24.97 26.964 70.172 34.654 98.377 6.775 9.363-9.253 15.098-21.745 16.107-34.748 1.01-13.002-3.07-26.867-13.68-36.925l-.002-.002c-6.717-6.365-15.495-10.193-24.725-10.723-9.23-.53-19.322 2.714-26.187 10.797-4.127 4.858-6.432 10.902-6.52 17.382-.087 6.48 2.615 13.847 8.807 18.47l.01.008.008.006c3.53 2.623 7.546 3.958 12.13 3.813 4.585-.147 10.325-2.614 13.293-7.69v-.003c1.62-2.77 2.21-5.36 1.828-8.705-.383-3.344-2.986-8.217-7.56-9.988-2.477-.96-3.87-1.053-6.464-.467-.617.14-1.33.36-2.078.7.265-.494.487-1.06.797-1.427 2.8-3.297 6.35-4.495 10.865-4.236 4.515.26 9.583 2.45 12.94 5.63 6.232 5.91 8.547 13.58 7.9 21.913-.647 8.334-4.617 16.978-10.607 22.9-19.7 19.47-52.966 13.852-71.52-6.183-28.257-30.51-19.83-79.463 9.98-106.043 43.082-38.41 110.765-25.763 147.365 17.128 16.63 19.486 26.923 44.188 29.785 69.752l.168-.02c-5.076 75.787-67.978 135.512-145.07 135.512-80.42 0-145.414-64.99-145.414-145.412 0-29.5 8.753-56.917 23.796-79.818 9.884-13.34 21.267-25.497 33.9-36.23 24.37-18.436 54.745-29.366 87.718-29.366zm223.74 162.908c13.955 63.703-3.07 131.83-51.354 180.113-74.77 74.77-197.125 74.596-276.945.438-33.938-35.717-55.775-83.033-59.03-135.432C57.754 360.206 136.866 427.8 231.775 427.8c108.034 0 195.612-87.576 195.612-195.61 0-2.27-.053-4.526-.13-6.776z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconGoldShellIcon })
);
