import React from "react";
import PropTypes from "prop-types";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Logo from "../icons/logo";
import NavButton from "./navButton";
import mixins from "../styles/mixins";
import theme from "../styles/theme";
import media from "../styles/media";

const Nav = ({ to, destination }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
        }
      }
    }
  `);

  return (
    <Container>
      <LogoLink to="/">
        <MyLogo />
      </LogoLink>
      <Bar>
        <Contact href={`mailto:${data.site.siteMetadata.email}`}>Sponsor Us</Contact>
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
  padding: 30px 50px;
  justify-content: space-between;

  ${mixins.rowFlex};

  ${media.tablet`
    padding: 30px 30px;
  `};

  ${media.phone`
    padding: 30px 20px;
  `};
`;

const Bar = styled.div`
  font-size: ${theme.fontSizes.xs};
  ${mixins.rowFlex};
`;

const Contact = styled.a`
  color: ${theme.colors.white};
  margin-right: 55px;
  font-weight: 300;

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
  margin-top: 8px;
`;

const MyLogo = styled(Logo)`
  ${media.phablet`
    width: 90px;
  `};
`;
