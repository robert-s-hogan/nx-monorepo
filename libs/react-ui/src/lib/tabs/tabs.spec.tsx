import { render } from '@testing-library/react';

import { Tabs } from './tabs';

describe('Tabs', () => {
  it('should render successfully', () => {
    const data = [{ label: 'Tab 1', content: 'Content 1' }];
    const { baseElement } = render(<Tabs data={data} />);
    expect(baseElement).toBeTruthy();
  });
});
