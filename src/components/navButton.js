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
  padding: 17px 0px;
  width: 135px;
  text-align: center;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  font-weight: 300;

  &:hover {
    background-color: ${theme.colors.darkenedWhite};
  }

  ${media.phablet`
    padding: 14px 0px;
    font-size: 14px;
    width: 115px;
  `};

  ${mixins.transition};
  ${mixins.dropDecoration};
`;
