import { createGlobalStyle } from "styled-components";

import theme from "./theme";
import normalize from "./normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize};

  body {
    background-color: ${theme.colors.dark};
    color: ${theme.colors.white};
  }
`;

export default GlobalStyle;
