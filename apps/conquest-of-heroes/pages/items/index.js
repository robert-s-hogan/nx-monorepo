import { items } from '../../data/caravan';

export default function Items() {
  return (
    <>
      {items.map((item, index) => (
        <p key={index}>
          <a href={`/${item.name}`}>{item.name}</a>
        </p>
      ))}
    </>
  );
}
