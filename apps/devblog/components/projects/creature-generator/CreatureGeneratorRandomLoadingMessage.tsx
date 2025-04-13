import React from 'react';
import { loadingMessages } from '@with-nx/constants';

function CreatureGeneratorRandomLoadingMessage() {
  const randomIndex = Math.floor(Math.random() * loadingMessages.length);
  const message = loadingMessages[randomIndex];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <p className="animate-pulse text-2xl font-semibold text-white">
        {message}
      </p>
    </div>
  );
}

export default CreatureGeneratorRandomLoadingMessage;
