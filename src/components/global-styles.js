import { createGlobalStyle } from 'styled-components';

// site-wide fonts
import '@fontsource/source-code-pro';
import '@fontsource/nunito-sans';
import '@fontsource/nunito-sans/900.css';
import '@fontsource/lato';
import '@fontsource/lato/900.css';

const GlobalStyles = createGlobalStyle`
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font: 10px/3rem "Lato", serif, sans-serif;
  background: #fff;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #683b2b;
  font-family: "Lato", serif;
  font-size: 2rem;
  font-weight: normal;
  word-wrap: break-word;
}

html, body {
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

h2 {
  font-size: 3.5rem;
  font-weight: normal;
  margin: 4rem 0 1.5rem 0;
}

h3 {
  font-family: "Nunito Sans";
  font-weight: 900;
  font-size: 2rem;
  text-transform: uppercase;
  border-bottom: 1pt solid #022a37;
  color: #022a37;
  margin: 4rem 0 0.5rem 0;
}

h2 + h3 {
  margin-top: 1rem; /* only reduce margin when it's the immediate next sibling */
}

code {
  color: #683b2b;
  background-color: #f6ede6;
  font-family: "Source Code Pro";
}

a {
  color: #022a37;
  &:hover,
  &:focus {
    color: #1d6177;
    text-decoration: none;
  }
}
`;

export default GlobalStyles;
