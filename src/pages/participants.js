import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useWindowWidth } from "@react-hook/window-size";
import { Spring } from "react-spring/renderprops";

import sr from "../utils/sr";
import ParticipantRow from "../components/participantRow";
import Nav from "../components/nav";
import { ResponsiveContainer, Heading, Subheading } from "../components/responsive";
import Layout from "../components/layout";
import SEO from "../components/seo";
import mixins from "../styles/mixins";
import media from "../styles/media";
import theme from "../styles/theme";

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

  const { email } = data.site.siteMetadata;

  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout showSecondary={done} backgroundColor={!done ? "#2A2C37" : null}>
      <SEO title="Participants" />
      {done ? (
        <Config>
          <Nav to="/" destination="Main" />
          <Container>
            <div>
              <Heading>Participants</Heading>
              <Subheading>Teams ready to flex.</Subheading>
            </div>
            {e.length > 0 ? (
              <>
                <Table>
                  {e.map((element, index) => (
                    <ParticipantRow
                      key={index}
                      main={index === 0}
                      width={width}
                      elements={element}
                    />
                  ))}
                </Table>
                <Note>
                  * Please <Contact href={`mailto:${email}`}>contact us</Contact> if something
                  changes.
                </Note>
              </>
            ) : (
              <EmptyTable>
                No teams are ready to flex yet. How about being the first one?
              </EmptyTable>
            )}
          </Container>
        </Config>
      ) : (
        <>
          <LoadingBlock>
            <Spring config={{ tension: 20 }} from={{ number: 0 }} to={{ number: 1 }}>
              {props => (
                <div>
                  Running on pretest <span>{Math.floor(props.number * 30)}</span>
                </div>
              )}
            </Spring>
          </LoadingBlock>
        </>
      )}
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

const Config = styled.div`
  animation: ${mixins.fadeDown} 500ms ${theme.easing};
`;

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

const Note = styled.p`
  font-size: 0.73em;
  opacity: 0.6;
  margin-top: 30px;
`;

const Contact = styled.a`
  color: ${theme.colors.white};
`;

const EmptyTable = styled.p`
  font-size: 0.8em;
  opacity: 0.8;
  margin-top: 50px;
`;

const LoadingBlock = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  color: ${theme.colors.white};
`;
