import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import OptionalExtras from '../components/optionalExtras';

const noop = () => {};

test('It should initially display three buttons with all optional extra content hidden', () => {
  render(
    <OptionalExtras
      highlightContent="Highlight!"
      diagramContent="Diagram!"
      definitionsContent="Definition!"
      retrieveColorFilterSelected={noop}
    />,
  );

  expect(
    screen.getByRole('button', { name: 'Highlights' }),
  ).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Diagram' })).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: 'Definitions' }),
  ).toBeInTheDocument();

  expect(screen.queryByText('Highlight!')).not.toBeInTheDocument();
  expect(screen.queryByText('Diagram!')).not.toBeInTheDocument();
  expect(screen.queryByText('Definition!')).not.toBeInTheDocument();
});

test('It should toggle whether the highlights content is shown when the highlights button is clicked', async () => {
  render(
    <OptionalExtras
      highlightContent="Highlight!"
      diagramContent="Diagram!"
      definitionsContent="Definition!"
      retrieveColorFilterSelected={noop}
    />,
  );

  const highlightButton = screen.getByRole('button', { name: 'Highlights' });
  userEvent.click(highlightButton);
  await screen.findByText('Highlight!');
  userEvent.click(highlightButton);
  await waitForElementToBeRemoved(() => screen.queryByText('Highlight!'));
});

test('It should toggle whether the diagram content is shown when the diagram button is clicked', async () => {
  render(
    <OptionalExtras
      highlightContent="Highlight!"
      diagramContent="Diagram!"
      definitionsContent="Definition!"
      retrieveColorFilterSelected={noop}
    />,
  );

  const diagramButton = screen.getByRole('button', { name: 'Diagram' });
  userEvent.click(diagramButton);
  await screen.findByText('Diagram!');
  userEvent.click(diagramButton);
  await waitForElementToBeRemoved(() => screen.queryByText('Diagram!'));
});

test('It should toggle whether the definitions content is shown when the definitions button is clicked', async () => {
  render(
    <OptionalExtras
      highlightContent="Highlight!"
      diagramContent="Diagram!"
      definitionsContent="Definition!"
      retrieveColorFilterSelected={noop}
    />,
  );

  const definitionButton = screen.getByRole('button', { name: 'Definitions' });
  userEvent.click(definitionButton);
  await screen.findByText('Definition!');
  userEvent.click(definitionButton);
  await waitForElementToBeRemoved(() => screen.queryByText('Definition!'));
});

test('It should hide highlights and show diagram when highlights are visible but the diagram button is clicked', async () => {
  render(
    <OptionalExtras
      highlightContent="Highlight!"
      diagramContent="Diagram!"
      definitionsContent="Definition!"
      retrieveColorFilterSelected={noop}
    />,
  );
  const highlightButton = screen.getByRole('button', { name: 'Highlights' });
  const diagramButton = screen.getByRole('button', { name: 'Diagram' });
  userEvent.click(highlightButton);
  await screen.findByText('Highlight!');
  expect(screen.queryByText('Diagram!')).not.toBeInTheDocument();
  userEvent.click(diagramButton);
  await waitForElementToBeRemoved(() => screen.queryByText('Highlight!'));
  expect(screen.getByText('Diagram!')).toBeInTheDocument();
});

test('It should hide highlights and show definitions when highlights are visible but the definitions button is clicked', async () => {
  render(
    <OptionalExtras
      highlightContent="Highlight!"
      diagramContent="Diagram!"
      definitionsContent="Definition!"
      retrieveColorFilterSelected={noop}
    />,
  );
  const highlightButton = screen.getByRole('button', { name: 'Highlights' });
  const definitionButton = screen.getByRole('button', { name: 'Definitions' });
  userEvent.click(highlightButton);
  await screen.findByText('Highlight!');
  expect(screen.queryByText('Definition!')).not.toBeInTheDocument();
  userEvent.click(definitionButton);
  await waitForElementToBeRemoved(() => screen.queryByText('Highlight!'));
  expect(screen.getByText('Definition!')).toBeInTheDocument();
});

test('It should hide diagram and show definitions when diagram is visible but the definitions button is clicked', async () => {
  render(
    <OptionalExtras
      highlightContent="Highlight!"
      diagramContent="Diagram!"
      definitionsContent="Definition!"
      retrieveColorFilterSelected={noop}
    />,
  );
  const diagramButton = screen.getByRole('button', { name: 'Diagram' });
  const definitionButton = screen.getByRole('button', { name: 'Definitions' });
  userEvent.click(diagramButton);
  await screen.findByText('Diagram!');
  expect(screen.queryByText('Definition!')).not.toBeInTheDocument();
  userEvent.click(definitionButton);
  await waitForElementToBeRemoved(() => screen.queryByText('Diagram!'));
  expect(screen.getByText('Definition!')).toBeInTheDocument();
});

test('It should hide diagram and show highlights when diagram is visible but the highlights button is clicked', async () => {
  render(
    <OptionalExtras
      highlightContent="Highlight!"
      diagramContent="Diagram!"
      definitionsContent="Definition!"
      retrieveColorFilterSelected={noop}
    />,
  );
  const diagramButton = screen.getByRole('button', { name: 'Diagram' });
  const highlightButton = screen.getByRole('button', { name: 'Highlights' });
  userEvent.click(diagramButton);
  await screen.findByText('Diagram!');
  expect(screen.queryByText('Highlight!')).not.toBeInTheDocument();
  userEvent.click(highlightButton);
  await waitForElementToBeRemoved(() => screen.queryByText('Diagram!'));
  expect(screen.getByText('Highlight!')).toBeInTheDocument();
});

test('It should hide definitions and show highlights when definitions are visible but the highlights button is clicked', async () => {
  render(
    <OptionalExtras
      highlightContent="Highlight!"
      diagramContent="Diagram!"
      definitionsContent="Definition!"
      retrieveColorFilterSelected={noop}
    />,
  );
  const definitionButton = screen.getByRole('button', { name: 'Definitions' });
  const highlightButton = screen.getByRole('button', { name: 'Highlights' });
  userEvent.click(definitionButton);
  await screen.findByText('Definition!');
  expect(screen.queryByText('Highlight!')).not.toBeInTheDocument();
  userEvent.click(highlightButton);
  await waitForElementToBeRemoved(() => screen.queryByText('Definition!'));
  expect(screen.getByText('Highlight!')).toBeInTheDocument();
});

test('It should hide definitions and show diagram when definitions are visible but the diagram button is clicked', async () => {
  render(
    <OptionalExtras
      highlightContent="Highlight!"
      diagramContent="Diagram!"
      definitionsContent="Definition!"
      retrieveColorFilterSelected={noop}
    />,
  );
  const definitionButton = screen.getByRole('button', { name: 'Definitions' });
  const diagramButton = screen.getByRole('button', { name: 'Diagram' });
  userEvent.click(definitionButton);
  await screen.findByText('Definition!');
  expect(screen.queryByText('Diagram!')).not.toBeInTheDocument();
  userEvent.click(diagramButton);
  await waitForElementToBeRemoved(() => screen.queryByText('Definition!'));
  expect(screen.getByText('Diagram!')).toBeInTheDocument();
});
