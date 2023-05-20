//libs/store/cart/src/lib/cartSlice.test.ts
import cartReducer, {
  addProductToCart,
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProductFromCart,
  selectCartItems,
  selectCartSubtotal,
  selectCartTotal,
  selectTotalQuantity,
} from './cartSlice';
import { Product } from '@with-nx/types';

describe('cart reducer', () => {
  const initialState = {
    items: [],
  };

  it('should handle initial state', () => {
    expect(cartReducer(undefined, { type: 'unknown' })).toEqual({
      items: [],
    });
  });

  const mockProduct: Product = {
    id: '1',
    name: 'Test Product',
    price: 10,
    quantity: 1,
  };

  it('should handle adding product to cart', () => {
    const actual = cartReducer(initialState, addProductToCart(mockProduct));
    expect(actual.items.length).toEqual(1);
  });

  it('should handle removing product from cart', () => {
    let state = cartReducer(initialState, addProductToCart(mockProduct));
    const actual = cartReducer(state, removeProductFromCart(mockProduct.id));
    expect(actual.items.length).toEqual(0);
  });

  it('should handle increasing product quantity', () => {
    let state = cartReducer(initialState, addProductToCart(mockProduct));
    const actual = cartReducer(state, increaseProductQuantity(mockProduct.id));
    expect(actual.items[0].quantity).toEqual(2);
  });

  it('should handle decreasing product quantity', () => {
    let state = cartReducer(initialState, addProductToCart(mockProduct));
    state = cartReducer(state, increaseProductQuantity(mockProduct.id));
    const actual = cartReducer(state, decreaseProductQuantity(mockProduct.id));
    expect(actual.items[0].quantity).toEqual(1);
  });

  const getRootState = (cartState) => ({ cart: cartState });

  it('should handle selectCartItems', () => {
    let state = cartReducer(initialState, addProductToCart(mockProduct));
    expect(selectCartItems(getRootState(state))).toEqual([mockProduct]);
  });

  it('should handle selectCartSubtotal', () => {
    let state = cartReducer(initialState, addProductToCart(mockProduct));
    expect(selectCartSubtotal(getRootState(state))).toEqual(mockProduct.price);
  });

  it('should handle selectCartTotal', () => {
    let state = cartReducer(initialState, addProductToCart(mockProduct));
    expect(selectCartTotal(getRootState(state))).toEqual(mockProduct.price);
  });

  it('should handle selectTotalQuantity', () => {
    let state = cartReducer(initialState, addProductToCart(mockProduct));
    expect(selectTotalQuantity(getRootState(state))).toEqual(1);
  });
});
