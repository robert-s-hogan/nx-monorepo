import type { Meta } from '@storybook/react';
import {  Hero  }  from './hero';





const Story: Meta<typeof Hero> = {
  component: Hero,
  title: 'Hero', 
};
export default Story;


export const Primary = {
  args: {
  },
};