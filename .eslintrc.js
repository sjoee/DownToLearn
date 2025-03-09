module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "next/core-web-vitals", "prettier"],
  rules: {
    "react/no-unescaped-entities": "off", // Disable this rule
    "@next/next/no-page-custom-font": "off", // Disable this rule
    "@typescript-eslint/no-unused-vars": "off", // Disable unused vars rule for all files
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", ["parent", "sibling"]],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "next/core-web-vitals", 
        "prettier",
      ],
      rules: {
        "@typescript-eslint/no-unused-vars": "off", // Disable unused vars check for TypeScript files
      },
    },
  ],
};
