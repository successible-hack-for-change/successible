import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import OptionalExtras from '../components/optionalExtras';

const noop = () => {};

test('It should initially display four buttons with all optional extra content hidden', () => {
  render(
    <OptionalExtras
      highlightContent="Highlight!"
      diagramContent="Diagram!"
      definitionsContent="Definition!"
      retrieveColorFilterSelected={noop}
    />,
  );
  expect(screen.getAllByRole('button')).toHaveLength(4);
  expect(
    screen.getByRole('button', { name: 'Highlights' }),
  ).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Diagram' })).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: 'Definitions' }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: 'Visual aids' }),
  ).toBeInTheDocument();

  expect(screen.queryByText('Highlight!')).not.toBeInTheDocument();
  expect(screen.queryByText('Diagram!')).not.toBeInTheDocument();
  expect(screen.queryByText('Definition!')).not.toBeInTheDocument();
  expect(screen.queryByText('Reading guide')).not.toBeInTheDocument();
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

test('It should toggle whether the visual aids options are shown when the Visual aids button is clicked', async () => {
  render(
    <OptionalExtras
      highlightContent="Highlight!"
      diagramContent="Diagram!"
      definitionsContent="Definition!"
      retrieveColorFilterSelected={noop}
    />,
  );

  const visualAidsButton = screen.getByRole('button', { name: 'Visual aids' });
  userEvent.click(visualAidsButton);
  await screen.findByText('Reading guide');
  userEvent.click(visualAidsButton);
  await waitForElementToBeRemoved(() => screen.queryByText('Reading guide'));
});

test('When visual aids are open, we can toggle the reading guide toggle', async () => {
  render(
    <OptionalExtras
      highlightContent="Highlight!"
      diagramContent="Diagram!"
      definitionsContent="Definition!"
      retrieveColorFilterSelected={noop}
    />,
  );

  const visualAidsButton = screen.getByRole('button', { name: 'Visual aids' });
  userEvent.click(visualAidsButton);
  await screen.findByText('Reading guide');
  const readingGuideToggle = screen.getByRole('checkbox', {
    name: 'Reading guide',
  });
  userEvent.click(readingGuideToggle);
  await screen.findByText(/Drag me around/i);
  userEvent.click(readingGuideToggle);
  await waitForElementToBeRemoved(() => screen.queryByText(/Drag me around/i));
});

test('When the reading guide is displayed, we can click the cross to remove it', async () => {
  render(
    <OptionalExtras
      highlightContent="Highlight!"
      diagramContent="Diagram!"
      definitionsContent="Definition!"
      retrieveColorFilterSelected={noop}
    />,
  );

  const visualAidsButton = screen.getByRole('button', { name: 'Visual aids' });
  userEvent.click(visualAidsButton);
  await screen.findByText('Reading guide');
  const readingGuideToggle = screen.getByRole('checkbox', {
    name: 'Reading guide',
  });
  userEvent.click(readingGuideToggle);
  await screen.findByText(/Drag me around/i);
  const closeReadingGuideButton = screen.getByRole('button', { name: '' });
  userEvent.click(closeReadingGuideButton);
  await waitForElementToBeRemoved(() => screen.queryByText(/Drag me around/i));
});

test('When visual aids are open, we can choose a colour filter', async () => {
  render(
    <OptionalExtras
      highlightContent="Highlight!"
      diagramContent="Diagram!"
      definitionsContent="Definition!"
      retrieveColorFilterSelected={noop}
    />,
  );

  const visualAidsButton = screen.getByRole('button', { name: 'Visual aids' });
  userEvent.click(visualAidsButton);
  await screen.findByText('Colour filters');

  expect(screen.getAllByRole('radio')).toHaveLength(4);
  const noneRadioButton = screen.getByRole('radio', {
    name: 'None',
  });
  const whiteRadioButton = screen.getByRole('radio', { name: 'White' });
  const yellowRadioButton = screen.getByRole('radio', { name: 'Yellow' });
  const blueRadioButton = screen.getByRole('radio', { name: 'Blue' });

  expect(noneRadioButton).toBeChecked();
  expect(whiteRadioButton).not.toBeChecked();
  expect(yellowRadioButton).not.toBeChecked();
  expect(blueRadioButton).not.toBeChecked();

  userEvent.click(whiteRadioButton);
  await waitFor(() => {
    expect(whiteRadioButton).toBeChecked();
  });
  expect(noneRadioButton).not.toBeChecked();
  expect(yellowRadioButton).not.toBeChecked();
  expect(blueRadioButton).not.toBeChecked();

  userEvent.click(yellowRadioButton);
  await waitFor(() => {
    expect(yellowRadioButton).toBeChecked();
  });
  expect(noneRadioButton).not.toBeChecked();
  expect(whiteRadioButton).not.toBeChecked();
  expect(blueRadioButton).not.toBeChecked();

  userEvent.click(blueRadioButton);
  await waitFor(() => {
    expect(blueRadioButton).toBeChecked();
  });
  expect(noneRadioButton).not.toBeChecked();
  expect(yellowRadioButton).not.toBeChecked();
  expect(whiteRadioButton).not.toBeChecked();
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

test('It should hide highlights and show visual aids when highlights are visible but the visual aids button is clicked', async () => {
  render(
    <OptionalExtras
      highlightContent="Highlight!"
      diagramContent="Diagram!"
      definitionsContent="Definition!"
      retrieveColorFilterSelected={noop}
    />,
  );
  const highlightButton = screen.getByRole('button', { name: 'Highlights' });
  const visualAidsButton = screen.getByRole('button', { name: 'Visual aids' });
  userEvent.click(highlightButton);
  await screen.findByText('Highlight!');
  expect(screen.queryByText('Reading guide')).not.toBeInTheDocument();
  userEvent.click(visualAidsButton);
  await waitForElementToBeRemoved(() => screen.queryByText('Highlight!'));
  expect(screen.getByText('Reading guide')).toBeInTheDocument();
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

test('It should hide diagram and show visual aids when diagram is visible but the visual aids button is clicked', async () => {
  render(
    <OptionalExtras
      highlightContent="Highlight!"
      diagramContent="Diagram!"
      definitionsContent="Definition!"
      retrieveColorFilterSelected={noop}
    />,
  );
  const diagramButton = screen.getByRole('button', { name: 'Diagram' });
  const visualAidsButton = screen.getByRole('button', { name: 'Visual aids' });
  userEvent.click(diagramButton);
  await screen.findByText('Diagram!');
  expect(screen.queryByText('Reading guide')).not.toBeInTheDocument();
  userEvent.click(visualAidsButton);
  await waitForElementToBeRemoved(() => screen.queryByText('Diagram!'));
  expect(screen.getByText('Reading guide')).toBeInTheDocument();
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

test('It should hide definitions and show visual aids when definitions are visible but the visual aids button is clicked', async () => {
  render(
    <OptionalExtras
      highlightContent="Highlight!"
      diagramContent="Diagram!"
      definitionsContent="Definition!"
      retrieveColorFilterSelected={noop}
    />,
  );
  const definitionButton = screen.getByRole('button', { name: 'Definitions' });
  const visualAidsButton = screen.getByRole('button', { name: 'Visual aids' });
  userEvent.click(definitionButton);
  await screen.findByText('Definition!');
  expect(screen.queryByText('Reading guide')).not.toBeInTheDocument();
  userEvent.click(visualAidsButton);
  await waitForElementToBeRemoved(() => screen.queryByText('Definition!'));
  expect(screen.getByText('Reading guide')).toBeInTheDocument();
});

test('It should hide visual aids and show highlights when visual aids are visible but the highlights button is clicked', async () => {
  render(
    <OptionalExtras
      highlightContent="Highlight!"
      diagramContent="Diagram!"
      definitionsContent="Definition!"
      retrieveColorFilterSelected={noop}
    />,
  );
  const visualAidsButton = screen.getByRole('button', { name: 'Visual aids' });
  const highlightButton = screen.getByRole('button', { name: 'Highlights' });
  userEvent.click(visualAidsButton);
  await screen.findByText('Reading guide');
  expect(screen.queryByText('Highlight!')).not.toBeInTheDocument();
  userEvent.click(highlightButton);
  await waitForElementToBeRemoved(() => screen.queryByText('Reading guide'));
  expect(screen.getByText('Highlight!')).toBeInTheDocument();
});

test('It should hide visual aids and show diagram when visual aids are visible but the diagram button is clicked', async () => {
  render(
    <OptionalExtras
      highlightContent="Highlight!"
      diagramContent="Diagram!"
      definitionsContent="Definition!"
      retrieveColorFilterSelected={noop}
    />,
  );
  const visualAidsButton = screen.getByRole('button', { name: 'Visual aids' });
  const diagramButton = screen.getByRole('button', { name: 'Diagram' });
  userEvent.click(visualAidsButton);
  await screen.findByText('Reading guide');
  expect(screen.queryByText('Diagram!')).not.toBeInTheDocument();
  userEvent.click(diagramButton);
  await waitForElementToBeRemoved(() => screen.queryByText('Reading guide'));
  expect(screen.getByText('Diagram!')).toBeInTheDocument();
});

test('It should hide visual aids and show definitions when visual aids are visible but the definitions button is clicked', async () => {
  render(
    <OptionalExtras
      highlightContent="Highlight!"
      diagramContent="Diagram!"
      definitionsContent="Definition!"
      retrieveColorFilterSelected={noop}
    />,
  );
  const visualAidsButton = screen.getByRole('button', { name: 'Visual aids' });
  const definitionsButton = screen.getByRole('button', { name: 'Definitions' });
  userEvent.click(visualAidsButton);
  await screen.findByText('Reading guide');
  expect(screen.queryByText('Definition!')).not.toBeInTheDocument();
  userEvent.click(definitionsButton);
  await waitForElementToBeRemoved(() => screen.queryByText('Reading guide'));
  expect(screen.getByText('Definition!')).toBeInTheDocument();
});
