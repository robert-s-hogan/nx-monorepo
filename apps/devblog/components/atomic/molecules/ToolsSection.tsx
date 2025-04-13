import { cn } from '@with-nx/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn('flex flex-wrap py-10', className)}>
      {items.map((item, idx) => (
        <p
          key={item?.link}
          className="group relative block h-full w-auto py-3 px-1"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="bg-primary absolute inset-0 block h-full w-full rounded-md opacity-60"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <span className="bg-bg-color relative z-20 rounded-md p-3 text-xs md:text-base">
            {item.title}
          </span>
        </p>
      ))}
    </div>
  );
};

const tools = [
  'JavaScript',
  'Vue.js',
  'Firebase',
  'SEO',
  'GitHub',
  'Pinia',
  'Express.js',
  'Node.js',
  'HTML5',
  'CSS3',
  'React.js',
  'Next.js',
  'Jest',
  'TailwindCSS',
  'Nx Monorepo',
  'WordPress',
  'Bootstrap',
  'SASS',
  'Git',
  'jQuery',
  'React Testing Library',
  'CLI',
  'CORESense',
  'Storybook',
  'TypeScript',
  'Vercel',
  'Stripe',
].map((tool) => ({
  title: tool,
  link: `https://example.com/${tool.toLowerCase()}`,
}));

const ToolsSection = () => {
  return <HoverEffect items={tools} className="my-custom-class" />;
};

export default ToolsSection;
