import { NextApiResponse, NextApiRequest } from 'next';
import { questionSet } from '../../data/questions';

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
  timeLimit: number;
}

const handler = (_req: NextApiRequest, res: NextApiResponse<Question[]>) => {
  return res.status(200).json(questionSet);
};

export default handler;
