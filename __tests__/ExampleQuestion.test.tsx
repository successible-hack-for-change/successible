import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExampleQuestion from '../pages/example-question';

xtest('The example question page has the expected title', () => {
  render(<ExampleQuestion />);
  expect(
    screen.getByRole('heading', { name: /Question 1/i }),
  ).toBeInTheDocument();
});
