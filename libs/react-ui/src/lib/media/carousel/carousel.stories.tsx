import { Carousel } from './carousel';

export default {
  title: 'Organisms/Carousel',
  component: Carousel,
};

const Template = (args) => <Carousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150/0000FF',
    'https://via.placeholder.com/150/008000',
  ],
};
