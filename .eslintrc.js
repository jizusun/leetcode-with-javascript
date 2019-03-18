module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true,
        "jest": true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    "plugins": ["prettier"],
    "rules": {
        "prettier/prettier": "error"
    },
    'parserOptions': {
        'ecmaVersion': 2018
    },
    'rules': {
        'max-len': ["error", { "code": 80 }],
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};