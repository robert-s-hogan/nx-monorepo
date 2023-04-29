import { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import {
  addItemToServer,
  removeItem,
  fetchShoppingCart,
  removeItemFromServer,
  setStep,
  updateItem,
} from '../store/shoppingCartSlice';
import { ShoppingCartItem } from '../types/types';

const useShoppingCart = () => {
  const dispatch = useDispatch<AppDispatch>();

  const shoppingCart = useSelector((state: RootState) => state.shoppingCart);
  const step = useSelector((state: RootState) => state.shoppingCart.step);

  const shoppingCartQuantity = useSelector(
    (state: RootState) => state.shoppingCart.data.length
  );

  const addToCart = async (item: any) => {
    try {
      await dispatch(addItemToServer({ item }));
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const updateCart = (item: any) => {
    dispatch(updateItem(item));
  };

  const isInCart = (itemId) => {
    const itemInCart = shoppingCart.data.find((item) => item.id === itemId);
    return itemInCart;
  };

  const removeFromCart = async (itemId: number) => {
    try {
      await dispatch(removeItemFromServer({ itemId }));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const fetchCartData = useCallback(async () => {
    try {
      await dispatch(fetchShoppingCart());
    } catch (error) {
      console.error('Failed to fetch shopping cart data:', error);
    }
  }, [dispatch]);

  const setStepValue = (stepValue: number) => {
    dispatch(setStep(stepValue));
  };

  useEffect(() => {
    fetchCartData();
  }, [fetchCartData]);

  return {
    shoppingCart,
    addToCart,
    updateCart,
    removeFromCart,
    fetchCartData,
    step,
    setStepValue,
    shoppingCartQuantity,
    isInCart,
  };
};

export default useShoppingCart;
