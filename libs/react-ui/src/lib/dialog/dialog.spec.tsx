import { render } from '@testing-library/react';

import { Dialog } from './dialog';

// jsdom doesn't implement HTMLDialogElement's close()/showModal() at all --
// Dialog calls these on the real <dialog> node via its ref, so they need a
// no-op stub or the effect throws on mount.
window.HTMLDialogElement.prototype.close = jest.fn();
window.HTMLDialogElement.prototype.showModal = jest.fn();

describe('Dialog', () => {
  it('should render successfully', () => {
    const backdropRef = { current: null };
    const { baseElement } = render(
      <Dialog
        title="Sample Dialog"
        onClose={jest.fn()}
        toggle={jest.fn()}
        isShowing={false}
        backdropRef={backdropRef}
      >
        Dialog content
      </Dialog>
    );
    expect(baseElement).toBeTruthy();
  });
});
