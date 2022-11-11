import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import DelayedSpinner from '../components/delayedSpinner';

test('It should render a delayed spinner', async () => {
  render(<DelayedSpinner />);
  await act(async () => {
    await new Promise((r) => setTimeout(r, 1000));
  });
  expect(screen.getByRole('progressbar')).toBeInTheDocument();
});
