/* eslint-disable react/forbid-prop-types */
import React from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import styled from "styled-components";

import mixins from "../styles/mixins";

const Sponsor = ({ link, width, fluid, style }) => {
  return (
    <SponsorLink href={link} target="_blank" rel="noopener noreferrer" style={style}>
      <SponsorImage width={width} fluid={fluid} />
    </SponsorLink>
  );
};

export default Sponsor;

Sponsor.defaultProps = {
  style: {},
};

Sponsor.propTypes = {
  link: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  fluid: PropTypes.object.isRequired,
  style: PropTypes.object,
};

const SponsorLink = styled.a`
  ${mixins.transition};

  &:hover,
  &:focus {
    transform: translateY(-5px);
  }
`;

const SponsorImage = styled(Img)`
  width: ${props => props.width}px;
`;
