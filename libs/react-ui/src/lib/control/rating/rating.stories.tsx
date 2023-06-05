import { Meta, Story } from '@storybook/react';
import { Rating, RatingProps } from './rating';

export default {
  title: 'Atoms/Rating',
  component: Rating,
} as Meta;

const Template: Story<RatingProps> = (args) => <Rating {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  maxRating: 5,
  onRatingChange: (rating) => alert(`You selected a rating of ${rating}`),
};
