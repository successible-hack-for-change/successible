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

  // Handles a GET /questions request
  rest.get(
    'https://successible-api-nqnaexycua-nw.a.run.app/questions',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 1,
            question:
              'If Daves Corner Shop had 16 employees in 2020 and and 21 employees in 2022 what percentage increase of employees was there between 2020 and 2022?',
            answer: '31.25% increase',
            resA: '100% increase',
            resB: '14.7% increase',
            resC: '31.25% increase',
            resD: '20% increase',
            highlight: 'highlights',
            image: 'imageLink',
            definitions: 'definition',
            timeLimit: 120,
          },
          {
            id: 2,
            question:
              "If Issy's Corner Shop had 16 employees in 2020 and and 21 employees in 2022 what percentage increase of employees was there between 2020 and 2022?",
            answer: '31.25% increase',
            resA: '100% increase',
            resB: '14.7% increase',
            resC: '31.25% increase',
            resD: '20% increase',
            highlight: 'highlights',
            image: 'imageLink',
            definitions: 'definition',
            timeLimit: 90,
          },
        ]),
      );
    },
  ),

  // Handles a POST to /postresponse
  rest.post(
    'https://successible-api-nqnaexycua-nw.a.run.app/user/1/postresponse',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          id: 1,
          user: 1,
          questionId: 1,
          candidateAnswer: 'None',
          correct: false,
        }),
      );
    },
  ),

  // Handles a GETT to /postresponse
  rest.get(
    'https://successible-api-nqnaexycua-nw.a.run.app/user/1/postresponse',
    (req, res, ctx) => {
      return res(ctx.status(200));
    },
  ),
];
