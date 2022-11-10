# Successible

This is team Successible's front end repo for the Bright Network Technology Academy Hack for Change 2022.
Our idea is to provide automated pre-employment tests with an emphasis on accessibility for all. We aim to level the playing field for everyone by providing an equal opportunity of employment regardless of background, neurodiversity, or additional requirements.

In practice, this means that we provide unlimited breaks between questions, which allows candidates to take as much time as they need to before attempting the next question. We also provide a range of optional extras which allow candidates to view the questions in the way that works best for them. We do not require candidates to declare if they have used any optional extras, and nor do we record this information to share with employers. Our optional extras are:

- Highlights for candidates who struggle to interpret large pieces of text
- Diagrams for candidates who prefer to interpret questions visually
- Definitions for candidates who may not have English as their first language
- Visual aids for candidates who find rulers or colour filters helpful for reading
- An audio narrator for candidates who prefer to interpret questions by listening
- Text zoom inbuilt in the test page so candidates can easily change text size

Outside of the test itself, we provide candidates with an example question that comes with a tour. This allows candidates to explore all of the options available to them before they start the test, meaning that they can think about which optional extras will work for them in advance. There is also an instructions page and an FAQ page to provide candidates with all the information they need to be able to take our tests successfully.

## Tech stack

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). We are also using [TypeScript](https://www.typescriptlang.org/docs/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), [Blueprint](https://blueprintjs.com/docs/) and [Tailwind CSS](https://tailwindcss.com/). We have deployed our frontend application to Vercel, with our production app available to view [here](https://successible.vercel.app/).

## Getting Started

First, make sure you have installed Node version 18.9.1 on your machine.

Next, clone our repo and make sure you are on the main branch:

```bash
git clone https://github.com/successible-hack-for-change/successible.git
git checkout main
```

Following that, you need to install the project dependencies using either npm or yarn:

```bash
npm install
# or
yarn
```

Now you are ready to run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. This setup will send requests to our backend service hosted on GCP, for which you can see the source code [here](https://github.com/successible-hack-for-change/gcp-successible-api). If you would like to fully experience our test, you will need to use one of the following access codes on the start test page: 'test', 'demo', 'nKNjpC4P', or '9k8ZE6g8'.

## Local Integration

Alternatively, if you would like to connect with our backend service locally, follow the setup instructions for our local backend service [here](https://github.com/successible-hack-for-change/Successible-Api) using the "demo" branch, and change the host in the axios requests from "https://successible-api-nqnaexycua-nw.a.run.app" to "http://localhost:8000".

## Useful Scripts

To run our unit tests and produce a coverage report, use:

```bash
npm run test:withCoverage
# or
yarn test:withCoverage
```

To check your formatting with Prettier, use:

```bash
npm run format:check
# or
yarn format:check
```

To fix your formatting with Prettier, use:

```bash
npm run format:fix
# or
yarn format:fix
```

To run eslint, use the pre-built next script:

```bash
next lint
# or
yarn lint
```

To run a type check on the codebase, use:

```bash
npm run ts:check
# or
yarn ts:check
```

**Note:** We use Husky for pre-commit hooks, which will run eslint, Prettier and type checking. Commits will fail if any of these three scripts fail.
