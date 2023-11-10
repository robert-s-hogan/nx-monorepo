import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@with-nx/react-ui';

// Import the correct action from cartSlice
import { addProductToCart } from '../../features/cart/cartSlice';
import { RootState } from '../../store';
import { sampleProducts } from '../../data/products';
import RSHCartComponent from '../../components/RSHCartComponent';

const ProductComponent = () => {
  const dispatch = useDispatch();

  const handleAddProduct = (product) => {
    // Dispatch the correct action to add a product to the cart
    dispatch(addProductToCart(product));
  };

  return (
    <Grid className="grid-cols-2">
      <RSHCartComponent />
      <div>
        <h1>Products</h1>
        {sampleProducts.map((sampleProduct) => (
          <div key={sampleProduct.id}>
            {sampleProduct.name}
            <button onClick={() => handleAddProduct(sampleProduct)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </Grid>
  );
};

export default ProductComponent;
