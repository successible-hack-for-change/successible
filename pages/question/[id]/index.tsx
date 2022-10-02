import { H1 } from '@blueprintjs/core';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import PageLayout from '../../PageLayout';

const Question: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <PageLayout>
      <H1>Question {id}</H1>
    </PageLayout>
  );
};

export default Question;
