import productsReducer from '../../products/src/lib/productsSlice';
import cartReducer from '../../cart/src/lib/cartSlice';
import checkoutReducer from '../../checkout/src/lib/checkoutSlice';

export interface RootState {
  products: ReturnType<typeof productsReducer>;
  cart: ReturnType<typeof cartReducer>;
  checkout: ReturnType<typeof checkoutReducer>;
}
