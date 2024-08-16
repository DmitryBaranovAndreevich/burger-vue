module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
  },
  env: {
    browser: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    // "eslint:recommended",
    "@vue/typescript/recommended",
    // "plugin:prettier/recommended",
  ],
  // required to lint *.vue files
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    // allow async-await
    "generator-star-spacing": "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": 0,
    quotes: ["error", "double"],
    semi: "off",
    "comma-dangle": [2, "always-multiline"],
    "space-before-function-paren": 0,
    "vue/multi-word-component-names": "off",
  },
};
