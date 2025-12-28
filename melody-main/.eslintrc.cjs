module.exports = {
  extends: ["@vercel/eslint-config"],
  rules: {
    "tsdoc/syntax": "off",
  },
  ignorePatterns: ["jest.setup.ts"],
};
