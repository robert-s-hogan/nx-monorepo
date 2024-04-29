export interface TextProps {
  children?: React.ReactNode;
  className?: string;
  text: string;
}

export const Text: React.FC<TextProps> = ({ children, className, text }) => {
  return (
    <p className={className} aria-label={text} role="text">
      {text} {children ? children : null}
    </p>
  );
};
