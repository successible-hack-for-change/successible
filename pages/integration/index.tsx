import { Button } from '@blueprintjs/core';
import { useState } from 'react';
import type { NextPage } from 'next';
import axios from 'axios';
import PageLayout from '../PageLayout';
import { Question } from '../../interfaces/questionTypes';

const Integration: NextPage = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const onClick = () => {
    console.log('API call button clicked');
    axios
      .get('http://127.0.0.1:8000/')
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <PageLayout>
      <>
        <h1>Testing Integration</h1>
        {questions.length < 1
          ? 'No API call yet'
          : questions.map((q) => {
              return <div key={q.id}>{q.question}</div>;
            })}
        <Button onClick={() => onClick()}>Click to call API</Button>
      </>
    </PageLayout>
  );
};

export default Integration;
