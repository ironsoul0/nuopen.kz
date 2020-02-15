import { createGlobalStyle } from "styled-components";

import normalize from "./normalize";

const Global = createGlobalStyle`
  ${normalize};
`;

export default Global;
