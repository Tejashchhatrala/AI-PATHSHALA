import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { FAQ } from './FAQ';
import { content } from '../data/content';

describe('FAQ Component', () => {
  it('renders correctly in English', () => {
    render(<FAQ lang="EN" />);

    // Check title
    expect(screen.getByText(content.faq.title.en)).toBeInTheDocument();

    // Check questions
    content.faq.items.forEach((item) => {
      expect(screen.getByText(item.question.en)).toBeInTheDocument();
    });
  });

  it('renders correctly in Gujarati', () => {
    render(<FAQ lang="GU" />);

    // Check title
    expect(screen.getByText(content.faq.title.gu)).toBeInTheDocument();

    // Check questions
    content.faq.items.forEach((item) => {
      expect(screen.getByText(item.question.gu)).toBeInTheDocument();
    });
  });

  it('toggles answer visibility on click', () => {
    render(<FAQ lang="EN" />);

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

    // Initially closed
    expect(answerContainer).toHaveClass('max-h-0');
    expect(answerContainer).toHaveClass('opacity-0');

    // Click to open
    fireEvent.click(questionButton!);

    // Should be open
    expect(answerContainer).toHaveClass('max-h-96');
    expect(answerContainer).toHaveClass('opacity-100');
    expect(screen.getByText(firstAnswer)).toBeInTheDocument();

    // Click to close
    fireEvent.click(questionButton!);

    // Should be closed
    expect(answerContainer).toHaveClass('max-h-0');
    expect(answerContainer).toHaveClass('opacity-0');
  });

  it('only allows one item to be open at a time', () => {
    render(<FAQ lang="EN" />);

    const firstQuestion = content.faq.items[0].question.en;
    const secondQuestion = content.faq.items[1].question.en;

    const firstButton = screen.getByText(firstQuestion).closest('button');
    const secondButton = screen.getByText(secondQuestion).closest('button');

    // Open first
    fireEvent.click(firstButton!);
    const firstAnswerContainer = firstButton!.nextElementSibling;
    expect(firstAnswerContainer).toHaveClass('max-h-96');

    // Open second
    fireEvent.click(secondButton!);
    const secondAnswerContainer = secondButton!.nextElementSibling;

    // First should close
    expect(firstAnswerContainer).toHaveClass('max-h-0');
    // Second should open
    expect(secondAnswerContainer).toHaveClass('max-h-96');
  });
});
