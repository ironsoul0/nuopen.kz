import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Email from "./email";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";
import Footer from "./footer";
import SEO from "./seo";

const Layout = ({ children, showSecondary, backgroundColor, participantsPage }) => {
  return (
    <div style={{ backgroundColor }}>
      <SEO />
      <Root>
        <GlobalStyle />
        {showSecondary && <Email isParticipants={participantsPage} />}
        {children}
      </Root>
      {showSecondary && <Footer />}
    </div>
  );
};

Layout.defaultProps = {
  showSecondary: true,
  backgroundColor: theme.colors.dark,
  participantsPage: false,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showSecondary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  participantsPage: PropTypes.bool,
};

export default Layout;

const Root = styled.div`
  min-height: 100vh;
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  position: relative;
`;
