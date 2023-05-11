import IconWrapper from './IconWrapper';

const BatteryChargingIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-battery-charging ${props.className}`}
    >
      <path d="M23 7v10h-6.2l-2.8 5v-5h-6v-10h6v-5l2.8-5h3.2"></path>
      <line x1="16" y1="5" x2="16" y2="2"></line>
    </svg>
  );
};

export const BatteryCharging = IconWrapper(BatteryChargingIcon);
