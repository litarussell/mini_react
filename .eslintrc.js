/* eslint-env node */
module.exports = {
  // parser: '@typescript-eslint/parser',
  // plugins: [
  //   '@typescript-eslint',
  // ],
  extends: [
    '@litarussell/eslint-config-ts',
  ],

  rules: {
    // 'no-unused-vars': [
    //   'error',
    //   { varsIgnorePattern: '.*', args: 'none' }
    // ],
    'no-console': 'warn',
    // "no-undef": [
    //   'error',
    //   {
    //     "typeof": true
    //   }
    // ]

    // "no-global-assign": [
    //   "error",
    //   {
    //     "exceptions": ["Object"]
    //   }
    // ],
  },
}
