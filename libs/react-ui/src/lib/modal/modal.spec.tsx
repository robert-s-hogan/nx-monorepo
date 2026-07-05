import { render } from '@testing-library/react';
import { Modal } from './modal';

// @with-nx/generic-ui isn't set up to transform through this project's Jest
// config when pulled in transitively (a workspace-wide Jest gap -- see
// floating-footer.spec.tsx for the same pattern) -- mocked here rather than
// reworking cross-project Jest transform config for one test file. Jest
// hoists jest.mock() calls above imports automatically, so placement here
// doesn't change behavior.
jest.mock('@with-nx/generic-ui', () => ({
  Heading: ({ text }: { text: string }) => <h2>{text}</h2>,
  Text: ({ text }: { text: string }) => <p>{text}</p>,
}));

describe('Modal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Modal />);
    expect(baseElement).toBeTruthy();
  });
});
