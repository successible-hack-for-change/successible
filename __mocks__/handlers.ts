import { rest } from 'msw';

export const handlers = [
  // Handles a POST /users request
  rest.post('/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        //some correct information
      }),
    );
  }),

  // Handles a GET / request
  rest.get('/', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        //some questions
      }),
    );
  }),
];
