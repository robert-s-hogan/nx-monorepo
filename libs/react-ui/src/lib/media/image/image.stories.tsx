import { Meta, Story } from '@storybook/react';
import { Image, ImageProps } from './image';

export default {
  title: 'Atoms/Image',
  component: Image,
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Small = Template.bind({});
Small.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Image',
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Image',
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Image',
  size: 'large',
};
