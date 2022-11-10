import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestFooter from '../components/testFooter';

test('The test footer should not contain any links', () => {
  render(<TestFooter />);
  expect(screen.queryByRole('link')).not.toBeInTheDocument();
});
