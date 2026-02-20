import { test } from 'node:test';
import assert from 'node:assert';
import { sanitizeInput } from '../utils.ts';

test('CSV Injection prevention in sanitizeInput', async (t) => {
  await t.test('should remove leading =', () => {
    assert.strictEqual(sanitizeInput('=SUM(1,2)'), 'SUM(1,2)');
  });

  await t.test('should remove leading +', () => {
    assert.strictEqual(sanitizeInput('+1+1'), '1+1');
  });

  await t.test('should remove leading -', () => {
    assert.strictEqual(sanitizeInput('-1-1'), '1-1');
  });

  await t.test('should remove leading @', () => {
    assert.strictEqual(sanitizeInput('@name'), 'name');
  });

  await t.test('should remove leading tab', () => {
    assert.strictEqual(sanitizeInput('\tSUM'), 'SUM');
  });

  await t.test('should remove leading carriage return', () => {
    assert.strictEqual(sanitizeInput('\rSUM'), 'SUM');
  });

  await t.test('should remove dangerous characters even after spaces if trim is false', () => {
    // If trim is false, we still want to remove the dangerous characters at the start of the "content"
    // or at least make sure they don't trigger spreadsheet formulas.
    // Excel/Google Sheets often ignore leading spaces.
    assert.strictEqual(sanitizeInput('  =SUM', 100, false), '  SUM');
  });

  await t.test('should preserve these characters if they are not at the beginning', () => {
    assert.strictEqual(sanitizeInput('Name = Rahul'), 'Name = Rahul');
    assert.strictEqual(sanitizeInput('Grade: A+'), 'Grade: A+');
    assert.strictEqual(sanitizeInput('rahul@gmail.com'), 'rahul@gmail.com');
  });
});
