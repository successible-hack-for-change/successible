import { H1 } from '@blueprintjs/core';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import PageLayout from '../../PageLayout';

const mockQuestions = [
  {
    id: 1,
    question: 'Hello, world?',
    answer: 'Hi',
    resA: 'Hey',
    resB: 'Hi',
    resC: 'Hello',
    resD: 'Hiya',
    highlight: 'Hello',
    image: 'imageLink',
    timeLimit: 60,
  },
];

const Question: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const integerId = Number(id);

  return (
    <PageLayout>
      {integerId <= mockQuestions.length ? (
        <>
          <H1>Question {id}</H1>
          <p>{mockQuestions[integerId - 1].question}</p>
        </>
      ) : (
        <H1>There is no question {id}</H1>
      )}
    </PageLayout>
  );
};

export default Question;
