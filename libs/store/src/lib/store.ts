import productsReducer from '../../products/src/lib/productsSlice';
import cartReducer from '../../cart/src/lib/cartSlice';

export interface RootState {
  products: ReturnType<typeof productsReducer>;
  cart: ReturnType<typeof cartReducer>;
}
