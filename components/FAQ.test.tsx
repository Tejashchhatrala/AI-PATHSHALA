import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { FAQSection } from './FAQSection';
import { ScrollRevealProvider } from './ScrollRevealContext';
import { content } from '../data/content';

describe('FAQ Component', () => {
  it('renders correctly in English', () => {
    render(
      <ScrollRevealProvider>
        <FAQSection lang="EN" />
      </ScrollRevealProvider>
    );

    // Check title (handle white-space rendering if needed, or get by role)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(content.faq.title.en.replace('\n', ' '));

    // Check questions
    content.faq.items.forEach((item) => {
      expect(screen.getByText(item.question.en)).toBeInTheDocument();
    });
  });

  it('renders correctly in Gujarati', () => {
    render(
      <ScrollRevealProvider>
        <FAQSection lang="GU" />
      </ScrollRevealProvider>
    );

    // Check title
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(content.faq.title.gu.replace('\n', ' '));

    // Check questions
    content.faq.items.forEach((item) => {
      expect(screen.getByText(item.question.gu)).toBeInTheDocument();
    });
  });

  it('toggles answer visibility on click', () => {
    render(
      <ScrollRevealProvider>
        <FAQSection lang="EN" />
      </ScrollRevealProvider>
    );

    const firstQuestion = content.faq.items[0].question.en;
    const firstAnswer = content.faq.items[0].answer.en;

    // Find the button (which contains the question text)
    const questionButton = screen.getByText(firstQuestion).closest('button');
    expect(questionButton).toBeInTheDocument();

    // The answer container is the next sibling of the button's parent or something similar?
    // Looking at FAQ.tsx:
    // <button>...</button>
    // <div>...answer...</div>
    // So the answer container is indeed next sibling of button.
    const answerContainer = questionButton!.nextElementSibling;

    // Initially closed, check class 'open'
    const faqItem = questionButton!.closest('.faq-item');
    expect(faqItem).not.toHaveClass('open');

    // Click to open
    fireEvent.click(questionButton!);

    // Should be open
    expect(faqItem).toHaveClass('open');
    expect(screen.getByText(firstAnswer)).toBeInTheDocument();

    // Click to close
    fireEvent.click(questionButton!);

    // Should be closed
    expect(faqItem).not.toHaveClass('open');
  });

  it('only allows one item to be open at a time', () => {
    render(
      <ScrollRevealProvider>
        <FAQSection lang="EN" />
      </ScrollRevealProvider>
    );

    const firstQuestion = content.faq.items[0].question.en;
    const secondQuestion = content.faq.items[1].question.en;

    const firstButton = screen.getByText(firstQuestion).closest('button');
    const secondButton = screen.getByText(secondQuestion).closest('button');

    const firstItem = firstButton!.closest('.faq-item');
    const secondItem = secondButton!.closest('.faq-item');

    // Open first
    fireEvent.click(firstButton!);
    expect(firstItem).toHaveClass('open');

    // Open second
    fireEvent.click(secondButton!);

    // First should close
    expect(firstItem).not.toHaveClass('open');
    // Second should open
    expect(secondItem).toHaveClass('open');
  });
});
