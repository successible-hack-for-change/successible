import { NextPage } from 'next';
import { Button } from '@blueprintjs/core';

interface BreakProps {
  handleContinueOnClick: () => void;
}

const Break = ({ handleContinueOnClick }: BreakProps): JSX.Element => {
  return (
    <>
      <div>Break Page</div>
      <Button onClick={handleContinueOnClick}>Continue</Button>
    </>
  );
};

export default Break;
