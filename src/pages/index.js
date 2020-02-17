import React from "react";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Button from "../components/button";

const IndexPage = () => (
  <Layout>
    <SEO title="Main" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Button to="/participants">Participants</Button>
  </Layout>
);

export default IndexPage;
