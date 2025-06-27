/** @type {import('prettier').Config} */
const config = {
  plugins: [
    'prettier-plugin-tailwindcss', // must be loaded last
  ],
  tailwindStylesheet: './src/app/globals.css',
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  quoteProps: 'consistent',
  parser: 'babel-ts',
  overrides: [
    {
      files: '*.css',
      options: {
        parser: 'css',
      },
    }
  ]
};

export default config;
