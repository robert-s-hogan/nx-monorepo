import React from 'react';
import { loadingMessages } from '@with-nx/constants';

function CreatureGeneratorRandomLoadingMessage() {
  const randomIndex = Math.floor(Math.random() * loadingMessages.length);
  const message = loadingMessages[randomIndex];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <p className="text-white text-2xl font-semibold animate-pulse">
        {message}
      </p>
    </div>
  );
}

export default CreatureGeneratorRandomLoadingMessage;
