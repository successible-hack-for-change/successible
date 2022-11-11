import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Instructions from '../pages/instructions';

test('The instructions page should have the title "Instructions"', () => {
  render(<Instructions />);
  expect(
    screen.getByRole('heading', { name: 'Instructions' }),
  ).toBeInTheDocument();
});
