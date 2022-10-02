import type { NextPage } from 'next';
import PageLayout from '../PageLayout';
import { Callout } from '@blueprintjs/core';

const Instructions: NextPage = () => {
  return (
    <PageLayout>
      <div className="max-w-4xl flex-col justify-center mx-auto">
        <h1 className="text-center">Instructions</h1>
        <Callout title="Important!" className="mb-4 !bg-lightest">
          Successible tests may be a little different to those you have taken
          before, so please read these instructions carefully and complete the
          example question before begining your test.
        </Callout>
        <p>
          After you have read the instructions and completed the example
          question, you can click the “Start test” button at the top of the
          page. On this page, you will be asked to enter your full name, email
          address, and the entry code that was emailed to you on your invitation
          to the test. Please take the time to make sure these details are
          correct.
        </p>
        <p>
          When you click the “Start test” button, you may see a loading screen
          while we retrieve your questions. Don&#39;t worry, your question timer
          will not start until your first question has loaded.
        </p>
        <p>
          When your first question loads, your timer will begin. You can see
          your remaining time in the top right corner of the page. On the page
          you will see the question on the left, and the multiple choice answers
          on the right. To answer you will be able to click on one of the
          answers and then press the submit button. All questions and answers
          have the option to be read aloud if you click on the sound icon.
        </p>
        <p>
          Below the questions and answers, you will see some “Optional extras”.
          None of this information is vital to answering the question, but may
          help you to interpret it. The exact options you can see may depend on
          the question, but it might include a diagram, definitions of some
          words in the question, or a highlights section that pulls out
          important information from the question.
        </p>
        <p>
          After you have submitted your question your answer will be logged and
          you will be taken to a “break” page before your next question. This
          page is not timed and you may take as long as you like before
          beginning your next question.
        </p>
        <p>
          After completing your final question you will see a page confirming
          there are no further questions, and then you can close the page, no
          further action is required.
        </p>
      </div>
    </PageLayout>
  );
};

export default Instructions;
