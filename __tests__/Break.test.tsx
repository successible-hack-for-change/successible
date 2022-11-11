import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Break from '../components/break';

test('The break component has a title and a button with expected text', () => {
  const mockHandleContinueOnClick = jest.fn();
  render(<Break handleContinueOnClick={mockHandleContinueOnClick} />);
  expect(
    screen.getByRole('heading', { name: 'Break Page' }),
  ).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Continue' })).toBeInTheDocument();
});
