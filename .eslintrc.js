module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    "node": true
  },
  'extends': [
    'plugin:react/recommended',
    "eslint:recommended",
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    "react/react-in-jsx-scope": "off",
    "linebreak-style": 0
  },
  'settings': {
    react: {
      version: 'detect',
    },
  },
  "overrides": [
    {
      "files": [
        "**/*.test.ts",
        "**/*.test.tsx"
      ],
      "env": {
        "jest": true
      }
    }
  ]
};
