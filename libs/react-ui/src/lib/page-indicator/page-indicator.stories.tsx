import type { Meta } from '@storybook/react';
import {  PageIndicator  }  from './page-indicator';





const Story: Meta<typeof PageIndicator> = {
  component: PageIndicator,
  title: 'PageIndicator', 
};
export default Story;


export const Primary = {
  args: {
    page:  0,
    total:  0,
    className:  '',
  },
};