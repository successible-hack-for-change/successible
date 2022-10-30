import type { NextPage } from 'next';
import { useState } from 'react';
import PageLayout from '../PageLayout';
import QuestionDisplay from '../../components/questionDisplay';
import { Steps } from 'intro.js-react';
import 'intro.js/introjs.css';
import { Alert } from '@blueprintjs/core';

const ExampleQuestion: NextPage = () => {
  const [stepsEnabled, setStepsEnabled] = useState(true);
  const [clockIsAnimated, setClockIsAnimated] = useState(true);
  const [isOverlayOpen, setIsOverlayOpen] = useState(true);

  const initialStep = 0;

  const onExit = () => {
    setStepsEnabled(false);
  };

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };

  const handleSubmitBtnClick = () => {
    setIsOverlayOpen(true);
  };

  const steps = [
    {
      element: '#question-title',

      intro: (
        <>
          <h3 className="text-center">Question number</h3>
          <p className="text-center">
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
          <h3 className="text-center">Timer</h3>
          <p className="text-center">
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
          <h3 className="text-center">Question</h3>
          <p className="text-center">Questions will display here.</p>
        </>
      ),
    },
    {
      element: '#audio-btn',
      intro: (
        <>
          <h3>Read aloud buttons</h3>
          <p>
            These buttons can be used to read the questions and answers aloud.
            If you can not hear the question when the button is clicked we
            recommend trying another browser.
          </p>
        </>
      ),
    },
    {
      element: '#optional-extras',
      intro: (
        <>
          <h3 className="text-center">Optional extras can be found here</h3>
          <p className="text-center">
            Click on these buttons to display the extras available for this
            question.
          </p>
          <p className="text-center">
            You do not need to use these if you do not want to, as all
            information needed to choose an answer is in question. However, some
            candidates may find these useful. The options you choose to use are
            not recorded.
          </p>
          <p className="text-center">We recommend you try these out now.</p>
        </>
      ),
    },
    {
      element: '#highlights',
      intro: (
        <>
          <h3 className="text-center">Highlights</h3>
          <p className="text-center">
            Click on this to see highlighted information in the question.
          </p>
        </>
      ),
    },
    {
      element: '#diagram',
      intro: (
        <>
          <h3 className="text-center">Diagram</h3>
          <p className="text-center">
            Click on this to see a diagram for the question.
          </p>
        </>
      ),
    },
    {
      element: '#definitions',
      intro: (
        <>
          <h3 className="text-center">Definitions</h3>
          <p className="text-center">
            Click on this to see definitions of some words used in the question.
          </p>
        </>
      ),
    },
    {
      element: '#answers',
      intro: (
        <>
          <h3 className="text-center">Answers</h3>
          <p className="text-center">
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
          <h3 className="text-center">Submit button</h3>
          <p className="text-center">
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
          handleSubmitOnClick={handleSubmitBtnClick}
          clockIsAnimated={clockIsAnimated}
          setClockIsAnimated={setClockIsAnimated}
          isExample={true}
        />
        <Alert
          isOpen={isOverlayOpen}
          confirmButtonText="Okay"
          onClose={handleCloseOverlay}
        >
          <p>In your real test this will take you to the break page.</p>
          <p>
            If you have read the instructions and you are ready to take your
            test, go to the Start test page.
          </p>
        </Alert>
      </PageLayout>
    </div>
  );
};

export default ExampleQuestion;
