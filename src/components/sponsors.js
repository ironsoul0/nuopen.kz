import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Sponsor from "./sponsor";
import mixins from "../styles/mixins";
import media, { sizes } from "../styles/media";

const Sponsors = ({ data, className }) => {
  return (
    <Container className={className}>
      <Sponsor fluid={data.bts.childImageSharp.fluid} width={114} link="https://btsdigital.kz/" />
      <Sponsor
        fluid={data.kazdream.childImageSharp.fluid}
        width={100}
        link="https://kazdream.kz/"
      />
      <Sponsor
        fluid={data.okoo.childImageSharp.fluid}
        width={75}
        link="https://okoo.kz/"
        style={{ marginBottom: "12px" }}
      />
      <Sponsor
        style={{ marginBottom: "3px" }}
        fluid={data.acm.childImageSharp.fluid}
        width={82}
        link="https://acmkz.github.io/"
      />
    </Container>
  );
};

Sponsors.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
};

export default Sponsors;

const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
  justify-content: space-between;
  width: 100%;
  max-width: ${sizes.tablet}px;

  ${mixins.rowFlex};

  ${media.desktop`
    padding: 0 50px;
  `};

  ${media.thone`
    overflow-y: scroll;
    visibility: hidden;
  `};
`;
