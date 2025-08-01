/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  semi: true,
  singleQuote: true,
  trailingComma: "all",
  tabWidth: 2,
  printWidth: 100,
  endOfLine: "lf",
};

export default config;
