import { css, keyframes } from "styled-components";

import theme from "./theme";

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
  smoothAppear: (duration = 500, delay = 0) => css`
    opacity: 0;
    animation: ${mixins.fadeDown} ${duration}ms ${theme.easing};
    animation-delay: ${delay}ms;
    animation-fill-mode: forwards;
  `,
  float: keyframes`
    0% { transform: translateY(0px); }
    50%  { transform: translateY(10px); }
    100%   { transform: translateY(0px); } 
  `,
  floating: (duration = 2000, delay = 0) => css`
    animation: ${mixins.float} ${duration}ms ease-in-out infinite;
    animation-delay: ${delay}ms;
  `,
};

export default mixins;
