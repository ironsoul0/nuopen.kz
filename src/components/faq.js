import React from "react";
import styled from "styled-components";

import { ResponsiveContainer, Heading, Subheading } from "./responsive";
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
    <ResponsiveContainer id="faq">
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
    </ResponsiveContainer>
  );
};

export default FAQ;

const SkedContainer = styled.div`
  ${mixins.rowFlex};

  & > p {
    font-weight: bold;
    margin: 0;
    margin-bottom: 18px;

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
