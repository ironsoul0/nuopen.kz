import React, { useState } from "react";
import styled from "styled-components";

import Sponsor from "./sponsor";
import mixins from "../styles/mixins";
import media from "../styles/media";

import { Epam } from "../icons";

import ACM from "../icons/acm.png";
import Hafa from "../icons/hafa.jpg";
import Dulat from "../icons/dulat.jpg";
import Krauch from "../icons/krauch.png";

const images = [Hafa, Dulat, Krauch];

const Sponsors = () => {
  const [opacity, setOpacity] = useState(0);
  const [imageIndex, setImageindex] = useState(0);

  const revealImg = () => {
    setImageindex(Math.floor(Math.random() * 3));
    setOpacity(1);
    const timeout = setTimeout(() => {
      setOpacity(0);
    }, 500);
    return () => clearTimeout(timeout);
  };

  return (
    <Container>
      <Sponsor link="https://epam.com/" style={{ marginRight: "40px" }}>
        <Epam />
      </Sponsor>
      <Sponsor style={{ marginTop: "15px" }} link="https://acmkz.github.io/">
        <ACMImg src={ACM} />
      </Sponsor>
      <Img onMouseOut={revealImg} opacity={opacity} src={images[imageIndex]}></Img>
    </Container>
  );
};

export default Sponsors;

const Container = styled.div`
  width: 100%;
  margin-top: -20px;
  margin-bottom: -30px;

  ${mixins.rowFlex};

  ${media.thone`
  `};
`;

const ACMImg = styled.img`
  width: 90px;
  opacity: 0.7;
`;

const Img = styled.img`
  height: 100px;
  margin-left: 350px;

  margin-top: 15px;
  opacity: ${props => props.opacity};

  ${media.desktop`
    display: none;
  `};
`;
