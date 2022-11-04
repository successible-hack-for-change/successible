import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { Radio, RadioGroup, Button, Icon } from '@blueprintjs/core';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import OptionalExtras from '../optionalExtras';
import type { Question } from '../../interfaces/questionTypes';
import CustomButton from '../customButton';
import SpeechButton from '../speechButton';

interface QuestionDisplayProps extends Question {
  handleSubmitOnClick: (candidateAnswer: string) => void;
  totalQuestions?: number;
  clockIsAnimated: boolean;
  setClockIsAnimated: Dispatch<SetStateAction<boolean>>;
  isExample?: boolean;
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
  definitions,
  timeLimit,
  handleSubmitOnClick,
  totalQuestions,
  clockIsAnimated,
  setClockIsAnimated,
  isExample,
}: QuestionDisplayProps): JSX.Element => {
  const [selectedAnswer, setSelectedAnswer] = useState('None');
  const [colorFilterSelected, setColorFilterSelected] = useState('none');
  const [fontSize, setFontSize] = useState(1);

  const handleOnPlusClick = (oldSize: number) => {
    setFontSize(oldSize + 0.25);
  };

  const handleOnMinusClick = (oldSize: number) => {
    setFontSize(oldSize - 0.25);
  };

  const handleOnResetClick = () => {
    setFontSize(1);
  };

  const handleOnRadioClick = (event: FormEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.currentTarget.value);
  };

  const retrieveColorFilterSelected = (color: string) => {
    setColorFilterSelected(color);
  };

  return (
    <div
      className={`p-4 max-w-4xl flex-col justify-center mx-auto ${
        colorFilterSelected === 'yellow' && 'bg-yellow'
      } ${colorFilterSelected === 'blue' && 'bg-blue'}`}
    >
      <div className="flex flex-row py-3 items-center">
        <div className="flex-1" />
        <h1 className=" flex-2 text-center" id="question-title">
          {id === 0 ? 'Question 1 of 1' : `Question ${id} of ${totalQuestions}`}
        </h1>
        <div className="flex-1 flex justify-end items-center" id="timer">
          <Button
            onClick={() => {
              setClockIsAnimated((prevClockIsAnimated) => !prevClockIsAnimated);
            }}
            className="!w-20 !p-1 !m-3 !rounded-md !shadow !bg-grey-lightest !border !border-solid !border-grey-dark !text-black !text-xs !text-center"
          >
            {clockIsAnimated ? 'Hide animation' : 'Show animation'}
          </Button>
          <CountdownCircleTimer
            isPlaying
            duration={timeLimit}
            colors={clockIsAnimated ? '#3c096c' : '#d9d9d9'}
            size={75}
            onComplete={() => {
              if (!isExample) {
                handleSubmitOnClick(selectedAnswer);
              }
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
        <div className="flex-1 relative pb-10" id="question">
          <h3 id="heading-id">Question:</h3>
          <p style={{ fontSize: `${fontSize}rem` }}>{question}</p>
          <SpeechButton alwaysDisplay={isExample} textToSpeak={question} />
          <div className="absolute bottom-0" id="zoom-buttons">
            <Button
              onClick={() => handleOnMinusClick(fontSize)}
              className="!w-8 !h-8 !rounded-l-md !rounded-r-none !shadow !bg-grey-lightest !border !border-solid !border-grey-dark"
              disabled={fontSize < 0.75 && true}
            >
              <Icon icon="zoom-out" color="grey-dark" />
            </Button>
            <Button
              onClick={handleOnResetClick}
              className="!w-8 !h-8 !rounded-none !shadow !bg-grey-lightest !border !border-solid !border-grey-dark"
            >
              <Icon icon="reset" color="grey-dark" />
            </Button>
            <Button
              onClick={() => handleOnPlusClick(fontSize)}
              className="!w-8 !h-8 !rounded-r-md !rounded-l-none !shadow !bg-grey-lightest !border !border-solid !border-grey-dark"
              disabled={fontSize > 2.5 && true}
            >
              <Icon icon="zoom-in" color="grey-dark" />
            </Button>
          </div>
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
            <Radio
              value={'A'}
              label={resA}
              className="flex flex-row items-center mb-2"
              style={{ fontSize: `${fontSize}rem` }}
            >
              <SpeechButton textToSpeak={resA} answerButton />
            </Radio>
            <Radio
              value={'B'}
              label={resB}
              className="flex flex-row items-center mb-2"
              style={{ fontSize: `${fontSize}rem` }}
            >
              <SpeechButton textToSpeak={resB} answerButton />
            </Radio>
            <Radio
              value={'C'}
              label={resC}
              className="flex flex-row items-center mb-2"
              style={{ fontSize: `${fontSize}rem` }}
            >
              <SpeechButton textToSpeak={resC} answerButton />
            </Radio>
            <Radio
              value={'D'}
              label={resD}
              className="flex flex-row items-center mb-2"
              style={{ fontSize: `${fontSize}rem` }}
            >
              <SpeechButton textToSpeak={resD} answerButton />
            </Radio>
          </RadioGroup>
          <CustomButton
            type="submit"
            onClick={() => {
              handleSubmitOnClick(selectedAnswer);
            }}
            id="submit-btn"
            title="Submit"
            noColor={colorFilterSelected !== 'none' ? true : false}
          />
        </div>
      </div>
      <OptionalExtras
        highlightContent={highlight}
        diagramContent={image}
        definitionsContent={definitions}
        retrieveColorFilterSelected={retrieveColorFilterSelected}
      />
    </div>
  );
};

export default QuestionDisplay;
