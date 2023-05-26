import { Meta, Story } from '@storybook/react';
import { MultiStepForm, MultiStepFormProps, FormStep } from './multi-step-form';

const meta: Meta = {
  component: MultiStepForm,
  title: 'Organisms/MultiStepForm',
};
export default meta;

const Template: Story<MultiStepFormProps> = (args) => (
  <MultiStepForm {...args} />
);

const ExampleStep1: React.FC<{
  data: Record<string, any>;
  onChange: (name: string, value: any) => void;
}> = ({ data, onChange }) => {
  return (
    <div>
      <label>
        Step 1:
        <input
          value={data.step1 || ''}
          onChange={(e) => onChange('step1', e.target.value)}
        />
      </label>
    </div>
  );
};

const ExampleStep2: React.FC<{
  data: Record<string, any>;
  onChange: (name: string, value: any) => void;
}> = ({ data, onChange }) => {
  return (
    <div>
      <label>
        Step 2:
        <input
          value={data.step2 || ''}
          onChange={(e) => onChange('step2', e.target.value)}
        />
      </label>
    </div>
  );
};

const steps: FormStep[] = [
  {
    name: 'Step 1',
    component: ExampleStep1,
    validation: (data) => !!data.step1,
  },
  {
    name: 'Step 2',
    component: ExampleStep2,
    validation: (data) => !!data.step2,
  },
];

export const Primary = Template.bind({});
Primary.args = {
  steps,
  onSubmit: (data: Record<string, any>) => console.log('Submitted', data),
};
