import React from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import styled from "styled-components";

const Sponsor = ({ link, width, fluid, style }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={style}>
      <SponsorImage width={width} fluid={fluid} />
    </a>
  );
};

export default Sponsor;

Sponsor.defaultProps = {
  style: {},
};

Sponsor.propTypes = {
  link: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  fluid: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

const SponsorImage = styled(Img)`
  width: ${props => props.width}px;
`;
