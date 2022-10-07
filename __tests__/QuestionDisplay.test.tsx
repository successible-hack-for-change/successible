import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuestionDisplay from '../components/questionDisplay';

test('The question displays the expected question text', () => {
  render(
    <QuestionDisplay
      id={1}
      question="Question?"
      answer="AnswerA"
      resA="AnswerA"
      resB="AnswerB"
      resC="AnswerC"
      resD="AnswerD"
      highlight="highlight"
      image="imageLink"
      definition="definition"
      timeLimit={60}
    />,
  );
  expect(screen.getByText('Question?')).toBeInTheDocument();
});
