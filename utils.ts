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
