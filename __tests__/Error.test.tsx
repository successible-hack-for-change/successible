import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Error from '../pages/error';

test("The error screen should have a title 'Don't worry'", () => {
  render(<Error />);

  // Test that the heading is there
  expect(
    screen.getByRole('heading', { name: "Don't worry" }),
  ).toBeInTheDocument();

  // Test that all three logos are shown on the screen
  expect(screen.getAllByRole('img', { name: 'Successible logo' })).toHaveLength(
    3,
  );
});
