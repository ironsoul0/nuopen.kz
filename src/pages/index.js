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

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Main" />
    <Nav to="/participants" destination="Participants" />
    <Main>
      <Image fluid={data.placeholderImage.childImageSharp.fluid} />
      <Info>
        <Heading>NU Open</Heading>
        <Heading>Spring 2020.</Heading>
        <Description>First ever open ACM competition</Description>
        <Description>held in the walls of</Description>
        <Description>Nazarbayev University.</Description>
      </Info>
    </Main>
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

const Main = styled.main`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  justify-content: space-between;
  margin-top: 70px;

  ${mixins.rowFlex};
`;

const Image = styled(Img)`
  width: 600px;
`;

const Info = styled.div``;

const Heading = styled.h1`
  font-size: ${theme.fontSizes.xl};
  line-height: 50px;

  &:first-of-type::before {
    content: "";
    width: 85px;
    height: 10px;
    margin-bottom: 40px;
    margin-left: 3px;
    background-color: ${theme.colors.white};
    display: block;
  }

  &:nth-last-of-type(1) {
    margin-bottom: 50px;
  }
`;

const Description = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.lightGrey};
  font-weight: 300;
  margin: 0;
  line-height: 25px;
`;
