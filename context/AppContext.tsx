import { createContext, Dispatch, SetStateAction } from 'react';
import mockData from '../data/questions.json';
import { Question } from '../interfaces/questionTypes';

interface AppContextType {
  state: { setOfQuestions: Question[]; userId: number };
  setQuestions: Dispatch<SetStateAction<Question[]>> | (() => void);
  setUserId: Dispatch<SetStateAction<number>> | (() => void);
}

const AppContext = createContext<AppContextType>({
  state: { setOfQuestions: mockData.setOfQuestions, userId: 0 },
  setQuestions: () => {},
  setUserId: () => {},
});

export default AppContext;
