import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";

import theme from "../styles/theme";
import mixins from "../styles/mixins";

const Button = ({ to, children }) => {
  return <MyLink to={to}>{children}</MyLink>;
};

Button.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;

const MyLink = styled(Link)`
  color: ${theme.colors.black};
  background-color: ${theme.colors.white};
  ${mixins.dropDecoration};
`;
