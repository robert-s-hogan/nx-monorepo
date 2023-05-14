import { Meta, Story } from '@storybook/react';
import { Checkbox, CheckboxProps } from './checkbox';

interface StyledCheckboxProps extends CheckboxProps {
  styleType: 'primary' | 'customLabel' | 'withoutLabel';
}

const StyledCheckbox: React.FC<StyledCheckboxProps> = ({
  styleType,
  ...props
}) => {
  let classNames = '';

  switch (styleType) {
    case 'primary':
      classNames =
        'text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white';
      break;
    case 'customLabel':
      classNames =
        'text-green-500 border-green-500 hover:bg-green-500 hover:text-white';
      break;
    case 'withoutLabel':
      classNames =
        'text-red-500 border-red-500 hover:bg-red-500 hover:text-white';
      break;
  }

  return <Checkbox className={classNames} {...props} />;
};

const meta: Meta = {
  component: StyledCheckbox,
  title: 'Atoms/Checkbox',
  argTypes: {
    label: { control: 'text' },
    onChange: { action: 'onChange executed!' },
    styleType: {
      control: 'select',
      options: ['primary', 'customLabel', 'withoutLabel'],
    },
  },
};

export default meta;

const Template: Story<StyledCheckboxProps> = (args) => (
  <StyledCheckbox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  styleType: 'primary',
  label: 'Primary Checkbox',
};

export const CustomLabel = Template.bind({});
CustomLabel.args = {
  styleType: 'customLabel',
  label: 'Custom Label Checkbox',
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  styleType: 'withoutLabel',
  label: '',
};
