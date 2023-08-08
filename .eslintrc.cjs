module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json", "./tsconfig.node.json", "./postcss.config.js"],
  },
  settings: {
    tailwindcss: {
      config: "./tailwind.config.js",
    },
  },
  ignorePatterns: [".eslintrc.cjs", "vite.config.ts"],
  plugins: ["@typescript-eslint", "react", "prettier"],
  rules: {
    "react/react-in-jsx-scope": 0,
  },
};
