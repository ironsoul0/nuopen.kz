import React, { useRef, useEffect, useState } from "react";
import { graphql } from "gatsby";
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
import sr from "../utils/sr";

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
  width: PropTypes.number.isRequired,
  main: PropTypes.bool,
};

const SecondPage = ({ data }) => {
  const elements = ["Team Name", "Surnames", "Organization", "Place", "Check"];

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

  const e = [
    elements,
    elements2,
    elements3,
    elements4,
    elements2,
    elements3,
    elements4,
    elements2,
    elements3,
    elements4,
    elements3,
    elements4,
    elements2,
    elements3,
    elements4,
  ];

  const width = useWindowWidth();
  const { srConfig } = theme;

  const revealTitle = useRef(null);
  const revealTable = useRef(null);
  const revealProjects = useRef([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealTable.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 10)));
    const cur = setTimeout(() => setDone(true), 1000);
    return () => clearTimeout(cur);
  }, []);

  const { email } = data.site.siteMetadata;

  return (
    <Layout>
      <SEO title="Participants" />
      <Nav to="/" destination="Main" />
      <Container>
        <div ref={revealTitle}>
          <Heading>Participants</Heading>
          <Subheading>Teams ready to flex.</Subheading>
        </div>
        <Table ref={revealTable}>
          {e.map((element, index) => (
            <Row
              key={index}
              main={index === 0}
              width={width}
              ref={el => {
                revealProjects.current[index] = el;
                return el;
              }}
              elements={element}
            />
          ))}
        </Table>
        <Note>
          * Please <Contact href={`mailto:${email}`}>contact us</Contact> if something changes.
        </Note>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        email
      }
    }
  }
`;

SecondPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SecondPage;

const Container = styled(ResponsiveContainer)`
  padding-left: 70px;
  // padding-right: 120px;
  padding-top: 80px;
  padding-bottom: 60px;

  ${media.thone`
    padding-top: 80px;
  `};
`;

const Table = styled.div`
  padding-top: 70px;
  margin-left: -25px;
  ${mixins.hideScrollBar};

  ${media.thone`
    overflow-x: scroll;
  `};
`;

const RowContainer = styled.div`
  ${mixins.rowFlex};
  min-width: ${sizes.phone}px;

  padding: 15px 0px;
  padding-left: 15px;
  margin-right: 15px;
  border-radius: 4px;
  ${mixins.transition};

  & > p {
    margin: 0;

    &:nth-last-of-type(1) {
      max-width: 80px;
    }
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
  padding: 0px 13px;
  font-size: 0.9em;
  line-height: 20px;
`;

const Note = styled.p`
  font-size: 0.73em;
  opacity: 0.6;
  margin-top: 30px;
`;

const Contact = styled.a`
  color: ${theme.colors.white};
`;
