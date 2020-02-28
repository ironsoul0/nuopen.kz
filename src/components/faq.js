import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import Time from "./time";
import { ResponsiveContainer, Heading, Subheading } from "./responsive";
import { sizes } from "../styles/media";
import theme from "../styles/theme";
import sr from "../utils/sr";

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
    time: "17:00 - 17:31",
    name: "Хафа танцует сальсу",
  },
  {
    time: "12:00 - 17:02",
    name: "Нурда идет по горе",
  },
  {
    time: "17:00 - 17:33",
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
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, theme.srConfig()), []);

  return (
    <ResponsiveContainer id="faq" ref={revealContainer}>
      <Heading>Schedule</Heading>
      <Subheading style={{ marginBottom: "60px" }}>11 April</Subheading>
      <InfoBlock>
        <TimeWrap>
          {schedule.map((element, index) => (
            <Time time={element.time} name={element.name} number={index} key={index} />
          ))}
        </TimeWrap>
      </InfoBlock>
      <Heading style={{ marginTop: "-30px" }}>FAQ</Heading>
      <Subheading>Frequently Asked Questions</Subheading>
      <InfoBlock>
        {FAQElements.map((element, index) => (
          <QABlock key={index}>
            <p>{element.question}</p>
            <p>{element.answer}</p>
          </QABlock>
        ))}
      </InfoBlock>
    </ResponsiveContainer>
  );
};

export default FAQ;

const TimeWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 50px;
  max-width: 1000px;
`;

const InfoBlock = styled.div`
  margin-top: 70px;
  margin-bottom: 50px;

  &:nth-last-of-type(1) {
    margin-top: 50px;
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
