import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCard6ClubsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'card-6-clubs'];
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
        d="M119.436 36c-16.126 0-29.2 17.237-29.2 38.5v363c0 21.263 13.074 38.5 29.2 38.5h275.298c16.126 0 29.198-17.237 29.198-38.5v-363c0-21.263-13.072-38.5-29.198-38.5H119.436zm26.832 8.408v.002h.015c13.587.01 24.442 10.853 24.442 24.442 0 5.71-2.003 10.997-5.266 15.173 1.12-.158 2.232-.31 3.396-.31 13.595 0 24.458 11.157 24.458 24.752 0 13.594-10.863 24.752-24.458 24.752-5.76 0-11.08-2.048-15.294-5.422l12.609 30.193h-40.117l12.42-29.744c-4.12 3.115-9.233 4.973-14.776 4.973-13.594 0-24.752-11.16-24.752-24.754 0-13.595 11.158-24.752 24.752-24.752 1.059 0 2.058.184 3.082.312-3.215-4.16-5.248-9.509-5.248-15.173 0-13.589 11.15-24.434 24.737-24.444zm112.466 132.127c11.57 0 21.397 3.17 29.48 9.51 6.737 5.151 10.104 11.331 10.104 18.543 0 4.834-1.506 8.796-4.517 11.887-2.932 3.09-6.537 4.636-10.817 4.636-3.962 0-7.37-1.308-10.222-3.923-2.774-2.616-4.16-5.706-4.16-9.272 0-2.377.95-5.07 2.851-8.082 1.744-2.774 2.615-4.954 2.615-6.54 0-2.218-1.069-4.041-3.209-5.468-2.853-1.823-6.775-2.732-11.767-2.732-7.687 0-14.701 2.416-21.041 7.25s-11.728 13.155-16.166 24.963c-4.359 11.728-6.54 24.925-6.54 39.586 0 2.14.12 5.347.358 9.627 6.181-8.242 12.679-14.145 19.494-17.711 6.816-3.567 14.304-5.35 22.467-5.35 13.155 0 24.171 4.479 33.047 13.434 8.955 8.875 13.432 20.127 13.432 33.757 0 16.405-5.27 30.036-15.809 40.893-10.54 10.857-23.577 16.285-39.11 16.285-10.936 0-20.683-2.893-29.242-8.678-8.558-5.864-15.573-14.977-21.04-27.34-5.39-12.362-8.083-26.785-8.083-43.269 0-17.83 3.328-33.998 9.985-48.5 6.657-14.502 15.135-25.359 25.437-32.57 10.382-7.291 21.2-10.936 32.453-10.936zm-7.607 78.574c-9.906 0-18.03 3.605-24.37 10.817-6.26 7.132-9.39 17.196-9.39 30.193 0 14.106 3.05 24.885 9.153 32.334 6.102 7.45 13.868 11.174 23.298 11.174 9.352 0 16.88-3.527 22.586-10.58 5.706-7.053 8.559-17.592 8.559-31.62 0-14.898-2.655-25.676-7.965-32.333-5.23-6.657-12.52-9.985-21.871-9.985zm94.668 98.903h40.117l-12.611 30.193c4.215-3.374 9.535-5.422 15.295-5.422 13.594 0 24.459 11.158 24.459 24.752 0 13.595-10.865 24.752-24.46 24.752-1.163 0-2.275-.152-3.396-.31 3.263 4.176 5.266 9.462 5.266 15.173 0 13.589-10.853 24.433-24.44 24.442h-.017c-13.588-.01-24.735-10.853-24.735-24.442 0-5.665 2.033-11.013 5.248-15.173-1.023.128-2.025.312-3.084.312-13.594 0-24.751-11.159-24.751-24.754 0-13.594 11.157-24.752 24.752-24.752 5.542 0 10.655 1.858 14.775 4.973l-12.418-29.744z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCard6ClubsIcon })
);
