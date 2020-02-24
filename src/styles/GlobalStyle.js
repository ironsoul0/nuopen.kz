import { createGlobalStyle } from "styled-components";

import transitions from "./transitions";
import theme from "./theme";
import normalize from "./normalize";

const GlobalStyle = createGlobalStyle`
  ${transitions};
  ${normalize};

  body {
    background-color: ${theme.colors.dark};
    color: ${theme.colors.white};
  }
`;

export default GlobalStyle;
