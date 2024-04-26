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
    // preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} style={{ width: '100%', overflow: 'hidden' }}>
      <div
        style={{
          display: 'flex',
          transition: 'transform 0.3s ease-out',
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {React.Children.map(children, (child) => (
          <div className="slide">{child}</div> // Wrap each child in a slide container
        ))}
      </div>
    </div>
  );
}

export default Carousel;
