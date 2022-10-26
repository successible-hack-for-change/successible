import type { NextPage } from 'next';
import PageLayout from '../PageLayout';
import QuestionDisplay from '../../components/questionDisplay';
import { Steps } from 'intro.js-react';
import { useState } from 'react';
// import 'intro.js/introjs.css';

const ExampleQuestion: NextPage = () => {
  const [stepsEnabled, setStepsEnabled] = useState(true);

  const initialStep = 0;

  const onExit = () => {
    setStepsEnabled(false);
  };
  const steps = [
    {
      element: '#question-title',

      intro: (
        <>
          <h3>Question number</h3>
          <p>
            This will tell you which question you are on, and how many questions
            there are in total.
          </p>
        </>
      ),
    },
    {
      element: '#timer',
      intro: (
        <>
          <h3>Timer</h3>
          <p>
            This will tell you how much time you have remaining to answer this
            question.
          </p>
        </>
      ),
    },
    {
      element: '#question',
      intro: (
        <>
          <h3>Question</h3>
          <p>Questions will display here.</p>
        </>
      ),
    },
    {
      element: '#optional-extras',
      intro: (
        <>
          <h3>Optional extras can be found here</h3>
          <p>
            Click on these buttons to display the extras available for this
            question.
          </p>
          <p>
            You do not need to use these if you do not want to, as all
            information needed to choose an answer is in question. However, some
            candidates may find these useful. The options you choose to use are
            not recorded.
          </p>
          <p>We recommend you try these out now.</p>
        </>
      ),
    },
    {
      element: '#highlights',
      intro: (
        <>
          <h3>Highlights</h3>
          <p>Click on this to see highlighted information in the question.</p>
        </>
      ),
    },
    {
      element: '#diagram',
      intro: (
        <>
          <h3>Diagram</h3>
          <p>Click on this to see a diagram for the question.</p>
        </>
      ),
    },
    {
      element: '#definitions',
      intro: (
        <>
          <h3>Definitions</h3>
          <p>
            Click on this to see definitions of some words used in the question.
          </p>
        </>
      ),
    },
    {
      element: '#answers',
      intro: (
        <>
          <h3>Answers</h3>
          <p>
            A selection of answers will be displayed here, you may only select
            one.
          </p>
        </>
      ),
    },
    {
      element: '#submit-btn',
      intro: (
        <>
          <h3>Submit button</h3>
          <p>
            Once you have selected an answer, you can submit it using this
            button.
          </p>
        </>
      ),
    },
  ];
  return (
    <div>
      <Steps
        enabled={stepsEnabled}
        steps={steps}
        initialStep={initialStep}
        onExit={onExit}
      />
      <PageLayout>
        <QuestionDisplay
          id={0}
          question="If Daves Corner Shop had 16 employees in 2020 and and 21 employees
          in 2022 what percentage increase of employees was there between 2020
          and 2022?"
          answer={'C'}
          resA={'110% increase'}
          resB={'14.7% increase'}
          resC={'31.25% increase'}
          resD={'20% increase'}
          highlight={"Sometimes I hide because I'm shy."}
          image={
            "I like to be center of attention so everything else should be closed when I'm open."
          }
          definition={"I'm just here to watch the fight."}
          timeLimit={60}
          handleSubmitOnClick={() => {}}
        />
      </PageLayout>
    </div>
  );
};

export default ExampleQuestion;
