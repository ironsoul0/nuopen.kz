import React from "react";
import styled from "styled-components";

import media, { sizes } from "../styles/media";
import mixins from "../styles/mixins";
import theme from "../styles/theme";

const schedule = [
  {
    time: "09:00 - 09:15",
    name: "Пробный тур",
  },
  {
    time: "09:30 - 10:30",
    name: "Кекосити",
  },
  {
    time: "12:00 - 17:00",
    name: "Месиво",
  },
  {
    time: "17:00 - 17:30",
    name: "Крауч поет песню",
  },
];

const FAQElements = [
  {
    question: "01. What the heck is ICPC?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris nisi, e u lacinia nibh dignissim eget. Praesent sagittis orci nec lacus viverra fringilla. Mauris rutrum feugiat accumsan. Morbi ac justo at risus malesuada luctus maximus non lectus. Aliquam placerat ipsum id dapibus euismod.",
  },
  {
    question: "02. Why krauch is krauch?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris nisi, e u lacinia nibh dignissim eget. Praesent sagittis orci nec lacus viverra fringilla. Mauris rutrum feugiat accumsan. Morbi ac justo at risus malesuada luctus maximus non lectus.",
  },
];

const FAQ = () => {
  return (
    <Container id="faq">
      <Heading>Schedule</Heading>
      <Subheading>11 April</Subheading>
      <InfoBlock>
        {schedule.map(element => (
          <SkedContainer>
            <p>{element.time}</p>
            <p>{element.name}</p>
          </SkedContainer>
        ))}
      </InfoBlock>
      <Heading>FAQ</Heading>
      <Subheading>Frequently Asked Questions</Subheading>
      <InfoBlock>
        {FAQElements.map(element => (
          <QABlock>
            <p>{element.question}</p>
            <p>{element.answer}</p>
          </QABlock>
        ))}
      </InfoBlock>
    </Container>
  );
};

export default FAQ;

const Container = styled.div`
  padding: 0 100px;
  padding-bottom: 40px;
  padding-top: 80px;
  font-size: 18px;

  ${media.desktop`
    padding-left: 50px;
    padding-right: 50px;
  `};

  ${media.tablet`
    font-size: 16.5px;
    padding-left: 45px;
    padding-right: 45px;
  `};

  ${media.thone`
    padding-top: 20px;
  `};

  ${media.phablet`
    padding-left: 30px;  
    font-size: 15.5px;
    padding-right: 30px;
  `};

  ${media.phone`
    padding-left: 20px;  
    font-size: 15px;
    padding-right: 20px;
  `};
`;

const Heading = styled.h1`
  font-size: 2.7em;
  margin: 0;
`;

const Subheading = styled.h1`
  font-size: 30px;
  margin: 0;
  padding-top: 10px;
  opacity: 0.5;
`;

const SkedContainer = styled.div`
  ${mixins.rowFlex};

  & > p {
    font-weight: bold;
    margin: 0;
    margin-bottom: 25px;

    &:first-of-type {
      color: ${theme.colors.red};
      margin-right: 50px;
      width: 120px;
      ${media.phablet`
        // width: 120px;
        margin-right: 10px;
      `};
    }

    &:nth-last-of-type(1) {
      color: ${theme.colors.lightGrey};
    }
  }
`;

const InfoBlock = styled.div`
  margin-top: 40px;
  margin-bottom: 50px;

  &:nth-last-of-type(1) {
    margin-bottom: 0px;
  }
`;

const QABlock = styled.div`
  & > p {
    margin: 0;
    margin-bottom: 25px;

    &:first-of-type {
      color: ${theme.colors.red};
      font-weight: bold;
    }

    &:nth-last-of-type(1) {
      color: ${theme.colors.lightGrey};
      max-width: ${sizes.desktop}px;
      line-height: 24px;
    }
  }
`;
