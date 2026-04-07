import { render, screen } from '@testing-library/react';
import App from '../App';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { ScrollRevealProvider } from './ScrollRevealContext';

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
    render(
      <ScrollRevealProvider>
        <App />
      </ScrollRevealProvider>
    );
    // Wait for the fallback/lazy load to finish
    const heading = await screen.findByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(/Refund Policy/i);
  });

  it('renders Terms when ?page=terms', async () => {
    window.location.search = '?page=terms';
    render(
      <ScrollRevealProvider>
        <App />
      </ScrollRevealProvider>
    );
    const heading = await screen.findByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(/Terms & Conditions/i);
  });

  it('renders Contact Us when ?page=contact', async () => {
    window.location.search = '?page=contact';
    render(
      <ScrollRevealProvider>
        <App />
      </ScrollRevealProvider>
    );
    const heading = await screen.findByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(/Contact Us/i);
  });

  it('renders Privacy Policy when ?page=privacy', async () => {
    window.location.search = '?page=privacy';
    render(
      <ScrollRevealProvider>
        <App />
      </ScrollRevealProvider>
    );
    // Privacy Policy renders in Gujarati by default
    const heading = await screen.findByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(/Privacy Policy|પ્રાઇવસી પોલિસી/i);
  });

  it('renders Home page by default', () => {
    window.location.search = '';
    render(
      <ScrollRevealProvider>
        <App />
      </ScrollRevealProvider>
    );
    // Check for Home page specific element (e.g. Hero text)
    expect(screen.getAllByText(/Gujarat's First AI Learning Program/i).length).toBeGreaterThan(0);
    // Ensure legal pages are NOT present
    expect(screen.queryByText(/Cancellation & Refund Policy/i)).not.toBeInTheDocument();
  });
});
