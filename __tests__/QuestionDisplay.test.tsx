import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import QuestionDisplay from '../components/questionDisplay';

test('The question displays the expected question and answer props', () => {
  render(
    <QuestionDisplay
      id={1}
      question="Question?"
      answer="Answer A"
      resA="Answer A"
      resB="Answer B"
      resC="Answer C"
      resD="Answer D"
      highlight="highlight"
      image="imageLink"
      definition="definition"
      timeLimit={60}
    />,
  );
  expect(
    screen.getByRole('heading', { name: 'Question 1' }),
  ).toBeInTheDocument();
  expect(screen.getByText('Question?')).toBeInTheDocument();
  expect(screen.getByText('Answer A')).toBeInTheDocument();
  expect(screen.getByText('Answer B')).toBeInTheDocument();
  expect(screen.getByText('Answer C')).toBeInTheDocument();
  expect(screen.getByText('Answer D')).toBeInTheDocument();
});

test('The radio element that is clicked becomes checked', async () => {
  render(
    <QuestionDisplay
      id={1}
      question="Question?"
      answer="Answer A"
      resA="Answer A"
      resB="Answer B"
      resC="Answer C"
      resD="Answer D"
      highlight="highlight"
      image="imageLink"
      definition="definition"
      timeLimit={60}
    />,
  );

  const radioA = screen.getByRole('radio', { name: 'Answer A' });
  const radioB = screen.getByRole('radio', { name: 'Answer B' });
  const radioC = screen.getByRole('radio', { name: 'Answer C' });
  const radioD = screen.getByRole('radio', { name: 'Answer D' });

  expect(radioA).not.toBeChecked();
  expect(radioB).not.toBeChecked();
  expect(radioC).not.toBeChecked();
  expect(radioD).not.toBeChecked();

  userEvent.click(radioA);
  await waitFor(() => expect(radioA).toBeChecked());
  expect(radioB).not.toBeChecked();
  expect(radioC).not.toBeChecked();
  expect(radioD).not.toBeChecked();

  userEvent.click(radioB);
  await waitFor(() => expect(radioB).toBeChecked());
  expect(radioA).not.toBeChecked();
  expect(radioC).not.toBeChecked();
  expect(radioD).not.toBeChecked();

  userEvent.click(radioC);
  await waitFor(() => expect(radioC).toBeChecked());
  expect(radioA).not.toBeChecked();
  expect(radioB).not.toBeChecked();
  expect(radioD).not.toBeChecked();

  userEvent.click(radioD);
  await waitFor(() => expect(radioD).toBeChecked());
  expect(radioA).not.toBeChecked();
  expect(radioB).not.toBeChecked();
  expect(radioC).not.toBeChecked();
});
