import { Meta, Story } from '@storybook/react';
import { Avatar, AvatarProps } from './avatar';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Small = Template.bind({});
Small.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Avatar',
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Avatar',
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Avatar',
  size: 'large',
};

export const AltText = Template.bind({});
AltText.args = {
  alt: 'Avatar',
  size: 'medium',
};
