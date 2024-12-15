module.exports = {
  extends: ["expo", "plugin:prettier/recommended"],
  ignorePatterns: ["/dist/*"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: true,
        singleQuote: false,
        trailingComma: "es5",
        printWidth: 80,
        tabWidth: 2,
        bracketSpacing: true,
        jsxBracketSameLine: false,
        useTabs: false,
      },
    ],
  },
};
