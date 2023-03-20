import useSWR from 'swr';

export function useCounter() {
  const { data, mutate } = useSWR('state', () => window.count);
  return {
    data: data || 0,
    mutate: (count) => {
      window.count = count;
      mutate();
    },
  };
}
