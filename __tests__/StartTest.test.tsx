import { render, screen, waitFor } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import createMockRouter from '../test-utils/createMockRouter';
import StartTest from '../pages/start-test';

test('The start-test page should have a title including "Are you ready"', () => {
  render(<StartTest />);
  expect(
    screen.getByRole('heading', { name: /Are you ready/i }),
  ).toBeInTheDocument();
});

test('Clicking the start test button should navigate to the test-in-progress page', async () => {
  const push = jest.fn();
  render(
    <RouterContext.Provider value={createMockRouter({ push })}>
      <StartTest />
    </RouterContext.Provider>,
  );
  const startButton = screen.getByRole('button', { name: 'Start your test' });
  userEvent.click(startButton);
  await waitFor(() => expect(push).toHaveBeenCalledWith('/test-in-progress'));
});
