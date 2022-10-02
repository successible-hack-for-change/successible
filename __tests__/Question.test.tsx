import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Question from '../pages/question/[id]';

test('The question page renders a heading called Question', () => {
  render(<Question />);
  const heading = screen.getByRole('heading');
  expect(heading).toHaveTextContent('Question');
});
