import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import QuestionContext from '../context/QuestionContext';
import { Question } from '../interfaces/questionTypes';

function MyApp({ Component, pageProps }: AppProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  return (
    <QuestionContext.Provider
      value={{
        state: { setOfQuestions: questions },
        setQuestions: setQuestions,
      }}
    >
      <Component {...pageProps} />
    </QuestionContext.Provider>
  );
}

export default MyApp;
