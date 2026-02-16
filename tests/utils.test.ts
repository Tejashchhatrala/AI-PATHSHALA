import { test, mock } from 'node:test';
import assert from 'node:assert';
import { throttle, scrollToElement, sanitizeInput } from '../utils.ts';

test('throttle utility', async (t) => {
  const timers = mock.timers;
  timers.enable({ apis: ['setTimeout', 'Date'] });
  // Initialize to a non-zero time so leading edge works as expected
  timers.setTime(10000);

  t.after(() => {
    timers.reset();
  });

  await t.test('should execute leading edge immediately', () => {
    const func = mock.fn();
    const throttledFunc = throttle(func, 1000);

    throttledFunc('first');
    assert.strictEqual(func.mock.callCount(), 1);
    assert.deepStrictEqual(func.mock.calls[0].arguments, ['first']);
  });

  await t.test('should throttle subsequent calls within the limit', () => {
    const func = mock.fn();
    const throttledFunc = throttle(func, 1000);

    throttledFunc('first');
    assert.strictEqual(func.mock.callCount(), 1);

    timers.tick(500);
    throttledFunc('second');
    assert.strictEqual(func.mock.callCount(), 1);

    timers.tick(200);
    throttledFunc('third');
    assert.strictEqual(func.mock.callCount(), 1);
  });

  await t.test('should execute trailing edge after the limit', () => {
    const func = mock.fn();
    const throttledFunc = throttle(func, 1000);

    throttledFunc('first');
    timers.tick(500);
    throttledFunc('second');
    assert.strictEqual(func.mock.callCount(), 1);

    timers.tick(500);
    assert.strictEqual(func.mock.callCount(), 2);
    assert.deepStrictEqual(func.mock.calls[1].arguments, ['second']);
  });

  await t.test('should execute exactly twice for a burst of calls (leading and trailing)', () => {
    const func = mock.fn();
    const throttledFunc = throttle(func, 1000);

    throttledFunc(1);
    throttledFunc(2);
    throttledFunc(3);

    assert.strictEqual(func.mock.callCount(), 1);

    timers.tick(1000);
    assert.strictEqual(func.mock.callCount(), 2);
    assert.deepStrictEqual(func.mock.calls[1].arguments, [2]);
  });

  await t.test('should preserve "this" context', () => {
    const func = mock.fn();
    const context = { value: 'test' };
    const throttled = throttle(func, 1000);

    throttled.call(context, 'arg');
    assert.strictEqual(func.mock.callCount(), 1);
    assert.strictEqual(func.mock.calls[0].this, context);
  });

  await t.test('should handle multiple cycles correctly', () => {
    const func = mock.fn();
    const throttledFunc = throttle(func, 1000);

    // Cycle 1
    throttledFunc(1); // Leading
    timers.tick(500);
    throttledFunc(2); // Trailing
    timers.tick(500); // Trailing executes
    assert.strictEqual(func.mock.callCount(), 2);
    assert.deepStrictEqual(func.mock.calls[1].arguments, [2]);

    // Wait for the limit to pass since the last trailing edge execution
    timers.tick(1000);

    // Cycle 2
    throttledFunc(3); // Leading
    assert.strictEqual(func.mock.callCount(), 3);
    assert.deepStrictEqual(func.mock.calls[2].arguments, [3]);

    timers.tick(1000);
    assert.strictEqual(func.mock.callCount(), 3);
  });
});

test('scrollToElement utility', async (t) => {
  // Mock document and getElementById
  const mockScrollIntoView = mock.fn();
  const mockGetElementById = mock.fn((id) => {
    if (id === 'valid-id') {
      return { scrollIntoView: mockScrollIntoView };
    }
    return null;
  });

  // Assign to global
  global.document = {
    getElementById: mockGetElementById,
  } as any;

  t.after(() => {
    // Clean up global mock
    delete (global as any).document;
  });

  await t.test('should call preventDefault if event provided', () => {
    const mockPreventDefault = mock.fn();
    // Use type assertion or satisfy the type requirement
    scrollToElement('invalid-id', { preventDefault: mockPreventDefault });
    assert.strictEqual(mockPreventDefault.mock.callCount(), 1);
  });

  await t.test('should find element and call scrollIntoView', () => {
    // Clear previous calls
    mockGetElementById.mock.resetCalls();
    mockScrollIntoView.mock.resetCalls();

    scrollToElement('valid-id');

    assert.strictEqual(mockGetElementById.mock.callCount(), 1);
    assert.strictEqual(mockGetElementById.mock.calls[0].arguments[0], 'valid-id');

    assert.strictEqual(mockScrollIntoView.mock.callCount(), 1);
    assert.deepStrictEqual(mockScrollIntoView.mock.calls[0].arguments[0], { behavior: 'smooth' });
  });

  await t.test('should do nothing if element not found', () => {
    mockScrollIntoView.mock.resetCalls();
    scrollToElement('invalid-id');

    assert.strictEqual(mockScrollIntoView.mock.callCount(), 0);
  });
});

test('sanitizeInput utility', async (t) => {
  await t.test('should remove HTML tags/characters', () => {
    const input = '<script>alert("xss")</script>';
    // We remove < and >, so the result should be scriptalert("xss")/script
    const expected = 'scriptalert("xss")/script';
    assert.strictEqual(sanitizeInput(input), expected);
  });

  await t.test('should trim whitespace', () => {
    const input = '  hello  ';
    assert.strictEqual(sanitizeInput(input), 'hello');
  });

  await t.test('should limit length', () => {
    const input = 'a'.repeat(200);
    const sanitized = sanitizeInput(input, 10);
    assert.strictEqual(sanitized.length, 10);
    assert.strictEqual(sanitized, 'aaaaaaaaaa');
  });

  await t.test('should preserve Gujarati characters', () => {
    const input = 'નામ';
    assert.strictEqual(sanitizeInput(input), 'નામ');
  });

  await t.test('should handle mixed input', () => {
    const input = '  <script>નામ</script>  ';
    const expected = 'scriptનામ/script';
    assert.strictEqual(sanitizeInput(input), expected);
  });

  await t.test('should handle empty input', () => {
    assert.strictEqual(sanitizeInput(''), '');
  });

  await t.test('should handle non-string input (graceful failure)', () => {
    // @ts-ignore
    assert.strictEqual(sanitizeInput(null), '');
    // @ts-ignore
    assert.strictEqual(sanitizeInput(undefined), '');
  });

  await t.test('should respect trim parameter', () => {
    const input = '  hello  ';
    // Default is true
    assert.strictEqual(sanitizeInput(input), 'hello');
    // Explicit true
    assert.strictEqual(sanitizeInput(input, 100, true), 'hello');
    // Explicit false
    assert.strictEqual(sanitizeInput(input, 100, false), '  hello  ');
  });
});
