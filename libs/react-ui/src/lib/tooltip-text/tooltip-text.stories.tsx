import type { Meta } from '@storybook/react';
import {  TooltipText  }  from './tooltip-text';





const Story: Meta<typeof TooltipText> = {
  component: TooltipText,
  title: 'TooltipText', 
};
export default Story;


export const Primary = {
  args: {
    className:  '',
  },
};