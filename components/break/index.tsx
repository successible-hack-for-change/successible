import { Button } from '@blueprintjs/core';

interface BreakProps {
  handleContinueOnClick: () => void;
}

const Break = ({ handleContinueOnClick }: BreakProps): JSX.Element => {
  return (
    <>
      <h1>Break Page</h1>
      <Button onClick={handleContinueOnClick}>Continue</Button>
    </>
  );
};

export default Break;
