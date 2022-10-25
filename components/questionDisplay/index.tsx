import { FormEvent, useState } from 'react';
import { Radio, RadioGroup, Button, Icon } from '@blueprintjs/core';
import OptionalExtras from '../optionalExtras';
import type { Question } from '../../interfaces/questionTypes';
import CustomButton from '../customButton';

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
  const [colorFilterSelected, setColorFilterSelected] = useState('none');

  const handleOnRadioClick = (event: FormEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.currentTarget.value);
  };

  const retrieveColorFilterSelected = (color: string) => {
    setColorFilterSelected(color);
    console.log(color);
  };

  return (
    <div
      className={`p-4 max-w-4xl flex-col justify-center mx-auto ${
        colorFilterSelected !== 'none' && `bg-${colorFilterSelected}`
      }`}
    >
      <div className="flex flex-row items-center">
        <div className="flex-1" />
        <h1 className=" flex-2 text-center" id="question-title">
          {id === 0 ? 'Question 1 of 1' : `Question ${id} of ${totalQuestions}`}
        </h1>
        <h3 className="flex-1 flex justify-end items-center" id="timer">
          <Icon icon="time" size={30} />
          <span className="pl-3">4:00</span>
        </h3>
      </div>
      <div
        className={`flex gap-5 rounded-lg p-5 ${
          colorFilterSelected === 'none' ? 'bg-light' : 'border'
        }`}
      >
        <div className="flex-1" id="question">
          <h3 id="heading-id">Question:</h3>
          <p>{question}</p>
        </div>
        <div
          className={`flex-1 rounded-lg px-3 ${
            colorFilterSelected === 'none' ? 'bg-lightest' : 'border'
          }`}
          id="answers"
        >
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
          <CustomButton
            type="submit"
            onClick={handleSubmitOnClick}
            id="submit-btn"
            title="Submit"
            noColor={colorFilterSelected !== 'none' ? true : false}
          />
        </div>
      </div>
      <OptionalExtras
        highlightContent={highlight}
        diagramContent={image}
        definitionsContent={definition}
        retrieveColorFilterSelected={retrieveColorFilterSelected}
      />
    </div>
  );
};

export default QuestionDisplay;
