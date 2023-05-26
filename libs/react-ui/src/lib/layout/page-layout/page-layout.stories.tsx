import { Meta, Story } from '@storybook/react';
import { PageLayout, PageLayoutProps } from './page-layout';

const meta: Meta = {
  component: PageLayout,
  title: 'PageLayout',
  title: 'Organisms/PageLayout',
};
export default meta;

const Template: Story<PageLayoutProps> = (args) => <PageLayout {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  header: <div style={{ background: 'lightgray', height: '60px' }}>Header</div>,
  children: (
    <div style={{ background: 'whitesmoke', height: '300px' }}>Content</div>
  ),
  footer: <div style={{ background: 'lightgray', height: '40px' }}>Footer</div>,
  className: '',
  hideNavBar: false,
  hideFooter: false,
};
