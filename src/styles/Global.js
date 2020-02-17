import { createGlobalStyle } from "styled-components";

import normalize from "./normalize";

const Global = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
  }
  ${normalize};
`;

export default Global;
