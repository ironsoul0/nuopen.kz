import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import theme from "../styles/theme";
import media from "../styles/media";

const Time = ({ time, name, number }) => {
  return (
    <Container>
      <p>{time}</p>
      <p>{name}</p>
      <h3>0{number}.</h3>
    </Container>
  );
};

Time.propTypes = {
  time: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default Time;

const Container = styled.div`
  position: relative;
  flex-basis: 33%;
  margin-bottom: 80px;

  ${media.tablet`
    flex-basis: 50%;
  `};

  ${media.phablet`
    flex-basis: 100%;
  `};

  & > p {
    color: ${theme.colors.lightGrey};
    font-weight: bold;
    font-size: 1.27em;
    margin: 0;
    padding-left: 35px;

    &:first-of-type {
      color: ${theme.colors.red};
      font-size: 1.38em;
      margin-bottom: 5px;
    }
  }

  & > h3 {
    position: absolute;
    top: -30px;
    opacity: 0.2;
    color: ${theme.colors.white};
    font-size: 3.7em;
  }
`;
