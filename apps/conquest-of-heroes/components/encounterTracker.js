import { useCounter } from '../hooks/useCounter';

export function EncounterTracker() {
  const { data, mutate } = useCounter();

  const handleClick = () => {
    mutate(data + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button> <span>{data}</span>
    </div>
  );
}
