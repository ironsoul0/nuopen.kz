import { createGlobalStyle } from "styled-components";

import theme from "./theme";

const Global = createGlobalStyle`
  body {
    background-color: ${theme.colors.dark};
    color: ${theme.colors.white};
  }
`;

export default Global;
