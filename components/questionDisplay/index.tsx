import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { Radio, RadioGroup, Button } from '@blueprintjs/core';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import OptionalExtras from '../optionalExtras';
import type { Question } from '../../interfaces/questionTypes';
import CustomButton from '../customButton';

interface QuestionDisplayProps extends Question {
  handleSubmitOnClick: () => void;
  totalQuestions?: number;
  clockIsAnimated: boolean;
  setClockIsAnimated: Dispatch<SetStateAction<boolean>>;
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
  timeLimit,
  handleSubmitOnClick,
  totalQuestions,
  clockIsAnimated,
  setClockIsAnimated,
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
        <div className="flex-1 flex justify-end items-center" id="timer">
          <Button
            onClick={() => {
              setClockIsAnimated((prevClockIsAnimated) => !prevClockIsAnimated);
            }}
            className="!p-2 !m-3 !rounded-md !shadow !bg-grey !text-black !w-32"
          >
            {clockIsAnimated ? 'Hide Animation' : 'Show Animation'}
          </Button>
          <CountdownCircleTimer
            isPlaying
            duration={timeLimit}
            colors={clockIsAnimated ? '#3c096c' : '#d9d9d9'}
            size={75}
            onComplete={() => {
              handleSubmitOnClick();
            }}
          >
            {({ remainingTime }) => {
              const minutes = Math.floor(remainingTime / 60);
              const seconds =
                remainingTime % 60 < 10
                  ? `0${remainingTime % 60}`
                  : remainingTime % 60;

              return `${minutes}:${seconds}`;
            }}
          </CountdownCircleTimer>
        </div>
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
