import { Meta, Story } from '@storybook/react';
import { Container, ContainerProps } from './container';

export default {
  title: 'Atoms/Container',
  component: Container,
} as Meta;

const Template: Story<ContainerProps> = (args) => (
  <Container {...args}>
    <div>Child content</div>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  maxWidth: 'xl',
};
