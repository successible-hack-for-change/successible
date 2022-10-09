import { Radio, RadioGroup } from '@blueprintjs/core';
import type { Question } from '../../interfaces/questionTypes';

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
}: Question): JSX.Element => {
  return (
    <>
      <h1>Question {id}</h1>
      <p>{question}</p>
      <RadioGroup onChange={() => {}}>
        <Radio value={'A'} label={resA} />
        <Radio value={'B'} label={resB} />
        <Radio value={'C'} label={resC} />
        <Radio value={'D'} label={resD} />
      </RadioGroup>
    </>
  );
};

export default QuestionDisplay;
