module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es2021': true,
        'jest': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'prettier'
    ],
    'overrides': [
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    'plugins': [
        'react',
        'react-hooks',
        '@typescript-eslint',
        'prettier'
    ],
    'rules': {
        'react/react-in-jsx-scope': 'off',
        'camelcase': 'error',
        'spaced-comment': 'error',
        'quotes': ['error', 'single'],
        'no-duplicate-imports': 'error'
    },
    'settings': {
        'import/resolver': {
            'typescript': {}
        },
        'react': {
            'version': '18.2.0'
        }
    }
}
