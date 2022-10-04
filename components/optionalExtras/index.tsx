import { Button, ButtonGroup, Collapse, Pre } from '@blueprintjs/core';
import { Popover2 } from '@blueprintjs/popover2';
import React, { useState } from 'react';

const OptionalExtras = (): JSX.Element => {
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
    <div>
      <h3>Optional extras</h3>
      <ButtonGroup fill={true} className="flex flex-row gap-2">
        <Button onClick={() => handleHighlightsOnClick(isHighlightsOpen)}>
          Highlights
        </Button>
        <Button onClick={() => handleDiagramOnClick(isDiagramOpen)}>
          Diagram
        </Button>
        <Button onClick={() => handleDefinitionsOnClick(isDefinitionsOpen)}>
          Definitions
        </Button>
      </ButtonGroup>
      <Collapse isOpen={isHighlightsOpen}>
        {/* <Pre> is basically and pre-styled div */}
        <Pre>Sometimes I hide because Im shy.</Pre>
      </Collapse>
      <Collapse isOpen={isDiagramOpen}>
        <Pre>
          I like to be center of attention so everything else should be closed
          when Im open.
        </Pre>
      </Collapse>{' '}
      <Collapse isOpen={isDefinitionsOpen}>
        <Pre>Im just here to watch the fight.</Pre>
      </Collapse>
    </div>
  );
};

export default OptionalExtras;
