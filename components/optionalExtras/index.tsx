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
  retrieveColorFilterSelected: (color: string) => void;
}

const OptionalExtras = ({
  highlightContent,
  diagramContent,
  definitionsContent,
  retrieveColorFilterSelected,
}: OptionalExtraProps): JSX.Element => {
  const [isHighlightsOpen, setIsHighlightsOpen] = useState(false);
  const [isDiagramOpen, setIsDiagramOpen] = useState(false);
  const [isDefinitionsOpen, setIsDefinitionsOpen] = useState(false);
  const [isVisualAidsOpen, setIsVisualAidsOpen] = useState(false);
  const [isReadingGuideDisplaying, setIsReadingGuideDisplaying] =
    useState(false);
  const [colorFilterSelected, setColorFilterSelected] = useState('none');

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

  const handleColorFilterChange = (
    event: React.FormEvent<HTMLInputElement>,
  ) => {
    setColorFilterSelected(event.currentTarget.value);
    retrieveColorFilterSelected(event.currentTarget.value);
  };

  return (
    <div id="optional-extras">
      <h3 className="mt-5">Optional extras</h3>
      <ButtonGroup fill={true} className="flex flex-row gap-2 h-10">
        <Button
          id="highlights"
          className={`!rounded-md ${
            isHighlightsOpen ? 'opacity-100 underline' : 'opacity-75'
          } ${
            colorFilterSelected !== 'none'
              ? '!border !border-solid !shadow-none'
              : '!bg-dark !text-white !shadow-md'
          }`}
          onClick={() => handleHighlightsOnClick(isHighlightsOpen)}
        >
          Highlights
        </Button>
        <Button
          id="diagram"
          className={`!rounded-md ${
            isDiagramOpen ? 'opacity-100 underline' : 'opacity-75'
          } ${
            colorFilterSelected !== 'none'
              ? '!border !border-solid !shadow-none'
              : '!bg-dark !text-white !shadow-md'
          }`}
          onClick={() => handleDiagramOnClick(isDiagramOpen)}
        >
          Diagram
        </Button>
        <Button
          id="definitions"
          className={`!rounded-md ${
            isDefinitionsOpen ? 'opacity-100 underline' : 'opacity-75'
          } ${
            colorFilterSelected !== 'none'
              ? '!border !border-solid !shadow-none'
              : '!bg-dark !text-white !shadow-md'
          }`}
          onClick={() => handleDefinitionsOnClick(isDefinitionsOpen)}
        >
          Definitions
        </Button>
        <Button
          id="visual-aids"
          className={`!rounded-md ${
            isVisualAidsOpen ? 'opacity-100 underline' : 'opacity-75'
          } ${
            colorFilterSelected !== 'none'
              ? '!border !border-solid !shadow-none'
              : '!bg-dark !text-white !shadow-md'
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
          <RadioGroup
            label={<h4>Colour filters</h4>}
            className="pt-4"
            selectedValue={colorFilterSelected}
            onChange={(event) => handleColorFilterChange(event)}
          >
            <Radio label="None" value="none" />
            <Radio label="White" value="white" />
            <Radio label="Yellow" value="yellow" />
            <Radio label="Blue" value="blue" />
          </RadioGroup>
        </div>
      </Collapse>
      {isReadingGuideDisplaying && (
        <Draggable
          defaultClassName="z-50 w-9/12 h-32 bg-black text-white flex items-center justify-center text-lg rounded-lg absolute"
          defaultPosition={{ x: 0, y: -190 }}
        >
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
    </div>
  );
};

export default OptionalExtras;
