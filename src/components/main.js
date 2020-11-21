import React from "react";
import styled from "styled-components";

import mixins from "../styles/mixins";
import theme from "../styles/theme";
import media, { sizes } from "../styles/media";

const Main = ({ formLink }) => {
  return (
    <Body>
      <Intro>Introducing NU Open</Intro>
      <Big>The freshest competition</Big>
      <Big>you'll never forget</Big>
      <div>
        <Description>
          First-ever ICPC-style programming contest organized by Nazarbayev University
        </Description>
        <Description>Join us on November 21, 2020 to compete for exciting prizes</Description>
      </div>
      <Button target="_blank" href="noopener noreferrer" href={formLink}>
        Live Standings
      </Button>
    </Body>
  );
};

export default Main;

const Body = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: -50px;

  ${mixins.smoothAppear(600, 200)};

  ${media.bigDesktop`
    font-size: 18px;
    max-width: ${sizes.desktop}px;
  `};

  ${media.desktop`
    font-size: 16px;
    padding: 0 40px;
  `};

  ${media.tablet`
    font-size: 13px;
    padding: 0 40px;
  `};

  ${media.phablet`
    font-size: 10px;
    padding: 0 25px;
    margin-top: -60px;
  `};

  ${media.phone`
    padding: 0 20px;
    // margin-top: 50px;
  `};
`;

const Intro = styled.p`
  color: ${theme.colors.red};
  text-transform: uppercase;
  font-size: 1em;

  ${media.tablet`
    font-size: 1.3em;
  `};
`;

const Big = styled.p`
  color: ${theme.colors.white};
  font-size: 3.7em;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const Description = styled.p`
  font-size: 1.3em;
  font-weight: 300;
  margin: 0;
  padding: 0;
  color: ${theme.colors.darkGrey};
  opacity: 0.7;
  line-height: 1.3em;

  &:first-of-type {
    margin-top: 30px;
    margin-bottom: 10px;
  }

  ${media.tablet`
    font-size: 1.6em;
  `};
`;

const Button = styled.a`
  display: inline-block;
  margin: 0 auto;
  font-size: 1em;
  font-weight: 600;
  padding: 20px 0px;
  width: 195px;
  text-align: center;
  border-radius: 5px;
  margin-top: 40px;

  ${media.phablet`
    width: 150px;
    font-size: 1.4em;
  `};

  ${media.phone`
    width: 140px;
    font-size: 1.4em;
  `};

  & {
    background-color: ${theme.colors.red};
    margin-right: 35px;

    ${media.phablet`
      margin-right: 15px;
    `};

    ${media.phone`
      margin-right: 10px;
    `};

    ${mixins.transition};
    &:hover {
      background-color: ${theme.colors.hoveredRed};
    }
  }

  color: ${theme.colors.white};

  ${mixins.dropDecoration};
`;
