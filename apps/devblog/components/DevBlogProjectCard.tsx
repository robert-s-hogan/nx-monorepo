'use client';

import { useRouter } from 'next/router';
import { Flex } from '@with-nx/react-ui';
import { IconButton } from '@with-nx/generic-ui';
import { FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { Heading, Text } from '@with-nx/generic-ui';
import { cn } from '@with-nx/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';

export const DirectionAwareHover = ({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  className,
  index,
}: {
  imageUrl: string;
  children: React.ReactNode | string;
  childrenClassName?: string;
  imageClassName?: string;
  className?: string;
  index: number;
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
        `w-full h-full bg-transparent overflow-hidden text-white group/card relative ${
          index % 2 === 0 ? 'rounded-r-md' : 'md:rounded-r-none md:rounded-l-md'
        }`,
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
            className="h-full w-full relative"
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div className="overflow-hidden md:w-full md:h-full lg:w-[1000px] lg:h-[425px]">
              <Image
                alt="image"
                className={cn(
                  'h-full w-full md:object-cover md:object-left xl:object-top scale-[1.05]',
                  imageClassName
                )}
                width="1000"
                height="425"
                src={imageUrl}
              />
            </div>
          </motion.div>
          <motion.div
            variants={textVariants}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={cn(
              'text-white absolute top-8 left-1 z-40 space-y-2',
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
  initial: { x: 0 },
  exit: { x: 0, y: 0 },
  top: { y: 20 },
  bottom: { y: -20 },
  left: { x: 20 },
  right: { x: -20 },
};

const textVariants = {
  initial: { y: 0, x: 0, opacity: 0 },
  exit: { y: 0, x: 0, opacity: 0 },
  top: { y: -20, opacity: 1 },
  bottom: { y: 20, opacity: 1 },
  left: { x: -20, opacity: 1 },
  right: { x: 20, opacity: 1 },
};

export default function DevBlogProjectCard({ projects }) {
  const router = useRouter();

  return (
    <div className="p-1 lg:p-8 text-center bg-secondary-color rounded-md w-full">
      {projects.map((project, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-3 pb-8 md:py-16"
        >
          <div
            className={`bg-surface-color p-4 lg:p-6 h-full shadow-lg flex flex-col justify-center rounded-md ${
              index % 2 === 0
                ? 'md:rounded-r-none md:rounded-l-md'
                : 'md:rounded-l-none md:rounded-r-md'
            }`}
          >
            <Heading
              level={3}
              className="text-2xl font-bold mb-2"
              text={project.title}
            />
            <Text
              className="text-base lg:text-xl mb-4"
              text={project.description}
            />
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-accent-color text-xs lg:text-base px-3 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
            <IconButton
              theme="primary"
              className="px-4 py-2 w-fit mx-auto"
              text="Check it"
              label="Check it"
              icon={
                project.link.startsWith('/') ? (
                  <FaArrowRight size={24} />
                ) : (
                  <FaExternalLinkAlt size={24} />
                )
              }
              onClick={() => {
                if (project.link.startsWith('/')) {
                  router.push(project.link);
                } else {
                  window.open(project.link, '_blank');
                }
              }}
            />
          </div>
          <div
            className={`hidden md:flex md:col-span-2 shadow-lg ${
              index % 2 === 0
                ? 'md:rounded-r-none md:rounded-l-md '
                : 'rounded-r-md order-first'
            }`}
          >
            <DirectionAwareHover imageUrl={project.imageUrl} index={index}>
              {project.goals ? (
                <div className="px-6 space-y-4 text-white">
                  <Heading
                    level={3}
                    text="Description & Goals"
                    className="text-left pt-0"
                  />
                  <Text className="text-left" text={project.description} />

                  <ul className="list-disc text-left">
                    {project.goals.map((goal, index) => (
                      <li key={index}>{goal}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                ''
              )}
            </DirectionAwareHover>
          </div>
        </div>
      ))}
    </div>
  );
}
