import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSwordSpinIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'sword-spin'];
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
        d="M259.738 20.38c-40.36-.244-81.305 9.895-118.744 31.51C28.566 116.8-10.03 260.837 54.88 373.265c64.91 112.427 208.947 151.024 321.376 86.113 77.686-44.852 120.106-127.485 117.498-211.363-3.575 65.865-35.942 128.62-91.082 169.41-10.81 9.596-22.748 18.254-35.762 25.767C263.228 503.053 130.926 467.6 71.066 363.92 11.206 260.238 46.66 127.936 150.34 68.076 185.98 47.5 225 38.183 263.3 39.03 336.42 40.65 406.9 79.31 446.183 147.35c.648 1.122 1.277 2.25 1.9 3.38.803 2.184 1.258 4.534 1.258 6.997 0 11.29-9.152 20.44-20.442 20.44-6.85 0-12.894-3.38-16.6-8.556-.763-1.432-1.547-2.858-2.355-4.276-.014-.035-.03-.068-.045-.104l-.01.004c-.15-.263-.293-.53-.445-.793-31.91-55.27-89.762-86.377-149.363-86.835-1.923-.014-3.848.002-5.773.05-28.007.718-56.228 8.227-82.162 23.2-82.99 47.914-111.498 154.31-63.584 237.3 2.93 5.072 6.08 9.936 9.426 14.597L95.65 365.648l9.344 16.184 24.848-14.348c53.686 59.734 143.727 75.99 216.017 34.254 51.455-29.707 81.957-81.898 86.294-137.05-12.315 44.767-41.423 85.652-83.564 113.128-3.87 2.732-7.892 5.32-12.076 7.737C273.02 422.21 194.6 408.96 146.41 357.92l45.278-26.143 19.99 34.625 16.185-9.343-16.707-28.937c24.072-21.104 54.165-23.015 62.973-5.96 93.825-32.597 231.378-110.21 190.755-180.57l-.4.173c-.692-1.26-1.396-2.514-2.118-3.764-42.597-73.78-119.27-115.764-198.724-117.565-1.3-.03-2.603-.048-3.905-.056zm.283 75.823c53.167.368 104.69 28.135 133.238 77.582.19.33.37.66.556.99-48.784 49.337-134.526 98.727-200.175 123.002l-15.1-26.148-16.183 9.343 19.987 34.62-48.08 27.76c-3.397-4.618-6.584-9.462-9.518-14.544-42.864-74.244-17.5-168.905 56.744-211.77 23.2-13.394 48.396-20.127 73.38-20.786 1.72-.045 3.436-.063 5.15-.05z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSwordSpinIcon })
);
