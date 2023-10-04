import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCard8ClubsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'card-8-clubs'];
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
        d="M119.436 36c-16.126 0-29.2 17.237-29.2 38.5v363c0 21.263 13.074 38.5 29.2 38.5h275.298c16.126 0 29.198-17.237 29.198-38.5v-363c0-21.263-13.072-38.5-29.198-38.5H119.436zm26.832 8.408v.002h.015c13.587.01 24.442 10.853 24.442 24.442 0 5.71-2.003 10.997-5.266 15.173 1.12-.158 2.232-.31 3.396-.31 13.595 0 24.458 11.157 24.458 24.752 0 13.594-10.863 24.752-24.458 24.752-5.76 0-11.08-2.048-15.294-5.422l12.609 30.193h-40.117l12.42-29.744c-4.12 3.115-9.233 4.973-14.776 4.973-13.594 0-24.752-11.16-24.752-24.754 0-13.595 11.158-24.752 24.752-24.752 1.059 0 2.058.184 3.082.312-3.215-4.16-5.248-9.509-5.248-15.173 0-13.589 11.15-24.434 24.737-24.444zM248.63 176.533c9.906 0 18.504 1.704 25.795 5.112 7.37 3.407 12.958 8.043 16.762 13.908 3.883 5.864 5.824 12.006 5.824 18.426 0 14.898-9.392 27.3-28.174 37.207 12.68 4.596 21.834 10.619 27.46 18.068 5.627 7.37 8.44 16.285 8.44 26.746 0 12.759-4.081 23.895-12.244 33.404-10.54 12.284-25.558 18.424-45.053 18.424-17.196 0-30.788-4.12-40.773-12.361-9.985-8.321-14.977-18.663-14.977-31.026 0-9.272 2.853-17.355 8.559-24.25 5.785-6.973 15.73-12.878 29.836-17.712-20.842-8.955-31.264-22.784-31.264-41.487 0-12.125 4.676-22.546 14.028-31.263 9.43-8.797 21.358-13.196 35.78-13.196zm-.832 8.203c-10.382 0-18.465 2.536-24.25 7.608-5.785 4.992-8.678 11.53-8.678 19.613 0 8.004 2.496 14.384 7.488 19.139 5.072 4.755 17.515 10.422 37.327 17 8.32-4.755 13.908-9.431 16.761-14.028 2.853-4.675 4.28-10.778 4.28-18.306 0-9.906-2.815-17.553-8.442-22.942-5.626-5.389-13.788-8.084-24.486-8.084zm-8.797 81.07c-11.253 4.756-19.06 10.106-23.418 16.05-4.359 5.943-6.537 13.233-6.537 21.87 0 11.254 3.288 20.011 9.865 26.272 6.657 6.181 16.207 9.272 28.649 9.272 13.155 0 23.379-3.09 30.67-9.272 7.29-6.26 10.935-14.502 10.935-24.725 0-9.272-3.17-16.286-9.51-21.04-6.26-4.755-19.812-10.898-40.654-18.426zm106.793 88.206h40.117l-12.611 30.193c4.215-3.374 9.535-5.422 15.295-5.422 13.594 0 24.459 11.158 24.459 24.752 0 13.595-10.865 24.752-24.46 24.752-1.163 0-2.275-.152-3.396-.31 3.263 4.176 5.266 9.463 5.266 15.173 0 13.589-10.853 24.433-24.44 24.442h-.017c-13.588-.01-24.735-10.853-24.735-24.442 0-5.664 2.033-11.013 5.248-15.173-1.023.128-2.025.312-3.084.312-13.594 0-24.751-11.159-24.751-24.754 0-13.594 11.157-24.752 24.752-24.752 5.542 0 10.655 1.858 14.775 4.973l-12.418-29.744z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCard8ClubsIcon })
);
