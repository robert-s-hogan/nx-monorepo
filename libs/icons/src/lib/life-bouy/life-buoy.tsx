import IconWrapper from './IconWrapper';

const LifeBuoyIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-life-buoy ${props.className}`}
    >
      <circle cx="12" cy="12" r="4"></circle>
      <circle cx="12" cy="12" r="9"></circle>
      <line x1="15.46" y1="9.88" x2="18.88" y2="6.47"></line>
      <line x1="5.12" y1="9.88" x2="1.7" y2="6.47"></line>
      <line x1="8.54" y1="19.32" x2="5.12" y2="22.73"></line>
      <line x1="18.88" y1="19.32" x2="15.46" y2="22.73"></line>
      <line x1="12" y1="17.75" x2="12" y2="14.25"></line>
      <line x1="8.25" y1="12" x2="11.75" y2="12"></line>
      <line x1="12" y1="8.25" x2="12" y2="11.75"></line>
      <line x1="16.88" y1="12" x2="20.38" y2="12"></line>
      <line x1="19.62" y1="13.62" x2="21.45" y2="15.45"></line>
      <line x1="19.62" y1="10.38" x2="21.45" y2="8.55"></line>
      <line x1="2.76" y1="15.45" x2="4.59" y2="13.62"></line>
      <line x1="2.76" y1="8.55" x2="4.59" y2="10.38"></line>
    </svg>
  );
};

export const LifeBuoy = IconWrapper(LifeBuoyIcon);
