import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import styled from "styled-components";
import scrollTo from "gatsby-plugin-smoothscroll";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Sponsors from "../components/sponsors";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Nav from "../components/nav";
import FAQ from "../components/faq";
import mixins from "../styles/mixins";
import theme from "../styles/theme";
import media, { sizes } from "../styles/media";

const IndexPage = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  const nav = (
    <Nav
      style={{ transitionDelay: "200ms" }}
      to="/participants"
      destination="Participants"
      // style={{ transitionDelay: "1000ms" }}
    />
  );

  const main = (
    <Main style={{ transitionDelay: "400ms" }}>
      <Image fluid={data.placeholderImage.childImageSharp.fluid} />
      <Info>
        <Heading>NU Open</Heading>
        <Heading lowOpacity>Spring 2020.</Heading>
        <Description>First ever open ICPC-style competition</Description>
        <Description style={{ marginBottom: "20px" }}>
          held in the walls of Nazarbayev University.
        </Description>
        <Description>11 April - Nur-Sultan, Kazakhstan.</Description>
        <ButtonsRow>
          <Button href="#">Register</Button>
          <Button onClick={() => scrollTo("#faq")} href="#">
            Sked & FAQ
          </Button>
        </ButtonsRow>
      </Info>
    </Main>
  );

  const sponsors = <Sponsors style={{ display: "none", transitionDelay: "1000ms" }} data={data} />;

  const items = [nav, main, sponsors];

  return (
    <Layout>
      <SEO />
      <Wrapper>
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((el, i) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <CSSTransition key={i} classNames="fadeup" timeout={1000}>
                  {el}
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      </Wrapper>
      <FAQ />
    </Layout>
  );
};

IndexPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "hacker.png" }) {
      childImageSharp {
        fluid(maxWidth: 2200) {
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
    margin-top: 50px;
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

const Info = styled.div`
  margin-top: -70px;
`;

const Heading = styled.h1`
  font-size: 2.68em;
  line-height: 40px;
  opacity: ${props => (props.lowOpacity ? 0.7 : 1.0)};

  ${media.phablet`
    font-size: 2.2em;
    line-height: 30px;
  `};

  ${media.phone`
    font-size: 2em;
    line-height: 25px;
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
      width: 65px;
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

const Button = styled.button`
  font-size: 0.84em;
  font-weight: 600;
  padding: 20px 0px;
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
