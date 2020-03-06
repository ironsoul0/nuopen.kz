import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useWindowWidth } from "@react-hook/window-size";
import { Spring } from "react-spring/renderprops";
import Div100vh from "react-div-100vh";

import ParticipantRow from "../components/participantRow";
import Nav from "../components/nav";
import { ResponsiveContainer, Heading, Subheading } from "../components/responsive";
import Layout from "../components/layout";
import SEO from "../components/seo";
import mixins from "../styles/mixins";
import media from "../styles/media";
import theme from "../styles/theme";
import getParticipantInfo from "../utils/getParticipantInfo";
import cache from "../utils/cache";

const FIRST_ROW = ["Team Name", "Surnames", "Organization", "Type", "Check"];

const SecondPage = ({ data }) => {
  const getSheetValues = async () => {
    const request = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${process.env.GATSBY_SHEET_ID}/values/A2:U100?key=${process.env.GATSBY_API_KEY}`
    );

    const sheetData = await request.json();
    const parsedData = sheetData.values.map(element => getParticipantInfo(element));

    return parsedData;
  };

  const width = useWindowWidth();

  const { email } = data.site.siteMetadata;

  const [done, setDone] = useState(false);
  const [participants, setParticipants] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
    }, 500);

    if (cache.participants) {
      setParticipants(cache.participants);
      setDone(true);
    } else {
      getSheetValues()
        .then(sheetValues => {
          setParticipants(sheetValues);
          cache.setParticipants(sheetValues);
        })
        .catch(() => {
          setParticipants([]);
        });
    }

    return () => clearTimeout(timer);
  }, []);

  const finishedLoading = !!(participants && done);

  return (
    <Layout
      showSecondary={finishedLoading}
      backgroundColor={!finishedLoading ? theme.colors.loadingBack : null}
    >
      <SEO title="Participants" />
      {finishedLoading ? (
        <Config>
          <Nav to="/" destination="Main" />
          <Container>
            <div>
              <Heading>Participants</Heading>
              <Subheading>Teams ready to flex.</Subheading>
            </div>
            {participants.length > 0 ? (
              <>
                <Table>
                  {[FIRST_ROW, ...participants].map((element, index) => (
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
            <Spring config={{ tension: 15 }} from={{ number: 0 }} to={{ number: 1 }}>
              {props => (
                <div>
                  {/* eslint-disable-next-line react/prop-types */}
                  Running on test <span>{Math.floor(props.number * 30)}</span>
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
  ${mixins.smoothAppear(500)};
`;

const Container = styled(ResponsiveContainer)`
  padding-left: 70px;
  padding-top: 80px;
  padding-bottom: 60px;

  ${media.thone`
    padding-top: 80px;
  `};
`;

const Table = styled.div`
  ${mixins.smoothAppear(500, 400)};

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
  margin-left: 3px;
  line-height: 20px;
`;

const LoadingBlock = styled(Div100vh)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 200;
  color: ${theme.colors.white};
  font-size: 0.9em;
  opacity: 0.7;
`;
