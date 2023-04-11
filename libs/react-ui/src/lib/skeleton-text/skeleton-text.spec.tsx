import { render } from '@testing-library/react';

import SkeletonText from './skeleton-text';

describe('SkeletonText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SkeletonText />);
    expect(baseElement).toBeTruthy();
  });
});
