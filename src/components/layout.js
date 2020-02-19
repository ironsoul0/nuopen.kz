import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";

const Layout = ({ children }) => {
  return (
    <Root>
      <GlobalStyle />
      {children}
    </Root>
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
`;
