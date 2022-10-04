import { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Button } from '@blueprintjs/core';
import type { Question, SetOfQuestions } from '../../interfaces/questionTypes';
import mockData from '../../data/questions.json';
import PageLayout from '../PageLayout';
import QuestionDisplay from '../../components/questionDisplay';
import Break from '../../components/break';

const TestInProgress: NextPage = () => {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);

  const mockSetOfQuestions: SetOfQuestions = mockData;
  const mockQuestions: Question[] = mockSetOfQuestions.setOfQuestions;

  const handleSubmitOnClick = () => {
    if (questionNumber === mockQuestions.length - 1) {
      router.push('/completed');
    }
    setIsSubmitted(true);
  };

  const handleContinueOnClick = () => {
    setQuestionNumber((prevState) => prevState + 1);
    setIsSubmitted(false);
  };

  return (
    <PageLayout>
      {isSubmitted ? (
        <Break handleContinueOnClick={handleContinueOnClick} />
      ) : (
        <>
          <QuestionDisplay
            id={mockQuestions[questionNumber].id}
            question={mockQuestions[questionNumber].question}
            answer={mockQuestions[questionNumber].answer}
            resA={mockQuestions[questionNumber].resA}
            resB={mockQuestions[questionNumber].resB}
            resC={mockQuestions[questionNumber].resC}
            resD={mockQuestions[questionNumber].resD}
            highlight={mockQuestions[questionNumber].highlight}
            image={mockQuestions[questionNumber].image}
            definition={mockQuestions[questionNumber].definition}
            timeLimit={mockQuestions[questionNumber].timeLimit}
          />
          <Button type="submit" onClick={handleSubmitOnClick}>
            Submit
          </Button>
        </>
      )}
    </PageLayout>
  );
};

export default TestInProgress;
