import { H1 } from '@blueprintjs/core';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import PageLayout from '../../PageLayout';

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

const fetcher = (url: string) => {
  fetch(url).then((res) => res.json());
};

const Question: NextPage = () => {
  const router = useRouter();
  const { data, error, isValidating } = useSWR('/api/questions', fetcher);
  console.log('isValidating: ', isValidating);
  console.log('error: ', error);
  console.log('data: ', data);
  const { id } = router.query;
  const integerId = Number(id);
  const mockQuestions: Question[] = data ? data : [];
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
