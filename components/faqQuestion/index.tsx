import React from 'react';

interface FaqQuestionInterface {
  question: string;
  answer: string;
}

const FaqQuestion = ({
  question,
  answer,
}: FaqQuestionInterface): JSX.Element => {
  return (
    <details className="mb-2">
      <summary className="bg-light rounded-md p-3 mb-1 text-lg font-medium">
        {question}
      </summary>
      <p className="bg-lightest rounded-md p-3 mb-0 mx-2">{answer}</p>
    </details>
  );
};

export default FaqQuestion;
