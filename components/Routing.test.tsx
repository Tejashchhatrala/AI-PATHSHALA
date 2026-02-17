import { render, screen } from '@testing-library/react';
import App from '../App';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import React from 'react';

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
    expect(await screen.findByText(/Cancellation & Refund Policy/i)).toBeInTheDocument();
    expect(await screen.findByText(/CHHATRALA TEJAS CHHAGANLAL believes in helping its customers/i)).toBeInTheDocument();
  });

  it('renders Terms when ?page=terms', async () => {
    window.location.search = '?page=terms';
    render(<App />);
    expect(await screen.findByText(/Terms & Conditions/i)).toBeInTheDocument();
    expect(await screen.findByText(/agreement by and between CHHATRALA TEJAS CHHAGANLAL/i)).toBeInTheDocument();
  });

  it('renders Contact Us when ?page=contact', async () => {
    window.location.search = '?page=contact';
    render(<App />);
    const heading = await screen.findByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(/Contact Us/i);
    expect(await screen.findByText(/Merchant Legal entity name:/i)).toBeInTheDocument();
  });

  it('renders Privacy Policy when ?page=privacy', async () => {
    window.location.search = '?page=privacy';
    render(<App />);
    // Privacy Policy renders in Gujarati by default
    const heading = await screen.findByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(/પ્રાઇવસી પોલિસી/i);
  });

  it('renders Home page by default', () => {
    window.location.search = '';
    render(<App />);
    // Check for Home page specific element (e.g. Hero text)
    expect(screen.getByText(/AI-Based Study Method for Gujarati Students/i)).toBeInTheDocument();
    // Ensure legal pages are NOT present
    expect(screen.queryByText(/Cancellation & Refund Policy/i)).not.toBeInTheDocument();
  });
});
