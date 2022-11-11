import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FAQs from '../pages/faqs';

test("It should render a heading of 'FAQs'", () => {
  render(<FAQs />);
  expect(screen.getByRole('heading', { name: 'FAQs' }));
});
