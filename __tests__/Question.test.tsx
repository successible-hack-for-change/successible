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
