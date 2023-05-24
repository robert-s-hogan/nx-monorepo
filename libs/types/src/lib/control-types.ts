import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isLoading?: boolean;
  width?: number;
  height?: number;
}

export interface CollapseProps {
  isOpen: boolean;
  startingHeight: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export interface PageIndicatorProps {
  page: number;
  total: number;
  className?: string;
}

export interface TabData {
  label: string;
  content: React.ReactNode;
}

export interface TabListProps {
  tabs: { label: string }[];
  activeIndex: number;
  onTabClick: (index: number) => void;
}

export interface TabPanelProps {
  children: React.ReactNode;
  isActive?: boolean;
}

export interface TabsProps {
  data: TabData[];
}
