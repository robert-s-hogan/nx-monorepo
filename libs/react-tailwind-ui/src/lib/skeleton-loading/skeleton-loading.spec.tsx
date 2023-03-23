import { render } from '@testing-library/react';

import SkeletonLoading from './skeleton-loading';

describe('SkeletonLoading', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SkeletonLoading />);
    expect(baseElement).toBeTruthy();
  });
});
