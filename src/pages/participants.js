import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useWindowWidth } from "@react-hook/window-size";

import Nav from "../components/nav";
import { ResponsiveContainer, Heading, Subheading } from "../components/responsive";
import Layout from "../components/layout";
import SEO from "../components/seo";
import mixins from "../styles/mixins";
import media, { sizes } from "../styles/media";
import theme from "../styles/theme";

const Row = ({ elements, width, main }) => {
  let flexes = [3, 4, 4, 2, 2];
  let minWidth = sizes.bigDesktop;

  const breakpoints = {
    [sizes.thone]: [3, 4, 0, 0, 3],
    [sizes.tablet]: [3, 4, 4, 0, 2],
  };

  Object.entries(breakpoints).forEach(([key, value]) => {
    if (width < key && key < minWidth) {
      minWidth = key;
      flexes = value;
    }
  });

  const content = elements.map((element, index) => {
    return flexes[index] > 0 ? (
      <RowElement key={element} flex={flexes[index]}>
        {element}
      </RowElement>
    ) : null;
  });

  return main ? (
    <MainRowContainer>{content}</MainRowContainer>
  ) : (
    <SecondaryRowContainer>{content}</SecondaryRowContainer>
  );
};

Row.defaultProps = {
  main: false,
};

Row.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.string).isRequired,
  width: PropTypes.arrayOf(PropTypes.number).isRequired,
  main: PropTypes.bool,
};

const SecondPage = () => {
  const elements = ["Team Name", "Surnames", "Organization", "Place", "Approve"];
  const elements2 = [
    "Декартовы демоны",
    "Батырхан, Сеитов, Аблязов",
    "Назарбаев Университет",
    "Onsite",
    "Yes",
  ];
  const elements3 = ["Я люблю Краучиху", "Крауч, Рауан, Краучиха", "КБТУ", "Onsite", "Yes"];
  const elements4 = [
    "Что, где, когда?",
    "Алихан, Санчо, Нурдаулет",
    "International IT University",
    "Offsite",
    "No",
  ];

  const width = useWindowWidth();

  return (
    <Layout>
      <SEO title="Participants" />
      <Nav to="/" destination="Main" />
      <Container data-sal="slide-down">
        <Heading>Participants</Heading>
        <Subheading>Teams ready to flex.</Subheading>
        <Table>
          <Row main elements={elements} width={width} />
          <Row elements={elements2} width={width} />
          <Row elements={elements3} width={width} />
          <Row elements={elements4} width={width} />
          <Row elements={elements2} width={width} />
          <Row elements={elements3} width={width} />
          <Row elements={elements4} width={width} />
          <Row elements={elements2} width={width} />
          <Row elements={elements3} width={width} />
          <Row elements={elements4} width={width} />
        </Table>
      </Container>
    </Layout>
  );
};

export default SecondPage;

const Container = styled(ResponsiveContainer)`
  padding-left: 60px;
  // padding-right: 120px;

  ${media.thone`
    padding-top: 80px;
  `};
`;

const Table = styled.div`
  padding-top: 70px;
  overflow-x: scroll;
  margin-left: -25px;
`;

const RowContainer = styled.div`
  ${mixins.rowFlex};
  min-width: ${sizes.phone}px;

  padding: 15px 0px;
  padding-left: 20px;
  margin-right: 20px;
  border-radius: 4px;
  ${mixins.transition};

  & > p {
    margin: 0;
  }
`;

const MainRowContainer = styled(RowContainer)`
  font-weight: bold;
  color: ${theme.colors.mediumGrey};
  // background-color: black;

  margin-bottom: 10px;
`;

const SecondaryRowContainer = styled(RowContainer)`
  color: ${theme.colors.darkGrey};
  font-weight: 300;

  & > p {
    &:first-of-type {
      font-weight: bold;
      color: ${theme.colors.red};
    }
  }

  &:hover {
    background-color: ${theme.colors.darkBlue};
    cursor: default;
  }

  ${media.desktop`
    &:hover {
      background-color: inherit;
    }
  `};
`;

const RowElement = styled.p`
  flex: ${props => props.flex};
  overflow: hidden;
  padding: 0px 10px;
  font-size: 0.9em;
  line-height: 20px;
`;
