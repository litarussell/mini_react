/* eslint-env node */
module.exports = {
  // parser: '@typescript-eslint/parser',
  // plugins: [
  //   '@typescript-eslint',
  // ],
  globals: {},
  extends: [
    '@litarussell/eslint-config-ts',
  ],
  overrides: [
    {
      files: ['*.test.tsx'],
      rules: {
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            varsIgnorePattern: 'createElement',
          },
        ],
      },
    },
  ],

  rules: {
    'no-console': 'warn',
  },
}
