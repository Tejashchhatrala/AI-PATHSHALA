import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { CTA } from './CTA';
import { ScrollRevealProvider } from './ScrollRevealContext';

describe('CTA Component Security', () => {
  it('iframe should have sandbox attribute set to "allow-same-origin allow-forms"', () => {
    const { container } = render(
      <ScrollRevealProvider>
        <CTA lang="EN" />
      </ScrollRevealProvider>
    );

    const iframe = container.querySelector('#hidden_iframe');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('sandbox', 'allow-same-origin allow-forms');
  });
});
