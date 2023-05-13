export type CommonProps = {
  className?: string;
  [x: string]: any;
};

export interface SeoProps {
  title: string;
  description: string;
  faviconPath?: string;
}
