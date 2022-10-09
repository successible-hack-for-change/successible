import { render, screen } from '@testing-library/react';
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
