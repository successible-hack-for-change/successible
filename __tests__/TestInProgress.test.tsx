import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import userEvent from '@testing-library/user-event';
import createMockRouter from '../test-utils/createMockRouter';
import TestInProgress from '../pages/test-in-progress';

test('It should contain question 1 on initial page load', () => {
  render(<TestInProgress />);
  expect(
    screen.getByRole('heading', { name: /Question 1/i }),
  ).toBeInTheDocument();
});

test('Navigation between QuestionDisplay, Break and Completed components behaves as expected', async () => {
  const push = jest.fn();
  render(
    <RouterContext.Provider value={createMockRouter({ push })}>
      <TestInProgress />
    </RouterContext.Provider>,
  );
  const q1SubmitButton = screen.getByRole('button', { name: 'Submit' });
  userEvent.click(q1SubmitButton);
  await waitFor(() =>
    expect(screen.getByRole('heading', { name: 'Break Page' })),
  );
  const continueButton = screen.getByRole('button', { name: 'Continue' });
  userEvent.click(continueButton);
  await waitFor(() =>
    expect(screen.getByRole('heading', { name: /Question 2/i })),
  );
  const q2SubmitButton = screen.getByRole('button', { name: 'Submit' });
  userEvent.click(q2SubmitButton);
  await waitFor(() => expect(push).toHaveBeenCalledWith('/completed'));
});
