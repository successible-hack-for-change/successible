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
  definition: string;
  timeLimit: number;
}

interface SetOfQuestions {
  id: string;
  setOfQuestions: Question[];
  maxScore: number;
  highlightSwitch: boolean;
  imageSwitch: boolean;
  definitionSwitch: boolean;
}

export type { Question, SetOfQuestions };
