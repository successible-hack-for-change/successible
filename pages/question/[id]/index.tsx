import { H1 } from '@blueprintjs/core';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import PageLayout from '../../PageLayout';
import mockData from '../../../data/questions.json';

interface Question {
  id: number;
  question: string;
  answer: string;
  resA: string;
  resB: string;
  resC: string;
  resD: string;
  highlight: string;
  image: string;
  timeLimit: number;
}

const Question: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const integerId = Number(id);
  const mockQuestions: Question[] = mockData.questionSet;
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
