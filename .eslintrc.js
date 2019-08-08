module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [],
  'rules': {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never', {'beforeStatementContinuationChars': 'always'}],
    'no-extra-semi': 'off',
    'no-console': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'warn',
    'comma-dangle': ['error', 'always-multiline'],
    'no-multi-spaces': 'error',
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', {'anonymous': 'never', 'named': 'never', 'asyncArrow': 'always'}],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': ['error', 'always', {'exceptions': ['*']}],
  },
}

