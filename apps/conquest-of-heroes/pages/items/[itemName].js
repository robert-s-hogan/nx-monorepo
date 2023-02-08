import { items } from '../../data/caravan';

export default function Items({ item }) {
  const name = 'itemName';
  return (
    <ul>
      {item.name && <li>{item.name}</li>}
      {item.rarity && <li>{item.rarity}</li>}
      {item.price && <li>{item.price}</li>}
      {item.notes && <li>{item.notes}</li>}
      {item.Attunement && <li>attunement required</li>}
    </ul>
  );
}

export async function getStaticProps({ params }) {
  const item = items.find((item) => item.name === params.itemName);
  return {
    props: {
      item,
    },
  };
}

export async function getStaticPaths() {
  const paths = items.map((item) => {
    return {
      params: {
        itemName: item.name,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
