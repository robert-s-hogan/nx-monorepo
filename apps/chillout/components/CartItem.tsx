import React, { useState } from 'react';

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

  const handleApplyAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApplyAllChecked(e.target.checked);
    if (e.target.checked) {
      onApplyAll(item);
    }
  };

  return (
    <div className="cart-item space-x-2 flex flex-col">
      <input
        type="text"
        value={item?.details?.title}
        checked={applyAllChecked}
        readOnly={applyAllChecked}
      />
      <input
        type="text"
        value={item?.details?.organization}
        checked={applyAllChecked}
        readOnly={applyAllChecked}
      />
      <input
        type="date"
        value={item?.details?.first_performance_date}
        checked={applyAllChecked}
        readOnly={applyAllChecked}
      />
      <input
        type="date"
        value={item?.details?.last_performance_date}
        checked={applyAllChecked}
        readOnly={applyAllChecked}
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
