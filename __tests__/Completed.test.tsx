import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Completed from '../pages/completed';

test('The completed page should have a title saying completed', () => {
  render(<Completed />);
  expect(
    screen.getByRole('heading', { name: 'Completed' }),
  ).toBeInTheDocument();
});
