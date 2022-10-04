import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuestionDisplay from '../components/questionDisplay';
import mockData from '../data/questions.json';

const mockQuestions = mockData.setOfQuestions;

test('The question displays the expected question number and text', () => {
  render(
    <QuestionDisplay
      id={mockQuestions[0].id}
      question={mockQuestions[0].question}
      answer={mockQuestions[0].answer}
      resA={mockQuestions[0].resA}
      resB={mockQuestions[0].resB}
      resC={mockQuestions[0].resC}
      resD={mockQuestions[0].resD}
      highlight={mockQuestions[0].highlight}
      image={mockQuestions[0].image}
      definition={mockQuestions[0].definition}
      timeLimit={mockQuestions[0].timeLimit}
    />,
  );
  expect(screen.getByText(/If Daves/i)).toBeInTheDocument();
});
