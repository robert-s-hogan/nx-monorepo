/**
  Heading (Atom)
  The Heading component is an atom that represents a basic heading element. It consists of a heading element with the specified level, children, className, id, and style props.
  Props
  level (number): The heading level (1-6) for the heading element.
  children (ReactNode): The content of the heading element.
  className (string): A class name to be added to the heading element.
  id (string): An id to be added to the heading element.
  style (object): An object containing CSS styles to be applied to the heading element.
  aria-labelledby (string): An id of an element which labels the heading.
  tabIndex (number) : Tabbing order of an element

  EXAMPLE:
  <Heading level={1} className="my-heading-class" id="my-heading-id" aria-labelledby="my-labelling-element-id" tabIndex={1}>
    Heading Text
  </Heading>
*/

import React from 'react';

interface HeadingProps {
  level: number;
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  'aria-labelledby'?: string;
  tabIndex?: number;
}

export const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  className,
  id,
  style,
  'aria-labelledby': ariaLabelledBy,
  tabIndex,
}) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <HeadingTag
      className={className}
      id={id}
      style={style}
      aria-level={level}
      aria-labelledby={ariaLabelledBy}
      tabIndex={tabIndex}
    >
      {children}
    </HeadingTag>
  );
};

export default Heading;
