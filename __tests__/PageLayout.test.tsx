import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PageLayout from '../pages/PageLayout';

test('It should display the normal header and footer when there is no test happening', () => {
  render(
    <PageLayout testInProgress={false}>
      <h1>Hello world </h1>
    </PageLayout>,
  );
  expect(screen.getAllByRole('button')).toHaveLength(4);
  expect(screen.getAllByRole('link')).toHaveLength(3);
});

test('It should display the test header and test footer during a test', () => {
  render(
    <PageLayout testInProgress={true}>
      <h1>Hello world </h1>
    </PageLayout>,
  );
  expect(screen.queryByRole('button')).not.toBeInTheDocument();
  expect(screen.queryByRole('link')).not.toBeInTheDocument();
});
