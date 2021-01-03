module.exports = {
  env: {
    browser: true,
    // es2021: true,
    // node: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: "module",
  },
  plugins: [
    "react",
  ],
  rules: {
    quotes: [1, "double"], // 引号类型
  },
};
