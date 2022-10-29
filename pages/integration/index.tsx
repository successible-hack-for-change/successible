import { Button } from '@blueprintjs/core';
import { useState } from 'react';
import type { NextPage } from 'next';
import axios from 'axios';
import PageLayout from '../PageLayout';
import { Question } from '../../interfaces/questionTypes';

const Integration: NextPage = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const onQuestionClick = () => {
    console.log('API call button clicked');
    axios
      .get('http://127.0.0.1:8000/')
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((err) => console.log(err));
  };
  const onUserClick = () => {
    console.log('Register user button clicked');
    axios
      .post('http://127.0.0.1:8000/users', {
        username: 'Beth2',
        email: 'beth2@beth.com',
      })
      .then((res) => {
        console.log('Post response: ', res);
        console.log('The userId is: ', res.data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onSubmitClick = () => {
    console.log('Submit button clicked');
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
        <Button onClick={() => onQuestionClick()}>Click to call API</Button>
        <Button onClick={() => onUserClick()}>Click to register a user</Button>
        <Button onClick={() => onSubmitClick()}>
          Click to submit an answer
        </Button>
      </>
    </PageLayout>
  );
};

export default Integration;
