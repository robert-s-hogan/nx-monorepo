//libs/store/src/lib/store.test.ts
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../../products/src/lib/productsSlice';
import cartReducer from '../../cart/src/lib/cartSlice';
import checkoutReducer from '../../checkout/src/lib/checkoutSlice';
import formReducer from '../../form/src/lib/formSlice';

describe('store', () => {
  it('should correctly setup initial state', () => {
    const store = configureStore({
      reducer: {
        products: productsReducer,
        cart: cartReducer,
        checkout: checkoutReducer,
        form: formReducer,
      },
    });

    expect(store.getState()).toEqual({
      products: {
        data: { total: 0, results: [] },
        status: 'idle',
        error: null,
      },
      cart: { items: [] },
      checkout: { step: 1, error: null },
      form: { isValid: false },
    });
  });
});
