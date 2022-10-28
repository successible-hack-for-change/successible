import { useContext, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import type { Question } from '../../interfaces/questionTypes';
import PageLayout from '../PageLayout';
import QuestionDisplay from '../../components/questionDisplay';
import Break from '../../components/break';
import QuestionContext from '../../context/QuestionContext';

const TestInProgress: NextPage = () => {
  const router = useRouter();
  const questionContext = useContext(QuestionContext);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [clockIsAnimated, setClockIsAnimated] = useState(true);

  const questions: Question[] = questionContext.state.setOfQuestions;

  const handleSubmitOnClick = () => {
    if (questionNumber === questions.length - 1) {
      router.push('/completed');
    } else if (questionNumber < questions.length - 1) {
      setIsSubmitted(true);
    }
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
