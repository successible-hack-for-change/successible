import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import AppContext from '../context/AppContext';

function MyApp({ Component, pageProps }: AppProps) {
  const [userId, setUserId] = useState<number>(0);
  const [accessCode, setAccessCode] = useState<string>('');
  const [accessCodeRecognised, setAccessCodeRecognised] = useState(true);

  return (
    <AppContext.Provider
      value={{
        state: { userId, accessCode, accessCodeRecognised },
        setUserId,
        setAccessCode,
        setAccessCodeRecognised,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
