import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HowItWorks } from './HowItWorks';
import { ScrollRevealProvider } from './ScrollRevealContext';
import { content } from '../data/content';

describe('HowItWorks Component', () => {
  const renderWithProvider = (lang: 'EN' | 'GU') => {
    return render(
      <ScrollRevealProvider>
        <HowItWorks lang={lang} />
      </ScrollRevealProvider>
    );
  };

  it('renders correctly in English', () => {
    renderWithProvider('EN');
    const t = content.howItWorks;

    // Check eyebrow and title
    expect(screen.getByText(t.eyebrow.en)).toBeInTheDocument();

    // Check title (handles white-space: pre-line)
    expect(screen.getByText(t.title.en)).toBeInTheDocument();

    // Check all steps
    t.steps.forEach((step) => {
      expect(screen.getByText(step.title.en)).toBeInTheDocument();
      expect(screen.getByText(step.description.en)).toBeInTheDocument();
    });
  });

  it('renders correctly in Gujarati', () => {
    renderWithProvider('GU');
    const t = content.howItWorks;

    // Check eyebrow and title
    expect(screen.getByText(t.eyebrow.gu)).toBeInTheDocument();
    expect(screen.getByText(t.title.gu)).toBeInTheDocument();

    // Check all steps
    t.steps.forEach((step) => {
      expect(screen.getByText(step.title.gu)).toBeInTheDocument();
      expect(screen.getByText(step.description.gu)).toBeInTheDocument();
    });
  });
});
