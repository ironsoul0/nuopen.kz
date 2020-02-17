import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";

import theme from "../styles/theme";
import mixins from "../styles/mixins";
import media from "../styles/media";

const NavButton = ({ to, children }) => {
  return <MyLink to={to}>{children}</MyLink>;
};

NavButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavButton;

const MyLink = styled(Link)`
  color: ${theme.colors.black};
  background-color: ${theme.colors.white};
  font-size: ${theme.fontSizes.xs};
  padding: 13px 0px;
  width: 135px;
  text-align: center;
  border-bottom-left-radius: 25px;
  border-top-right-radius: 25px;

  &:hover {
    background-color: ${theme.colors.darkenedWhite};
  }

  ${media.phablet`
    padding: 11px 0px;
    font-size: 14px;
    width: 115px;
  `};

  ${mixins.transition};
  ${mixins.dropDecoration};
`;
