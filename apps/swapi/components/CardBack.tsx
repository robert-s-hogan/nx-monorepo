import { useState, useEffect } from 'react';
import CardHomeworld from './CardHomeworld';

const CardBack = ({ isShown, className, children }) => {
  return (
    <div className={className}>
      {!isShown && (
        <div className="card-back">
          <div
            className={
              !isShown
                ? 'absolute top-0 w-full transition ease-in-out delay-300 bg-white opacity-80 h-80 mt-14 z-10'
                : ''
            }
          >
            <div className="h-full flex flex-col">
              <ul className="px-4">{children}</ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardBack;
