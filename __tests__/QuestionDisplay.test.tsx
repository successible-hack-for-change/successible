import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import QuestionDisplay from '../components/questionDisplay';

const noop = jest.fn();
const QuestionDisplayComponent = (
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
    definitions="definition"
    timeLimit={60}
    handleSubmitOnClick={noop}
    clockIsAnimated={true}
    setClockIsAnimated={noop}
  />
);

test('The question displays the expected question and answer props', () => {
  render(QuestionDisplayComponent);
  expect(
    screen.getByRole('heading', { name: /Question 1/i }),
  ).toBeInTheDocument();
  expect(screen.getByText('Question?')).toBeInTheDocument();
  expect(screen.getByText('Answer A')).toBeInTheDocument();
  expect(screen.getByText('Answer B')).toBeInTheDocument();
  expect(screen.getByText('Answer C')).toBeInTheDocument();
  expect(screen.getByText('Answer D')).toBeInTheDocument();
});

test('The radio element that is clicked becomes checked', async () => {
  render(QuestionDisplayComponent);

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

test('It should render three buttons that can be used to customise font size', async () => {
  render(QuestionDisplayComponent);
  const questionText = screen.getByText('Question?');
  expect(questionText).toHaveStyle({ 'font-size': '1rem' });

  const decreaseFontSizeButton = screen.getByRole('button', {
    name: 'reduce font size',
  });
  const resetFontSizeButton = screen.getByRole('button', {
    name: 'reset font size',
  });
  const increaseFontSizeButton = screen.getByRole('button', {
    name: 'increase font size',
  });

  userEvent.click(decreaseFontSizeButton);
  await waitFor(() => {
    expect(questionText).toHaveStyle({
      'font-size': '0.75rem',
    });
  });

  userEvent.click(increaseFontSizeButton);
  await waitFor(() => {
    expect(questionText).toHaveStyle({
      'font-size': '1rem',
    });
  });

  userEvent.click(increaseFontSizeButton);
  await waitFor(() => {
    expect(questionText).toHaveStyle({
      'font-size': '1.25rem',
    });
  });

  userEvent.click(increaseFontSizeButton);
  await waitFor(() => {
    expect(questionText).toHaveStyle({
      'font-size': '1.5rem',
    });
  });

  userEvent.click(resetFontSizeButton);
  await waitFor(() => {
    expect(questionText).toHaveStyle({
      'font-size': '1rem',
    });
  });
});

test('It should disable the reduce fontsize button when the fontsize is less than 0.75rem', async () => {
  render(QuestionDisplayComponent);

  const questionText = screen.getByText('Question?');
  expect(questionText).toHaveStyle({ 'font-size': '1rem' });

  const decreaseFontSizeButton = screen.getByRole('button', {
    name: 'reduce font size',
  });

  userEvent.click(decreaseFontSizeButton);
  userEvent.click(decreaseFontSizeButton);
  await waitFor(() => {
    expect(questionText).toHaveStyle({
      'font-size': '0.5rem',
    });
  });
  expect(decreaseFontSizeButton).toBeDisabled();
});

test('It should disable the increase fontsize button when the fontsize is more than 2.5rem', async () => {
  render(QuestionDisplayComponent);

  const questionText = screen.getByText('Question?');
  expect(questionText).toHaveStyle({ 'font-size': '1rem' });

  const increaseFontSizeButton = screen.getByRole('button', {
    name: 'increase font size',
  });

  userEvent.click(increaseFontSizeButton);
  userEvent.click(increaseFontSizeButton);
  userEvent.click(increaseFontSizeButton);
  userEvent.click(increaseFontSizeButton);
  userEvent.click(increaseFontSizeButton);
  userEvent.click(increaseFontSizeButton);
  userEvent.click(increaseFontSizeButton);

  await waitFor(() => {
    expect(questionText).toHaveStyle({
      'font-size': '2.75rem',
    });
  });
  expect(increaseFontSizeButton).toBeDisabled();
});

test('It should retrieve the colour filters and change the styling accordingly', async () => {
  render(QuestionDisplayComponent);
  userEvent.click(screen.getByRole('button', { name: 'Visual aids' }));
  await waitFor(() => {
    expect(screen.getByText('Colour filters')).toBeInTheDocument();
  });
  userEvent.click(screen.getByRole('radio', { name: 'Blue' }));
  await waitFor(() => {
    expect(screen.getByTestId('backgroundColourDiv')).toHaveClass(
      'p-4 max-w-4xl flex-col justify-center mx-auto bg-blue',
    );
  });
  userEvent.click(screen.getByRole('radio', { name: 'Yellow' }));
  await waitFor(() => {
    expect(screen.getByTestId('backgroundColourDiv')).toHaveClass(
      'p-4 max-w-4xl flex-col justify-center mx-auto bg-yellow',
    );
  });
});
