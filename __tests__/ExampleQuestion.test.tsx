import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ExampleQuestion from '../pages/example-question';

test('The example question page has the expected title', () => {
  render(<ExampleQuestion />);
  expect(
    screen.getByRole('heading', { name: /Question 1/i }),
  ).toBeInTheDocument();
});

test('Clicking the submit button should cause an overlay to appear', async () => {
  render(<ExampleQuestion />);
  const submitButton = screen.getByRole('button', { name: 'Submit' });
  userEvent.click(submitButton);
  await screen.findByText(
    /In your real test this will take you to the break page./i,
  );
  const overlayButton = screen.getByRole('button', { name: 'Okay' });
  userEvent.click(overlayButton);
  await waitForElementToBeRemoved(() =>
    screen.queryByText(
      /In your real test this will take you to the break page./i,
    ),
  );
});
