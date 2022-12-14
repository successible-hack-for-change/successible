import type { NextPage } from 'next';
import PageLayout from '../PageLayout';
import { Callout } from '@blueprintjs/core';
import LineHeading from '../../components/lineHeading';
import Link from 'next/link';

const Instructions: NextPage = () => {
  return (
    <PageLayout>
      <div className="p-4 max-w-4xl flex-col justify-center mx-auto">
        <h1 className="text-center">Instructions</h1>
        <Callout title="Important!" className="mb-4 !bg-accent-light">
          Successible tests may be a little different to those you have taken
          before, so please read these instructions carefully and complete the
          example question before beginning your test. For further information,
          visit our FAQ page{' '}
          <span className="!text-link !underline">
            <Link href="/faqs">here</Link>
          </span>
          .
        </Callout>
        <LineHeading title="Starting your test" />
        <p>
          After you have read the instructions and completed the example
          question, you can click the “Start test” button at the top of the
          page. On this page, you will be asked to enter your full name, email
          address, and the entry code that was emailed to you on your invitation
          to take the test. Please take the time to make sure these details are
          correct.
        </p>
        <p>
          When you click the “Start test” button, you may see a loading screen
          while we retrieve your questions. Don&apos;t worry, your question
          timer will not start until your first question has loaded.
        </p>
        <LineHeading title="During your test" />
        <p>
          When your first question loads, your timer will begin. You will see
          the question, answers, submit button, timer, and optional extras laid
          out exactly how they are in the example question, so please make sure
          you have taken the time to familiarise yourself with the layout of the
          example question.
        </p>
        <p>
          After you have submitted your response your answer will be logged and
          you will be taken to a “break” page before your next question. This
          page is not timed and you may take as long as you like before
          beginning your next question.
        </p>
        <LineHeading title="After your test" />
        <p>
          After completing your final question you will see a page confirming
          there are no further questions. You can then close the page as no
          further action is required.
        </p>
      </div>
    </PageLayout>
  );
};

export default Instructions;
