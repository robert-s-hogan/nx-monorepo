import { render } from '@testing-library/react';

import { Form } from './form';

describe('Form', () => {
  it('should render successfully', () => {
    const fields = [
      { name: 'email', label: 'Email', type: 'email', required: true },
    ];
    const { baseElement } = render(<Form fields={fields} />);
    expect(baseElement).toBeTruthy();
  });
});
