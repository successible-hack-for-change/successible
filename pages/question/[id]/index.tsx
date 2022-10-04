import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import PageLayout from '../../PageLayout';
import type {
  Question,
  SetOfQuestions,
} from '../../../interfaces/questionTypes';
import mockData from '../../../data/questions.json';

const QuestionPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const integerId = Number(id);

  // replace this with a call to the API in future
  const mockSetOfQuestions: SetOfQuestions = mockData;

  const mockQuestions: Question[] = mockSetOfQuestions.setOfQuestions;
  return (
    <PageLayout>
      {integerId <= mockQuestions.length ? (
        <>
          <h1>Question {id}</h1>
          <p>{mockQuestions[integerId - 1].question}</p>
        </>
      ) : (
        <h1>There is no question {id}</h1>
      )}
      {/* Routing logic: click submit button, if id === mockQuestions.length -1, go to complete page. 
      Otherwise, go to break page
      If a user navigates to a question link that doesn't exist, show them an error page
      Need to figure out how to stop them changing the url and hence navigating back, maybe some random hash
      But that is more for the future
       */}
    </PageLayout>
  );
};

export default QuestionPage;
