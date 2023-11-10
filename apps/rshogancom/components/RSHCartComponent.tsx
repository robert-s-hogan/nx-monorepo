import React from 'react';
import { selectCartItems, selectCartError } from '../features/cart/cartSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../store'; // Make sure this path is correct

const CartComponent = () => {
  const error = useSelector(selectCartError);
  const cartItems = useSelector(selectCartItems);

  return (
    <div>
      {error && <p className="error-message">{error}</p>}
      {cartItems.map((item) => (
        <div key={item.id}>
          {item.name} - Quantity: {item.quantity}
        </div>
      ))}
    </div>
  );
};

export default CartComponent;
