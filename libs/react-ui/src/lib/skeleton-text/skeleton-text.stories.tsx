import type { Meta } from '@storybook/react';
import {  SkeletonText  }  from './skeleton-text';





const Story: Meta<typeof SkeletonText> = {
  component: SkeletonText,
  title: 'SkeletonText', 
};
export default Story;


export const Primary = {
  args: {
  },
};