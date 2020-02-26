import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Sponsor from "./sponsor";
import mixins from "../styles/mixins";
import media, { sizes } from "../styles/media";

import { BTS, KazDream, Okoo, ACM } from "../icons";

const Sponsors = ({ className }) => {
  return (
    <Container className={className}>
      <Sponsor link="https://btsdigital.kz/">
        <BTS />
      </Sponsor>
      <Sponsor link="https://kazdream.kz/">
        <KazDream />
      </Sponsor>
      <Sponsor link="https://okoo.kz/" style={{ marginBottom: "12px" }}>
        <Okoo />
      </Sponsor>
      <Sponsor style={{ marginBottom: "3px" }} link="https://acmkz.github.io/">
        <ACM />
      </Sponsor>
    </Container>
  );
};

Sponsors.propTypes = {
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
