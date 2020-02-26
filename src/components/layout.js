import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Email from "./email";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Root>
        <GlobalStyle />
        <Email />
        {children}
      </Root>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const Root = styled.div`
  min-height: 100vh;
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  position: relative;
`;
