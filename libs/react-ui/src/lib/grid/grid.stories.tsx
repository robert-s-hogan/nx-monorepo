import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Grid, GridProps } from './grid';

const meta: Meta = {
  component: Grid,
  title: 'Grid',
};
export default meta;

const Template: Story<GridProps> = (args) => <Grid {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <>
      <div style={{ background: 'lightblue', padding: '1rem' }}>Item 1</div>
      <div style={{ background: 'lightcoral', padding: '1rem' }}>Item 2</div>
      <div style={{ background: 'lightgoldenrodyellow', padding: '1rem' }}>
        Item 3
      </div>
      <div style={{ background: 'lightgreen', padding: '1rem' }}>Item 4</div>
    </>
  ),
};
