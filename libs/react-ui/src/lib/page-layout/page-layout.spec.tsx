import { render, screen } from '@testing-library/react';

import { PageLayout } from './page-layout';

describe('PageLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageLayout>content</PageLayout>);
    expect(baseElement).toBeTruthy();
  });

  it('renders header, children, and footer by default', () => {
    render(
      <PageLayout header={<span>header</span>} footer={<span>footer</span>}>
        <span>children</span>
      </PageLayout>
    );
    expect(screen.getByText('header')).toBeTruthy();
    expect(screen.getByText('children')).toBeTruthy();
    expect(screen.getByText('footer')).toBeTruthy();
  });

  it('hides the header when hideNavBar is set', () => {
    render(
      <PageLayout header={<span>header</span>} hideNavBar>
        <span>children</span>
      </PageLayout>
    );
    expect(screen.queryByText('header')).toBeNull();
  });

  it('hides the footer when hideFooter is set', () => {
    render(
      <PageLayout footer={<span>footer</span>} hideFooter>
        <span>children</span>
      </PageLayout>
    );
    expect(screen.queryByText('footer')).toBeNull();
  });
});
