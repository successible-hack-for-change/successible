import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FaqQuestion from '../components/faqQuestion';

test('It should display an FAQ with the given question and answer props', () => {
  render(<FaqQuestion question="question" answer="answer" />);
  expect(screen.getByText('question')).toBeInTheDocument();
  expect(screen.getByText('answer')).toBeInTheDocument();
});
