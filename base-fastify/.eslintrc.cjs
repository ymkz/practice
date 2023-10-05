/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['unused-imports'],
  rules: {
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
        pathGroups: [{ pattern: '~/**', group: 'external', position: 'after' }],
      },
    ],
    'import/newline-after-import': 'error',
    'unused-imports/no-unused-imports': 'error',
  },
  overrides: [
    {
      files: ['instrumentation.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
}
