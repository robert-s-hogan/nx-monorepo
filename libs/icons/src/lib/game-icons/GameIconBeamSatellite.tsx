import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBeamSatelliteIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'beam-satellite'];
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
        d="M24.998 24.998v14.004h30.004V24.998H24.998zm48 0v14.004h46.004V24.998H72.998zm64 0v14.004h37.184l-4.668-14.004h-32.516zm205.488 0l-4.668 14.004h37.184V24.998h-32.516zm50.512 0v14.004h46.004V24.998h-46.004zm64 0v14.004h30.004V24.998h-30.004zm-432 32v30.004h30.004V56.998H24.998zm48 0v30.004h46.004V56.998H72.998zm64 0v30.004H215.002V72.998h-29.488l-5.334-16h-43.182zm96 0v59.326l-34.15 27.32c16.813-5.416 35.96-8.642 57.152-8.642s40.34 3.226 57.152 8.643l-34.15-27.32V56.997h-46.004zm98.822 0l-5.334 16h-29.488v14.004h78.004V56.998H331.82zm61.178 0v30.004h46.004V56.998h-46.004zm64 0v30.004h30.004V56.998h-30.004zm-432 48v14.004h30.004v-14.004H24.998zm48 0v14.004h46.004v-14.004H72.998zm64 0v14.004h17.44l7.001-14.004H137zm213.563 0l7.002 14.004h17.439v-14.004h-24.441zm42.437 0v14.004h46.004v-14.004h-46.004zm64 0v14.004h30.004v-14.004h-30.004zm-200.998 48c-38.2 0-68.333 11.462-88.707 26.28-18.004 13.093-27.816 28.97-29.861 40.427 6.887 4.562 21.771 10.067 41.109 13.43 14.42 2.508 31.078 4.214 48.502 5.115l-4.143-30.379c-10.514 1.898-19.878 4.68-26.875 8.178l-8.05-16.098c18.146-9.073 43.025-12.95 68.025-12.95 25 0 49.879 3.877 68.025 12.95l-8.05 16.098c-6.997-3.499-16.36-6.28-26.875-8.178l-4.143 30.379c17.424-.901 34.082-2.607 48.502-5.115 19.338-3.363 34.222-8.868 41.11-13.43-2.046-11.457-11.858-27.334-29.862-40.428C324.333 164.46 294.2 152.998 256 152.998zm0 52c-4.197 0-8.935 1.891-14.436 6.543L256 317.398l14.436-105.857c-5.501-4.652-10.24-6.543-14.436-6.543zM384 256l-106.389 36.121-4.35 31.893c3.926 1.454 7.553 3.406 10.766 5.816 7.549 5.661 12.971 14.3 12.971 24.17 0 9.87-5.422 18.509-12.97 24.17-7.55 5.661-17.368 8.828-28.028 8.828s-20.479-3.167-28.027-8.828c-7.549-5.661-12.971-14.3-12.971-24.17 0-9.87 5.422-18.509 12.97-24.17 3.214-2.41 6.841-4.362 10.766-5.816l-2.931-21.493-119.922-29.314 72.34 48.461-104.512 69.666 85.803-12.066-31.455 29.435s26.97-10.097 49.152-18.29l-43.22 86.41L224 416v78.002h9.805L242.283 432l9.862 45.33 8.88-69.373 17.073 86.045H288V416l96 48-45.477-67.885 92.71-18.26-87.262-30.023 26.695-21.9-53.23 3.214L384 256zm-128 82.998c-7.013 0-13.195 2.206-17.229 5.23-4.033 3.025-5.773 6.387-5.773 9.772 0 3.385 1.74 6.747 5.773 9.771 4.034 3.025 10.216 5.231 17.229 5.231s13.195-2.206 17.229-5.23c4.033-3.025 5.773-6.387 5.773-9.772 0-3.385-1.74-6.747-5.773-9.771-4.034-3.025-10.216-5.231-17.229-5.231z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBeamSatelliteIcon })
);
