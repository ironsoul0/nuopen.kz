import React from "react";
import styled from "styled-components";

import GlobalStyle from "../styles/GlobalStyle";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Container>
    <SEO title="404: Not found" />
    <GlobalStyle />
    <h1>R U LOST?</h1>
  </Container>
);

export default NotFoundPage;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
