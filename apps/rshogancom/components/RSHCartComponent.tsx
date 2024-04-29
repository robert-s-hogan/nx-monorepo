import React from 'react';
import { selectCartItems, selectCartError } from '../features/cart/cartSlice';
import { useSelector } from 'react-redux';
import { Text } from '@with-nx/generic-ui';

const CartComponent = () => {
  const error = useSelector(selectCartError);
  const cartItems = useSelector(selectCartItems);

  return (
    <div>
      {error && <Text className="error-message" text={error} />}
      {cartItems.map((item) => (
        <div key={item.id}>
          {item.name} - Quantity: {item.quantity}
        </div>
      ))}
    </div>
  );
};

export default CartComponent;
