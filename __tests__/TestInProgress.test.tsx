import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestInProgress from '../pages/test-in-progress';

test('It should contain question 1 on initial page load', () => {
  render(<TestInProgress />);
  expect(
    screen.getByRole('heading', { name: 'Question 1' }),
  ).toBeInTheDocument();
});

test('There should be a submit button on initial page load', () => {
  render(<TestInProgress />);

  const button = screen.getByRole('button', { name: 'Submit' });
  expect(button).toBeInTheDocument();
});
