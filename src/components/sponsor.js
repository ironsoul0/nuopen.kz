/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import mixins from "../styles/mixins";

const Sponsor = ({ link, style, children, animation }) => {
  return (
    <SponsorLink
      animation={animation}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
    >
      {children}
    </SponsorLink>
  );
};

export default Sponsor;

Sponsor.defaultProps = {
  style: {},
  animation: true,
};

Sponsor.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  animation: PropTypes.bool,
};

const SponsorLink = styled.a`
  ${mixins.transition};
  transform: none;

  ${({ animation }) =>
    animation &&
    `
  &:hover {
    transform: translateY(-5px);
  }

  &:active,
  &:focus {
    transform: translateY(0px);
  }
  `}
`;
