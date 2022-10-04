import { NextPage } from 'next';
import type { Question, SetOfQuestions } from '../../interfaces/questionTypes';
import mockData from '../../data/questions.json';
import PageLayout from '../PageLayout';
import QuestionDisplay from '../../components/questionDisplay';
import { Button } from '@blueprintjs/core';

const TestInProgress: NextPage = () => {
  // in here, do the logic for the questions, so that we can keep track of which question we are on
  const mockSetOfQuestions: SetOfQuestions = mockData;

  const mockQuestions: Question[] = mockSetOfQuestions.setOfQuestions;
  // integerId <= mockQuestions.length ?
  {
    /* Routing logic: click submit button, if id === mockQuestions.length -1, go to complete page. 
      Otherwise, go to break page
      If a user navigates to a question link that doesn't exist, show them an error page
      Need to figure out how to stop them changing the url and hence navigating back, maybe some random hash
      But that is more for the future
       */
  }
  return (
    <PageLayout>
      <QuestionDisplay
        id={mockQuestions[0].id}
        question={mockQuestions[0].question}
        answer={mockQuestions[0].answer}
        resA={mockQuestions[0].resA}
        resB={mockQuestions[0].resB}
        resC={mockQuestions[0].resC}
        resD={mockQuestions[0].resD}
        highlight={mockQuestions[0].highlight}
        image={mockQuestions[0].image}
        definition={mockQuestions[0].definition}
        timeLimit={mockQuestions[0].timeLimit}
      />
      <Button type="submit">Submit</Button>
    </PageLayout>
  );
};

export default TestInProgress;
