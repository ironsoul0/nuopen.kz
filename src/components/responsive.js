import styled from "styled-components";

import media from "../styles/media";

export const ResponsiveContainer = styled.div`
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

export const Heading = styled.h1`
  font-size: 2.7em;
  margin: 0;
`;

export const Subheading = styled.h1`
  font-size: 30px;
  margin: 0;
  padding-top: 10px;
  opacity: 0.5;
`;
