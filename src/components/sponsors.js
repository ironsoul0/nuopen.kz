import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import Sponsor from "./sponsor";
import mixins from "../styles/mixins";
import { sizes } from "../styles/media";

const Sponsors = () => {
  const data = useStaticQuery(graphql`
    query {
      bts: file(relativePath: { eq: "sponsors/bts.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      acm: file(relativePath: { eq: "sponsors/acm.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kazdream: file(relativePath: { eq: "sponsors/kazdream.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      okoo: file(relativePath: { eq: "sponsors/okoo.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Container>
      <Sponsor
        fluid={data.kazdream.childImageSharp.fluid}
        width={100}
        link="https://kazdream.kz/"
      />
      <Sponsor fluid={data.bts.childImageSharp.fluid} width={114} link="https://btsdigital.kz/" />
      <Sponsor fluid={data.acm.childImageSharp.fluid} width={82} link="https://acmkz.github.io/" />
      <Sponsor
        fluid={data.okoo.childImageSharp.fluid}
        width={75}
        link="https://okoo.kz/"
        style={{ marginBottom: "8px" }}
      />
    </Container>
  );
};

export default Sponsors;

const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 30px;
  justify-content: space-between;
  width: 100%;
  max-width: ${sizes.tablet}px;

  ${mixins.rowFlex};
`;
