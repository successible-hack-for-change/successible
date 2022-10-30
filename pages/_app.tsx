import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import AppContext from '../context/AppContext';
import { Question } from '../interfaces/questionTypes';

function MyApp({ Component, pageProps }: AppProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userId, setUserId] = useState<number>(0);
  return (
    <AppContext.Provider
      value={{
        state: { userId },
        setUserId: setUserId,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
