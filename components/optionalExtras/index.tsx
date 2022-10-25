import {
  Button,
  ButtonGroup,
  Collapse,
  Icon,
  Radio,
  RadioGroup,
  Switch,
} from '@blueprintjs/core';
import React, { useState } from 'react';
import Draggable from 'react-draggable';

interface OptionalExtraProps {
  highlightContent: string;
  diagramContent: string;
  definitionsContent: string;
}

const OptionalExtras = ({
  highlightContent,
  diagramContent,
  definitionsContent,
}: OptionalExtraProps): JSX.Element => {
  const [isHighlightsOpen, setIsHighlightsOpen] = useState(false);
  const [isDiagramOpen, setIsDiagramOpen] = useState(false);
  const [isDefinitionsOpen, setIsDefinitionsOpen] = useState(false);
  const [isVisualAidsOpen, setIsVisualAidsOpen] = useState(false);
  const [isReadingGuideDisplaying, setIsReadingGuideDisplaying] =
    useState(false);

  const handleHighlightsOnClick = (prevState: boolean) => {
    setIsDiagramOpen(false);
    setIsDefinitionsOpen(false);
    setIsVisualAidsOpen(false);
    setIsHighlightsOpen(!prevState);
  };

  const handleDiagramOnClick = (prevState: boolean) => {
    setIsHighlightsOpen(false);
    setIsDefinitionsOpen(false);
    setIsVisualAidsOpen(false);
    setIsDiagramOpen(!prevState);
  };

  const handleDefinitionsOnClick = (prevState: boolean) => {
    setIsDiagramOpen(false);
    setIsHighlightsOpen(false);
    setIsVisualAidsOpen(false);
    setIsDefinitionsOpen(!prevState);
  };

  const handleVisualAidsOnClick = (prevState: boolean) => {
    setIsDiagramOpen(false);
    setIsHighlightsOpen(false);
    setIsDefinitionsOpen(false);
    setIsVisualAidsOpen(!prevState);
  };

  const switchOnChange = () => {
    setIsReadingGuideDisplaying(!isReadingGuideDisplaying);
  };

  const handleOnClick = () => {
    setIsReadingGuideDisplaying(false);
  };

  return (
    <div id="optional-extras">
      <h3 className="mt-5">Optional extras</h3>
      <ButtonGroup fill={true} className="flex flex-row gap-2 h-10">
        <Button
          id="highlights"
          className={`!bg-dark !text-white !rounded-md !shadow-md ${
            isHighlightsOpen ? 'opacity-100' : 'opacity-75'
          }`}
          onClick={() => handleHighlightsOnClick(isHighlightsOpen)}
        >
          Highlights
        </Button>
        <Button
          id="diagram"
          className={`!bg-dark !text-white !rounded-md !shadow-md ${
            isDiagramOpen ? 'opacity-100' : 'opacity-75'
          }`}
          onClick={() => handleDiagramOnClick(isDiagramOpen)}
        >
          Diagram
        </Button>
        <Button
          id="definitions"
          className={`!bg-dark !text-white !rounded-md !shadow-md ${
            isDefinitionsOpen ? 'opacity-100' : 'opacity-75'
          }`}
          onClick={() => handleDefinitionsOnClick(isDefinitionsOpen)}
        >
          Definitions
        </Button>
        <Button
          id="visual-aids"
          className={`!bg-dark !text-white !rounded-md !shadow-md ${
            isDefinitionsOpen ? 'opacity-100' : 'opacity-75'
          }`}
          onClick={() => handleVisualAidsOnClick(isVisualAidsOpen)}
        >
          Visual aids
        </Button>
      </ButtonGroup>
      <Collapse isOpen={isHighlightsOpen}>
        <div className="my-5 p-5 border border-grey-light rounded-sm">
          {highlightContent}
        </div>
      </Collapse>
      <Collapse isOpen={isDiagramOpen}>
        <div className="my-5 p-5 border border-grey-light rounded-sm">
          {diagramContent}
        </div>
      </Collapse>
      <Collapse isOpen={isDefinitionsOpen}>
        <div className="my-5 p-5 border border-grey-light rounded-sm">
          {definitionsContent}
        </div>
      </Collapse>
      <Collapse isOpen={isVisualAidsOpen}>
        <div className="my-5 p-5 border border-grey-light rounded-sm">
          <Switch
            checked={isReadingGuideDisplaying}
            label="Reading guide"
            onChange={switchOnChange}
          />
          {isReadingGuideDisplaying && (
            <Draggable defaultClassName="w-9/12 h-32 bg-black text-white flex items-center justify-center text-lg rounded-lg absolute">
              <div>
                <button
                  className="rounded-lg h-10 w-10 absolute top-0 right-0 flex items-center justify-center"
                  onClick={handleOnClick}
                >
                  <Icon icon="cross" />
                </button>
                Drag me around
                <Icon icon="hand-up" className="pl-3" />
              </div>
            </Draggable>
          )}
          <RadioGroup label={<h4>Colour filters</h4>} onChange={() => {}}>
            <Radio label="None" value="none" />
            <Radio label="White" value="white" />
            <Radio label="Yellow" value="yellow" />
            <Radio label="Blue" value="blue" />
          </RadioGroup>
        </div>
      </Collapse>
    </div>
  );
};

export default OptionalExtras;
