interface Question {
  id: number;
  question: string;
  answer: string;
  resA: string;
  resB: string;
  resC: string;
  resD: string;
  highlight: string;
  image: string;
  definitions: string;
  timeLimit: number;
}

interface SetOfQuestions {
  setOfQuestions: Question[];
}

export type { Question, SetOfQuestions };
