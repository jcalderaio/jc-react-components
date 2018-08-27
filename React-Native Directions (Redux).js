*(if getting from GitHub, remember to run “yarn install --save” to install node_modules)*

1) create-react-native-app appName
2) yarn add eslint-config-rallycoding
3) make a new file in main directory “.eslintrc” and add:

{
  "extends": "rallycoding",
  "env": {
    "browser": true
  },
  "globals": {
    "fetch": true
  },
  "rules": {
    "no-mixed-spaces-and-tabs": 0,
    "max-len": 0,
    "global-require": 0,
    "react/jsx-closing-bracket-location": 0,
    "no-else-return": 0,
    "camelcase": 0,
    "prefer-template": 0,
    "quote-props": 0,
    "eqeqeq": 0,
    "no-lonely-if": 0,
    "no-mixed-operators": 0,
    "no-param-reassign": 0,
    "jsx-a11y/label-has-for": 0,
    "react/sort-comp": 0
  }
}


4) Exit, atom ., and make sure errors show up.
5) yarn add redux react-redux
6) yarn add @expo/vector-icons
7) yarn add react-navigation
 