/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  bracketSameLine: true,
  endOfLine: 'lf',
  jsxSingleQuote: true,
  printWidth: 85,
  quoteProps: 'consistent',
  semi: true,
  singleAttributePerLine: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
};

module.exports = config;
