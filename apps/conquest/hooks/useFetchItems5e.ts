import useSWR from 'swr';

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const useFetchItems5e = () => {
  const { data: items5e, error: itemsError } = useSWR(
    'https://api.open5e.com/weapons/?limit=2000',
    fetcher
  );
  const { data: armor5e, error: armorError } = useSWR(
    'https://api.open5e.com/armor/?limit=2000',
    fetcher
  );
  const { data: magicItems5e, error: magicError } = useSWR(
    'https://api.open5e.com/magicitems/?limit=5',
    fetcher
  );
  const combinedObjects = [
    ...(items5e?.results ?? []),
    ...(armor5e?.results ?? []),
    ...(magicItems5e?.results ?? []),
  ];

  for (let i = combinedObjects.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [combinedObjects[i], combinedObjects[j]] = [
      combinedObjects[j],
      combinedObjects[i],
    ];
  }

  const loading = !items5e && !armor5e && !magicItems5e;
  const error = itemsError || armorError || magicError;

  return {
    items5e: items5e?.results || [],
    armor5e: armor5e?.results || [],
    magicItems5e: magicItems5e?.results || [],
    combinedObjects,
    loading,
    error,
  };
};
