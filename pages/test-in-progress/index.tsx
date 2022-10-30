import { useContext, useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import axios from 'axios';
import type { Question } from '../../interfaces/questionTypes';
import PageLayout from '../PageLayout';
import QuestionDisplay from '../../components/questionDisplay';
import Break from '../../components/break';
import AppContext from '../../context/AppContext';
import DelayedSpinner from '../../components/delayedSpinner';
import mockData from '../../data/questions.json';

const TestInProgress: NextPage = () => {
  const router = useRouter();
  const appContext = useContext(AppContext);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [clockIsAnimated, setClockIsAnimated] = useState<boolean>(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/')
      .then((res) => {
        setQuestions(res.data);
        setIsLoading(false);
      })
      .catch(() => {
        router.push('/error');
      });
  }, []);

  const handleSubmitOnClick = (candidateAnswer: string) => {
    axios
      .post(
        `http://127.0.0.1:8000/user/${appContext.state.userId}/postresponse`,
        {
          user: appContext.state.userId,
          questionId: questions[questionNumber].id,
          candidateAnswer,
        },
      )
      .then(() => {
        if (questionNumber === questions.length - 1) {
          axios
            .get(
              `http://127.0.0.1:8000/user/${appContext.state.userId}/postresponse`,
            )
            .then(() => router.push('/completed'))
            .catch(() => {
              router.push('/error');
            });
        } else if (questionNumber < questions.length - 1) {
          setIsSubmitted(true);
        }
      })
      .catch((error) => {
        console.log(error);
        router.push('/error');
      });
  };

  const handleContinueOnClick = () => {
    setQuestionNumber((prevState) => prevState + 1);
    setIsSubmitted(false);
  };

  if (isLoading)
    return (
      <PageLayout>
        <div>
          <DelayedSpinner />
        </div>
      </PageLayout>
    );
  return (
    <PageLayout>
      {isSubmitted ? (
        <Break handleContinueOnClick={handleContinueOnClick} />
      ) : (
        <>
          <QuestionDisplay
            id={questions[questionNumber].id}
            question={questions[questionNumber].question}
            answer={questions[questionNumber].answer}
            resA={questions[questionNumber].resA}
            resB={questions[questionNumber].resB}
            resC={questions[questionNumber].resC}
            resD={questions[questionNumber].resD}
            highlight={questions[questionNumber].highlight}
            image={questions[questionNumber].image}
            definitions={questions[questionNumber].definitions}
            timeLimit={questions[questionNumber].timeLimit}
            handleSubmitOnClick={handleSubmitOnClick}
            totalQuestions={questions.length}
            clockIsAnimated={clockIsAnimated}
            setClockIsAnimated={setClockIsAnimated}
          />
        </>
      )}
    </PageLayout>
  );
};

export default TestInProgress;
