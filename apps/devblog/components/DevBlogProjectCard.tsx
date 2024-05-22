'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@with-nx/utils';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Button, Flex, Heading, Text, IconButton } from '@with-nx/generic-ui';
import DevBlogSection from '../components/DevBlogSection';

export const DirectionAwareHover = ({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  className,
}: {
  imageUrl: string;
  children: React.ReactNode | string;
  childrenClassName?: string;
  imageClassName?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [direction, setDirection] = useState<
    'top' | 'bottom' | 'left' | 'right' | string
  >('left');

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!ref.current) return;

    const direction = getDirection(event, ref.current);
    switch (direction) {
      case 0:
        setDirection('top');
        break;
      case 1:
        setDirection('right');
        break;
      case 2:
        setDirection('bottom');
        break;
      case 3:
        setDirection('left');
        break;
      default:
        setDirection('left');
        break;
    }
  };

  const getDirection = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    obj: HTMLElement
  ) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      ref={ref}
      className={cn(
        'w-full h-full bg-transparent overflow-hidden group/card relative',
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="relative h-full w-full"
          initial="initial"
          whileHover={direction}
          exit="exit"
        >
          <motion.div className="group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/60 z-10 transition duration-500" />
          <motion.div
            variants={variants}
            className="h-full w-full relative bg-gray-50 dark:bg-black"
            transition={{
              duration: 0.2,
              ease: 'easeOut',
            }}
          >
            <Image
              alt="image"
              className={cn(
                'h-full w-full object-cover scale-[1.05]',
                imageClassName
              )}
              width="1000"
              height="400"
              src={imageUrl}
            />
          </motion.div>
          <motion.div
            variants={textVariants}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
            className={cn(
              'text-white absolute top-16 left-1 z-40 space-y-2',
              childrenClassName
            )}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

const variants = {
  initial: {
    x: 0,
  },

  exit: {
    x: 0,
    y: 0,
  },
  top: {
    y: 20,
  },
  bottom: {
    y: -20,
  },
  left: {
    x: 20,
  },
  right: {
    x: -20,
  },
};

const textVariants = {
  initial: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  exit: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  top: {
    y: -20,
    opacity: 1,
  },
  bottom: {
    y: 2,
    opacity: 1,
  },
  left: {
    x: -1,
    opacity: 1,
  },
  right: {
    x: 20,
    opacity: 1,
  },
};

export default function DevBlogProjectCard({ projects }) {
  return (
    <div id="projects" className="relative text-white py-32">
      <DevBlogSection>
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <Heading level={2} className="text-center mb-4" text="Projects" />
          <hr className="w-16 h-2 bg-primary mx-auto mb-8" />
          {projects.map((project, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 py-32">
              <div className="bg-gray-800 p-6 h-full shadow-lg flex flex-col justify-center">
                <Heading
                  level={3}
                  className="text-2xl font-bold mb-2"
                  text={project.title}
                />
                <Text className="text-lg mb-4" text={project.description} />
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700 text-white px-3 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <IconButton
                  theme="primary"
                  className="font-bold bg-green-500 text-black px-4 py-2 w-fit mx-auto"
                  text="Check it"
                  label="Check it"
                  icon={<FaExternalLinkAlt />}
                  onClick={() => window.open(project.link, '_blank')}
                />
              </div>
              <div
                className={`md:col-span-2 ${
                  index % 2 === 0 ? '' : 'order-first'
                }`}
              >
                <DirectionAwareHover imageUrl={project.imageUrl}>
                  <div className="p-6">
                    <Heading
                      level={3}
                      text="Description & Goals"
                      className="text-left"
                    />
                    <Text
                      className="text-left"
                      text={`The ${project.title} is a modern digital adaptation of the classic card matching game, built with vanilla JavaScript and hosted on GitHub. This project aims to leverage core web technologies to create an engaging, accessible, and maintainable application without relying on frameworks. The development focuses on best practices, scalability, and a seamless user experience.`}
                    />
                    <ul className="text-left">
                      <li>
                        Utilizing CSS and responsive design principles to ensure
                        the game looks and functions well on various devices and
                        screen sizes.
                      </li>
                      <li>
                        Adding smooth animations and transitions using CSS to
                        enhance the user experience.
                      </li>
                      <li>
                        Ensuring the game is accessible to all users, including
                        those with disabilities, by following WCAG guidelines
                        and implementing ARIA roles.
                      </li>
                    </ul>
                  </div>
                </DirectionAwareHover>
              </div>
            </div>
          ))}
        </div>
      </DevBlogSection>
    </div>
  );
}
