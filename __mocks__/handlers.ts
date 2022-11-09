import { rest } from 'msw';

export const handlers = [
  // Handles a POST /users request
  rest.post(
    'https://successible-api-nqnaexycua-nw.a.run.app/users',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          id: 1,
          username: 'testuser@email.com',
          email: 'testuser@email.com',
          score: 0,
          accessCode: 'demo',
        }),
      );
    },
  ),

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
