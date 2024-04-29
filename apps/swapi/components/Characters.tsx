import React, { useState } from 'react';
import useSWR from 'swr';
import { Section } from '@with-nx/react-ui';
import { Heading, Text } from '@with-nx/generic-ui';

import { Person } from '../types/people';
import CharacterAvatar from './CharacterAvatar';

async function fetcher(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Error while fetching data');
  }
  return res.json();
}

export default function Characters() {
  const { data, error } = useSWR<Person[]>('/api/people', fetcher);
  const [visibleCount, setVisibleCount] = React.useState(40);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Section className="px-6 py-4">
      <Heading
        level={1}
        className="text-4xl mb-4"
        text="Star Wars Characters"
      />
      <div className="grid grid-cols-1 gap-4">
        {data.slice(0, visibleCount).map((character) => (
          <div
            key={character.name}
            className="p-4 border rounded shadow bg-white"
          >
            <div className="grid grid-cols-2">
              <div className="pr-3">
                <Heading
                  level={2}
                  className="text-xl font-bold"
                  text="{character.name}"
                />
                <Text
                  className="mt-2 text-sm text-gray-600"
                  text={character.main_story_arc}
                />
              </div>
              <CharacterAvatar data={character} />
            </div>
          </div>
        ))}
      </div>
      {visibleCount < data.length && (
        <button
          onClick={() => setVisibleCount(visibleCount + 10)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Load More
        </button>
      )}
    </Section>
  );
}
