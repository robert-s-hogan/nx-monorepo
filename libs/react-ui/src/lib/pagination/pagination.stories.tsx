import React from 'react';
import { Meta, Story } from '@storybook/react';
import Pagination, { PaginationProps } from './pagination';
import paginationStyles from './pagination.module.css';

const meta: Meta = {
  component: Pagination,
  title: 'Pagination',
};
export default meta;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentPage: 1,
  totalPages: 10,
  onPageChange: (page: number) => console.log(`Go to page ${page}`),
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  currentPage: 1,
  totalPages: 10,
  onPageChange: (page: number) => console.log(`Go to page ${page}`),
  className: paginationStyles.pagination,
};
