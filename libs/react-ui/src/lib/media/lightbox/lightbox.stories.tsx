import { Meta, Story } from '@storybook/react';
import { Lightbox, LightboxProps } from './lightbox';

export default {
  title: 'Atoms/Lightbox',
  component: Lightbox,
} as Meta;

const Template: Story<LightboxProps> = (args) => <Lightbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: 'https://via.placeholder.com/800',
};
