import ReactJoyride from 'react-joyride';

const Tour = (): JSX.Element | null => {
  const steps = [
    {
      content: (
        <>
          <h3>Question number</h3>
          <p>
            This will tell you what number question you are on, and how many
            questions there are in total.
          </p>
        </>
      ),
      target: '#question-title',
      disableBeacon: true,
    },
    {
      content: (
        <>
          <h3>Timer</h3>
          <p>
            This will tell you how much time you have remaining to answer this
            question.
          </p>
        </>
      ),
      target: '#timer',
    },
    {
      content: (
        <>
          <h3>Question</h3>
          <p>Questions will display here.</p>
        </>
      ),
      target: '#question',
    },
    {
      content: (
        <>
          <h3>Optional extras can be found here</h3>
          <p>
            Click on these buttons to display the extras avaliable for this
            question.
          </p>
          <p>
            You do not need to use these if you do not want to, as all
            information needed to answer the question is in the question.
            However, some candidates may find these useful. Which (if any) of
            the options you choose to use is not recorded.
          </p>
          <p>We reccomend you try these out now.</p>
        </>
      ),
      target: '#optional-extras',
    },
    {
      content: (
        <>
          <h3>Highlights</h3>
          <p>Click on this to see highlighted information in the question.</p>
        </>
      ),
      target: '#highlights',
    },
    {
      content: (
        <>
          <h3>Diagram</h3>
          <p>Click on this to see a diagram for the question.</p>
        </>
      ),
      target: '#diagram',
    },
    {
      content: (
        <>
          <h3>Definitions</h3>
          <p>Click on this to see definitions of some words.</p>
        </>
      ),
      target: '#definitions',
    },
    {
      content: (
        <>
          <h3>Answers</h3>
          <p>
            A selection of answers will be displayed here, you may only select
            one.
          </p>
        </>
      ),
      target: '#answers',
    },
    {
      content: (
        <>
          <h3>Submit button</h3>
          <p>
            Once you have selected an answer, you can submit it using this
            button.
          </p>
        </>
      ),
      target: '#submit-btn',
    },
  ];

  return (
    <ReactJoyride
      steps={steps}
      showProgress
      continuous
      disableOverlayClose
      run
    />
  );
};

export default Tour;