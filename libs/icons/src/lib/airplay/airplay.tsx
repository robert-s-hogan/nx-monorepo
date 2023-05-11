//libs/icons/src/lib/Airplay.tsx
import IconWrapper from './IconWrapper';

type AirplayIconProps = {
  className?: string;
};

const AirplayIcon = (props: AirplayIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-airplay ${props.className}`}
    >
      <path d="M5 18l8-8 8 8"></path>
      <path d="M0 0h24v24H0z" fill="none"></path>
    </svg>
  );
};

export const Airplay = IconWrapper(AirplayIcon);
