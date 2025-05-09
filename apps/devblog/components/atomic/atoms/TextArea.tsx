'use client';
import * as React from 'react';
import { cn } from '@with-nx/utils';
import { useMotionTemplate, useMotionValue, motion } from 'framer-motion';

export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, ...props }, ref) => {
    const radius = 120; // change this to increase the radius of the hover effect
    const [visible, setVisible] = React.useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
      const { currentTarget, clientX, clientY } = event;
      const { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
          var(--primary),
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group rounded-lg p-[2px] transition duration-300"
      >
        <textarea
          className={cn(
            `flex w-full border-none bg-bg-color shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-[var(--primary-color)]
            disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
            group-hover:shadow-none transition duration-400
            `,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);
TextArea.displayName = 'TextArea';

export { TextArea };
