import React from "react";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Nav from "../components/nav";

const IndexPage = () => (
  <Layout>
    <SEO title="Main" />
    <Nav to="/participants" destination="Participants" />
    <div
      style={{ margin: "0 auto", marginTop: "200px", maxWidth: `500px`, marginBottom: `1.45rem` }}
    >
      {/* <Image /> */}
    </div>
  </Layout>
);

export default IndexPage;
