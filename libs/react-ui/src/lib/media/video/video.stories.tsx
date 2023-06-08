import { Meta, Story } from '@storybook/react';
import { Video, VideoProps } from './video';

export default {
  title: 'Atoms/Video',
  component: Video,
} as Meta;

const Template: Story<VideoProps> = (args) => <Video {...args} />;

export const Small = Template.bind({});
Small.args = {
  src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
  size: 'large',
};
