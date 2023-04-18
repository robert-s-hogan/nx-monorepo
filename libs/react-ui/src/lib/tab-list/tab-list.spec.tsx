import { render } from '@testing-library/react';

import TabList from './tab-list';

describe('TabList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TabList />);
    expect(baseElement).toBeTruthy();
  });
});
