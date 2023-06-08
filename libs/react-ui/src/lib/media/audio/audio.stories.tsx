import { Meta, Story } from '@storybook/react';
import { Audio, AudioProps } from './audio';

export default {
  title: 'Atoms/Audio',
  component: Audio,
} as Meta;

const Template: Story<AudioProps> = (args) => <Audio {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3',
};
