import { useSelector } from 'react-redux';
import { RootState } from '../store';

const RSHProductsComponent = () => {
  const { data, status, error } = useSelector(
    (state: RootState) => state.products
  );

  // Render your UI based on the status
  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div>
      {data.results.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default RSHProductsComponent;
