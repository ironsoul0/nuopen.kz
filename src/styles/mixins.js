import { css, keyframes } from "styled-components";

const mixins = {
  dropDecoration: css`
    &,
    &:hover,
    &:active,
    &:focus,
    &:visited {
      text-decoration: none;
      border: none;
      outline: none;
      cursor: pointer;
    }
  `,
  transition: css`
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  `,
  rowFlex: css`
    display: flex;
    align-items: center;
  `,
  hideScrollBar: css`
    &::-webkit-scrollbar {
      display: none;
    }

    & {
      -ms-overflow-style: none;
    }
  `,
  fadeDown: keyframes`
    0% {
      opacity: 0;
      transform: translateY(20px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  `,
};

export default mixins;
