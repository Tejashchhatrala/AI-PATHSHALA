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

  // Use an escaping approach instead of stripping to be non-lossy and more secure.
  // This handles HTML tags, event handlers, and attribute injection by converting
  // special characters into their HTML entity equivalents.
  let sanitized = input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');

  // Trim leading/trailing whitespace if requested
  if (trim) {
    sanitized = sanitized.trim();
  }

  // Prevent CSV Injection by removing dangerous starting characters
  // We handle leading whitespace to ensure safety even if trim is false
  // Since we escaped &, <, >, ", ' - we only need to check the original dangerous characters
  // which are now at the start of the potentially escaped string.
  sanitized = sanitized.replace(/^(\s*)[=+\-@\t\r]+/, '$1');

  // Enforce max length
  if (sanitized.length > maxLength) {
    sanitized = sanitized.slice(0, maxLength);
  }

  return sanitized;
};
