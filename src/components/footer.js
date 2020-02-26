import React from "react";
import styled from "styled-components";

import theme from "../styles/theme";
import mixins from "../styles/mixins";

const Footer = () => (
  <Container>
    <Wrap href="https://nu.edu.kz/" target="_blank" rel="noopener noreferrer">
      <p>Designed & Crafted in NU © 2020</p>
      <br />
      {/* <p>
        <span role="img">😍</span>
      </p> */}
    </Wrap>
  </Container>
);

export default Footer;

const Container = styled.div`
  background-color: ${theme.colors.footer};
  padding: 25px 0px;
  text-align: center;
  font-weight: 300;
  font-size: 14px;
  text-align: center;
`;

const Wrap = styled.a`
  flex-direction: column;

  ${mixins.transition};
  ${mixins.dropDecoration};

  &,
  &:active,
  &:focus {
    color: ${theme.colors.lightGrey};
  }

  &:hover {
    & > p {
      opacity: 1;
    }
  }

  & > p {
    ${mixins.transition};
    opacity: 0.8;
    margin: 0;
    padding: 0;
    display: inline-block;

    // &:nth-last-of-type(1) {
    //   margin-top: 6px;
    // }
  }
`;
