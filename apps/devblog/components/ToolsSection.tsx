import { cn } from '@with-nx/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
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
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn('flex flex-wrap py-10', className)}>
      {items.map((item, idx) => (
        <p
          key={item?.link}
          className="relative group block py-3 px-1 h-full w-auto"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-primary opacity-60 block rounded-md"
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
          <span className="relative z-20 bg-bg-color p-3 m-2 rounded-md">
            {item.title}
          </span>
        </p>
      ))}
    </div>
  );
};

const tools = [
  'JavaScript',
  'Express.js',
  'Node.js',
  'HTML5',
  'CSS3',
  'React.js',
  'Next.js',
  'Jest',
  'TailwindCSS',
  'TypeScript',
  'Nx Monorepo',
  'WordPress',
  'React Testing Library',
  'CLI',
  'Storybook',
  'Firebase',
  'GitHub',
  'Vercel',
  'Stripe',
  'Git',
  'CORESense',
  'SASS',
  'jQuery',
  'Bootstrap',
  'SEO',
].map((tool) => ({
  title: tool,
  link: `https://example.com/${tool.toLowerCase()}`,
}));

const ToolsSection = () => {
  return <HoverEffect items={tools} className="my-custom-class" />;
};

export default ToolsSection;
