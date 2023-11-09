import { CommonProps } from '@with-nx/types';

const RSHSection = ({ children, className }) => {
  return (
    <section className={className}>
      <div className="section">{children}</div>
    </section>
  );
};

export default RSHSection;
