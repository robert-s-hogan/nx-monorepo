import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../../products/src/lib/productsSlice';
// import cartReducer from '../../cart/src/lib/cartSlice';
// import checkoutReducer from '../../checkout/src/lib/checkoutSlice';
// import formReducer from '../../form/src/lib/formSlice';

// If you're using TypeScript, you can define the RootState type as well
export interface RootState {
  products: ReturnType<typeof productsReducer>;
  // cart: ReturnType<typeof cartReducer>;
  // checkout: ReturnType<typeof checkoutReducer>;
  // form: ReturnType<typeof formReducer>;
}

// Configure the store with reducers
const store = configureStore({
  reducer: {
    products: productsReducer,
    // cart: cartReducer,
    // checkout: checkoutReducer,
    // form: formReducer,
  },
});

console.log(store);
console.log(store.getState);

export default store;
