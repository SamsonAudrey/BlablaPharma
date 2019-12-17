/*module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'env': {
      'jest': true,
    },
    'rules': {
      'no-use-before-define': 'off',
      'react/jsx-filename-extension': 'off',
      'react/prop-types': 'off',
      'comma-dangle': 'off'
    },
    'globals': {
      "fetch": false
    }
  }
*/

module.exports = {
    root: true,
    "env": {
        "react-native/react-native": true
    },
    "plugins": [
        "react",
        "react-native"
    ],
    'extends': [
        'airbnb',
    ],
    'parser': 'babel-eslint',
    'rules': {
        'no-use-before-define': 'off',
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',
        'comma-dangle': 'off',
        "quotes": [2, "single", "avoid-escape"],
        'no-nested-ternary': 'off',
        'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
        'no-underscore-dangle': 'off',
        "jsx-a11y/aria-role": [ 2, {
            "ignoreNonDOM": true
        }],
        'global-require': 'off',
        'no-return-assign': 'off'
    },
    'globals': {
        "fetch": false
    }
  };


