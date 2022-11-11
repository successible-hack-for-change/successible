import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestHeader from '../components/testHeader';

test('The test header should not contain any buttons', () => {
  render(<TestHeader />);
  expect(screen.queryByRole('button')).not.toBeInTheDocument();
});
