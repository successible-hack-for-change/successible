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
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

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
          <p className="text-center">
            You can turn off the animation if you find it distracting.
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
          <h3 className="text-center">Read aloud buttons</h3>
          <p className="text-center">
            These buttons can be used to read the questions and answers aloud.
            If you cannot hear the question when the button is clicked we
            recommend trying another browser.
          </p>
        </>
      ),
    },
    {
      element: '#zoom-buttons',
      intro: (
        <>
          <h3 className="text-center">Text size buttons</h3>
          <p className="text-center">
            These buttons can be used to increase, decrease, and reset text
            size.
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
      element: '#visual-aids',
      intro: (
        <>
          <h3 className="text-center">Visuals aids</h3>
          <p className="text-center">
            Click on this to see options that may make the screen easier for you
            to read.
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
    {
      element: '#faq-link',
      intro: (
        <>
          <h3 className="text-center">FAQ page</h3>
          <p className="text-center">
            If you want more information, feel free to visit our Frequently
            Asked Questions page.
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
          question="I went to bed at 8 o'clock in the evening. I wound up my watch and set the alarm to sound at 9 o'clock in the morning. How many hours of sleep would I get before being awoken by the alarm?"
          answer={'C'}
          resA={'12 hours'}
          resB={'13 hours'}
          resC={'1 hour'}
          resD={'10 hours'}
          highlight={'Bed at 8pm, alarm at 9am'}
          image={'/time-change.png'}
          definitions={'Awoken - To stop sleeping or wake from sleep'}
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
