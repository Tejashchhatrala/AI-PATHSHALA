import { render, screen } from '@testing-library/react';
import App from '../App';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';

// Mock scrollIntoView since JSDOM doesn't support it
Element.prototype.scrollIntoView = () => {};
window.scrollTo = () => {};

describe('App Routing Verification', () => {
  const originalLocation = window.location;

  beforeEach(() => {
    // Reset location mock before each test
    // We need to redefine window.location to be writable
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { ...originalLocation, search: '', pathname: '/' },
    });
  });

  afterEach(() => {
    // clean up
    Object.defineProperty(window, 'location', {
      writable: true,
      value: originalLocation,
    });
  });

  it('renders Refund Policy when ?page=refund', async () => {
    window.location.search = '?page=refund';
    render(<App />);
    // Check for unique text from RefundPolicy
    expect(await screen.findByText(/Refund Policy/i)).toBeInTheDocument();
    expect(await screen.findByText(/If you are not satisfied after the first 3 classes/i)).toBeInTheDocument();
  });

  it('renders Terms when ?page=terms', async () => {
    window.location.search = '?page=terms';
    render(<App />);
    expect(await screen.findByText(/Terms & Conditions/i)).toBeInTheDocument();
    expect(await screen.findByText(/By enrolling in AI Pathshala/i)).toBeInTheDocument();
  });

  it('renders Contact Us when ?page=contact', async () => {
    window.location.search = '?page=contact';
    render(<App />);
    const heading = await screen.findByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(/Contact Us/i);
    expect(await screen.findByText(/tejas@sarvottamai.in/i)).toBeInTheDocument();
  });

  it('renders Privacy Policy when ?page=privacy', async () => {
    window.location.search = '?page=privacy';
    render(<App />);
    // Privacy Policy renders in English by default based on recent tests
    const heading = await screen.findByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(/Privacy Policy/i);
  });

  it('renders Home page by default', () => {
    window.location.search = '';
    render(<App />);
    // Check for Home page specific element (e.g. Hero text)
    expect(screen.getByText(/The AI Advantage/i)).toBeInTheDocument();
    // Ensure legal pages are NOT present
    expect(screen.queryByText(/Cancellation & Refund Policy/i)).not.toBeInTheDocument();
  });
});
