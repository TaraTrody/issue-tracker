module.exports = {
  parser:  '@typescript-eslint/parser',  
  extends:  [
    // 'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',  
    'prettier/@typescript-eslint',  
    'plugin:prettier/recommended',  
   
  ],
  parserOptions:  {
    ecmaVersion:  2018,  
    sourceType:  'module', 
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    } 
  },
  rules:  {
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-parameter-properties': 0,
    '@typescript-eslint/interface-name-prefix': 0
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
}
}