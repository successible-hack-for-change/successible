import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import Question from '../pages/question/[id]';
import createMockRouter from '../test-utils/createMockRouter';

test('The question 1 page has a heading of Question 1', () => {
  render(
    <RouterContext.Provider value={createMockRouter({ query: { id: '1' } })}>
      <Question />
    </RouterContext.Provider>,
  );
  const heading = screen.getByRole('heading');
  expect(heading).toHaveTextContent('Question 1');
});

test('The question 1 page shows the question text for the correct question', () => {
  render(
    <RouterContext.Provider value={createMockRouter({ query: { id: '1' } })}>
      <Question />
    </RouterContext.Provider>,
  );
  expect(screen.getByText(/If Daves/i)).toBeInTheDocument();
});

test('If a question does not exist, the user is shown an error message', () => {
  render(
    <RouterContext.Provider value={createMockRouter({ query: { id: '2' } })}>
      <Question />
    </RouterContext.Provider>,
  );
  const heading = screen.getByRole('heading');
  expect(heading).toHaveTextContent('There is no question 2');
});
