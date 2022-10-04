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
    </>
  );
};

export default QuestionDisplay;
