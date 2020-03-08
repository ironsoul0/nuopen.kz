import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import Time from "./time";
import { ResponsiveContainer, Heading, Subheading } from "./responsive";
import { sizes } from "../styles/media";
import theme from "../styles/theme";
import sr from "../utils/sr";

const schedule = [
  {
    time: "10:00 - 11:00",
    name: "Registration - Library",
  },
  {
    time: "11:00 - 11:30",
    name: "Opening - 5.103",
  },
  {
    time: "11:30 - 12:00",
    name: "Team Placement",
  },
  {
    time: "12:00 - 17:00",
    name: "Solving Time",
  },
  {
    time: "17:00 - 18:00",
    name: "Dinner",
  },
  {
    time: "18:00 - 18:30",
    name: "Closing Ceremony",
  },
];

const FAQElements = [
  {
    question: "What the heck is ICPC?",
    answer:
      "The International Collegiate Programming Contest is an algorithmic programming contest for college students. Teams of three, representing their university, work to solve the most real-world problems. Quite simply, it is the oldest, largest, and most prestigious programming contest in the world.",
  },
  {
    question: "Who are eligible to participate?",
    answer: "Since it is an open competition, everyone is welcome!",
  },
  {
    question: "What kind of problems we will solve?",
    answer:
      "Have a look at <a href='https://codeforces.com/problemset/problem/4/A'>this</a> and <a href='https://acmp.ru/index.asp?main=task&id_task=1'>this</a>. These are some problems to get you familiar with a format.",
  },
  {
    question: "Who have prepared the problems?",
    answer:
      "The true feature of the NU Open is that all problems are prepared by current NU students and our legendary NU alumni.",
  },
  {
    question: "What are the prizes?",
    answer: "Come onsite and you will know, we have prepared very interesting presents :)",
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
            <p>
              0{index}. {element.question}
            </p>
            <p dangerouslySetInnerHTML={{ __html: element.answer }} />
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

    & > a {
      color: ${theme.colors.lightGrey};
    }

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
