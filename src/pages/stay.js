import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";

import { Logo } from "../icons";

import theme from "../styles/theme";
import media, { sizes } from "../styles/media";

const IndexPage = () => (
  <Layout showSecondary={false}>
    <Container>
      <LogoLink to="/">
        <MyLogo />
      </LogoLink>
      <div>
        <SoonText>Soon..</SoonText>
        <TunedText>Something cool is coming, stay tuned!</TunedText>
      </div>
      <p style={{ visibility: "hidden" }}>Some text</p>
    </Container>
  </Layout>
);

export default IndexPage;

const Container = styled.div`
  max-width: ${sizes.desktop}px;
  margin: 0 auto;
  padding: 30px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const LogoLink = styled(Link)`
  margin-top: 25px;
`;

const MyLogo = styled(Logo)`
  ${media.phablet`
    width: 90px;
  `};
`;

const SoonText = styled.p`
  font-size: 35px;
  font-weight: bold;
  padding: 0;
  margin: 0;
  margin-bottom: 15px;
`;

const TunedText = styled.p`
  color: ${theme.colors.darkGrey};
  line-height: 25px;
`;
