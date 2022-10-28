import { createContext, Dispatch, SetStateAction } from 'react';
import mockData from '../data/questions.json';
import { Question } from '../interfaces/questionTypes';

interface QuestionContextType {
  state: { setOfQuestions: Question[] };
  setQuestions: Dispatch<SetStateAction<Question[]>> | (() => void);
}

const QuestionContext = createContext<QuestionContextType>({
  state: { setOfQuestions: mockData.setOfQuestions },
  setQuestions: () => {},
});

export default QuestionContext;
