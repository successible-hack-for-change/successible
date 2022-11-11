import { useEffect, useState } from 'react';
import { Spinner } from '@blueprintjs/core';

const DelayedSpinner = (): JSX.Element => {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    // delay showing the spinner for short loading times
    const timer = setTimeout(() => setShowSpinner(true), 750);

    return () => clearTimeout(timer);
  });

  if (showSpinner) return <Spinner intent="primary" className="pt-24" />;
  return <></>;
};

export default DelayedSpinner;
