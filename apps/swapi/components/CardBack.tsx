import { useState, useEffect } from 'react';
import CardHomeworld from './CardHomeworld';

const CardBack = ({ isShown, className, ...props }) => {
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
              <ul className="px-4">
                {/* <CardHomeworld homeworld={homeworldName} />
                <li className="mx-0">Mass: {mass}</li>
                <li className="mx-0">Height: {height}</li>
                <li className="mx-0">DOB: {birth_year}</li>
                <li className="mx-0">Hair Color: {hair_color}</li>
                <li className="mx-0">Skin Color: {skin_color}</li>
                <li className="mx-0">Gender: {gender}</li>
                <li className="mx-0">Eye Color: {eye_color}</li> */}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardBack;
