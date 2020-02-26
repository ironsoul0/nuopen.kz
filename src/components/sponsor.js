/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import mixins from "../styles/mixins";

const Sponsor = ({ link, style, children }) => {
  return (
    <SponsorLink href={link} target="_blank" rel="noopener noreferrer" style={style}>
      {/* <SponsorImage width={width} src={src} /> */}
      {children}
    </SponsorLink>
  );
};

export default Sponsor;

Sponsor.defaultProps = {
  style: {},
};

Sponsor.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

const SponsorLink = styled.a`
  ${mixins.transition};
  transform: none;

  &:hover {
    transform: translateY(-5px);
  }

  &:active,
  &:focus {
    transform: translateY(0px);
  }
`;
