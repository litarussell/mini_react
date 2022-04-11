module.exports = {
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
    'new-cap': ['error', { newIsCap: false }],
  },
}
