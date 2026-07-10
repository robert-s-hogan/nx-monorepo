import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IconButton } from './icon-button';
import { IconButtonProps } from '@with-nx/types';
import { Flex } from '../flex/flex';

const meta: Meta = {
  component: IconButton,
  title: 'Atoms/IconButton',
  argTypes: {
    label: {
      control: 'text',
      description: 'string (required, used as aria-label)',
    },
    variant: {
      control: { type: 'select' },
      options: [undefined, 'primary', 'secondary', 'success', 'danger', 'warning', 'info'],
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
  },
};

export default meta;

const icon = (
  <span role="img" aria-hidden="true">
    ⭐
  </span>
);

const Template: Story<IconButtonProps> = (args) => (
  <IconButton {...args} onClick={action('onClick')} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Favorite',
  icon,
};

export const WithText = Template.bind({});
WithText.args = {
  label: 'Favorite',
  icon,
  children: 'Favorite',
  variant: 'primary',
};

const VariantsTemplate: Story<IconButtonProps> = () => (
  <Flex className="gap-3 flex-wrap">
    <IconButton label="Primary" icon={icon} variant="primary" />
    <IconButton label="Secondary" icon={icon} variant="secondary" />
    <IconButton label="Success" icon={icon} variant="success" />
    <IconButton label="Danger" icon={icon} variant="danger" />
    <IconButton label="Warning" icon={icon} variant="warning" />
    <IconButton label="Info" icon={icon} variant="info" />
  </Flex>
);
export const Variants = VariantsTemplate.bind({});
