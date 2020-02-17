import { css } from "styled-components";

const mixins = {
  dropDecoration: css`
    &,
    &:hover,
    &:visited {
      text-decoration: none;
    }
  `,
};

export default mixins;
