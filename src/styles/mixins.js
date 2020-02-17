import { css } from "styled-components";

const mixins = {
  dropDecoration: css`
    &,
    &:hover,
    &:active,
    &:focus,
    &:visited {
      text-decoration: none;
    }
  `,
  transition: css`
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  `,
};

export default mixins;
