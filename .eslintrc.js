module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: ['warn', 'single'],
    indent: ['warn', 2],
    semi: ['error', 'always'],
    ignoreComments: true,
    ignoreUrls: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
        'jsx': true
    }
  }
}
