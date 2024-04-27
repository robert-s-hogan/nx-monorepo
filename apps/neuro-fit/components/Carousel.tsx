import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

function Carousel({ children }) {
  const [index, setIndex] = useState(0);
  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setIndex((prevIndex) => (prevIndex + 1) % children.length),
    onSwipedRight: () =>
      setIndex(
        (prevIndex) => (prevIndex - 1 + children.length) % children.length
      ),
    trackMouse: true,
  });

  return (
    <div {...handlers} className="w-full overflow-hidden">
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {React.Children.map(children, (child) => (
          <div className="min-w-full flex flex-col items-center justify-center">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
