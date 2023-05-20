//libs/store/checkout/src/lib/checkoutSlice.test.ts
import checkoutReducer, {
  nextStep,
  previousStep,
  setError,
  clearError,
} from './checkoutSlice';

describe('checkout reducer', () => {
  const initialState = {
    step: 1,
    error: null,
  };

  it('should handle initial state', () => {
    expect(checkoutReducer(undefined, { type: 'unknown' })).toEqual(
      initialState
    );
  });

  it('should handle nextStep', () => {
    const actual = checkoutReducer(initialState, nextStep());
    expect(actual.step).toEqual(2);
  });

  it('should not decrement step below 1', () => {
    const actual = checkoutReducer(initialState, previousStep());
    expect(actual.step).toEqual(1);
  });

  it('should handle previousStep', () => {
    let state = checkoutReducer(initialState, nextStep());
    const actual = checkoutReducer(state, previousStep());
    expect(actual.step).toEqual(1);
  });

  it('should handle setError', () => {
    const actual = checkoutReducer(initialState, setError('Error occurred'));
    expect(actual.error).toEqual('Error occurred');
  });

  it('should handle clearError', () => {
    let state = checkoutReducer(initialState, setError('Error occurred'));
    const actual = checkoutReducer(state, clearError());
    expect(actual.error).toBeNull();
  });
});
