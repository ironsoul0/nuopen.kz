import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";

import Logo from "../icons/logo";
import NavButton from "./navButton";
import mixins from "../styles/mixins";
import theme from "../styles/theme";
import media from "../styles/media";

const Nav = ({ to, destination }) => {
  return (
    <Container>
      <LogoLink to="/">
        <Logo />
      </LogoLink>
      <Bar>
        <Contact href="mailto:organizers@nuopen.kz">Sponsor Us</Contact>
        <NavButton to={to}>{destination}</NavButton>
      </Bar>
    </Container>
  );
};

export default Nav;

Nav.defaultProps = {
  to: "/",
  destination: "Main",
};

Nav.propTypes = {
  to: PropTypes.string,
  destination: PropTypes.string,
};

const Container = styled.div`
  padding: 30px 60px;
  justify-content: space-between;

  ${mixins.rowFlex};

  ${media.tablet`
    padding: 30px 30px;
  `};
`;

const Bar = styled.div`
  font-size: ${theme.fontSizes.xs};
  ${mixins.rowFlex};
`;

const Contact = styled.a`
  color: ${theme.colors.white};
  margin-right: 55px;

  ${mixins.dropDecoration};
  ${mixins.transition};

  ${media.tablet`
    display: none;
  `};

  &:hover {
    color: ${theme.colors.darkGrey};
  }
`;

const LogoLink = styled(Link)`
  margin-top: 15px;
`;
