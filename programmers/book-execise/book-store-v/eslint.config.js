import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['_output'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      indent: ['error', 2],
      'no-trailing-spaces': 'error',
      curly: 'error',
      'brace-style': 'error',
      'no-multi-spaces': 'error',
      'space-infix-ops': 'error',
      'space-unary-ops': 'error',
      'no-whitespace-before-property': 'error',
      'func-call-spacing': 'error',
      'space-before-blocks': 'error',
      'keyword-spacing': ['error', { before: true, after: true }],
      'comma-spacing': ['error', { before: false, after: true }],
      'comma-style': ['error', 'last'],
      'comma-dangle': ['error', 'always-multiline'],
      'space-in-parens': ['error', 'never'],
      'block-spacing': 'error',
      'array-bracket-spacing': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'key-spacing': ['error', { mode: 'strict' }],
      'arrow-spacing': ['error', { before: true, after: true }],
    },
  },
)
