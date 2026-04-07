import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
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
    expect(screen.getByText(/Last Updated: April 2026/i)).toBeInTheDocument();
  });

  it('renders correctly in Gujarati', () => {
    render(<PrivacyPolicy lang="GU" onBack={mockOnBack} />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('પ્રાઇવસી પોલિસી');
    expect(screen.getByText('હોમ પર પાછા')).toBeInTheDocument();
    expect(screen.getByText(/છેલ્લું અપડેટ: એપ્રિલ 2026/i)).toBeInTheDocument();
  });

  it('scrolls to top on mount', async () => {
    window.scrollTo = vi.fn();
    render(<PrivacyPolicy lang="EN" onBack={mockOnBack} />);
    // Let useEffect run
    await new Promise((r) => setTimeout(r, 0));
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
