
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FaHandLizardIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      {...props}
      className="font-awesome fahandlizard " + props.className
    >
       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --><path d="M72 112c-13.3 0-24 10.7-24 24s10.7 24 24 24H240c35.3 0 64 28.7 64 64s-28.7 64-64 64H136c-13.3 0-24 10.7-24 24s10.7 24 24 24H288c4.5 0 8.9 1.3 12.7 3.6l64 40c7 4.4 11.3 12.1 11.3 20.4v24c0 13.3-10.7 24-24 24s-24-10.7-24-24V413.3L281.1 384H136c-39.8 0-72-32.2-72-72s32.2-72 72-72H240c8.8 0 16-7.2 16-16s-7.2-16-16-16H72c-39.8 0-72-32.2-72-72S32.2 64 72 64H281.6c46.7 0 90.9 21.5 119.7 58.3l78.4 100.1c20.9 26.7 32.3 59.7 32.3 93.7V424c0 13.3-10.7 24-24 24s-24-10.7-24-24V316.1c0-23.2-7.8-45.8-22.1-64.1L363.5 151.9c-19.7-25.2-49.9-39.9-81.9-39.9H72z"/>
    </svg>
  );
};

export const FaHandLizard = IconWrapper(FaHandLizardIcon);
  