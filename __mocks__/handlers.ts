import { rest } from 'msw';
import { questionSet } from '../data/questions';

export const handlers = [
  rest.get('/api/questions', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(questionSet));
  }),
];
