import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,body{
  min-height: 100vh;
}

body {
  font-family: arial, sans-serif;
}
`;
