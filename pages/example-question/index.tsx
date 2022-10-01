import type { NextPage } from 'next';
import PageLayout from '../PageLayout';
import OptionalExtras from '../../components/optionalExtras';
import { H1 } from '@blueprintjs/core';

const ExampleQuestion: NextPage = () => {
  return (
    <PageLayout>
      <H1>Example question page</H1>
      <p>This is where we explain how to do our test.</p>
      <OptionalExtras />
    </PageLayout>
  );
};

export default ExampleQuestion;
