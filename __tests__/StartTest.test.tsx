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

test('The start button is disabled until the form is filled in correctly', async () => {
  const push = jest.fn();
  render(
    <RouterContext.Provider value={createMockRouter({ push })}>
      <StartTest />
    </RouterContext.Provider>,
  );
  const startButton = screen.getByRole('button', { name: 'Start your test' });
  expect(startButton).toBeDisabled();
  const fullNameInput = screen.getByRole('textbox', { name: 'Full Name' });
  await userEvent.type(fullNameInput, 'Test User');

  const emailInput = screen.getByRole('textbox', { name: 'Email address' });
  await userEvent.type(emailInput, 'testuser@email.com');

  const accessCodeInput = screen.getByRole('textbox', { name: 'Entry code' });
  await userEvent.type(accessCodeInput, 'demo');

  expect(startButton).toBeEnabled();
  userEvent.click(startButton);
  await waitFor(() => expect(push).toHaveBeenCalledWith('/test-in-progress'));
});
