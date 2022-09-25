const path = require('path');

const buildEslintCommand = (filenames) => [
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`,
  `npm run format:fix`,
];

module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'npm run ts:check',

  // Lint & Prettify TS and JS files
  '**/*.(ts|tsx|js)': [buildEslintCommand],
};
