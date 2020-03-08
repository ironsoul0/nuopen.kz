import React from "react";
import styled from "styled-components";

import GlobalStyle from "../styles/GlobalStyle";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Container>
    <SEO title="404: Not found" />
    <GlobalStyle />
    <Text>R U LOST?</Text>
  </Container>
);

export default NotFoundPage;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-weight: 200;
  font-size: 30px;
`;
