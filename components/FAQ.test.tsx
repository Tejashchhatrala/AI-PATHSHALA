import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { FAQSection } from './FAQSection';
import { content } from '../data/content';

describe('FAQ Component', () => {
  it('renders correctly in English', () => {
    render(<FAQSection lang="EN" />);

    // Check questions
    content.faq.items.forEach((item) => {
      expect(screen.getByText(item.question.en)).toBeInTheDocument();
    });
  });

  it('renders correctly in Gujarati', () => {
    render(<FAQSection lang="GU" />);

    // Check questions
    content.faq.items.forEach((item) => {
      expect(screen.getByText(item.question.gu)).toBeInTheDocument();
    });
  });

  it('toggles answer visibility on click', () => {
    render(<FAQSection lang="EN" />);

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

    // Initially closed (check parent container for 'open' class)
    expect(questionButton!.parentElement).not.toHaveClass('open');

    // Click to open
    fireEvent.click(questionButton!);

    // Should be open
    expect(questionButton!.parentElement).toHaveClass('open');
    expect(screen.getByText(firstAnswer)).toBeInTheDocument();

    // Click to close
    fireEvent.click(questionButton!);

    // Should be closed
    expect(questionButton!.parentElement).not.toHaveClass('open');
  });

  it('only allows one item to be open at a time', () => {
    render(<FAQSection lang="EN" />);

    const firstQuestion = content.faq.items[0].question.en;
    const secondQuestion = content.faq.items[1].question.en;

    const firstButton = screen.getByText(firstQuestion).closest('button');
    const secondButton = screen.getByText(secondQuestion).closest('button');

    // Open first
    fireEvent.click(firstButton!);
    expect(firstButton!.parentElement).toHaveClass('open');

    // Open second
    fireEvent.click(secondButton!);

    // First should close
    expect(firstButton!.parentElement).not.toHaveClass('open');
    // Second should open
    expect(secondButton!.parentElement).toHaveClass('open');
  });
});
