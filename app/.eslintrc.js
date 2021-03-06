module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "standard"
  ],
  globals: {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  parserOptions: {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  plugins: [
    "vue"
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": ["warn", 2],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
