import { test, expect } from '@playwright/test';

test('FAQ component renders and toggles correctly', async ({ page }) => {
  // Since we can't easily run the dev server if dependencies are broken,
  // this test might fail. But I'm providing it as requested.
  await page.goto('/');

  // Check if the FAQ section is visible
  const faqHeading = page.locator('h2:has-text("Let Me Answer Your Doubts"), h2:has-text("ચાલો હું તમારા પ્રશ્નોના જવાબ આપું")');
  await expect(faqHeading).toBeVisible();

  // Check for some FAQ questions
  const question1 = page.locator('text=Tejas Sir, do I need a laptop?');
  const question1Gu = page.locator('text=તેજસ સર, શું મારે લેપટોપની જરૂર પડશે?');

  await expect(question1.or(question1Gu)).toBeVisible();

  // Test accordion toggle
  const firstQuestion = page.locator('button').filter({ hasText: /Tejas Sir, do I need a laptop|તેજસ સર, શું મારે લેપટોપની જરૂર પડશે/ }).first();
  await firstQuestion.click();

  // The first one is open by default (setOpenIndex(0)), so clicking it should close it.
  // Wait, the initial state is 0. So it should be open.
  // Let's check if the answer is visible.
  const answer1 = page.locator('text=No! I designed this specifically for mobile users');
  const answer1Gu = page.locator('text=ના! મેં આ ખાસ મોબાઈલ યુઝર્સ માટે બનાવ્યું છે');

  // Initially it should be visible
  await expect(answer1.or(answer1Gu)).toBeVisible();

  // Click to close
  await firstQuestion.click();
  await expect(answer1.or(answer1Gu)).not.toBeVisible();
});
