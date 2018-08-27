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
5) npm install native-base --save (yarn add native-base)
6) npm install @expo/vector-icons --save
7) // import { Container, Content, Button, Text, View } from 'native-base';
// your render method should look like this
return(
<Container>
    <Content>
        <Button
            block
            onPress={ () => alert('It works!') }
            style={{  padding: 20  }}
        >
            <Text>Click Me</Text>
        </Button> 
    </Content>
</Container>
);
8) Save. If it works with the button, then undo and save.
9) Add the required code to import the fonts in Android.
10) yarn add react-navigation
11) yarn add mobx
12) yarn add mobx-react
 