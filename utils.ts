
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let lastRan = 0;
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function(this: any, ...args: Parameters<T>) {
    const context = this;
    const now = Date.now();

    const remaining = limit - (now - lastRan);

    if (remaining <= 0 || remaining > limit) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      lastRan = now;
      func.apply(context, args);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        lastRan = Date.now();
        timeout = null;
        func.apply(context, args);
      }, remaining);
    }
  };
}

export const scrollToElement = (elementId: string, event?: { preventDefault: () => void }) => {
  if (event) {
    event.preventDefault();
  }

  if (typeof document !== 'undefined') {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

/**
 * Sanitizes user input to prevent XSS and ensure data integrity.
 * - Removes HTML tags and dangerous characters (<, >)
 * - Optionally trims whitespace (default: true)
 * - Enforces a maximum length
 * - Preserves Unicode characters for Gujarati support
 *
 * @param input The raw input string
 * @param maxLength The maximum allowed length (default: 100)
 * @param trim Whether to trim whitespace (default: true)
 * @returns The sanitized string
 */
export const sanitizeInput = (input: string, maxLength: number = 100, trim: boolean = true): string => {
  if (typeof input !== 'string') return '';

  // Remove < and > characters to neutralize HTML tags
  let sanitized = input.replace(/[<>]/g, '');

  // Trim leading/trailing whitespace if requested
  if (trim) {
    sanitized = sanitized.trim();
  }

  // Enforce max length
  if (sanitized.length > maxLength) {
    sanitized = sanitized.slice(0, maxLength);
  }

  return sanitized;
};

/**
 * Checks if a user has exceeded the rate limit for a given action.
 * Uses localStorage to persist submission timestamps.
 *
 * @param key The unique key for the rate limit (e.g., 'cta_submission')
 * @param limit The maximum number of allowed submissions
 * @param windowMs The time window in milliseconds
 * @returns true if the user is rate limited, false otherwise
 */
export const checkRateLimit = (key: string, limit: number, windowMs: number): boolean => {
  if (typeof window === 'undefined' || !window.localStorage) return false;

  try {
    const rawData = localStorage.getItem(key);
    const timestamps: number[] = rawData ? JSON.parse(rawData) : [];
    const now = Date.now();

    // Filter out timestamps older than the window
    const validTimestamps = timestamps.filter(ts => now - ts < windowMs);

    // Update localStorage with cleaned up timestamps (optional but good for maintenance)
    if (validTimestamps.length !== timestamps.length) {
       localStorage.setItem(key, JSON.stringify(validTimestamps));
    }

    return validTimestamps.length >= limit;
  } catch (e) {
    console.error('Rate limit check failed:', e);
    return false; // Fail open to avoid blocking legitimate users on error
  }
};

/**
 * Records a successful submission timestamp for rate limiting.
 *
 * @param key The unique key for the rate limit
 */
export const recordSubmission = (key: string): void => {
  if (typeof window === 'undefined' || !window.localStorage) return;

  try {
    const rawData = localStorage.getItem(key);
    const timestamps: number[] = rawData ? JSON.parse(rawData) : [];
    timestamps.push(Date.now());
    localStorage.setItem(key, JSON.stringify(timestamps));
  } catch (e) {
    console.error('Failed to record submission:', e);
  }
};
