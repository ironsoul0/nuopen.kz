import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Nav from "../components/nav";
import { ResponsiveContainer, Heading, Subheading } from "../components/responsive";
import Layout from "../components/layout";
import SEO from "../components/seo";
import mixins from "../styles/mixins";

const Row = ({ elements, widths }) => (
  <RowContainer>
    {elements.map((element, index) => {
      return widths[index] > 0 ? <RowElement width={widths[index]}>{element}</RowElement> : null;
    })}
  </RowContainer>
);

Row.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.string).isRequired,
  widths: PropTypes.object.isRequired,
};

const SecondPage = () => {
  const elements = ["Team Name", "Surnames", "Organization", "Place", "Approved"];
  const widths = [2, 2, 2, 2, 2];

  return (
    <Layout>
      <SEO title="Participants" />
      <Nav to="/" destination="Main" />
      <Container>
        <Heading>Participants</Heading>
        <Subheading>Teams ready to flex.</Subheading>
        <Table>
          <Row elements={elements} widths={widths} />
        </Table>
      </Container>
    </Layout>
  );
};

export default SecondPage;

const Container = styled(ResponsiveContainer)``;

const Table = styled.div`
  padding-top: 70px;
`;

const RowContainer = styled.div`
  ${mixins.rowFlex};
  // overflow-x: scroll;
`;

const RowElement = styled.p`
  flex: ${props => props.width};
  font-weight: 500;
`;
