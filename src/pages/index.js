import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Nav from "../components/nav";
import mixins from "../styles/mixins";
import theme from "../styles/theme";
import media, { sizes } from "../styles/media";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Main" />
    <Wrapper>
      <Nav to="/participants" destination="Participants" />
      <Main>
        <Image fluid={data.placeholderImage.childImageSharp.fluid} />
        <Info>
          <Heading>NU Open</Heading>
          <Heading>Spring 2020.</Heading>
          <Description>First ever open ACM competition</Description>
          <Description>held in the walls of</Description>
          <Description>Nazarbayev University.</Description>
          <ButtonsRow>
            <Button href="#">Party Hard</Button>
            <Button href="#">Schedule</Button>
          </ButtonsRow>
        </Info>
      </Main>
      <p style={{ textAlign: "center", marginTop: "15px" }}>sponsors</p>
    </Wrapper>
  </Layout>
);

IndexPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "hacker.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Main = styled.main`
  width: 100%;
  max-width: ${sizes.bigDesktop}px;
  margin: 0 auto;
  justify-content: space-between;
  padding: 0px 30px;
  font-size: 25px;

  ${media.bigDesktop`
    padding: 0px 50px;
    font-size: 23px;
    max-width: ${sizes.desktop}px;
  `};

  ${media.desktop`
    font-size: 25px;
  `};

  ${media.tablet`
    font-size: 22px;
    padding: 0 40px;
  `};

  ${media.phablet`
    padding: 0 25px;
  `};

  ${media.phone`
    padding: 0 20px;
  `};

  ${mixins.rowFlex};
`;

const Image = styled(Img)`
  width: 600px;

  ${media.bigDesktop`
    width: 480px;  
  `};

  ${media.desktop`
    display: none;
  `};
`;

const Info = styled.div``;

const Heading = styled.h1`
  font-size: 2.68em;
  line-height: 50px;

  ${media.phablet`
    font-size: 2.2em;
    line-height: 30px;
  `};

  ${media.phone`
    font-size: 2em;
  `};

  &:first-of-type::before {
    content: "";
    width: 85px;
    height: 9px;
    margin-bottom: 40px;
    margin-left: 3px;
    background-color: ${theme.colors.white};
    display: block;

    ${media.phablet`
      height: 8px;
      width: 75px;
    `};
  }

  &:nth-last-of-type(1) {
    margin-bottom: 50px;
  }
`;

const Description = styled.p`
  font-size: 0.76em;
  color: ${theme.colors.lightGrey};
  font-weight: 300;
  margin: 0;
  line-height: 25px;
`;

const ButtonsRow = styled.div`
  margin-top: 40px;
  ${mixins.rowFlex};
`;

const Button = styled.a`
  font-size: 0.84em;
  font-weight: 600;
  padding: 15px 0px;
  width: 175px;
  text-align: center;
  border-radius: 5px;

  ${media.phablet`
    width: 150px;
  `};

  ${media.phone`
    width: 140px;
    font-size: 0.78em;
  `};

  &:first-of-type {
    background-color: ${theme.colors.red};
    margin-right: 35px;

    ${media.phablet} {
      margin-right: 15px;
    }

    ${media.phone`
      margin-right: 10px;
    `};

    ${mixins.transition};
    &:hover {
      background-color: ${theme.colors.hoveredRed};
    }
  }

  &:nth-last-of-type(1) {
    background-color: ${theme.colors.darkBlue};

    ${mixins.transition};
    &:hover {
      background-color: ${theme.colors.hoveredBlue};
    }
  }

  color: ${theme.colors.white};

  ${mixins.dropDecoration};
`;
