import { Meta, Story } from '@storybook/react';
import { Gallery, GalleryProps } from './gallery';

export default {
  title: 'Atoms/Gallery',
  component: Gallery,
} as Meta;

const Template: Story<GalleryProps> = (args) => <Gallery {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
  ],
};
