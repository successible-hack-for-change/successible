import { Button, ButtonGroup, Collapse, Pre } from '@blueprintjs/core';
import React, { useState } from 'react';

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

  const handleHighlightsOnClick = (prevState: boolean) => {
    setIsDiagramOpen(false);
    setIsDefinitionsOpen(false);
    setIsHighlightsOpen(!prevState);
  };

  const handleDiagramOnClick = (prevState: boolean) => {
    setIsHighlightsOpen(false);
    setIsDefinitionsOpen(false);
    setIsDiagramOpen(!prevState);
  };

  const handleDefinitionsOnClick = (prevState: boolean) => {
    setIsDiagramOpen(false);
    setIsHighlightsOpen(false);
    setIsDefinitionsOpen(!prevState);
  };

  return (
    <div id="optional-extras">
      <h3 className="mt-5">Optional extras</h3>
      <ButtonGroup fill={true} className="flex flex-row gap-2 h-10">
        <Button
          id="highlights"
          className={`!bg-accent !rounded-md !shadow-md ${
            isHighlightsOpen ? 'opacity-100' : 'opacity-75'
          }`}
          onClick={() => handleHighlightsOnClick(isHighlightsOpen)}
        >
          Highlights
        </Button>
        <Button
          id="diagram"
          className={`!bg-accent !rounded-md !shadow-md ${
            isDiagramOpen ? 'opacity-100' : 'opacity-75'
          }`}
          onClick={() => handleDiagramOnClick(isDiagramOpen)}
        >
          Diagram
        </Button>
        <Button
          id="definitions"
          className={`!bg-accent !rounded-md !shadow-md ${
            isDefinitionsOpen ? 'opacity-100' : 'opacity-75'
          }`}
          onClick={() => handleDefinitionsOnClick(isDefinitionsOpen)}
        >
          Definitions
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
    </div>
  );
};

export default OptionalExtras;
