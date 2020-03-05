import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Email from "./email";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";
import Footer from "./footer";

const Layout = ({ children, showSecondary, backgroundColor }) => {
  return (
    <div style={backgroundColor && { backgroundColor }}>
      <Root>
        <GlobalStyle />
        {showSecondary && <Email />}
        {children}
      </Root>
      {showSecondary && <Footer />}
    </div>
  );
};

Layout.defaultProps = {
  showSecondary: true,
  backgroundColor: null,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showSecondary: PropTypes.bool,
  backgroundColor: PropTypes.oneOf([String, null]),
};

export default Layout;

const Root = styled.div`
  min-height: 100vh;
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  position: relative;
`;
