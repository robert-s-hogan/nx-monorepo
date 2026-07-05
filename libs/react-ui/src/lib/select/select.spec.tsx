import { render } from '@testing-library/react';

import { Select } from './select';

describe('Select', () => {
  it('should render successfully', () => {
    const options = [{ value: 'a', label: 'A' }];
    const { baseElement } = render(
      <Select label="Choice" options={options} value="a" onChange={jest.fn()} />
    );
    expect(baseElement).toBeTruthy();
  });
});
