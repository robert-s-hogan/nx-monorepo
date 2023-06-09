export interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export type CommonProps = {
  className?: string;
  [x: string]: any;
};

export interface IconProps {
  name: 'add' | 'remove';
}

export interface SeoProps {
  title: string;
  description: string;
  faviconPath?: string;
}
