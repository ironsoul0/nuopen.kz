import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import theme from "../styles/theme";
import media, { sizes } from "../styles/media";
import mixins from "../styles/mixins";

const Row = ({ elements, width, main }) => {
  let flexes = [3, 4, 4, 3];
  let minWidth = sizes.bigDesktop;

  const breakpoints = {
    [sizes.thone]: [3, 4, 0, 3],
    [sizes.tablet]: [3, 4, 4, 2],
  };

  Object.entries(breakpoints).forEach(([key, value]) => {
    if (width < key && key < minWidth) {
      minWidth = key;
      flexes = value;
    }
  });

  console.log(flexes);

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

export default Row;

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
      max-width: 100px;
    }
  }
`;

const MainRowContainer = styled(RowContainer)`
  font-weight: bold;
  color: ${theme.colors.mediumGrey};

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
