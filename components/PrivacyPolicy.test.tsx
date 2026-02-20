import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { PrivacyPolicy } from './PrivacyPolicy';

describe('PrivacyPolicy Component', () => {
  const mockOnBack = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    // Mock window.scrollTo since JSDOM doesn't implement it
    window.scrollTo = vi.fn();
  });

  it('renders correctly in English', () => {
    render(<PrivacyPolicy lang="EN" onBack={mockOnBack} />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Privacy Policy');
    expect(screen.getByText('Back to Home')).toBeInTheDocument();
    expect(screen.getByText(/Effective Date: February 2026/i)).toBeInTheDocument();
  });

  it('renders correctly in Gujarati', () => {
    render(<PrivacyPolicy lang="GU" onBack={mockOnBack} />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('પ્રાઇવસી પોલિસી');
    expect(screen.getByText('પાછા જાઓ')).toBeInTheDocument();
    expect(screen.getByText(/અમલીકરણ તારીખ: ફેબ્રુઆરી 2026/i)).toBeInTheDocument();
  });

  it('scrolls to top on mount', () => {
    render(<PrivacyPolicy lang="EN" onBack={mockOnBack} />);

    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });

  it('calls onBack when back button is clicked', () => {
    render(<PrivacyPolicy lang="EN" onBack={mockOnBack} />);

    const backButton = screen.getByText('Back to Home').closest('button');
    expect(backButton).toBeInTheDocument();

    fireEvent.click(backButton!);

    expect(mockOnBack).toHaveBeenCalledTimes(1);
  });
});
