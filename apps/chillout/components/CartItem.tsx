import React, { useState, useEffect } from 'react';

export interface Item {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

interface CartItemProps {
  item: Item;
  onApplyAll: (
    id: number,
    value: string,
    quantity: number,
    price: number
  ) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onApplyAll }) => {
  const [applyAllChecked, setApplyAllChecked] = useState(false);
  const [initialItem, setInitialItem] = useState(item);

  const handleApplyAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApplyAllChecked(e.target.checked);
    if (e.target.checked) {
      onApplyAll(item);
    } else {
      onApplyAll(initialItem);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    if (applyAllChecked) {
      onApplyAll(item);
    }
  };

  useEffect(() => {
    setInitialItem(item);
  }, [item]);

  return (
    <div className="cart-item space-x-2 flex flex-col">
      <input
        type="text"
        value={item?.details?.title}
        onChange={(e) => handleInputChange(e, 'title')}
      />
      <input
        type="text"
        value={item?.details?.organization}
        onChange={(e) => handleInputChange(e, 'organization')}
      />
      <input
        type="date"
        value={item?.details?.first_performance_date}
        onChange={(e) => handleInputChange(e, 'first_performance_date')}
      />
      <input
        type="date"
        value={item?.details?.last_performance_date}
        onChange={(e) => handleInputChange(e, 'last_performance_date')}
      />
      <input type="number" value={item.price} readOnly={applyAllChecked} />
      <label>Apply All</label>
      <input
        type="checkbox"
        checked={applyAllChecked}
        onChange={handleApplyAllChange}
      />
    </div>
  );
};

export default CartItem;
