import { FormEvent, useState } from 'react';
import { Radio, RadioGroup, Button } from '@blueprintjs/core';
import OptionalExtras from '../optionalExtras';
import type { Question } from '../../interfaces/questionTypes';

interface QuestionDisplayProps extends Question {
  handleSubmitOnClick: () => void;
  totalQuestions?: number;
}

const QuestionDisplay = ({
  id,
  question,
  answer,
  resA,
  resB,
  resC,
  resD,
  highlight,
  image,
  definition,
  handleSubmitOnClick,
  totalQuestions,
}: QuestionDisplayProps): JSX.Element => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const handleOnRadioClick = (event: FormEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.currentTarget.value);
  };
  return (
    <>
      <h1 className="text-center">
        {id === 0 ? 'Example question' : `Question ${id} of ${totalQuestions}`}
      </h1>
      <div className="flex gap-5 bg-light rounded-lg p-5">
        <div className="flex-1">
          <h3>Question:</h3>
          <p>{question}</p>
        </div>
        <div className="flex-1 bg-lightest rounded-lg px-3">
          <h3 className="pb-0">Answers:</h3>
          <RadioGroup
            name="Answers"
            onChange={(event) => {
              handleOnRadioClick(event);
            }}
            selectedValue={selectedAnswer}
            className="my-5 box-border"
          >
            <Radio value={'A'} label={resA} />
            <Radio value={'B'} label={resB} />
            <Radio value={'C'} label={resC} />
            <Radio value={'D'} label={resD} />
          </RadioGroup>
          <Button
            className="mb-3 !bg-accent-dark !text-white !rounded-md !shadow-md"
            type="submit"
            onClick={handleSubmitOnClick}
          >
            Submit
          </Button>
        </div>
      </div>
      <OptionalExtras
        highlightContent={highlight}
        diagramContent={image}
        definitionsContent={definition}
      />
    </>
  );
};

export default QuestionDisplay;
